import React from 'react';
import PropTypes from 'prop-types';

const Counter = ({
  value,
  color,
  onIncreaseClick,
  onReduceClick,
  onBlackClick,
  onRedClick,
}) => (
  <div>
    <p style={{ color }}>{value}</p>
    <button onClick={onIncreaseClick}>增加</button>
    <button onClick={onReduceClick}>减少</button>
    <button onClick={onBlackClick}>黑色</button>
    <button onClick={onRedClick}>高亮</button>
  </div>
);

Counter.propTypes = {
  value: PropTypes.number.isRequired,
  color: PropTypes.string.isRequired,
  onIncreaseClick: PropTypes.func.isRequired,
  onReduceClick: PropTypes.func.isRequired,
  onBlackClick: PropTypes.func.isRequired,
  onRedClick: PropTypes.func.isRequired,
};

export { Counter };
