import 'babel-polyfill';

import React from 'react';
import ReactDOM from 'react-dom';

import './styles/global.scss';

import MainDemo from './components/MainDemo';

ReactDOM.render(
  <MainDemo />,
  document.querySelector('#app')
);
