// reducers
// 纯函数：只负责状态的更新

const R1 = (state, action) => {
  switch (action.type) {
    case 'CHANGE_DATA':
      return Object.assign({}, state, {
        data: action.value,
      });

    case 'ASYNC_DATA':
      return Object.assign({}, state, {
        data: action.value,
      });

    default:
      return state;
  }
};

export default R1;
