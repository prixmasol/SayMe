var assert = require('assert')
  , tests
  , IpsProfile = geddy.model.IpsProfile;

tests = {

  'after': function (next) {
    // cleanup DB
    IpsProfile.remove({}, function (err, data) {
      if (err) { throw err; }
      next();
    });
  }

, 'simple test if the model saves without a error': function (next) {
    var ipsprofile = IpsProfile.create({});
    ipsprofile.save(function (err, data) {
      assert.equal(err, null);
      next();
    });
  }

, 'test stub, replace with your own passing test': function () {
    assert.equal(true, false);
  }

};

module.exports = tests;
