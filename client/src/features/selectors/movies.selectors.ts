/**
 * moviesReducer selectors
 */

import { createSelector } from 'reselect'

export const selectCategories = createSelector(
  (state: any): object => state.moviesReducer,
  (moviesReducer: any): [] => moviesReducer.data.categories,
)
export const selectCurrentMovie = createSelector(
  (state: any): object => state.moviesReducer,
  (moviesReducer: any): [] => moviesReducer.data.currentMovie,
)
export const selectLocal = createSelector(
  (state: any): object => state.moviesReducer,
  (moviesReducer: any): object => moviesReducer.local,
)

 