// reducers
// 纯函数：只负责状态的更新

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
