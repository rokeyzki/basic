// Action Sync 负责对不依赖后端数据的处理

const action = {
  change(v) {
    return {
      type: 'UPDATE_DATA',
      value: v * 2,
    };
  },
};

export default action;
