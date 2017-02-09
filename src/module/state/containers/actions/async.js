// action async
// 负责数据的处理

// import AV from '../leancloud/config';

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
      // 模拟接口请求示例
      function handler(value) {
        if (value >= 5) resolve(value);
        else reject(value);
      }
      setInterval(() => {
        handler(+x);
      }, 3000);

      // 后端接口请求示例
      // const TestObject = AV.Object.extend('TestObject');
      // const testObject = new TestObject();
      // testObject.save({
      //   words: 'Hello World!',
      // }).then((object) => {
      //   console.dir(object);
      //   resolve(object);
      // }).catch((error) => {
      //   console.error(`catch: ${error}`);
      //   reject(error);
      // });
    });
  },
};

export default action;
