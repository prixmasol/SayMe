var PotencialProfiles = function () {
  this.respondsWith = ['html', 'json', 'xml', 'js', 'txt'];

  this.index = function (req, resp, params) {
    var self = this;

    geddy.model.PotencialProfile.all(function(err, potencialProfiles) {
      if (err) {
        throw err;
      }
      self.respondWith(potencialProfiles, {type:'PotencialProfile'});
    });
  };

  this.add = function (req, resp, params) {
    this.respond({params: params});
  };

  this.create = function (req, resp, params) {
    var self = this
      , potencialProfile = geddy.model.PotencialProfile.create(params);

    if (!potencialProfile.isValid()) {
      this.respondWith(potencialProfile);
    }
    else {
      potencialProfile.save(function(err, data) {
        if (err) {
          throw err;
        }
        self.respondWith(potencialProfile, {status: err});
      });
    }
  };

  this.show = function (req, resp, params) {
    var self = this;

    geddy.model.PotencialProfile.first(params.id, function(err, potencialProfile) {
      if (err) {
        throw err;
      }
      if (!potencialProfile) {
        throw new geddy.errors.NotFoundError();
      }
      else {
        self.respondWith(potencialProfile);
      }
    });
  };

  this.edit = function (req, resp, params) {
    var self = this;

    geddy.model.PotencialProfile.first(params.id, function(err, potencialProfile) {
      if (err) {
        throw err;
      }
      if (!potencialProfile) {
        throw new geddy.errors.BadRequestError();
      }
      else {
        self.respondWith(potencialProfile);
      }
    });
  };

  this.update = function (req, resp, params) {
    var self = this;

    geddy.model.PotencialProfile.first(params.id, function(err, potencialProfile) {
      if (err) {
        throw err;
      }
      potencialProfile.updateProperties(params);

      if (!potencialProfile.isValid()) {
        self.respondWith(potencialProfile);
      }
      else {
        potencialProfile.save(function(err, data) {
          if (err) {
            throw err;
          }
          self.respondWith(potencialProfile, {status: err});
        });
      }
    });
  };

  this.remove = function (req, resp, params) {
    var self = this;

    geddy.model.PotencialProfile.first(params.id, function(err, potencialProfile) {
      if (err) {
        throw err;
      }
      if (!potencialProfile) {
        throw new geddy.errors.BadRequestError();
      }
      else {
        geddy.model.PotencialProfile.remove(params.id, function(err) {
          if (err) {
            throw err;
          }
          self.respondWith(potencialProfile);
        });
      }
    });
  };

};

exports.PotencialProfiles = PotencialProfiles;
