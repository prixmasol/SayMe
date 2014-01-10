var CreateAas = function () {
  this.up = function (next) {
    var def = function (t) {
          t.column('codigo', 'string');
          t.column('estado', 'string');
          t.column('aaestado', 'string');
        }
      , callback = function (err, data) {
          if (err) {
            throw err;
          }
          else {
            next();
          }
        };
    this.createTable('aa', def, callback);
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
    this.dropTable('aa', callback);
  };
};

exports.CreateAas = CreateAas;
