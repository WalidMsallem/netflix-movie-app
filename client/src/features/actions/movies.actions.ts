import { action } from 'typesafe-actions'
import ActionTypes from '../constants/movies.constants'
import {
  getCategoriesPayload,
  loadMoviesByCategoriesPayload,
  getMovieByIdPayload
} from '../types/movies.types'

export const getCategories = ({ limit, page }: getCategoriesPayload) =>
  action(ActionTypes.GET_CATEGORIES.request, {
    limit,
    page,
  })

export const loadMoviesByCategories = ({
  categoryKey,
  page,
  limit,
}: loadMoviesByCategoriesPayload) =>
  action(ActionTypes.LOAD_MOVIE_BY_CATEGORIES.request, {
    limit,
    page,
    categoryKey,
  })

export const getMovieById = ({ categoryKey, movieId }: getMovieByIdPayload) =>
  action(ActionTypes.GET_MOVIE_BY_ID.request, {
    categoryKey,
    movieId,
  })
