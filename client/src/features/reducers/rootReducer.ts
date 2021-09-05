import { combineReducers } from 'redux'
import { connectRouter } from 'connected-react-router'
import moviesReducer from './movies.reducer'
import history from '../../utils/history'

const createReducer = (injectedReducers = {}): object | any => {
  const rootReducer = combineReducers({
    moviesReducer , 
    router: connectRouter(history),
    ...injectedReducers,
  })

  return rootReducer
}
export default createReducer
