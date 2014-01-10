var ProfesionalTimeTables = function () {
  this.respondsWith = ['html', 'json', 'xml', 'js', 'txt'];

  this.index = function (req, resp, params) {
    var self = this;

    geddy.model.ProfesionalTimeTable.all(function(err, profesionalTimeTables) {
      if (err) {
        throw err;
      }
      self.respondWith(profesionalTimeTables, {type:'ProfesionalTimeTable'});
    });
  };

  this.add = function (req, resp, params) {
    this.respond({params: params});
  };

  this.create = function (req, resp, params) {
    var self = this
      , profesionalTimeTable = geddy.model.ProfesionalTimeTable.create(params);

    if (!profesionalTimeTable.isValid()) {
      this.respondWith(profesionalTimeTable);
    }
    else {
      profesionalTimeTable.save(function(err, data) {
        if (err) {
          throw err;
        }
        self.respondWith(profesionalTimeTable, {status: err});
      });
    }
  };

  this.show = function (req, resp, params) {
    var self = this;

    geddy.model.ProfesionalTimeTable.first(params.id, function(err, profesionalTimeTable) {
      if (err) {
        throw err;
      }
      if (!profesionalTimeTable) {
        throw new geddy.errors.NotFoundError();
      }
      else {
        self.respondWith(profesionalTimeTable);
      }
    });
  };

  this.edit = function (req, resp, params) {
    var self = this;

    geddy.model.ProfesionalTimeTable.first(params.id, function(err, profesionalTimeTable) {
      if (err) {
        throw err;
      }
      if (!profesionalTimeTable) {
        throw new geddy.errors.BadRequestError();
      }
      else {
        self.respondWith(profesionalTimeTable);
      }
    });
  };

  this.update = function (req, resp, params) {
    var self = this;

    geddy.model.ProfesionalTimeTable.first(params.id, function(err, profesionalTimeTable) {
      if (err) {
        throw err;
      }
      profesionalTimeTable.updateProperties(params);

      if (!profesionalTimeTable.isValid()) {
        self.respondWith(profesionalTimeTable);
      }
      else {
        profesionalTimeTable.save(function(err, data) {
          if (err) {
            throw err;
          }
          self.respondWith(profesionalTimeTable, {status: err});
        });
      }
    });
  };

  this.remove = function (req, resp, params) {
    var self = this;

    geddy.model.ProfesionalTimeTable.first(params.id, function(err, profesionalTimeTable) {
      if (err) {
        throw err;
      }
      if (!profesionalTimeTable) {
        throw new geddy.errors.BadRequestError();
      }
      else {
        geddy.model.ProfesionalTimeTable.remove(params.id, function(err) {
          if (err) {
            throw err;
          }
          self.respondWith(profesionalTimeTable);
        });
      }
    });
  };

};

exports.ProfesionalTimeTables = ProfesionalTimeTables;
