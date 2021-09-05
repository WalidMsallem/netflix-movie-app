/**
 * Movie services
 */

/* eslint-disable no-throw-literal */
import axios from 'axios'
// import { requestHeader } from '../../utils/requestHeader'
import URL from '../constants/services.constants'
import {
  getCategoriesPayload,
  loadMoviesByCategoriesPayload,
  getMovieByIdPayload,
} from '../types/movies.types'

export const getCategories = async (
  body: getCategoriesPayload,
): Promise<any> => {
  const result = await axios.get(
    URL.baseApiUrl() + URL.movies.getCategories(body.page, body.limit),
    // requestHeader({}),
  )
  return result.data
}

export const loadMoviesByCategories = async (
  body: loadMoviesByCategoriesPayload,
): Promise<any> => {
  const result = await axios.get(
    URL.baseApiUrl() +
      URL.movies.loadMoviesByCategories(
        body.categoryKey,
        body.page,
        body.limit,
      ),
    // requestHeader({}),
  )
  return result.data
}
export const getMovieById = async (body: getMovieByIdPayload): Promise<any> => {
  const result = await axios.get(
    URL.baseApiUrl() + URL.movies.getMovieById(body.categoryKey, body.movieId),
    // requestHeader({}),
  )
  return result.data
}
