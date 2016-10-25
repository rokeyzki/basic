// function: async

function step(x) {
  return new Promise((resolve, reject) => {
    function handler(value) {
      if (value >= 5) resolve(value);
      else reject(value);
    }

    setInterval(() => {
      handler(+x);
    }, 3000);
  });
}

async function group() {
  console.log('start');

  await step(5).then((v) => { console.info(`then: ${v}`); }).catch((v) => { console.error(`catch: ${v}`); });
  await step(4).then((v) => { console.info(`then: ${v}`); }, (v) => { console.error(`catch: ${v}`); });
  await step(4).then((v) => { console.info(`then: ${v}`); });
  await step(5).then((v) => { console.info(`then: ${v}`); });

  console.log('end');
}

group();
