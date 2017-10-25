import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import naviconReducer from './naviconReducer';

export const rootReducer = combineReducers({
  form: formReducer,
  navicon: naviconReducer 
});