import React from 'react';
import ReactDOM from 'react-dom';

import test from './bin/moduleB'; // 自定义helper文件测试
import HelloBase from './components/hello_base';

console.log(test('world: helper test'));
ReactDOM.render(
  <HelloBase prop1={123} />,
  document.querySelector('#app')
);
