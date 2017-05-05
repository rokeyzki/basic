import 'babel-polyfill';

import React from 'react';
import ReactDOM from 'react-dom';

import './styles/global.scss';

import FooComp from './components/fooComp';

ReactDOM.render(
  <FooComp prop1={123} />,
  document.querySelector('#app')
);
