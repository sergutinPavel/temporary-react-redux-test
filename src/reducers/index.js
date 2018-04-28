// import { combineReducers } from 'redux';
// import authReducer from './authReducers';
// import {routerReducer} from "react-router-redux";
//
// export default combineReducers({
//   auth: authReducer
// });

import { routerReducer } from 'react-router-redux';
import { combineReducers } from 'redux';

import authReducer from './authReducers';

export default combineReducers({
  auth: authReducer,
  router: routerReducer
});
