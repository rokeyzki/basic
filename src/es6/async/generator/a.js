// import 'babel-polyfill'; // 要使用generator函数的时候需要引入babel-polyfill

function* foo() {
  yield 'hello';
  yield 'world';
  return 'ending';
}

const foo2 = foo();

console.log(foo2.next());
console.log(foo2.next());
console.log(foo2.next());
console.log(foo2.next());
