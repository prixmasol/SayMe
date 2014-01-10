var CreateUserProfiles = function () {
  this.up = function (next) {
    var def = function (t) {
          t.column('uPNombre', 'string');
          t.column('uPApellido', 'string');
          t.column('uPFullName', 'string');
          t.column('uPIdentificacion', 'string');
          t.column('uPCorreo', 'string');
          t.column('uPFoto', 'string');
          t.column('uPLastLogIn', 'datetime');
          t.column('uPUserName', 'string');
          t.column('uPPassword', 'string');
          t.column('uPUserType', 'string');
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
