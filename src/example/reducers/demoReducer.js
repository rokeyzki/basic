let nextState;
const reducer = (state, action) => {
  switch (action.type) {
    case 'UPDATE_DATA':
      nextState = state.set('key2', action.value);
      return nextState;

    default:
      return state;
  }
};

export default reducer;
