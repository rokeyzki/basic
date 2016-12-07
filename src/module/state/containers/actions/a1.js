// actions
// 负责数据的读写存放

const A1 = {
  change(v) {
    return {
      type: 'Change_Data',
      value: v * 2,
    };
  },
};

export default A1;
