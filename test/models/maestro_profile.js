var assert = require('assert')
  , tests
  , MaestroProfile = geddy.model.MaestroProfile;

tests = {

  'after': function (next) {
    // cleanup DB
    MaestroProfile.remove({}, function (err, data) {
      if (err) { throw err; }
      next();
    });
  }

, 'simple test if the model saves without a error': function (next) {
    var maestroprofile = MaestroProfile.create({});
    maestroprofile.save(function (err, data) {
      assert.equal(err, null);
      next();
    });
  }

, 'test stub, replace with your own passing test': function () {
    assert.equal(true, false);
  }

};

module.exports = tests;
