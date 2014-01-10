var CreateUserProfiles = function () {
  this.up = function (next) {
    var def = function (t) {
          t.column('upUserName', 'string');
          t.column('upNombre', 'string');
          t.column('upApellido', 'string');
          t.column('upIdentificacion', 'string');
          t.column('upCorreo', 'string');
          t.column('upFoto', 'string');
          t.column('upPassword', 'string');
          t.column('upUserType', 'string');
          t.column('upEstado', 'string');
          t.column('upLastLogin', 'string');
        }
      , callback = function (err, data) {
          if (err) {
            throw err;
          }
          else {
            next();
          }
        };
    this.createTable('UserProfile', def, callback);
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
    this.dropTable('UserProfile', callback);
  };
};

exports.CreateUserProfiles = CreateUserProfiles;
