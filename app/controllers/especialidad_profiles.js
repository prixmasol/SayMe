var EspecialidadProfiles = function () {
  this.respondsWith = ['html', 'json', 'xml', 'js', 'txt'];

  this.index = function (req, resp, params) {
    var self = this;

    geddy.model.EspecialidadProfile.all(function(err, especialidadProfiles) {
      if (err) {
        throw err;
      }
      self.respondWith(especialidadProfiles, {type:'EspecialidadProfile'});
    });
  };

  this.add = function (req, resp, params) {
    this.respond({params: params});
  };

  this.create = function (req, resp, params) {
    var self = this
      , especialidadProfile = geddy.model.EspecialidadProfile.create(params);

    if (!especialidadProfile.isValid()) {
      this.respondWith(especialidadProfile);
    }
    else {
      especialidadProfile.save(function(err, data) {
        if (err) {
          throw err;
        }
        self.respondWith(especialidadProfile, {status: err});
      });
    }
  };

  this.show = function (req, resp, params) {
    var self = this;

    geddy.model.EspecialidadProfile.first(params.id, function(err, especialidadProfile) {
      if (err) {
        throw err;
      }
      if (!especialidadProfile) {
        throw new geddy.errors.NotFoundError();
      }
      else {
        self.respondWith(especialidadProfile);
      }
    });
  };

  this.edit = function (req, resp, params) {
    var self = this;

    geddy.model.EspecialidadProfile.first(params.id, function(err, especialidadProfile) {
      if (err) {
        throw err;
      }
      if (!especialidadProfile) {
        throw new geddy.errors.BadRequestError();
      }
      else {
        self.respondWith(especialidadProfile);
      }
    });
  };

  this.update = function (req, resp, params) {
    var self = this;

    geddy.model.EspecialidadProfile.first(params.id, function(err, especialidadProfile) {
      if (err) {
        throw err;
      }
      especialidadProfile.updateProperties(params);

      if (!especialidadProfile.isValid()) {
        self.respondWith(especialidadProfile);
      }
      else {
        especialidadProfile.save(function(err, data) {
          if (err) {
            throw err;
          }
          self.respondWith(especialidadProfile, {status: err});
        });
      }
    });
  };

  this.remove = function (req, resp, params) {
    var self = this;

    geddy.model.EspecialidadProfile.first(params.id, function(err, especialidadProfile) {
      if (err) {
        throw err;
      }
      if (!especialidadProfile) {
        throw new geddy.errors.BadRequestError();
      }
      else {
        geddy.model.EspecialidadProfile.remove(params.id, function(err) {
          if (err) {
            throw err;
          }
          self.respondWith(especialidadProfile);
        });
      }
    });
  };

};

exports.EspecialidadProfiles = EspecialidadProfiles;
