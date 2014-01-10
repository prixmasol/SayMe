var assert = require('assert')
  , tests
  , Aaaprofile = geddy.model.Aaaprofile;

tests = {

  'after': function (next) {
    // cleanup DB
    Aaaprofile.remove({}, function (err, data) {
      if (err) { throw err; }
      next();
    });
  }

, 'simple test if the model saves without a error': function (next) {
    var aaaprofile = Aaaprofile.create({});
    aaaprofile.save(function (err, data) {
      assert.equal(err, null);
      next();
    });
  }

, 'test stub, replace with your own passing test': function () {
    assert.equal(true, false);
  }

};

module.exports = tests;
