var CreateAaaprofiles = function () {
  this.up = function (next) {
    var def = function (t) {
          t.column('vpUserName', 'string');
          t.column('vpSemana', 'number');
        }
      , callback = function (err, data) {
          if (err) {
            throw err;
          }
          else {
            next();
          }
        };
    this.createTable('AAAProfile', def, callback);
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
    this.dropTable('AAAProfile', callback);
  };
};

exports.CreateAaaprofiles = CreateAaaprofiles;
