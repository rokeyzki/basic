import { createStore } from 'redux';

import R1 from './reducers/r1';

const defaultState = {
  foo: 'hello rudex',
  data: 2,
};

const store = createStore(R1, defaultState);

export default store;
