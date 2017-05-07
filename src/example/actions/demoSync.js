const action = {
  change(v) {
    return {
      type: 'UPDATE_DATA',
      value: v,
    };
  },
};

export default action;
