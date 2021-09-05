import { ActionType } from 'typesafe-actions'
import * as actions from '../actions/movies.actions'

/* --- STATE --- */
interface Data {
  categories:
    | {
        totalItems: number | string | any
        currentPage: number | string | any
        pageSize: number | string | any
        totalPages: number | string | any
        results: []
      }
    | any
  currentMovie: object
}

interface Local {
  loading: {
    gettingCategories: boolean
    gettingCurrentMovie: boolean
    loadMoviesByCategory: boolean
    gettingMovieById: boolean
  }
  errors: {
    gettingCategories: string
    gettingCurrentMovie: string
    loadMoviesByCategory: string
    gettingMovieById: string
  }
}
interface MoviestStateInter {
  data: Data
  local: Local
}

/* --- ACTIONS --- */
type moviesActions = ActionType<typeof actions>

/* --- EXPORTS --- */

export type getCategoriesPayload = {
  limit: number | string | any
  page: number | string | any
}
export type loadMoviesByCategoriesPayload = {
  limit: number | string | any
  page: number | string | any
  categoryKey: string
}
export type getMovieByIdPayload = {
  categoryKey: string
  movieId: number | string | any
}

export type MoviestState = MoviestStateInter
export type MoviesActions = moviesActions
