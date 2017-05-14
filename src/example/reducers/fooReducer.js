import { List as iList } from 'immutable';

const initialState = iList([1, 2, 3, 4]);

const reducer = (state = initialState, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

export default reducer;
