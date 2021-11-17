import { combineReducers } from 'redux';
import auth from './auth';
import login from './login';
import token from './token';
import checkout from './checkout';
import info from './info';

const rootReducer = combineReducers({
  login,
  token,
  checkout,
  info,
});

export default rootReducer;
