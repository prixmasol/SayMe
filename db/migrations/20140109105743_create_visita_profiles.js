var CreateVisitaProfiles = function () {
  this.up = function (next) {
    var def = function (t) {
          t.column('vp', 'string');
          t.column('vpUserName', 'string');
          t.column('vpSemana', 'number');
          t.column('vpCiclo', 'number');
          t.column('vpPSID', 'string');
          t.column('vpPOTID', 'string');
          t.column('vpACTID', 'string');
          t.column('vpFecha', 'datetime');
          t.column('vpObservacion', 'text');
        }
      , callback = function (err, data) {
          if (err) {
            throw err;
          }
          else {
            next();
          }
        };
    this.createTable('VisitaProfile', def, callback);
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
    this.dropTable('VisitaProfile', callback);
  };
};

exports.CreateVisitaProfiles = CreateVisitaProfiles;
