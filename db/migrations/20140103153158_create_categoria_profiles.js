var CreateCategoriaProfiles = function () {
  this.up = function (next) {
    var def = function (t) {
          t.column('catNombre', 'string');
          t.column('catCATID', 'string');
          t.column('catDescripcion', 'text');
          t.column('catEstado', 'string');
        }
      , callback = function (err, data) {
          if (err) {
            throw err;
          }
          else {
            next();
          }
        };
    this.createTable('CategoriaProfile', def, callback);
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
    this.dropTable('CategoriaProfile', callback);
  };
};

exports.CreateCategoriaProfiles = CreateCategoriaProfiles;
