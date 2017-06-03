// CommonJS 规范
const foo = require('./moduleA');

function test(params) {
  return foo() + params;
}

module.exports = test;
