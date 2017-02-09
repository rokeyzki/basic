// action async
// 负责数据的处理

const action = {
  async group() {
    console.log('async start');

    await this.step(5).then((v) => {
      console.info(`then: ${v}`);
    }).catch((v) => {
      console.error(`catch: ${v}`);
    });

    await this.step(4).then(
      (v) => { console.info(`then: ${v}`); },
      (v) => { console.error(`catch: ${v}`); }
    );

    console.log('async end');

    return {
      type: 'UPDATE_DATA',
      value: 888,
    };
  },
  step(x) {
    return new Promise((resolve, reject) => {
      function handler(value) {
        if (value >= 5) resolve(value);
        else reject(value);
      }
      setInterval(() => {
        handler(+x);
      }, 3000);
    });
  },
};

export default action;
