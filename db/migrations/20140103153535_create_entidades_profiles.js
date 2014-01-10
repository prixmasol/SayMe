var CreateEntidadesProfiles = function () {
  this.up = function (next) {
    var def = function (t) {
          t.column('entNombre', 'string');
          t.column('entENTID', 'string');
          t.column('entDescripcion', 'text');
          t.column('entEstado', 'string');
        }
      , callback = function (err, data) {
          if (err) {
            throw err;
          }
          else {
            next();
          }
        };
    this.createTable('EntidadesProfile', def, callback);
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
    this.dropTable('EntidadesProfile', callback);
  };
};

exports.CreateEntidadesProfiles = CreateEntidadesProfiles;
