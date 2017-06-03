import { createStore, applyMiddleware, compose } from 'redux';
import promiseMiddleware from 'redux-promise';

import reducers from './reducers';

/* eslint-disable no-underscore-dangle */
const composeEnhancers =
  window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose; // chrome dev-tool need
/* eslint-enable */

const store = createStore(reducers, composeEnhancers(applyMiddleware(promiseMiddleware)));

export default store;
