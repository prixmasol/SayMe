var UserProfiles = function () {
  this.respondsWith = ['html', 'json', 'xml', 'js', 'txt'];

  this.index = function (req, resp, params) {
    var self = this;

    geddy.model.UserProfile.all(function(err, userProfiles) {
      if (err) {
        throw err;
      }
      self.respondWith(userProfiles, {type:'UserProfile'});
    });
  };

  this.add = function (req, resp, params) {
    this.respond({params: params});
  };

  this.create = function (req, resp, params) {
    var self = this
      , userProfile = geddy.model.UserProfile.create(params);

    if (!userProfile.isValid()) {
      this.respondWith(userProfile);
    }
    else {
      userProfile.save(function(err, data) {
        if (err) {
          throw err;
        }
        self.respondWith(userProfile, {status: err});
      });
    }
  };

  this.show = function (req, resp, params) {
    var self = this;

    geddy.model.UserProfile.first(params.id, function(err, userProfile) {
      if (err) {
        throw err;
      }
      if (!userProfile) {
        throw new geddy.errors.NotFoundError();
      }
      else {
        self.respondWith(userProfile);
      }
    });
  };

  this.edit = function (req, resp, params) {
    var self = this;

    geddy.model.UserProfile.first(params.id, function(err, userProfile) {
      if (err) {
        throw err;
      }
      if (!userProfile) {
        throw new geddy.errors.BadRequestError();
      }
      else {
        self.respondWith(userProfile);
      }
    });
  };

  this.update = function (req, resp, params) {
    var self = this;

    geddy.model.UserProfile.first(params.id, function(err, userProfile) {
      if (err) {
        throw err;
      }
      userProfile.updateProperties(params);

      if (!userProfile.isValid()) {
        self.respondWith(userProfile);
      }
      else {
        userProfile.save(function(err, data) {
          if (err) {
            throw err;
          }
          self.respondWith(userProfile, {status: err});
        });
      }
    });
  };

  this.remove = function (req, resp, params) {
    var self = this;

    geddy.model.UserProfile.first(params.id, function(err, userProfile) {
      if (err) {
        throw err;
      }
      if (!userProfile) {
        throw new geddy.errors.BadRequestError();
      }
      else {
        geddy.model.UserProfile.remove(params.id, function(err) {
          if (err) {
            throw err;
          }
          self.respondWith(userProfile);
        });
      }
    });
  };

};

exports.UserProfiles = UserProfiles;
