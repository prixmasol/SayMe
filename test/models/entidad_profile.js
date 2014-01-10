var assert = require('assert')
  , tests
  , EntidadProfile = geddy.model.EntidadProfile;

tests = {

  'after': function (next) {
    // cleanup DB
    EntidadProfile.remove({}, function (err, data) {
      if (err) { throw err; }
      next();
    });
  }

, 'simple test if the model saves without a error': function (next) {
    var entidadprofile = EntidadProfile.create({});
    entidadprofile.save(function (err, data) {
      assert.equal(err, null);
      next();
    });
  }

, 'test stub, replace with your own passing test': function () {
    assert.equal(true, false);
  }

};

module.exports = tests;
