var CreateAs = function () {
  this.up = function (next) {
    var def = function (t) {
          t.column('codigo', 'string');
          t.column('estado', 'string');
        }
      , callback = function (err, data) {
          if (err) {
            throw err;
          }
          else {
            next();
          }
        };
    this.createTable('a', def, callback);
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
    this.dropTable('a', callback);
  };
};

exports.CreateAs = CreateAs;
