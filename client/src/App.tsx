import './App.scss'

import React from 'react'
import Layout from './components/Layout'
import { ConnectedRouter } from 'connected-react-router'
import { Route, Switch } from 'react-router-dom'
import history from './utils/history'
import routes from './routes'

const App = () => {
  return (
    <ConnectedRouter history={history}>
      <Switch>
        <Layout>
          <Route
            exact
            path={routes.HOME.path}
            component={routes.HOME.component}
          />
          <Route
            exact
            path={routes.MOVIE.path}
            component={routes.MOVIE.component}
          />
        </Layout>
      </Switch>
    </ConnectedRouter>
  )
}

export default App
