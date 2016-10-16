import 'babel-polyfill'; // 要使用generator函数的时候需要引入babel-polyfill

function* foo() {
  yield 1;
  yield 2;
  yield 3;
  yield 4;
  yield 5;
  return 6;
}

for (const v of foo()) {
  console.log(v);
}
