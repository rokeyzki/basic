// JavaScript原有的表示“集合”的数据结构，主要是数组（Array）和对象（Object），ES6又添加了Map和Set。这样就有了四种数据集合。
// 用户还可以组合使用它们，定义自己的数据结构，比如数组的成员是Map，Map的成员是对象。这样就需要一种统一的接口机制，来处理所有不同的数据结构。

// 遍历器（Iterator）就是这样一种机制。
// 它是一种接口，为各种不同的数据结构提供统一的访问机制。
// 任何数据结构只要部署Iterator接口，就可以完成遍历操作（即依次处理该数据结构的所有成员）。
// 在ES6中，有四类数据结构原生具备Iterator接口：Array、Set、Map，还有某些类似数组的Object。
// 对象之所以没有默认部署Iterator接口，是因为对象的哪个属性先遍历，哪个属性后遍历是不确定的，需要开发者手动指定。

// DEMO 1

const arrA = ['red', 'green', 'blue'];

for (const v of arrA) {
  console.log(v); // red、green、blue
}

// DEMO 2

const setA = new Set(['red', 'green', 'blue']);

for (const v of setA) {
  console.log(v); // red、green、blue
}

// DEMO 3

const mapA = new Map();
mapA.set('edition', 6);
mapA.set('committee', 'TC39');
mapA.set('standard', 'ECMA-262');

for (const [key, value] of mapA) {
  console.log(`${key}: ${value}`);
}

// DEMO 4 TODO: 待完成对象的遍历器

// const objA = {
//   edition: 6,
//   committee: 'TC39',
//   standard: 'ECMA-262',
// };

// for (const [key, value] of objA) {
//   console.log(`${key}: ${value}`);
// }

// DEMO 5

const arrB = ['red', 'green', 'blue'];

// Iterator接口部署在数据集合的Symbol.Iterator属性上, 可以调用这个属性，就得到遍历器对象。
const iterator = arrB[Symbol.iterator]();

let foo = iterator.next();
console.dir(foo); // {value: 'red', done: false}

foo = iterator.next();
console.dir(foo); // {value: 'green', done: false}

foo = iterator.next();
console.dir(foo); // {value: 'blue', done: false}

foo = iterator.next();
console.dir(foo); // {value: undefined, done: true}

// DEMO 6

const arrC = ['red', 'green', 'blue'];

for (const p of arrC.entries()) {
  console.log(p); // [0, "red"]、[1, "green"]、[2, "blue"]
}

for (const k of arrC.keys()) {
  console.log(k); // 0、1、2
}

for (const v of arrC.values()) {
  console.log(v); // red、green、blue
}
