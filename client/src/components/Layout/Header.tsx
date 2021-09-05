/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'
import { Link } from 'react-router-dom'
import routes from '../../routes'
import { useHistory, useLocation } from 'react-router-dom'

const Header = (): JSX.Element => {
  const history = useHistory()
  const location = useLocation()

  const navToHome = () => {
    if (location.pathname !== routes.HOME.path) {
      history.push(routes.HOME.path)
    }
  }
  return (
    <header>
      <nav>
        <img
          src="/logo.png"
          alt="netflix-logo"
          className="logo"
          onClick={() => {
            navToHome()
          }}
        />
        <span
          className="nav-item"
          onClick={() => {
            navToHome()
          }}
        >
          Home
        </span>
        |<span className="nav-item">TV shows</span>
        <span className="nav-item">Movies</span>
        <span className="nav-item">Lastest</span>
        <span className="nav-item">My list</span>
        <span className="nav-item">Rewatch</span>
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
