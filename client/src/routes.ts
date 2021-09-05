/* eslint-disable import/no-anonymous-default-export */
import CategoriesList from './components/CategoriesList'
import MovieDetails from './components/MovieDetails'

export default {
  HOME: {
    path: '/',
    component: CategoriesList,
  },
  MOVIE: {
    path: `/movie/:categoryKey/:movieId`,
    linkPath: (categoryKey: string, movieId: string) =>
      `/movie/${categoryKey}/${movieId}`,
    component: MovieDetails,
  },
}
