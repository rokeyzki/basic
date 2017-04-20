import React from 'react';
import ReactDOM from 'react-dom';

// 自定义helper文件测试 start
import test from './bin/moduleB';
console.log(test('world: helper test'));
// 自定义helper文件测试 end

import HelloBase from './components/hello_base';

ReactDOM.render(
  <HelloBase prop1={123} />,
  document.querySelector('#app')
);
