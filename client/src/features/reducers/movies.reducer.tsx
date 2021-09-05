/**
 * Movie reducer
 */
import ActionTypes from '../constants/movies.constants'
import { MoviestState, MoviesActions } from '../types/movies.types'
import produce from 'immer'

const initialData = {
  categories: {
    totalItems: null,
    currentPage: 1,
    pageSize: 3,
    totalPages: null,
    results: [],
  },
  currentMovie: {},
}
// The initial state of the reducer
export const initialState: MoviestState = {
  data: initialData,
  local: {
    loading: {
      gettingCategories: false,
      gettingCurrentMovie: false,
      loadMoviesByCategory: false,
      gettingMovieById: false,
    },
    errors: {
      gettingCategories: '',
      gettingCurrentMovie: '',
      loadMoviesByCategory: '',
      gettingMovieById: '',
    },
  },
}

const moviesReducer = (
  state: MoviestState = initialState,
  action: MoviesActions | any,
): MoviestState =>
  produce(state, (draft) => {
    switch (action.type) {
      case '@@router/LOCATION_CHANGE':
        draft.data = initialData
        break
      case ActionTypes.GET_CATEGORIES.request:
        draft.local.loading.gettingCategories = true
        draft.local.errors.gettingCategories = ''
        break
      case ActionTypes.GET_CATEGORIES.success:
        draft.local.loading.gettingCategories = false
        draft.local.errors.gettingCategories = ''
        draft.data.categories = {
          ...action.data,
          results: state.data.categories.results.concat(action.data.results),
        }
        break
      case ActionTypes.GET_CATEGORIES.failure:
        draft.local.loading.gettingCategories = false
        try {
          draft.local.errors.gettingCategories = action.errors.response.data
        } catch (e) {
          draft.local.errors.gettingCategories = 'Server error'
        }
        break

      case ActionTypes.LOAD_MOVIE_BY_CATEGORIES.request:
        draft.local.loading.loadMoviesByCategory = true
        draft.local.errors.loadMoviesByCategory = ''
        break
      case ActionTypes.LOAD_MOVIE_BY_CATEGORIES.success:
        draft.local.loading.loadMoviesByCategory = false
        draft.local.errors.loadMoviesByCategory = ''
        draft.data.categories.results = state.data.categories.results.map(
          (element: { categoryKey: string; movies: { results: [] } }) => {
            if (element.categoryKey === action.data.categoryKey) {
              return {
                ...element,
                movies: {
                  ...element.movies,
                  currentPage: action.data.movies.currentPage,
                  results: element.movies.results.concat(
                    action.data.movies.results,
                  ),
                },
              }
            } else {
              return { ...element }
            }
          },
        )
        break
      case ActionTypes.LOAD_MOVIE_BY_CATEGORIES.failure:
        draft.local.loading.loadMoviesByCategory = false
        try {
          draft.local.errors.loadMoviesByCategory = action.errors.response.data
        } catch (e) {
          draft.local.errors.loadMoviesByCategory = 'Server error'
        }
        break

      // get movie by id
      case ActionTypes.GET_MOVIE_BY_ID.request:
        draft.local.loading.gettingMovieById = true
        draft.local.errors.gettingMovieById = ''
        break
      case ActionTypes.GET_MOVIE_BY_ID.success:
        draft.local.loading.gettingMovieById = false
        draft.local.errors.gettingMovieById = ''
        draft.data.currentMovie = action.data
        break
      case ActionTypes.GET_MOVIE_BY_ID.failure:
        draft.local.loading.gettingMovieById = false
        try {
          draft.local.errors.gettingMovieById = action.errors.response.data
        } catch (e) {
          draft.local.errors.gettingMovieById = 'Server error'
        }
        break
    }
  })

export default moviesReducer
