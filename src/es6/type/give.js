// 变量的解构赋值

const [a, b, c] = [1, 2, 3];
console.log(a, b, c);

const { aa, bb } = { bb: 'bbb', aa: 'aaa' };
console.log(aa); // "aaa"
console.log(bb); // "bbb"

// 如果变量名与属性名不一致，必须写成下面这样。

const { aaa: AAA } = { aaa: 'aaa', bbb: 'bbb' };
console.log(AAA); // "aaa"
// console.log(aaa); // aaa is not defined

const [foo, [[bar], baz]] = [1, [[2], 3]];
console.log(foo, bar, baz);

const [, , third] = [1, 2, 3];
console.log(third);

const [head, ...tail] = [1, 2, 3, 4];
console.log(head); // 1
console.log(tail); // [2, 3, 4]

const [x, y] = [1, 2, 3];
console.log(x); // 1
console.log(y); // 2

const [a1, [b1], d1] = [1, [2, 3], 4];
console.log(a1); // 1
console.log(b1); // 2
console.log(d1); // 4

// 解构赋值的用途

// DEMO 1：交换变量的值

// DEMO 2：从函数返回多个值

// DEMO 3：函数参数的定义

// DEMO 4：提取对象数据

// DEMO 5：指定函数参数的默认值

// DEMO 6：遍历Map结构

// DEMO 7：输入模块的指定方法
