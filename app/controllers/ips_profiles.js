var IpsProfiles = function () {
  this.respondsWith = ['html', 'json', 'xml', 'js', 'txt'];

  this.index = function (req, resp, params) {
    var self = this;

    geddy.model.IpsProfile.all(function(err, ipsProfiles) {
      if (err) {
        throw err;
      }
      self.respondWith(ipsProfiles, {type:'IpsProfile'});
    });
  };

  this.add = function (req, resp, params) {
    this.respond({params: params});
  };

  this.create = function (req, resp, params) {
    var self = this
      , ipsProfile = geddy.model.IpsProfile.create(params);

    if (!ipsProfile.isValid()) {
      this.respondWith(ipsProfile);
    }
    else {
      ipsProfile.save(function(err, data) {
        if (err) {
          throw err;
        }
        self.respondWith(ipsProfile, {status: err});
      });
    }
  };

  this.show = function (req, resp, params) {
    var self = this;

    geddy.model.IpsProfile.first(params.id, function(err, ipsProfile) {
      if (err) {
        throw err;
      }
      if (!ipsProfile) {
        throw new geddy.errors.NotFoundError();
      }
      else {
        self.respondWith(ipsProfile);
      }
    });
  };

  this.edit = function (req, resp, params) {
    var self = this;

    geddy.model.IpsProfile.first(params.id, function(err, ipsProfile) {
      if (err) {
        throw err;
      }
      if (!ipsProfile) {
        throw new geddy.errors.BadRequestError();
      }
      else {
        self.respondWith(ipsProfile);
      }
    });
  };

  this.update = function (req, resp, params) {
    var self = this;

    geddy.model.IpsProfile.first(params.id, function(err, ipsProfile) {
      if (err) {
        throw err;
      }
      ipsProfile.updateProperties(params);

      if (!ipsProfile.isValid()) {
        self.respondWith(ipsProfile);
      }
      else {
        ipsProfile.save(function(err, data) {
          if (err) {
            throw err;
          }
          self.respondWith(ipsProfile, {status: err});
        });
      }
    });
  };

  this.remove = function (req, resp, params) {
    var self = this;

    geddy.model.IpsProfile.first(params.id, function(err, ipsProfile) {
      if (err) {
        throw err;
      }
      if (!ipsProfile) {
        throw new geddy.errors.BadRequestError();
      }
      else {
        geddy.model.IpsProfile.remove(params.id, function(err) {
          if (err) {
            throw err;
          }
          self.respondWith(ipsProfile);
        });
      }
    });
  };

};

exports.IpsProfiles = IpsProfiles;
