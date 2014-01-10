var CreateMenuProfiles = function () {
  this.up = function (next) {
    var def = function (t) {
          t.column('mECodOP', 'string');
          t.column('mEUsuario', 'string');
          t.column('mECodTU', 'string');
          t.column('mEOperacion', 'string');
        }
      , callback = function (err, data) {
          if (err) {
            throw err;
          }
          else {
            next();
          }
        };
    this.createTable('MenuProfile', def, callback);
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
    this.dropTable('MenuProfile', callback);
  };
};

exports.CreateMenuProfiles = CreateMenuProfiles;
