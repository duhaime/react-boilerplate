import { createStore, applyMiddleware, compose } from 'redux';
import { createBrowserHistory } from 'history';
import { routerMiddleware, connectRouter } from 'connected-react-router';
import createSagaMiddleware from 'redux-saga';
import freeze from 'redux-freeze';
import { rootReducer } from './reducers/index';
import { sagas } from './sagas/index';

// create an empty middleware array
let middlewares = [];

// create the router middleware
const history = createBrowserHistory();
middlewares.push( routerMiddleware(history) );

// add the saga middleware
const sagaMiddleware = createSagaMiddleware();
middlewares.push(sagaMiddleware);

// add the freeze dev middleware
if (process.env.NODE_ENV !== 'production') {
  middlewares.push(freeze);
}

// apply the middleware
let middleware = applyMiddleware(...middlewares);

// add the redux dev tools
if (process.env.NODE_ENV !== 'production') {
  if (window.devToolsExtension) {
    middleware = compose(middleware, window.devToolsExtension())
  } else if (window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) {
    middleware = composeEnhancer(
      applyMiddleware(middleware)
    )
  }
}

// create the store
const store = createStore(
  connectRouter(history)(rootReducer),
  middleware
);

sagaMiddleware.run(sagas);

export { store, history };