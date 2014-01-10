var EntidadesProfiles = function () {
  this.respondsWith = ['html', 'json', 'xml', 'js', 'txt'];

  this.index = function (req, resp, params) {
    var self = this;

    geddy.model.EntidadesProfile.all(function(err, entidadesProfiles) {
      if (err) {
        throw err;
      }
      self.respondWith(entidadesProfiles, {type:'EntidadesProfile'});
    });
  };

  this.add = function (req, resp, params) {
    this.respond({params: params});
  };

  this.create = function (req, resp, params) {
    var self = this
      , entidadesProfile = geddy.model.EntidadesProfile.create(params);

    if (!entidadesProfile.isValid()) {
      this.respondWith(entidadesProfile);
    }
    else {
      entidadesProfile.save(function(err, data) {
        if (err) {
          throw err;
        }
        self.respondWith(entidadesProfile, {status: err});
      });
    }
  };

  this.show = function (req, resp, params) {
    var self = this;

    geddy.model.EntidadesProfile.first(params.id, function(err, entidadesProfile) {
      if (err) {
        throw err;
      }
      if (!entidadesProfile) {
        throw new geddy.errors.NotFoundError();
      }
      else {
        self.respondWith(entidadesProfile);
      }
    });
  };

  this.edit = function (req, resp, params) {
    var self = this;

    geddy.model.EntidadesProfile.first(params.id, function(err, entidadesProfile) {
      if (err) {
        throw err;
      }
      if (!entidadesProfile) {
        throw new geddy.errors.BadRequestError();
      }
      else {
        self.respondWith(entidadesProfile);
      }
    });
  };

  this.update = function (req, resp, params) {
    var self = this;

    geddy.model.EntidadesProfile.first(params.id, function(err, entidadesProfile) {
      if (err) {
        throw err;
      }
      entidadesProfile.updateProperties(params);

      if (!entidadesProfile.isValid()) {
        self.respondWith(entidadesProfile);
      }
      else {
        entidadesProfile.save(function(err, data) {
          if (err) {
            throw err;
          }
          self.respondWith(entidadesProfile, {status: err});
        });
      }
    });
  };

  this.remove = function (req, resp, params) {
    var self = this;

    geddy.model.EntidadesProfile.first(params.id, function(err, entidadesProfile) {
      if (err) {
        throw err;
      }
      if (!entidadesProfile) {
        throw new geddy.errors.BadRequestError();
      }
      else {
        geddy.model.EntidadesProfile.remove(params.id, function(err) {
          if (err) {
            throw err;
          }
          self.respondWith(entidadesProfile);
        });
      }
    });
  };

};

exports.EntidadesProfiles = EntidadesProfiles;
