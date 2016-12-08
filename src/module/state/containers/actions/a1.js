// actions
// 负责数据的读写存放

const A1 = {
  change(v) {
    return {
      type: 'CHANGE_DATA',
      value: v * 2,
    };
  },
};

export default A1;
