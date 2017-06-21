var add = require('../add.js');
var expect = require('chai').expect;

describe('加法函数的测试2', function() {
  it('1 加 0 应该等于 1', function() {
    expect(add(1, 0)).to.be.equal(1);
  });
});
