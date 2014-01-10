var CreateUserProfiles = function () {
  this.up = function (next) {
    var def = function (t) {
          t.column('upUserName', 'string');
          t.column('upTerceroID', 'string');
          t.column('upLastLogIn', 'datetime');
          t.column('upPassword', 'string');
          t.column('upUserType', 'string');
          t.column('upEstado', 'string');
        }
      , callback = function (err, data) {
          if (err) {
            throw err;
          }
          else {
            next();
          }
        };
    this.createTable('User_Profile', def, callback);
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
    this.dropTable('User_Profile', callback);
  };
};

exports.CreateUserProfiles = CreateUserProfiles;
