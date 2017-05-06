import { createStore, applyMiddleware } from 'redux';
import promiseMiddleware from 'redux-promise';
import { Map as iMap, is } from 'immutable';

let nextState;
const reducer = (state, action) => {
  switch (action.type) {
    case 'UPDATE_DATA':
      nextState = state.set('key2', action.value);
      if (!is(state, nextState)) return nextState;
      return state;

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
