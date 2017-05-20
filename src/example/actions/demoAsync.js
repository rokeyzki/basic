import * as types from './types';

const action = {
  async group() {
    const res = {
      type: types.UPDATE_DATA,
      value: 0,
    };

    await this.step(5).then((v) => {
      console.info(`then: ${v}`);
      res.value = 888;
    }).catch((v) => {
      console.error(`catch: ${v}`);
      res.value = 666;
    });

    // await this.step(4).then(
    //   (v) => { console.info(`then: ${v}`); },
    //   (v) => { console.error(`catch: ${v}`); }
    // );

    // await fetch('http://baidu.com').then((v) => {
    //   console.info(`then: ${v}`);
    // }).catch((v) => {
    //   console.error(`catch: ${v}`);
    // });

    return res;
  },
  step(x) {
    return new Promise((resolve, reject) => {
      // 模拟接口请求示例
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
