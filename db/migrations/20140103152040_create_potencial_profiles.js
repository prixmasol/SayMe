var CreatePotencialProfiles = function () {
  this.up = function (next) {
    var def = function (t) {
          t.column('popNombre', 'string');
          t.column('popPOTID', 'string');
          t.column('popDescripcion', 'text');
          t.column('popEstado', 'string');
        }
      , callback = function (err, data) {
          if (err) {
            throw err;
          }
          else {
            next();
          }
        };
    this.createTable('PotencialProfile', def, callback);
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
    this.dropTable('PotencialProfile', callback);
  };
};

exports.CreatePotencialProfiles = CreatePotencialProfiles;
