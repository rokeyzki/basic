import { Map as iMap } from 'immutable';

const initialState = iMap({
  key1: 'hello redux',
  key2: 2,
  key3: false,
});

let nextState;
const reducer = (state = initialState, action) => {
  switch (action.type) {
    case 'UPDATE_DATA':
      nextState = state.set('key2', action.value);
      return nextState;

    default:
      return state;
  }
};

export default reducer;
