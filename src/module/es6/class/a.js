class ParentClass {
  constructor(a, b) {
    this.myA = a;
    this.myB = function () {
      return b;
    };
  }

  get prop() {
    console.log(this.myA);
    return 'getter';
  }
  set prop(value) {
    console.log(this.myB());
    console.log(`setter:${value}`);
  }

  static one() {
    return '静态方法，立即调用';
  }
}

console.log(ParentClass.one());

class ChildClass extends ParentClass {
  constructor(a, b, c) {
    super(a, b);
    this.myC = c;
  }

  static two() {
    return `子类: ${super.one()}`;
  }
}

console.log(ChildClass.two());

const foo = new ChildClass(1, 2, 3);

foo.prop = 123; // setter:123
console.log(foo.prop); // getter

console.log(foo.myA); // 1
console.log(foo.myB()); // 2
console.log(foo.myC); // 3

console.log(foo.two()); // 会报错
