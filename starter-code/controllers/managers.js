var db = require('../models');
var Manager = db.models.Manager;

function index(req, res) {
	Manager.findAll().then(function(managers) {
		res.json(managers);
	});
}

function show(req, res) {
  Manager.findById(req.params.id)
  .then(function(manager){
    if(!manager) return error(res, "not found");

    res.json(manager);
  });	
}

module.exports.index = index;
module.exports.show = show;