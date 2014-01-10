var assert = require('assert')
  , tests
  , A = geddy.model.A;

tests = {

  'after': function (next) {
    // cleanup DB
    A.remove({}, function (err, data) {
      if (err) { throw err; }
      next();
    });
  }

, 'simple test if the model saves without a error': function (next) {
    var a = A.create({});
    a.save(function (err, data) {
      assert.equal(err, null);
      next();
    });
  }

, 'test stub, replace with your own passing test': function () {
    assert.equal(true, false);
  }

};

module.exports = tests;
