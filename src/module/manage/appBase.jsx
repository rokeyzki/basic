import React from 'react';
import ReactDOM from 'react-dom';

import HelloBase from './components/hello_base';

ReactDOM.render(
  <HelloBase prop1={123} />,
  document.querySelector('#app')
);
