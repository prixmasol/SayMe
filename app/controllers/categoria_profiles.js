var CategoriaProfiles = function () {
  this.respondsWith = ['html', 'json', 'xml', 'js', 'txt'];

  this.index = function (req, resp, params) {
    var self = this;

    geddy.model.CategoriaProfile.all(function(err, categoriaProfiles) {
      if (err) {
        throw err;
      }
      self.respondWith(categoriaProfiles, {type:'CategoriaProfile'});
    });
  };

  this.add = function (req, resp, params) {
    this.respond({params: params});
  };

  this.create = function (req, resp, params) {
    var self = this
      , categoriaProfile = geddy.model.CategoriaProfile.create(params);

    if (!categoriaProfile.isValid()) {
      this.respondWith(categoriaProfile);
    }
    else {
      categoriaProfile.save(function(err, data) {
        if (err) {
          throw err;
        }
        self.respondWith(categoriaProfile, {status: err});
      });
    }
  };

  this.show = function (req, resp, params) {
    var self = this;

    geddy.model.CategoriaProfile.first(params.id, function(err, categoriaProfile) {
      if (err) {
        throw err;
      }
      if (!categoriaProfile) {
        throw new geddy.errors.NotFoundError();
      }
      else {
        self.respondWith(categoriaProfile);
      }
    });
  };

  this.edit = function (req, resp, params) {
    var self = this;

    geddy.model.CategoriaProfile.first(params.id, function(err, categoriaProfile) {
      if (err) {
        throw err;
      }
      if (!categoriaProfile) {
        throw new geddy.errors.BadRequestError();
      }
      else {
        self.respondWith(categoriaProfile);
      }
    });
  };

  this.update = function (req, resp, params) {
    var self = this;

    geddy.model.CategoriaProfile.first(params.id, function(err, categoriaProfile) {
      if (err) {
        throw err;
      }
      categoriaProfile.updateProperties(params);

      if (!categoriaProfile.isValid()) {
        self.respondWith(categoriaProfile);
      }
      else {
        categoriaProfile.save(function(err, data) {
          if (err) {
            throw err;
          }
          self.respondWith(categoriaProfile, {status: err});
        });
      }
    });
  };

  this.remove = function (req, resp, params) {
    var self = this;

    geddy.model.CategoriaProfile.first(params.id, function(err, categoriaProfile) {
      if (err) {
        throw err;
      }
      if (!categoriaProfile) {
        throw new geddy.errors.BadRequestError();
      }
      else {
        geddy.model.CategoriaProfile.remove(params.id, function(err) {
          if (err) {
            throw err;
          }
          self.respondWith(categoriaProfile);
        });
      }
    });
  };

};

exports.CategoriaProfiles = CategoriaProfiles;
