var user = require('../models/user');

module.exports = {
  index: function(req, res){
    user.find({}, function (err, data){
      res.json(data);
      console.log(data);
    })
  }
}