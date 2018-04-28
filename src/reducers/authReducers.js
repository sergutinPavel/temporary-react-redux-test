// import { FETCH_USER } from '../actions/types'
//
// export default function(state = {}, action) {
//   console.log(action);
//   switch (action.type) {
//     case FETCH_USER:
//       return action.payload || false;
//     default:
//       return state;
//   }
// }

export const AUTH_REQUEST = 'AUTH_REQUEST';
export const AUTH_SUCCESS = 'AUTH_SUCCESS';
export const AUTH_FAILURE = 'AUTH_FAILURE';

export const authorize = (login, password) => ({
  type: AUTH_REQUEST,
  payload: { login, password }
});

const initialState = {
  token: localStorage.getItem('token'),
  error: null
};

const authReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case AUTH_REQUEST: {
      return { ...state, loading: true, error: null };
    }
    case AUTH_SUCCESS: {
      return { ...state, token: payload, loading: false };
    }
    case AUTH_FAILURE: {
      return { ...state, error: payload, loading: false };
    }
    default:
      return state;
  }
};

export default authReducer;

// const reducer = combineReducers({
//   auth: authReducer,
//   router: routerReducer
// });
//
// export default reducer;
