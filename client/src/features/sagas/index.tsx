/**
 * Combine  Sagas  watcher
 */

import { all } from 'redux-saga/effects'

import {
  getCategoriesWatcher,
  loadMoviesByCategoriesWatcher,
  getMovieByIdWatcher,
} from './movies.saga'

// single entry point to start all Sagas at once
export default function* rootSaga() {
  yield all([
    getCategoriesWatcher(),
    loadMoviesByCategoriesWatcher(),
    getMovieByIdWatcher(),
  ])
}
