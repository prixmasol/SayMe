var ActividadProfiles = function () {
  this.respondsWith = ['html', 'json', 'xml', 'js', 'txt'];

  this.index = function (req, resp, params) {
    var self = this;

    var config = {
          sort : { 
          actNombre : 'asc',  
          id : 'asc',  
          actDescripcion : 'asc',  
          actACTID : 'asc',  
          actTipo : 'asc',  
          actEstado : 'asc', 
          }
      };
    var sort = (params.sortBy) ? JSON.parse(params.sortBy) : config.sort;
    var query = (params.query) ? JSON.parse(params.query) : null;
    var pageLimit = geddy.config.pagelimit;
    var currentPage = params.currentPage || 0;
    var skip = currentPage == 1 ? 0 : (currentPage * pageLimit);
      
    geddy.model.ActividadProfile.all(query, {nocase:true , sort: sort, limit: pageLimit, skip: skip },function(err, actividadProfiles) {
      if (err) {
        throw err;
      }
      params.recordCoutn = actividadProfiles.length;
      params.totalPages = Math.round(actividadProfiles.length / pageLimit);
      
      self.respond({params: params,actividadProfiles:actividadProfiles, config: config});
    });
  };

  this.add = function (req, resp, params) {
    this.respond({params: params});
  };

  this.create = function (req, resp, params) {
    var self = this
      , actividadProfile = geddy.model.ActividadProfile.create(params);

    if (!actividadProfile.isValid()) {
      this.respondWith(actividadProfile);
    }
    else {
      actividadProfile.save(function(err, data) {
        if (err) {
          throw err;
        }
        self.respondWith(actividadProfile, {status: err});
      });
    }
  };

  this.show = function (req, resp, params) {
    var self = this;

    geddy.model.ActividadProfile.first(params.id, function(err, actividadProfile) {
      if (err) {
        throw err;
      }
      if (!actividadProfile) {
        throw new geddy.errors.NotFoundError();
      }
      else {
        self.respondWith(actividadProfile);
      }
    });
  };

  this.edit = function (req, resp, params) {
    var self = this;

    geddy.model.ActividadProfile.first(params.id, function(err, actividadProfile) {
      if (err) {
        throw err;
      }
      if (!actividadProfile) {
        throw new geddy.errors.BadRequestError();
      }
      else {
        self.respondWith(actividadProfile);
      }
    });
  };

  this.update = function (req, resp, params) {
    var self = this;

    geddy.model.ActividadProfile.first(params.id, function(err, actividadProfile) {
      if (err) {
        throw err;
      }
      actividadProfile.updateProperties(params);

      if (!actividadProfile.isValid()) {
        self.respondWith(actividadProfile);
      }
      else {
        actividadProfile.save(function(err, data) {
          if (err) {
            throw err;
          }
          self.respondWith(actividadProfile, {status: err});
        });
      }
    });
  };

  this.remove = function (req, resp, params) {
    var self = this;

    geddy.model.ActividadProfile.first(params.id, function(err, actividadProfile) {
      if (err) {
        throw err;
      }
      if (!actividadProfile) {
        throw new geddy.errors.BadRequestError();
      }
      else {
        geddy.model.ActividadProfile.remove(params.id, function(err) {
          if (err) {
            throw err;
          }
          self.respondWith(actividadProfile);
        });
      }
    });
  };

};

exports.ActividadProfiles = ActividadProfiles;
