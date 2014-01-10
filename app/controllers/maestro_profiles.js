var MaestroProfiles = function () {
  this.respondsWith = ['html', 'json', 'xml', 'js', 'txt'];

  this.index = function (req, resp, params) {
    var self = this;

    geddy.model.MaestroProfile.all(function(err, maestroProfiles) {
      if (err) {
        throw err;
      }
      self.respondWith(maestroProfiles, {type:'MaestroProfile'});
    });
  };

  this.add = function (req, resp, params) {
    this.respond({params: params});
  };

  this.create = function (req, resp, params) {
    var self = this
      , maestroProfile = geddy.model.MaestroProfile.create(params);

    if (!maestroProfile.isValid()) {
      this.respondWith(maestroProfile);
    }
    else {
      maestroProfile.save(function(err, data) {
        if (err) {
          throw err;
        }
        self.respondWith(maestroProfile, {status: err});
      });
    }
  };

  this.show = function (req, resp, params) {
    var self = this;

    geddy.model.MaestroProfile.first(params.id, function(err, maestroProfile) {
      if (err) {
        throw err;
      }
      if (!maestroProfile) {
        throw new geddy.errors.NotFoundError();
      }
      else {
        self.respondWith(maestroProfile);
      }
    });
  };

  this.edit = function (req, resp, params) {
    var self = this;

    geddy.model.MaestroProfile.first(params.id, function(err, maestroProfile) {
      if (err) {
        throw err;
      }
      if (!maestroProfile) {
        throw new geddy.errors.BadRequestError();
      }
      else {
        self.respondWith(maestroProfile);
      }
    });
  };

  this.update = function (req, resp, params) {
    var self = this;

    geddy.model.MaestroProfile.first(params.id, function(err, maestroProfile) {
      if (err) {
        throw err;
      }
      maestroProfile.updateProperties(params);

      if (!maestroProfile.isValid()) {
        self.respondWith(maestroProfile);
      }
      else {
        maestroProfile.save(function(err, data) {
          if (err) {
            throw err;
          }
          self.respondWith(maestroProfile, {status: err});
        });
      }
    });
  };

  this.remove = function (req, resp, params) {
    var self = this;

    geddy.model.MaestroProfile.first(params.id, function(err, maestroProfile) {
      if (err) {
        throw err;
      }
      if (!maestroProfile) {
        throw new geddy.errors.BadRequestError();
      }
      else {
        geddy.model.MaestroProfile.remove(params.id, function(err) {
          if (err) {
            throw err;
          }
          self.respondWith(maestroProfile);
        });
      }
    });
  };

};

exports.MaestroProfiles = MaestroProfiles;
