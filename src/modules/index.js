import { combineReducers } from 'redux';
import auth from './auth';
import login from './login';
import token from './token';
import checkout from './checkout';

const rootReducer = combineReducers({
  auth,
  login,
  token,
  checkout,
});

export default rootReducer;
