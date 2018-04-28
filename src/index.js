import React from 'react';
import ReactDOM from 'react-dom';
import createHistory from 'history/createBrowserHistory';
import createSagaMiddleware from 'redux-saga';
import { Provider } from 'react-redux';
import { routerMiddleware } from 'react-router-redux';
import { applyMiddleware, createStore } from 'redux';

import App from './containers/App';
import Saga from './effects';
import reducer from './reducers';

import './styles/index.scss';

// create middlewares
const history = createHistory();
const sagaMiddleware = createSagaMiddleware();

const middleware = applyMiddleware(
  routerMiddleware(history),
  sagaMiddleware
);

// create store
const store = createStore(reducer, middleware);

// run saga middleware
sagaMiddleware.run(Saga);

ReactDOM.render(
  <Provider store={store}>
    <App history={history} />
  </Provider>,
  document.getElementById('root')
);
