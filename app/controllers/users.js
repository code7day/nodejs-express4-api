var model = require('../models/user');

module.exports = {
  index: function(req, res){
    model.User.find({}, function (err, data){
      res.json(data);
    })
  }
}