var assert = require('assert')
  , tests
  , CategoriaProfile = geddy.model.CategoriaProfile;

tests = {

  'after': function (next) {
    // cleanup DB
    CategoriaProfile.remove({}, function (err, data) {
      if (err) { throw err; }
      next();
    });
  }

, 'simple test if the model saves without a error': function (next) {
    var categoriaprofile = CategoriaProfile.create({});
    categoriaprofile.save(function (err, data) {
      assert.equal(err, null);
      next();
    });
  }

, 'test stub, replace with your own passing test': function () {
    assert.equal(true, false);
  }

};

module.exports = tests;
