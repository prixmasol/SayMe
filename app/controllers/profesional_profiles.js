var ProfesionalProfiles = function() {
	this.respondsWith = [ 'html', 'json', 'xml', 'js', 'txt' ];

	this.index = function(req, resp, params) {
		var self = this;
		geddy.model.ProfesionalProfile.all(function(err, profesionalProfiles) {
			if (err) {
				throw err;
			}
			self.respond({profesionalProfiles: profesionalProfiles, params: params} , {
				type : 'ProfesionalProfile'
			});
		});
	};

	this.add = function(req, resp, params) {
		var self = this;
		var res = new Object;
		geddy.model.EntidadProfile.all({
			entEstado : 'Activo'
		}, function(err, ents) {
			geddy.model.IpsProfile.all({
				ipsEstado : 'Activo'
			}, function(err, ipss) {
				geddy.model.EspecialidadProfile.all({
					epEstado : 'Activo'
				}, function(err, eps) {
					geddy.model.RegionProfile.all({
						rgEstado : 'Activo'
					}, function(err, rgs) {
						res['Entidades'] = ents;
						res['IPS'] = ipss;
						res['Especialidades'] = eps;
						res['Regiones'] = rgs;
						self.respond({
							params : params,
							rels : res
						});
					});
				});
			});
		});
	};

	this.create = function(req, resp, params) {
		var self = this, ps = geddy.model.ProfesionalProfile.create(params);
		ps.updateProperties({
			psFullName : ps.psNombre + ' ' + ps.psApellido
		});
		if (!ps.isValid()) {
			this.respondWith(ps);
		} else {
			ps.save(function(err, data) {
				if (err) {
					throw err;
				}
				self.respondWith(ps, {
					status : err
				});
			});
		}
	};

	this.show = function(req, resp, params) {
		var self = this;

		geddy.model.ProfesionalProfile.first(params.id, function(err,
				profesionalProfile) {
			if (err) {
				throw err;
			}
			if (!profesionalProfile) {
				throw new geddy.errors.NotFoundError();
			} else {
				self.respondWith(profesionalProfile);
			}
		});
	};

	this.edit = function(req, resp, params) {
		var self = this;

		geddy.model.ProfesionalProfile.first(params.id, function(err,
				profesionalProfile) {
			if (err) {
				throw err;
			}
			if (!profesionalProfile) {
				throw new geddy.errors.BadRequestError();
			} else {
				var res = new Object;
				geddy.model.EntidadProfile.all(function(err, ents) {
					geddy.model.IpsProfile.all(function(err, ipss) {
						geddy.model.EspecialidadProfile.all(function(err, eps) {
							geddy.model.RegionProfile.all(function(err, rgs) {
								res['Entidades'] = ents;
								res['IPS'] = ipss;
								res['Especialidades'] = eps;
								res['Regiones'] = rgs;
								self.respond({
									profesionalProfile : profesionalProfile,
									rels : res
								});
							});
						});
					});
				});
			}
		});
	};

	this.update = function(req, resp, params) {
		var self = this;

		geddy.model.ProfesionalProfile.first(params.id, function(err,
				profesionalProfile) {
			if (err) {
				throw err;
			}
			profesionalProfile.updateProperties(params);

			if (!profesionalProfile.isValid()) {
				self.respondWith(profesionalProfile);
			} else {
				profesionalProfile.save(function(err, data) {
					if (err) {
						throw err;
					}
					self.respondWith(profesionalProfile, {
						status : err
					});
				});
			}
		});
	};

	this.remove = function(req, resp, params) {
		var self = this;

		geddy.model.ProfesionalProfile.first(params.id, function(err,
				profesionalProfile) {
			if (err) {
				throw err;
			}
			if (!profesionalProfile) {
				throw new geddy.errors.BadRequestError();
			} else {
				geddy.model.ProfesionalProfile.remove(params.id, function(err) {
					if (err) {
						throw err;
					}
					self.respondWith(profesionalProfile);
				});
			}
		});
	};

};

exports.ProfesionalProfiles = ProfesionalProfiles;
