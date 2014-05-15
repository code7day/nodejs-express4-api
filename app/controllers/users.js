var User = require('../models/user');

module.exports = {
  index: function(req, res){
    User.find({}, function (err, data){
      res.json(data);
    });
  },
  newUser: function(req, res){
    var params = req.body
    var newUser = new User
    newUser.email = params.email
    newUser.save(function(err){
      if(err){
        console.log(err);
      }
    });
    return res.send(newUser);
  }
}