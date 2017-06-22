import { connect } from 'react-redux';

import valueAction from '../actions/value';
import colorAction from '../actions/color';
import { Counter } from '../components/counter';

// Map Redux state to component props
function mapStateToProps(state) {
  return {
    value: state.counter.count,
    color: state.counter.color,
  };
}

// Map Redux actions to component props
function mapDispatchToProps(dispatch) {
  return {
    onIncreaseClick: () => dispatch(valueAction.increase()),
    onReduceClick: () => dispatch(valueAction.reduce()),
    onBlackClick: () => dispatch(colorAction.black()),
    onRedClick: () => dispatch(colorAction.red()),
  };
}

// Connected Component
const CounterContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Counter);

export { CounterContainer };
