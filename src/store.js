import { createStore, applyMiddleware, compose } from 'redux'
import { routerMiddleware } from 'connected-react-router'
import { createBrowserHistory } from 'history'
import { createLogger } from 'redux-logger'
import thunkMiddleware from 'redux-thunk'
import rootReducer from './reducers/index'
import freeze from 'redux-freeze'
import { fetchItems } from './actions/items'

const history = createBrowserHistory()

let middlewares = [
  routerMiddleware(history),
  thunkMiddleware,
  freeze,
]

if (process.env.NODE_ENV !== 'production') {
  middlewares.push(createLogger())
}

const store = createStore(
  rootReducer(history),
  applyMiddleware(...middlewares),
)

// initialize app state
store.dispatch(fetchItems('https://jsonplaceholder.typicode.com/photos'))

export { store, history }
