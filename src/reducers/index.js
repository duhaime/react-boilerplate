import { connectRouter } from 'connected-react-router'
import { combineReducers } from 'redux'
import itemReducer from './itemReducer'

export default (history) => combineReducers({
  items: itemReducer,
  router: connectRouter(history),
});