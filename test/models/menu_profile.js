var assert = require('assert')
  , tests
  , MenuProfile = geddy.model.MenuProfile;

tests = {

  'after': function (next) {
    // cleanup DB
    MenuProfile.remove({}, function (err, data) {
      if (err) { throw err; }
      next();
    });
  }

, 'simple test if the model saves without a error': function (next) {
    var menuprofile = MenuProfile.create({});
    menuprofile.save(function (err, data) {
      assert.equal(err, null);
      next();
    });
  }

, 'test stub, replace with your own passing test': function () {
    assert.equal(true, false);
  }

};

module.exports = tests;
