import * as types from '.';

const action = {
  increase() {
    return {
      type: types.INCREASE,
    };
  },
  reduce() {
    return {
      type: types.REDUCE,
    };
  },
};

export default action;
