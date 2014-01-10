var CreateProfesionalTimeTables = function () {
  this.up = function (next) {
    var def = function (t) {
          t.column('pttDia', 'string');
          t.column('pttPSID', 'string');
          t.column('pttInicio1', 'time');
          t.column('pttFinal1', 'time');
          t.column('pttInicio2', 'time');
          t.column('pttFinal2', 'time');
        }
      , callback = function (err, data) {
          if (err) {
            throw err;
          }
          else {
            next();
          }
        };
    this.createTable('ProfesionalTimeTable', def, callback);
  };

  this.down = function (next) {
    var callback = function (err, data) {
          if (err) {
            throw err;
          }
          else {
            next();
          }
        };
    this.dropTable('ProfesionalTimeTable', callback);
  };
};

exports.CreateProfesionalTimeTables = CreateProfesionalTimeTables;
