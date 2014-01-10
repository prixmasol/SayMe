var assert = require('assert')
  , tests
  , ProfesionalProfile = geddy.model.ProfesionalProfile;

tests = {

  'after': function (next) {
    // cleanup DB
    ProfesionalProfile.remove({}, function (err, data) {
      if (err) { throw err; }
      next();
    });
  }

, 'simple test if the model saves without a error': function (next) {
    var profesionalprofile = ProfesionalProfile.create({});
    profesionalprofile.save(function (err, data) {
      assert.equal(err, null);
      next();
    });
  }

, 'test stub, replace with your own passing test': function () {
    assert.equal(true, false);
  }

};

module.exports = tests;
