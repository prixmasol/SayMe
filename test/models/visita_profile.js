var assert = require('assert')
  , tests
  , VisitaProfile = geddy.model.VisitaProfile;

tests = {

  'after': function (next) {
    // cleanup DB
    VisitaProfile.remove({}, function (err, data) {
      if (err) { throw err; }
      next();
    });
  }

, 'simple test if the model saves without a error': function (next) {
    var visitaprofile = VisitaProfile.create({});
    visitaprofile.save(function (err, data) {
      assert.equal(err, null);
      next();
    });
  }

, 'test stub, replace with your own passing test': function () {
    assert.equal(true, false);
  }

};

module.exports = tests;
