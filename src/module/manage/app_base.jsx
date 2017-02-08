import React from 'react';
import ReactDOM from 'react-dom';

import HelloBase from './components/hello_base';

ReactDOM.render(
  <HelloBase prop1="hello 1" prop2="world 2" />,
  document.querySelector('#app')
);
