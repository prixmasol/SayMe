var CreateEntidadProfiles = function () {
  this.up = function (next) {
    var def = function (t) {
          t.column('epFullName', 'string');
          t.column('epNombre', 'string');
          t.column('epApellido', 'string');
          t.column('epIdentificacion', 'string');
          t.column('epCorreo', 'string');
          t.column('epFoto', 'string');
        }
      , callback = function (err, data) {
          if (err) {
            throw err;
          }
          else {
            next();
          }
        };
    this.createTable('EntidadProfile', def, callback);
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
    this.dropTable('EntidadProfile', callback);
  };
};

exports.CreateEntidadProfiles = CreateEntidadProfiles;
