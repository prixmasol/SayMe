var CreateEspecialidadProfiles = function () {
  this.up = function (next) {
    var def = function (t) {
          t.column('epNombre', 'string');
          t.column('epEPID', 'string');
          t.column('epDescripcion', 'text');
          t.column('epEstado', 'string');
        }
      , callback = function (err, data) {
          if (err) {
            throw err;
          }
          else {
            next();
          }
        };
    this.createTable('EspecialidadProfile', def, callback);
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
    this.dropTable('EspecialidadProfile', callback);
  };
};

exports.CreateEspecialidadProfiles = CreateEspecialidadProfiles;
