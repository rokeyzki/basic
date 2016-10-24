// function: class

// 封装
class ParentClass {
  constructor(a, b) {
    this.parentA = a;
    this.parentB = function () {
      return b;
    };
  }

  static parentC() {
    return '静态方法，支持直接调用';
  }

  set parentD(value) {
    this.parentA += value;
  }

  get parentD() {
    return this.parentA;
  }
}

console.log(ParentClass.parentC());

// 继承
class ChildClass extends ParentClass {
  constructor(a, b, c, d) {
    super(a, b);
    this.childA = c;
    this.childB = function () {
      return d;
    };
  }

  static childC() {
    return `子类静态方法: ${super.parentC()}`;
  }
}

console.log(ChildClass.childC());

const foo = new ChildClass(1, 2, 3);

foo.parentD = 4;
console.log(foo.parentD);
