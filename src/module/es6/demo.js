const mySet = new Set();

[2, 3, 5, 4, 5, 2, 2, 7, 9, 8, 7, 6, 8].map(x => mySet.add(x));

for (const i of mySet) {
  // alert(i);
  console.log(i);
}
