var DB = require("../models").models;

var artistCreate = function() {
	return DB.Artist.create({
    name: 'Not right yet',
    photoUrl: 'www.zombo.com',
    nationality: 'Zombie',
    instrument: 'Brains',
    home_address: 'Atlanta'
  });
};

// var managerCreate = function() {
// 	return DB.Manager.create({
//     name: 'Mr. Man',
//     email: 'mrman@gmgmgm.com',
//     office_number: '111222333',
//     cell_phone_number: '44444444'
// });
// };

// managerCreate (); 
artistCreate () 
.then(function() {
	process.exit();

});