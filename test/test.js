var expect = require('chai').expect;
var Jake = require('../lib/cli');

describe('Jake', function() {
  it('should return a function', function() {
    expect(Jake).to.be.a('function');
  });
});
