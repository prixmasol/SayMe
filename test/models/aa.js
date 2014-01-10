var assert = require('assert')
  , tests
  , Aa = geddy.model.Aa;

tests = {

  'after': function (next) {
    // cleanup DB
    Aa.remove({}, function (err, data) {
      if (err) { throw err; }
      next();
    });
  }

, 'simple test if the model saves without a error': function (next) {
    var aa = Aa.create({});
    aa.save(function (err, data) {
      assert.equal(err, null);
      next();
    });
  }

, 'test stub, replace with your own passing test': function () {
    assert.equal(true, false);
  }

};

module.exports = tests;
