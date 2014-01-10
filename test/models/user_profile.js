var assert = require('assert')
  , tests
  , UserProfile = geddy.model.UserProfile;

tests = {

  'after': function (next) {
    // cleanup DB
    UserProfile.remove({}, function (err, data) {
      if (err) { throw err; }
      next();
    });
  }

, 'simple test if the model saves without a error': function (next) {
    var userprofile = UserProfile.create({});
    userprofile.save(function (err, data) {
      assert.equal(err, null);
      next();
    });
  }

, 'test stub, replace with your own passing test': function () {
    assert.equal(true, false);
  }

};

module.exports = tests;
