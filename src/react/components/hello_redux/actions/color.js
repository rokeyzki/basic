import * as types from '.';

const action = {
  black() {
    return {
      type: types.BLACK,
    };
  },
  red() {
    return {
      type: types.RED,
    };
  },
};

export default action;
