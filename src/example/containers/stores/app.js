import { createStore, applyMiddleware } from 'redux';
import promiseMiddleware from 'redux-promise';
import { Map as iMap } from 'immutable';

const reducer = (state, action) => {
  switch (action.type) {
    case 'UPDATE_DATA':
      return state.set('key2', action.value);

    default:
      return state;
  }
};

const initialState = iMap({
  key1: 'hello redux',
  key2: 2,
  key3: false,
});

const store = createStore(reducer, initialState, applyMiddleware(promiseMiddleware));

export default store;
