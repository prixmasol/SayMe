var assert = require('assert')
  , tests
  , CiudadProfile = geddy.model.CiudadProfile;

tests = {

  'after': function (next) {
    // cleanup DB
    CiudadProfile.remove({}, function (err, data) {
      if (err) { throw err; }
      next();
    });
  }

, 'simple test if the model saves without a error': function (next) {
    var ciudadprofile = CiudadProfile.create({});
    ciudadprofile.save(function (err, data) {
      assert.equal(err, null);
      next();
    });
  }

, 'test stub, replace with your own passing test': function () {
    assert.equal(true, false);
  }

};

module.exports = tests;
