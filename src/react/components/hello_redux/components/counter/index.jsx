// @flow
import React from 'react';

type Props = {
  value: number,
  color: string,
  onIncreaseClick: mixed,
  onReduceClick: mixed,
  onBlackClick: mixed,
  onRedClick: mixed,
};

const Counter = ({
  value,
  color,
  onIncreaseClick,
  onReduceClick,
  onBlackClick,
  onRedClick,
}: Props) => (
  <div>
    <p style={{ color }}>{value}</p>
    <button onClick={onIncreaseClick}>增加</button>
    <button onClick={onReduceClick}>减少</button>
    <button onClick={onBlackClick}>黑色</button>
    <button onClick={onRedClick}>高亮</button>
  </div>
);

export { Counter };
