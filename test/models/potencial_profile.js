var assert = require('assert')
  , tests
  , PotencialProfile = geddy.model.PotencialProfile;

tests = {

  'after': function (next) {
    // cleanup DB
    PotencialProfile.remove({}, function (err, data) {
      if (err) { throw err; }
      next();
    });
  }

, 'simple test if the model saves without a error': function (next) {
    var potencialprofile = PotencialProfile.create({});
    potencialprofile.save(function (err, data) {
      assert.equal(err, null);
      next();
    });
  }

, 'test stub, replace with your own passing test': function () {
    assert.equal(true, false);
  }

};

module.exports = tests;
