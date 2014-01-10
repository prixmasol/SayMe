var UserProfile = function () {

  this.defineProperties({
    upUserName: {type: 'string', required: true},
    upNombre: {type: 'string'},
    upApellido: {type: 'string'},
    upIdentificacion: {type: 'string'},
    upCorreo: {type: 'string'},
    upFoto: {type: 'string'},
    upPassword: {type: 'string'},
		confirmPassword: {type: 'string'},
    upUserType: {type: 'string'},
    upEstado: {type: 'string'},
    upLastLogin: {type: 'string'}
  });

	this.validatesPresent('upNombre');
	this.validatesPresent('upApellido');
	this.validatesPresent('upIdentificacion');
	this.validatesPresent('upCorreo');
	this.validatesPresent('upPassword',{on:'create'});
	this.validatesConfirmed('upPassword', 'confirmPassword');
	
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
UserProfile.prototype.someOtherMethod = function () {
  // Do some other stuff
};
// Can also define static methods and properties
UserProfile.someStaticMethod = function () {
  // Do some other stuff
};
UserProfile.someStaticProperty = 'YYZ';
*/

UserProfile = geddy.model.register('UserProfile', UserProfile);
