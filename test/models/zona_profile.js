var assert = require('assert')
  , tests
  , ZonaProfile = geddy.model.ZonaProfile;

tests = {

  'after': function (next) {
    // cleanup DB
    ZonaProfile.remove({}, function (err, data) {
      if (err) { throw err; }
      next();
    });
  }

, 'simple test if the model saves without a error': function (next) {
    var zonaprofile = ZonaProfile.create({});
    zonaprofile.save(function (err, data) {
      assert.equal(err, null);
      next();
    });
  }

, 'test stub, replace with your own passing test': function () {
    assert.equal(true, false);
  }

};

module.exports = tests;
