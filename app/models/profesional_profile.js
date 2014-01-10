var ProfesionalProfile = function () {

  this.defineProperties({
    psFullName: {type: 'string'},
    psDocumento: {type: 'string', required: true},
    psNombre: {type: 'string', required: true},
    psApellido: {type: 'string', required: true},
    psIPSID: {type: 'string'},
    psENTID: {type: 'string'},
    psEPID: {type: 'string'},
    psDireccion: {type: 'string'},
    psZNID: {type: 'string'},
    psDobleImpacto: {type: 'string'},
    psRGID: {type: 'string'},
    psCTID: {type: 'string'},
    psTelefono: {type: 'string'},
    psNacimiento: {type: 'string'},
    psEdad: {type: 'string'},
    psEstado: {type: 'string'}
  });
	
	this.hasOne('EntidadProfile'),
	this.hasOne('EspecialidadProfile');
	this.hasOne('ZonaProfile');
	this.hasOne('RegionProfile');
	this.hasOne('CiudadProfile');
	this.hasOne('IpsProfile');
  /*
  this.property('login', 'string', {required: true});
  this.property('password', 'string', {required: true});
  this.property('lastName', 'string');
  this.property('firstName', 'string');

  this.validatesPresent('login');
  this.validatesFormat('login', /[a-z]+/, {message: 'Subdivisions!'});
  this.validatesLength('login', {min: 3});
  // Use with the name of the other parameter to compare with
  this.validatesConfirmed('password', 'confirmPassword');
  // Use with any function that returns a Boolean
  this.validatesWithFunction('password', function (s) {
      return s.length > 0;
  });

  // Can define methods for instances like this
  this.someMethod = function () {
    // Do some stuff
  };
  */

};

/*
// Can also define them on the prototype
ProfesionalProfile.prototype.someOtherMethod = function () {
  // Do some other stuff
};
// Can also define static methods and properties
ProfesionalProfile.someStaticMethod = function () {
  // Do some other stuff
};
ProfesionalProfile.someStaticProperty = 'YYZ';
*/

ProfesionalProfile = geddy.model.register('ProfesionalProfile', ProfesionalProfile);
