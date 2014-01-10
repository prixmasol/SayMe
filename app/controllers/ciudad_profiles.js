var CiudadProfiles = function() {
	this.respondsWith = [ 'html', 'json', 'xml', 'js', 'txt' ];

	this.index = function(req, resp, params) {
		var self = this;

		geddy.model.CiudadProfile.all(function(err, ciudadProfiles) {
			if (err) {
				throw err;
			}
			self.respondWith(ciudadProfiles, {
				type : 'CiudadProfile'
			});
		});
	};

	this.add = function(req, resp, params) {
		var self = this;
		geddy.model.RegionProfile.all({
			rgEstado : 'Activo'
		}, function(err, data) {
			self.respond({
				params : params,
				regiones : data
			});
		});
	};

	this.create = function(req, resp, params) {
		var self = this, ciudadProfile = geddy.model.CiudadProfile
				.create(params);

		if (!ciudadProfile.isValid()) {
			this.respondWith(ciudadProfile);
		} else {
			ciudadProfile.save(function(err, data) {
				if (err) {
					throw err;
				}
				self.respondWith(ciudadProfile, {
					status : err
				});
			});
		}
	};

	this.show = function(req, resp, params) {
		var self = this;

		geddy.model.CiudadProfile.first(params.id,
				function(err, ciudadProfile) {
					if (err) {
						throw err;
					}
					if (!ciudadProfile) {
						throw new geddy.errors.NotFoundError();
					} else {
						self.respondWith(ciudadProfile);
					}
				});
	};

	this.edit = function(req, resp, params) {
		var self = this;

		geddy.model.CiudadProfile.first(params.id,
				function(err, ciudadProfile) {
					if (err) {
						throw err;
					}
					if (!ciudadProfile) {
						throw new geddy.errors.BadRequestError();
					} else {
						geddy.model.RegionProfile.all({
							rgEstado : 'Activo'
						}, function(err, data) {
							self.respond({
								ciudadProfile : ciudadProfile,
								regiones : data
							});
						});
					}
				});
	};

	this.update = function(req, resp, params) {
		var self = this;

		geddy.model.CiudadProfile.first(params.id,
				function(err, ciudadProfile) {
					if (err) {
						throw err;
					}
					ciudadProfile.updateProperties(params);

					if (!ciudadProfile.isValid()) {
						self.respondWith(ciudadProfile);
					} else {
						ciudadProfile.save(function(err, data) {
							if (err) {
								throw err;
							}
							self.respondWith(ciudadProfile, {
								status : err
							});
						});
					}
				});
	};

	this.remove = function(req, resp, params) {
		var self = this;

		geddy.model.CiudadProfile.first(params.id,
				function(err, ciudadProfile) {
					if (err) {
						throw err;
					}
					if (!ciudadProfile) {
						throw new geddy.errors.BadRequestError();
					} else {
						geddy.model.CiudadProfile.remove(params.id, function(
								err) {
							if (err) {
								throw err;
							}
							self.respondWith(ciudadProfile);
						});
					}
				});
	};

	this.byRegion = function(req, resp, params) {
		var self = this;

		geddy.model.CiudadProfile.all({ctEstado:'Activo',
			ctRGID : params.id
		}, function(err, ciudadProfiles) {
			if (err) {
				throw err;
			}
			self.respondWith(ciudadProfiles, {
				format : 'json'
			});
		});
	};
};

exports.CiudadProfiles = CiudadProfiles;
