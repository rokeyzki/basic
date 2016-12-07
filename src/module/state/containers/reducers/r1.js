const R1 = (state, action) => {
  switch (action.type) {
    case 'Change_Data':
      return Object.assign({}, state, {
        data: action.value,
      });

    default:
      return state;
  }
};

export default R1;
