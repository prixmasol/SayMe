var CreateMaestroProfiles = function () {
  this.up = function (next) {
    var def = function (t) {
          t.column('mPNombre', 'string');
          t.column('mPCodigo', 'string');
          t.column('descripcion', 'text');
          t.column('estado', 'string');
          t.column('tipo', 'string');
        }
      , callback = function (err, data) {
          if (err) {
            throw err;
          }
          else {
            next();
          }
        };
    this.createTable('MaestroProfile', def, callback);
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
    this.dropTable('MaestroProfile', callback);
  };
};

exports.CreateMaestroProfiles = CreateMaestroProfiles;
