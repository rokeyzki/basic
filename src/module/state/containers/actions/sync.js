// action sync
// 负责数据的处理

const action = {
  change(v) {
    return {
      type: 'UPDATE_DATA',
      value: v * 2,
    };
  },
};

export default action;
