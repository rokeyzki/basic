// Symbol 是JS的第七种数据类型，表示独一无二的值，一般用于做对象的属性名。

// 一个新规则的提出，必然是因为有需求，熟悉ES5的人都知道，ES5里面对象的属性名都是字符串，
// 如果你需要使用一个别人提供的对象，你对这个对象有哪些属性也不是很清楚，但又想为这个对象新增一些属性，那么你新增的属性名就很可能和原来的属性名发送冲突，显然我们是不希望这种情况发生的。
// 所以，我们需要确保每个属性名都是独一无二的，这样就可以防止属性名的冲突了。因此，ES6里就引入了Symbol，用它来产生一个独一无二的值。

// DEMO 1

const fooA = Symbol('这里可以写注释');

console.log(fooA); // Symbol(这里可以写注释)
console.log(typeof fooA); // symbol

const fooB = Symbol('这里可以写注释');

console.log(fooB); // Symbol(这里可以写注释)
console.log(typeof fooB); // symbol

console.log(fooA == fooB); // false
console.log(fooA === fooB); // false

// DEMO 2

// 作为属性名的 Symbol，第一种写法
let obj = {};
obj[fooA] = 'hello';
obj[fooB] = 'world';

// 作为属性名的 Symbol，第二种写法
obj = {
  [fooA]: 'hello',
  [fooB]: 'world',
};

// 作为属性名的 Symbol，第三种写法
obj = {};
Object.defineProperty(obj, fooA, { value: 'hello' });
Object.defineProperty(obj, fooB, { value: 'world' });

console.dir(obj);

console.log(obj[fooB]); // "world"

console.log(JSON.stringify(obj)); // 含 Symbol 的对象，不能转JSON字符串，返回的是 {}
