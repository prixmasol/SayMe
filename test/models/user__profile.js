var assert = require('assert')
  , tests
  , User_profile = geddy.model.User_profile;

tests = {

  'after': function (next) {
    // cleanup DB
    User_profile.remove({}, function (err, data) {
      if (err) { throw err; }
      next();
    });
  }

, 'simple test if the model saves without a error': function (next) {
    var user_profile = User_profile.create({});
    user_profile.save(function (err, data) {
      assert.equal(err, null);
      next();
    });
  }

, 'test stub, replace with your own passing test': function () {
    assert.equal(true, false);
  }

};

module.exports = tests;
