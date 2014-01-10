var CreateProfesionalProfiles = function () {
  this.up = function (next) {
    var def = function (t) {
          t.column('psFullName', 'string');
          t.column('psPSID', 'string');
          t.column('psNombre', 'string');
          t.column('psApellido', 'string');
          t.column('psENTID', 'string');
          t.column('psEPID', 'string');
          t.column('psDireccion', 'string');
          t.column('psZNID', 'string');
          t.column('psDobleImpacto', 'string');
          t.column('psRGID', 'string');
          t.column('psCTID', 'string');
          t.column('psTelefono', 'string');
          t.column('psNacimiento', 'string');
          t.column('psEdad', 'string');
          t.column('psEstado', 'string');
        }
      , callback = function (err, data) {
          if (err) {
            throw err;
          }
          else {
            next();
          }
        };
    this.createTable('ProfesionalProfile', def, callback);
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
    this.dropTable('ProfesionalProfile', callback);
  };
};

exports.CreateProfesionalProfiles = CreateProfesionalProfiles;
