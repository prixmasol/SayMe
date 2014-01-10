var RegionProfiles = function () {
  this.respondsWith = ['html', 'json', 'xml', 'js', 'txt'];

  this.index = function (req, resp, params) {
    var self = this;

    geddy.model.RegionProfile.all(function(err, regionProfiles) {
      if (err) {
        throw err;
      }
      self.respondWith(regionProfiles, {type:'RegionProfile'});
    });
  };

  this.add = function (req, resp, params) {
    this.respond({params: params});
  };

  this.create = function (req, resp, params) {
    var self = this
      , regionProfile = geddy.model.RegionProfile.create(params);

    if (!regionProfile.isValid()) {
      this.respondWith(regionProfile);
    }
    else {
      regionProfile.save(function(err, data) {
        if (err) {
          throw err;
        }
        self.respondWith(regionProfile, {status: err});
      });
    }
  };

  this.show = function (req, resp, params) {
    var self = this;

    geddy.model.RegionProfile.first(params.id, function(err, regionProfile) {
      if (err) {
        throw err;
      }
      if (!regionProfile) {
        throw new geddy.errors.NotFoundError();
      }
      else {
        self.respondWith(regionProfile);
      }
    });
  };

  this.edit = function (req, resp, params) {
    var self = this;

    geddy.model.RegionProfile.first(params.id, function(err, regionProfile) {
      if (err) {
        throw err;
      }
      if (!regionProfile) {
        throw new geddy.errors.BadRequestError();
      }
      else {
        self.respondWith(regionProfile);
      }
    });
  };

  this.update = function (req, resp, params) {
    var self = this;

    geddy.model.RegionProfile.first(params.id, function(err, regionProfile) {
      if (err) {
        throw err;
      }
      regionProfile.updateProperties(params);

      if (!regionProfile.isValid()) {
        self.respondWith(regionProfile);
      }
      else {
        regionProfile.save(function(err, data) {
          if (err) {
            throw err;
          }
          self.respondWith(regionProfile, {status: err});
        });
      }
    });
  };

  this.remove = function (req, resp, params) {
    var self = this;

    geddy.model.RegionProfile.first(params.id, function(err, regionProfile) {
      if (err) {
        throw err;
      }
      if (!regionProfile) {
        throw new geddy.errors.BadRequestError();
      }
      else {
        geddy.model.RegionProfile.remove(params.id, function(err) {
          if (err) {
            throw err;
          }
          self.respondWith(regionProfile);
        });
      }
    });
  };

};

exports.RegionProfiles = RegionProfiles;
