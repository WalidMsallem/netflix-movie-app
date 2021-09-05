/**
 * Movie Sagas
 */

import { takeEvery, put, call } from 'redux-saga/effects'
import { MoviesActions } from '../types/movies.types'
import * as api from '../services/movies.services'
import ActionTypes from '../constants/movies.constants'

export function* getCategories(action: MoviesActions | any) {
  try {
    const getCategoriesResponse = yield call(api.getCategories, action.payload)
    yield put({
      type: ActionTypes.GET_CATEGORIES.success,
      data: getCategoriesResponse,
    })
  } catch (e) {
    yield put({ type: ActionTypes.GET_CATEGORIES.failure, e })
  }
}

export function* getCategoriesWatcher() {
  yield takeEvery(ActionTypes.GET_CATEGORIES.request, getCategories)
}

export function* loadMoviesByCategories(action: MoviesActions | any) {
  try {
    const loadMoviesByCategoriesResponse = yield call(
      api.loadMoviesByCategories,
      action.payload,
    )
    yield put({
      type: ActionTypes.LOAD_MOVIE_BY_CATEGORIES.success,
      data: loadMoviesByCategoriesResponse,
    })
  } catch (e) {
    yield put({ type: ActionTypes.LOAD_MOVIE_BY_CATEGORIES.failure, e })
  }
}

export function* loadMoviesByCategoriesWatcher() {
  yield takeEvery(
    ActionTypes.LOAD_MOVIE_BY_CATEGORIES.request,
    loadMoviesByCategories,
  )
}

export function* getMovieById(action: MoviesActions | any) {
  try {
    const getMovieByIdResponse = yield call(
      api.getMovieById,
      action.payload,
    )
    yield put({
      type: ActionTypes.GET_MOVIE_BY_ID.success,
      data: getMovieByIdResponse,
    })
  } catch (e) {
    yield put({ type: ActionTypes.GET_MOVIE_BY_ID.failure, e })
  }
}

export function* getMovieByIdWatcher() {
  yield takeEvery(ActionTypes.GET_MOVIE_BY_ID.request, getMovieById)
}
