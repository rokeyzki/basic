import 'babel-polyfill';
import 'isomorphic-fetch';

import React from 'react';
import { Provider } from 'react-redux';

import store from './store';
import { CounterCT } from './containers/counter';

const HelloRedux = () => (
  <Provider store={store}>
    <CounterCT />
  </Provider>
);

export default HelloRedux;
