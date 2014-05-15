var mongoose = require('mongoose');
var user = require('../app/models/user');

module.exports = {
  check: function() {
    user.find({}, function(err, users) {
      if (users.length === 0) {
        console.log('no users found, seeding...');
        var newUser = new user({
            email: 'matthew.j.oconnell1@gmail.com'
        });
        newUser.save(function(err, user) {
          console.log('successfully inserted user: ' + user._id);
        });
      } else {
        console.log('found ' + users.length + ' existing users!');
      }
    });
  }
};