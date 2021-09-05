/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
import './categories-list.scss'

import React, { useEffect } from 'react'
import CategoryItem from '../shared/CategoryItem'
import { getCategories } from '../../features/actions/movies.actions'
import { selectCategories } from '../../features/selectors/movies.selectors'
import { useDispatch, useSelector } from 'react-redux'
import InfiniteScroll from 'react-infinite-scroll-component'
import { Spin } from 'antd'
import isEmpty from 'lodash'
const CategoriesList = (): JSX.Element => {
  const dispatch = useDispatch()

  const categories: {} | any = useSelector(selectCategories)

  useEffect(() => {
    dispatch(
      getCategories({
        limit: categories.pageSize,
        page: categories.currentPage,
      }),
    )
  }, [])
  const fetchMoreData = () => {
    dispatch(
      getCategories({
        limit: categories.pageSize,
        page: Number(categories.currentPage) + 1,
      }),
    )
  }
  return (
    <div className="categories">
      <InfiniteScroll
        dataLength={categories.results.length}
        next={() => fetchMoreData()}
        hasMore={categories.currentPage < categories.totalPages}
        loader={
          <div className="loader" key="laoder">
            Loading...
            <span>
              <Spin />
            </span>
          </div>
        }
        endMessage={
          !isEmpty(categories.results) && (
            <p style={{ textAlign: 'center' }}>
              <b>Yay! You have seen it all</b>
            </p>
          )
        }
      >
        {categories.results.map((element: {} | any) => (
          <CategoryItem key={element.categoryKey} category={element} />
        ))}
      </InfiniteScroll>
    </div>
  )
}

export default CategoriesList
