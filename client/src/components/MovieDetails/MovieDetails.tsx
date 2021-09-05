/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
import './movie-details.scss'

import React, { useEffect } from 'react'
import { Spin } from 'antd'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import { getMovieById } from '../../features/actions/movies.actions'
import {
  selectLocal,
  selectCurrentMovie,
} from '../../features/selectors/movies.selectors'

const MovieDetails = (): JSX.Element => {
  const dispatch = useDispatch()

  let { categoryKey, movieId }: { categoryKey: string; movieId: string } =
    useParams()

  const local: { loading: { gettingMovieById: boolean } } | any =
    useSelector(selectLocal)
  const { gettingMovieById } = local.loading

  const currentMovie:
    | { name: string; year: number; description: string }
    | any = useSelector(selectCurrentMovie)

  useEffect(() => {
    dispatch(
      getMovieById({
        categoryKey,
        movieId,
      }),
    )
  }, [])

  if (gettingMovieById)
    return (
      <div className="spin-container">
        <Spin size="large" />
      </div>
    )
  return (
    <div className="movie-details">
      <h1>
        {currentMovie.name} ( <span> {currentMovie.year} </span> )
      </h1>
      <div className="description">{currentMovie.description}</div>
    </div>
  )
}

export default MovieDetails
