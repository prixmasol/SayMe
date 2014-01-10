var ZonaProfiles = function() {
	this.respondsWith = [ 'html', 'json', 'xml', 'js', 'txt' ];

	this.index = function(req, resp, params) {
		var self = this;

		geddy.model.ZonaProfile.all(function(err, zonaProfiles) {
			if (err) {
				throw err;
			}
			self.respondWith(zonaProfiles, {
				type : 'ZonaProfile'
			});
		});
	};

	this.add = function(req, resp, params) {
		var self = this;
		geddy.model.RegionProfile.all({
			rgEstado : 'Activo'
		}, function(err, dataR) {
			geddy.model.CiudadProfile.all({
				ctEstado : 'Activo'
			}, function(err, dataC) {
				self.respond({
					params : params,
					dataR : dataR,
					dataC : dataC
				});
			});
		});
	};

	this.create = function(req, resp, params) {
		var self = this, zonaProfile = geddy.model.ZonaProfile.create(params);

		if (!zonaProfile.isValid()) {
			this.respondWith(zonaProfile);
		} else {
			zonaProfile.save(function(err, data) {
				if (err) {
					throw err;
				}
				self.respondWith(zonaProfile, {
					status : err
				});
			});
		}
	};

	this.show = function(req, resp, params) {
		var self = this;

		geddy.model.ZonaProfile.first(params.id, function(err, zonaProfile) {
			if (err) {
				throw err;
			}
			if (!zonaProfile) {
				throw new geddy.errors.NotFoundError();
			} else {
				self.respondWith(zonaProfile);
			}
		});
	};

	this.edit = function(req, resp, params) {
		var self = this;

		geddy.model.ZonaProfile.first(params.id, function(err, zonaProfile) {
			if (err) {
				throw err;
			}
			if (!zonaProfile) {
				throw new geddy.errors.BadRequestError();
			} else {
				geddy.model.RegionProfile.all({
					rgEstado : 'Activo'
				}, function(err, dataR) {
					geddy.model.CiudadProfile.all({
						ctEstado : 'Activo'
					}, function(err, dataC) {
						self.respond({
							zonaProfile : zonaProfile,
							dataR : dataR,
							dataC : dataC
						});
					});
				});
			}
		});
	};

	this.update = function(req, resp, params) {
		var self = this;

		geddy.model.ZonaProfile.first(params.id, function(err, zonaProfile) {
			if (err) {
				throw err;
			}
			zonaProfile.updateProperties(params);

			if (!zonaProfile.isValid()) {
				self.respondWith(zonaProfile);
			} else {
				zonaProfile.save(function(err, data) {
					if (err) {
						throw err;
					}
					self.respondWith(zonaProfile, {
						status : err
					});
				});
			}
		});
	};

	this.remove = function(req, resp, params) {
		var self = this;

		geddy.model.ZonaProfile.first(params.id, function(err, zonaProfile) {
			if (err) {
				throw err;
			}
			if (!zonaProfile) {
				throw new geddy.errors.BadRequestError();
			} else {
				geddy.model.ZonaProfile.remove(params.id, function(err) {
					if (err) {
						throw err;
					}
					self.respondWith(zonaProfile);
				});
			}
		});
	};

	this.byCiudad = function(req, resp, params) {
		var self = this;
		geddy.model.ZonaProfile.all({znEstado:'Activo',
			znCTID : params.id
		}, function(err, zonaProfiles) {
			if (err) {
				throw err;
			}
			self.respondWith(zonaProfiles, {
				format : 'json'
			});
		});
	};
};

exports.ZonaProfiles = ZonaProfiles;
