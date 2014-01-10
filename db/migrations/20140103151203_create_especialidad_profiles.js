var CreateEspecialidadProfiles = function () {
  this.up = function (next) {
    var def = function (t) {
          t.column('espNombre', 'string');
          t.column('espCodigo', 'string');
          t.column('espDescripcion', 'text');
          t.column('espEstado', 'string');
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
