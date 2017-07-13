// HOC 高阶组件
import 'babel-polyfill';
import 'isomorphic-fetch';

import React from 'react';
import { Provider } from 'react-redux';

import store from '../../store';

export default function ppHOC(WrappedComponent) {
  return class PP extends React.Component {
    componentWillMount() {
      console.log('HOC 高阶组件');
    }

    render() {
      return (
        <Provider store={store}>
          <WrappedComponent {...this.props} />
        </Provider>
      );
    }
  };
}
