/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
import './movie-item.scss'

import React from 'react'
import { Link } from 'react-router-dom'
import routes from '../../../routes'
import { renderLongString } from '../../../utils/string.utils'
type MovieItemProps = {
  movie: { name: string; description: string } | any
  categoryKey: string
}
const renderStarsByRate = (rate: number) => {
  const maxStars = 5
  return Array.from(Array(maxStars).keys()).map((element, index) => {
    if (rate > index) {
      return (
        <img src="/icons/star.png" alt="star" className="start" key={index} />
      )
    }
    return (
      <img src="/icons/star-0.png" alt="star" className="start" key={index} />
    )
  })
}

const MovieItem = ({ movie, categoryKey }: MovieItemProps): JSX.Element => {
  return (
    <Link to={routes.MOVIE.linkPath(categoryKey, movie.id)}>
      <div className="movie-item">
        <div className="name">
          {movie.name} <span className="year">({movie.year}) </span>
        </div>

        <div className="description">
          {renderLongString(movie.description, 20)}
        </div>
        <div className="rate">{renderStarsByRate(movie.rating)}</div>
      </div>
    </Link>
  )
}

export default MovieItem
