import { is } from 'immutable';

let nextState;
const reducer = (state, action) => {
  switch (action.type) {
    case 'UPDATE_DATA':
      nextState = state.set('key2', action.value);
      if (!is(state, nextState)) return nextState;
      return state;

    default:
      return state;
  }
};

export default reducer;
