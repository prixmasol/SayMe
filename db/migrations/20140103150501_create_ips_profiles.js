var CreateIpsProfiles = function () {
  this.up = function (next) {
    var def = function (t) {
          t.column('ipsNombre', 'string');
          t.column('ipsCodigo', 'string');
          t.column('ipsDescripcion', 'text');
          t.column('ipsEstado', 'string');
        }
      , callback = function (err, data) {
          if (err) {
            throw err;
          }
          else {
            next();
          }
        };
    this.createTable('IpsProfile', def, callback);
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
    this.dropTable('IpsProfile', callback);
  };
};

exports.CreateIpsProfiles = CreateIpsProfiles;
