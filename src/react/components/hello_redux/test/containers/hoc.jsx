// HOC 高阶组件
import 'babel-polyfill';
import 'isomorphic-fetch';

import React from 'react';
import { Provider } from 'react-redux';

import store from '../../store';

export default function ppHOC(WrappedComponent) {
  return (...props) => (
    <Provider store={store}>
      <WrappedComponent {...props} />
    </Provider>
  );
}
