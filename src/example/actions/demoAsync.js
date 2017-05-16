import * as types from './types';

const action = {
  async group() {
    await this.step(5).then((v) => {
      console.info(`then: ${v}`);
    }).catch((v) => {
      console.error(`catch: ${v}`);
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

    return {
      type: types.UPDATE_DATA,
      value: 888,
    };
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
