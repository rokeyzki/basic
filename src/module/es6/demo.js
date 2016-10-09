var s = new Set();

[2, 3, 5, 4, 5, 2, 2, 7, 9, 8, 7, 6, 8].map(x => s.add(x));

for (let i of s) {
  alert(i);
  // console.log(i);
}
