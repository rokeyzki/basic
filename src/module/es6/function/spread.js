const people = ['张三', '李四', '王五'];

function sayHello(people1, people2, people3) {
  console.log(`Hello ${people1},${people2},${people3}`);
}

sayHello(...people);
