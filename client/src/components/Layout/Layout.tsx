import React from 'react'
import Header from './Header'
import './layout.scss'
type LayoutProps = {
  children?: JSX.Element | JSX.Element[]
}

const Layout = ({ children }: LayoutProps): JSX.Element => {
  // const isAuthenticated = useSelector(selectisAuthenticated)

  return (
    <div className="main-layout">
      <Header />
      <div className="main-layout__content">{children}</div>
    </div>
  )
}

export default Layout
