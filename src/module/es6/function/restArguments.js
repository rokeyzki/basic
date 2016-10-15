function add(...values) {
  let sum = 0;
  for (const val of values) sum += val;

  return sum;
}

console.log(add(1, 2, 3, 4, 5));
