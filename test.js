var assert = require("assert");
var empty = require('./');

describe('empty object', function () {
  it('should be clean when via null', function () {
    var foo = Object.create(null);
    foo.name = 'github';
    foo.age = 5;
    empty(foo);
    assert.equal('{}',JSON.stringify(foo))
  });

  it('should be clean when via prototype', function () {
    function Bar() {}
    Bar.prototype.name = 'Bar';
    var foo = Object.create(Bar.prototype);
    empty(foo);
    assert.equal('{}',JSON.stringify(foo))
  });
});
