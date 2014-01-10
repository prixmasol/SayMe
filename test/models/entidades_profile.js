var assert = require('assert')
  , tests
  , EntidadesProfile = geddy.model.EntidadesProfile;

tests = {

  'after': function (next) {
    // cleanup DB
    EntidadesProfile.remove({}, function (err, data) {
      if (err) { throw err; }
      next();
    });
  }

, 'simple test if the model saves without a error': function (next) {
    var entidadesprofile = EntidadesProfile.create({});
    entidadesprofile.save(function (err, data) {
      assert.equal(err, null);
      next();
    });
  }

, 'test stub, replace with your own passing test': function () {
    assert.equal(true, false);
  }

};

module.exports = tests;
