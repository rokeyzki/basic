import React from 'react';
import { Carousel } from 'antd';

function onChange(v) {
  console.log(v);
}

const components = {
  render: () => (
    <Carousel afterChange={onChange}>
      <div><h3>1</h3></div>
      <div><h3>2</h3></div>
      <div><h3>3</h3></div>
      <div><h3>4</h3></div>
      <div><h3>5</h3></div>
    </Carousel>
  ),
};

const Test = React.createClass(components);

export default Test;
