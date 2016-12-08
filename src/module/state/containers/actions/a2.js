// async
const A2 = {
  async group() {
    console.log('Async start');

    await this.step(5).then((v) => {
      console.info(`then: ${v}`);
    }).catch((v) => {
      console.error(`catch: ${v}`);
    });

    await this.step(4).then(
      (v) => { console.info(`then: ${v}`); },
      (v) => { console.error(`catch: ${v}`); }
    );

    console.log('Async end');

    return {
      type: 'ASYNC_DATA',
      value: 321,
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

export default A2;
