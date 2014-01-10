var CreateCiudadProfiles = function () {
  this.up = function (next) {
    var def = function (t) {
          t.column('ctNombre', 'string');
          t.column('ctRGID', 'string');
          t.column('ctCTID', 'string');
          t.column('ctDescripcion', 'string');
          t.column('ctEstado', 'string');
        }
      , callback = function (err, data) {
          if (err) {
            throw err;
          }
          else {
            next();
          }
        };
    this.createTable('CiudadProfile', def, callback);
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
    this.dropTable('CiudadProfile', callback);
  };
};

exports.CreateCiudadProfiles = CreateCiudadProfiles;
