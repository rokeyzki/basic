// reducer
// 纯函数：负责状态的最终更新

const reducer = (state, action) => {
  switch (action.type) {
    case 'UPDATE_DATA':
      return Object.assign({}, state, {
        data: action.value,
      });

    default:
      return state;
  }
};

export default reducer;
