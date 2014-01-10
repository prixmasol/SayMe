var CreateRegionProfiles = function () {
  this.up = function (next) {
    var def = function (t) {
          t.column('rgNombre', 'string');
          t.column('rgRGID', 'string');
          t.column('rgDescripcion', 'text');
          t.column('rgEstado', 'string');
        }
      , callback = function (err, data) {
          if (err) {
            throw err;
          }
          else {
            next();
          }
        };
    this.createTable('RegionProfile', def, callback);
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
    this.dropTable('RegionProfile', callback);
  };
};

exports.CreateRegionProfiles = CreateRegionProfiles;
