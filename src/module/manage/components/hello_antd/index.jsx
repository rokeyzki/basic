import React from 'react';
import { Cascader } from 'antd';

import Test from './carousel';

const options = [{
  value: 'zhejiang',
  label: 'Zhejiang',
  children: [{
    value: 'hangzhou',
    label: 'Hangzhou',
    children: [{
      value: 'xihu',
      label: 'West Lake',
    }],
  }],
}, {
  value: 'jiangsu',
  label: 'Jiangsu',
  disabled: true,
  children: [{
    value: 'nanjing',
    label: 'Nanjing',
    children: [{
      value: 'zhonghuamen',
      label: 'Zhong Hua Men',
    }],
  }],
}];

function onChange(value) {
  console.log(value);
}

const HelloAntd = React.createClass({
  render: () => (
    <div>
      <Test />
      <Cascader options={options} onChange={onChange} />
    </div>
  ),
});

export default HelloAntd;
