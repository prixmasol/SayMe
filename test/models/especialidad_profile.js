var assert = require('assert')
  , tests
  , EspecialidadProfile = geddy.model.EspecialidadProfile;

tests = {

  'after': function (next) {
    // cleanup DB
    EspecialidadProfile.remove({}, function (err, data) {
      if (err) { throw err; }
      next();
    });
  }

, 'simple test if the model saves without a error': function (next) {
    var especialidadprofile = EspecialidadProfile.create({});
    especialidadprofile.save(function (err, data) {
      assert.equal(err, null);
      next();
    });
  }

, 'test stub, replace with your own passing test': function () {
    assert.equal(true, false);
  }

};

module.exports = tests;
