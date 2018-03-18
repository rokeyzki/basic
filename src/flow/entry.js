// @flow

const str: string = 'hello world!';
console.log(str);

function foo(x: ?number): string {
  if (x) {
    return `${x}`;
  }
  return 'default string';
}

foo(3);
