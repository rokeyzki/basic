import { createStore, applyMiddleware } from 'redux';
import promiseMiddleware from 'redux-promise';
import { Map as iMap } from 'immutable';

import reducer from './reducers/demoReducer';

const initialState = iMap({
  key1: 'hello redux',
  key2: 2,
  key3: false,
});

const store = createStore(reducer, initialState, applyMiddleware(promiseMiddleware));

export default store;
