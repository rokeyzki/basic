import * as types from './types';

const action = {
  change(v) {
    return {
      type: types.UPDATE_DATA,
      value: v,
    };
  },
};

export default action;
