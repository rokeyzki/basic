// function: async

function foo(info, ms) {
  console.log(`步骤${info}：start`);

  const test = new Promise((resolve, reject) => {
    if (info) setTimeout(resolve, ms);
    else reject(new Error('异步请求出错：获取不到步骤info'));
  });

  test.then(() => {
    console.log(`步骤${info}：end`);
  });

  return test;
}

async function asyncPrint() {
  console.log('开始');

  await foo('一', 3000);
  await foo('二', 4000);
  await foo('三', 5000);
  await foo(null, 6000);

  console.log('完毕');
}

asyncPrint();
