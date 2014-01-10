var MenuProfiles = function () {
  this.respondsWith = ['html', 'json', 'xml', 'js', 'txt'];

  this.index = function (req, resp, params) {
    var self = this;

    geddy.model.MenuProfile.all(function(err, menuProfiles) {
      if (err) {
        throw err;
      }
      self.respondWith(menuProfiles, {type:'MenuProfile'});
    });
  };

  this.add = function (req, resp, params) {
     var self = this;
    geddy.model.MaestroProfile.all({mPTipo: 'OP'},function (err, dataOP) {
      if (err) {
        throw err;
      }
			geddy.model.MaestroProfile.all({mPTipo: 'TU'},function (err, dataTU) {
				if (err) {
					throw err;
				}
				self.respond({params: params, pOpcion: dataOP, pTU : dataTU });
			});
      
    });
  };

  this.create = function (req, resp, params) {
    var self = this
      , menuProfile = geddy.model.MenuProfile.create(params);

    if (!menuProfile.isValid()) {
      this.respondWith(menuProfile);
    }
    else {
      menuProfile.save(function(err, data) {
        if (err) {
          throw err;
        }
        self.respondWith(menuProfile, {status: err});
      });
    }
  };

  this.show = function (req, resp, params) {
    var self = this;

    geddy.model.MenuProfile.first(params.id, function(err, menuProfile) {
      if (err) {
        throw err;
      }
      if (!menuProfile) {
        throw new geddy.errors.NotFoundError();
      }
      else {
        self.respondWith(menuProfile);
      }
    });
  };

  this.edit = function (req, resp, params) {
    var self = this;

    geddy.model.MenuProfile.first(params.id, function(err, menuProfile) {
      if (err) {
        throw err;
      }
      if (!menuProfile) {
        throw new geddy.errors.BadRequestError();
      }
      else {
        self.respondWith(menuProfile);
      }
    });
  };

  this.update = function (req, resp, params) {
    var self = this;

    geddy.model.MenuProfile.first(params.id, function(err, menuProfile) {
      if (err) {
        throw err;
      }
      menuProfile.updateProperties(params);

      if (!menuProfile.isValid()) {
        self.respondWith(menuProfile);
      }
      else {
        menuProfile.save(function(err, data) {
          if (err) {
            throw err;
          }
          self.respondWith(menuProfile, {status: err});
        });
      }
    });
  };

  this.remove = function (req, resp, params) {
    var self = this;

    geddy.model.MenuProfile.first(params.id, function(err, menuProfile) {
      if (err) {
        throw err;
      }
      if (!menuProfile) {
        throw new geddy.errors.BadRequestError();
      }
      else {
        geddy.model.MenuProfile.remove(params.id, function(err) {
          if (err) {
            throw err;
          }
          self.respondWith(menuProfile);
        });
      }
    });
  };

};

exports.MenuProfiles = MenuProfiles;
