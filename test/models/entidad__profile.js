var assert = require('assert')
  , tests
  , Entidad_profile = geddy.model.Entidad_profile;

tests = {

  'after': function (next) {
    // cleanup DB
    Entidad_profile.remove({}, function (err, data) {
      if (err) { throw err; }
      next();
    });
  }

, 'simple test if the model saves without a error': function (next) {
    var entidad_profile = Entidad_profile.create({});
    entidad_profile.save(function (err, data) {
      assert.equal(err, null);
      next();
    });
  }

, 'test stub, replace with your own passing test': function () {
    assert.equal(true, false);
  }

};

module.exports = tests;
