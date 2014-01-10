var assert = require('assert')
  , tests
  , ProfesionalTimeTable = geddy.model.ProfesionalTimeTable;

tests = {

  'after': function (next) {
    // cleanup DB
    ProfesionalTimeTable.remove({}, function (err, data) {
      if (err) { throw err; }
      next();
    });
  }

, 'simple test if the model saves without a error': function (next) {
    var profesionaltimetable = ProfesionalTimeTable.create({});
    profesionaltimetable.save(function (err, data) {
      assert.equal(err, null);
      next();
    });
  }

, 'test stub, replace with your own passing test': function () {
    assert.equal(true, false);
  }

};

module.exports = tests;
