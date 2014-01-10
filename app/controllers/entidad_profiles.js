var EntidadProfiles = function () {
  this.respondsWith = ['html', 'json', 'xml', 'js', 'txt'];

  this.index = function (req, resp, params) {
    var self = this;

    geddy.model.EntidadProfile.all(function(err, entidadProfiles) {
      if (err) {
        throw err;
      }
      self.respondWith(entidadProfiles, {type:'EntidadProfile'});
    });
  };

  this.add = function (req, resp, params) {
    this.respond({params: params});
  };

  this.create = function (req, resp, params) {
    var self = this
      , entidadProfile = geddy.model.EntidadProfile.create(params);

    if (!entidadProfile.isValid()) {
      this.respondWith(entidadProfile);
    }
    else {
      entidadProfile.save(function(err, data) {
        if (err) {
          throw err;
        }
        self.respondWith(entidadProfile, {status: err});
      });
    }
  };

  this.show = function (req, resp, params) {
    var self = this;

    geddy.model.EntidadProfile.first(params.id, function(err, entidadProfile) {
      if (err) {
        throw err;
      }
      if (!entidadProfile) {
        throw new geddy.errors.NotFoundError();
      }
      else {
        self.respondWith(entidadProfile);
      }
    });
  };

  this.edit = function (req, resp, params) {
    var self = this;

    geddy.model.EntidadProfile.first(params.id, function(err, entidadProfile) {
      if (err) {
        throw err;
      }
      if (!entidadProfile) {
        throw new geddy.errors.BadRequestError();
      }
      else {
        self.respondWith(entidadProfile);
      }
    });
  };

  this.update = function (req, resp, params) {
    var self = this;

    geddy.model.EntidadProfile.first(params.id, function(err, entidadProfile) {
      if (err) {
        throw err;
      }
      entidadProfile.updateProperties(params);

      if (!entidadProfile.isValid()) {
        self.respondWith(entidadProfile);
      }
      else {
        entidadProfile.save(function(err, data) {
          if (err) {
            throw err;
          }
          self.respondWith(entidadProfile, {status: err});
        });
      }
    });
  };

  this.remove = function (req, resp, params) {
    var self = this;

    geddy.model.EntidadProfile.first(params.id, function(err, entidadProfile) {
      if (err) {
        throw err;
      }
      if (!entidadProfile) {
        throw new geddy.errors.BadRequestError();
      }
      else {
        geddy.model.EntidadProfile.remove(params.id, function(err) {
          if (err) {
            throw err;
          }
          self.respondWith(entidadProfile);
        });
      }
    });
  };

};

exports.EntidadProfiles = EntidadProfiles;
