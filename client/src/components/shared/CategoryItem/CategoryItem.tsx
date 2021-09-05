/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
import './category-item.scss'
import 'react-multi-carousel/lib/styles.css'

import React from 'react'
import Carousel from 'react-multi-carousel'
import { loadMoviesByCategories } from '../../../features/actions/movies.actions'
import { useDispatch } from 'react-redux'

import { chunk } from 'lodash'

import MovieItem from '../MovieItem'
type CategoryItemProps = {
  category: {
    categoryName: string
    categoryKey: string
    movies: {
      currentPage: number | string | any
      pageSize: number | string | any
      totalItems: number | string | any
      totalPages: number | string | any
      results: [
        {
          id: number
          name: string
          description: string
          year: number
          rating: number
          category: string
        },
      ]
    }
  }
}
const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 1,
    // slidesToSlide: 5, // optional, default to 1.
  },
}

const CategoryItem = ({ category }: CategoryItemProps): JSX.Element => {
  const dispatch = useDispatch()

  const hasMore = category.movies.currentPage < category.movies.totalPages
  const CustomRightArrow = ({ onClick }: any) => {
    if (!hasMore) return <></>
    return (
      <button
        onClick={() => {
          dispatch(
            loadMoviesByCategories({
              limit: 7,
              page: Number(category.movies.currentPage) + 1,
              categoryKey: category.categoryKey,
            }),
          )
          onClick()
        }}
        className="nav-arrow nav-arrow-right"
      >
        <img src="/icons/right-arrow.svg" alt="right-arrow" className="arrow" />
      </button>
    )
  }
  const CustomLeftArrow = ({ onClick, ...rest }: any) => {
    const {
      carouselState: { currentSlide },
    } = rest
    if (currentSlide === 0) return <></>
    return (
      <button
        onClick={() => {
          onClick()
        }}
        className="nav-arrow nav-arrow-left"
      >
        <img src="/icons/left-arrow.svg" alt="right-arrow" className="arrow" />
      </button>
    )
  }

  const renderItems = () => {
    const chunks = chunk(category.movies.results, 6)
    return chunks.map((element, i) => {
      return (
        <div className="chunk" key={i}>
          {element.map((element: any) => {
            return (
              <MovieItem
                key={element.id}
                movie={element}
                categoryKey={category.categoryKey}
              />
            )
          })}
        </div>
      )
    })
  }

  return (
    <div className="category-item">
      <div className="category-name">{category.categoryName}</div>
      <Carousel
        // showDots={true}
        responsive={responsive}
        autoPlaySpeed={1000}
        keyBoardControl={true}
        transitionDuration={500}
        containerClass="carousel-container"
        customRightArrow={<CustomRightArrow />}
        customLeftArrow={<CustomLeftArrow />}
      >
        {renderItems()}
      </Carousel>
    </div>
  )
}

export default CategoryItem
