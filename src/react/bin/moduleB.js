// CommonJS 规范
var foo = require('./moduleA');

function test(params) {
  return foo() + params;
}

module.exports = test;
