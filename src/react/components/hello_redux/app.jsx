import 'babel-polyfill';
import 'isomorphic-fetch';

import React from 'react';
import { Provider } from 'react-redux';

import store from './store';
import { CounterContainer } from './containers/counter';

const HelloRedux = () => (
  <Provider store={store}>
    <CounterContainer />
  </Provider>
);

export default HelloRedux;
