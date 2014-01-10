var CreateEntidadProfiles = function () {
  this.up = function (next) {
    var def = function (t) {
          t.column('epNombre', 'string');
          t.column('epApellido', 'string');
          t.column('epFullName', 'string');
          t.column('epIdentificacion', 'string');
          t.column('epCorreo', 'string');
          t.column('epFoto', 'string');
          t.column('epEstadoe', 'string');
        }
      , callback = function (err, data) {
          if (err) {
            throw err;
          }
          else {
            next();
          }
        };
    this.createTable('Entidad_Profile', def, callback);
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
    this.dropTable('Entidad_Profile', callback);
  };
};

exports.CreateEntidadProfiles = CreateEntidadProfiles;
