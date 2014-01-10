var VisitaProfiles = function () {
  this.respondsWith = ['html', 'json', 'xml', 'js', 'txt'];

  this.index = function (req, resp, params) {
    var self = this;

    geddy.model.VisitaProfile.all(function(err, visitaProfiles) {
      if (err) {
        throw err;
      }
      self.respondWith(visitaProfiles, {type:'VisitaProfile'});
    });
  };

  this.add = function (req, resp, params) {
    this.respond({params: params});
  };

  this.create = function (req, resp, params) {
    var self = this
      , visitaProfile = geddy.model.VisitaProfile.create(params);

    if (!visitaProfile.isValid()) {
      this.respondWith(visitaProfile);
    }
    else {
      visitaProfile.save(function(err, data) {
        if (err) {
          throw err;
        }
        self.respondWith(visitaProfile, {status: err});
      });
    }
  };

  this.show = function (req, resp, params) {
    var self = this;

    geddy.model.VisitaProfile.first(params.id, function(err, visitaProfile) {
      if (err) {
        throw err;
      }
      if (!visitaProfile) {
        throw new geddy.errors.NotFoundError();
      }
      else {
        self.respondWith(visitaProfile);
      }
    });
  };

  this.edit = function (req, resp, params) {
    var self = this;

    geddy.model.VisitaProfile.first(params.id, function(err, visitaProfile) {
      if (err) {
        throw err;
      }
      if (!visitaProfile) {
        throw new geddy.errors.BadRequestError();
      }
      else {
        self.respondWith(visitaProfile);
      }
    });
  };

  this.update = function (req, resp, params) {
    var self = this;

    geddy.model.VisitaProfile.first(params.id, function(err, visitaProfile) {
      if (err) {
        throw err;
      }
      visitaProfile.updateProperties(params);

      if (!visitaProfile.isValid()) {
        self.respondWith(visitaProfile);
      }
      else {
        visitaProfile.save(function(err, data) {
          if (err) {
            throw err;
          }
          self.respondWith(visitaProfile, {status: err});
        });
      }
    });
  };

  this.remove = function (req, resp, params) {
    var self = this;

    geddy.model.VisitaProfile.first(params.id, function(err, visitaProfile) {
      if (err) {
        throw err;
      }
      if (!visitaProfile) {
        throw new geddy.errors.BadRequestError();
      }
      else {
        geddy.model.VisitaProfile.remove(params.id, function(err) {
          if (err) {
            throw err;
          }
          self.respondWith(visitaProfile);
        });
      }
    });
  };

};

exports.VisitaProfiles = VisitaProfiles;
