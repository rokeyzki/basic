const initialState = {
  count: 0,
  color: 'black',
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case 'INCREASE':
      return Object.assign({}, state, {
        count: state.count + 1,
      });
    case 'REDUCE':
      return Object.assign({}, state, {
        count: state.count - 1,
      });
    case 'BLACK':
      return Object.assign({}, state, {
        color: 'black',
      });
    case 'RED':
      return Object.assign({}, state, {
        color: 'red',
      });
    default:
      return state;
  }
};

export default reducer;
