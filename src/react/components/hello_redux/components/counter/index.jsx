// @flow

import React from 'react';

type Props = {
  value: number,
  color: string,
  onIncreaseClick: any,
  onReduceClick: any,
  onBlackClick: any,
  onRedClick: any,
};

const Counter = (props: Props) => (
  <div>
    <p style={{ color: props.color }}>{props.value}</p>
    <button onClick={props.onIncreaseClick}>增加</button>
    <button onClick={props.onReduceClick}>减少</button>
    <button onClick={props.onBlackClick}>黑色</button>
    <button onClick={props.onRedClick}>高亮</button>
  </div>
);

export { Counter };
