# Mock Backend API
- All routes are assumed to do a `500` response on failure and a `200` with content on success, unless stated in the description.
- All changes to backend data will be reset when the server is killed.

- Before starting the server : `npm install`
- To start the server: `node ./nodemon index.js` or  `yarn start` or  `npm start` , by default the server will be listening to the port 5000.


## Movies 
- `/categories` - Get movies by categories
  - `GET` request:
    - `limit` - (query) the limit of the total items ( pagination).
    - `page` - (query) the current page ( pagination).
  - `JSON` response:
    - `totalItems` - Total items count
    - `currentPage` - current page 
    - `pageSize` - limit or total item per request
    - `totalPages` - Total pages 
    - `results` - Result  

- `/load-movies-by-category/:categoryKey` - Load movies for an specific category
  - `GET` request:
    - `categoryKey` - (params) the key of the category.
    - `page` - (query) the current page ( pagination).
  - `JSON` response:
    - `categoryKey` - the key of the category
    - `movies` - Total items count
       - `totalItems` - Total items count
       - `currentPage` - current page 
       - `pageSize` - limit or total item per request
       - `totalPages` - Total pages 
       - `results` - Result  
  
- `/movie/:categoryKey/:movieId` - get movie by id
  - `GET` request:
    - `categoryKey` - (params) the key of the category.
    - `movieId` - (query) the id of the movie .
  - `JSON` response:
    - `categoryKey` - the key of the category
    - `movies`  
       - `id` 
       - `name` 
       - `description` 
       - `year`  
       - `rating` 
       - `category`   
       
