const express = require('express');
const bodyParser = require('body-parser');
const { paginate } = require('./utils/pagination.utils')
const cors = require("cors");
const app = express();

 
app.use(
  cors({
    origin: "*", // restrict calls to those this address
    methods: "GET" // only allow GET requests
  })
);

// Settings
const SERVER_PORT = 5000; // Listening port
 
var structuredData = {} 
var otherCategory = {categoryKey:"other" ,categoryName :"Other", movies : [] } 

const loadStructuredData = async ()=>{
    try {
      const data =  require('./data/movies.json')
      for await (movie of data) {
        if (movie.category) {
          const categoryKey = movie.category.toLowerCase().replace(/ /g,"_")
           const isExistCategoryName  = structuredData[categoryKey]
           if (isExistCategoryName) {
           structuredData[categoryKey].movies =  [...structuredData[categoryKey].movies,movie ]
           }else {
            structuredData[categoryKey] = { categoryKey ,categoryName :movie.category ,movies: [] }
           }
        }else {
          // structuredData.other.movies = [...structuredData.other.movies,movie ]
          otherCategory.movies = [...otherCategory.movies ,movie ]
        }
      }
     structuredData.other = otherCategory
    console.log('[INIT] Data loader with success');
    
  }catch(e) {
    throw "cannot load structured data  " + e
  }
}

// Load data
console.log('[INIT] Processed data...');

// Init load category
(async () => {
  try {
    loadStructuredData();
  } catch (error) {
    console.log('failed to load category',error);
    process.exit(1);
  }
})();


// Handling request routes
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

 

app.get('/categories', (request, response)=> {
  // const  = request.params
  const {limit, page} = request.query
  if (!Number (page) || !Number (limit) ) return response.status('400').send({message: 'please check page and limit  query'}) 
  const {
    totalItems,
    currentPage ,
    pageSize ,
    totalPages ,
    results } = paginate( Object.values(structuredData) ,Number (page),Number (limit))
  const categoriesList = results.map(element => {
    const paginateMovies =  paginate (element.movies, 1,7)
       return ({...element , movies :{
        totalItems : paginateMovies.totalItems,
        currentPage: paginateMovies.currentPage,
        pageSize : paginateMovies.pageSize,
        totalPages : paginateMovies.totalPages,
        results : paginateMovies.results}
      })
  } ) 
  response.send( {
    totalItems,
    currentPage ,
    pageSize ,
    totalPages ,
    results:categoriesList })
})

app.get('/load-movies-by-category/:categoryKey', (request, response)=> {
  const { categoryKey }  = request.params
  const {  page } = request.query
    const  category = structuredData[categoryKey]
  if (!category) return response.status('400').send({message: 'please check the categoryKey'}) 
     const movies = category.movies
     const {
      totalItems , 
      currentPage ,
      pageSize  ,
      totalPages  ,
      results 
    } = paginate(movies,Number(page),7)

    response.send( {
      categoryKey,
      movies : {
      totalItems,
      currentPage ,
      pageSize ,
      totalPages ,
      results} })
  })


app.get('/movie/:categoryKey/:movieId', (request, response)=> {
  const  {categoryKey,movieId } = request.params
  if (!movieId && Number(movieId))   response.status('400').send({message: 'please check the movieId'})
  if (!categoryKey)   response.status('400').send({message: 'please check the categoryKey'})
  
  const category = structuredData[categoryKey]
  if (category) {
  const movie=   category.movies.find(element=> element.id === Number (movieId) )
    if (movie) {
      response.send(movie)
    }
    response.status('400').send({message: 'cannot find movie, please check the movieId'})
  }else {
    response.status('400').send({message: 'cannot find category, please check the categoryKey'})
  }
})
// Start listen to requests
app.listen(SERVER_PORT, () => {
  console.log(`[INFO] Mock backend API rock and rollin' at port ${SERVER_PORT}!!!`);
});
 