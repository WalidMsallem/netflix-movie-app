/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'
import { Link } from 'react-router-dom'
import routes from '../../routes'

const Header = (): JSX.Element => {
  return (
    <header>
      <nav>
        <Link to={routes.HOME.path}>
          <img src="/logo.png" alt="netflix-logo" className="logo" />
        </Link>
        <Link to={routes.HOME.path}>
          <span className='nav-item'> Home</span>
        </Link>
        |<span className='nav-item'>TV shows</span>
        <span className='nav-item'>Movies</span>
        <span className='nav-item'>Lastest</span>
        <span className='nav-item'>My list</span>
        <span className='nav-item'>Rewatch</span>
      </nav>

      <div className="content">
        <div className="setting">
          <img src="/icons/search.svg" alt="search" className="search-icon" />
          <span className="category">KIDS</span>
          <img
            src="/icons/notification.svg"
            alt="notification"
            className="notification-icon"
          />
          <img src="/layout/avatar.png" alt="notification" className="avatar" />
        </div>
      </div>
    </header>
  )
}

export default Header
