var CreateActividadProfiles = function () {
  this.up = function (next) {
    var def = function (t) {
          t.column('actNombre', 'string');
          t.column('actDescripcion', 'string');
          t.column('actACTID', 'string');
          t.column('actTipo', 'string');
          t.column('actEstado', 'string');
        }
      , callback = function (err, data) {
          if (err) {
            throw err;
          }
          else {
            next();
          }
        };
    this.createTable('ActividadProfile', def, callback);
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
    this.dropTable('ActividadProfile', callback);
  };
};

exports.CreateActividadProfiles = CreateActividadProfiles;
