import { generateActionTypes } from '../../utils/generic-saga'

const root = 'app/Movies/'

const GET_CATEGORIES = generateActionTypes(root, 'GET_CATEGORIES')
const LOAD_MOVIE_BY_CATEGORIES = generateActionTypes(
  root,
  'LOAD_MOVIE_BY_CATEGORIES',
)
const GET_MOVIE_BY_ID = generateActionTypes(root, 'GET_MOVIE_BY_ID')

const constants = {
  GET_CATEGORIES,
  LOAD_MOVIE_BY_CATEGORIES,
  GET_MOVIE_BY_ID,
}
export default constants
