var assert = require('assert')
  , tests
  , RegionProfile = geddy.model.RegionProfile;

tests = {

  'after': function (next) {
    // cleanup DB
    RegionProfile.remove({}, function (err, data) {
      if (err) { throw err; }
      next();
    });
  }

, 'simple test if the model saves without a error': function (next) {
    var regionprofile = RegionProfile.create({});
    regionprofile.save(function (err, data) {
      assert.equal(err, null);
      next();
    });
  }

, 'test stub, replace with your own passing test': function () {
    assert.equal(true, false);
  }

};

module.exports = tests;
