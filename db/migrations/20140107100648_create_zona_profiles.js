var CreateZonaProfiles = function () {
  this.up = function (next) {
    var def = function (t) {
          t.column('znNombre', 'string');
          t.column('znRGID', 'string');
          t.column('znCTID', 'string');
          t.column('znDescripcion', 'string');
          t.column('znEstado', 'string');
        }
      , callback = function (err, data) {
          if (err) {
            throw err;
          }
          else {
            next();
          }
        };
    this.createTable('ZonaProfile', def, callback);
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
    this.dropTable('ZonaProfile', callback);
  };
};

exports.CreateZonaProfiles = CreateZonaProfiles;
