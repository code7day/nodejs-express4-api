var mongoose = require('mongoose'),
    Schema = mongoose.Schema,
    ObjectId = Schema.ObjectId;

var UserSchema = new Schema({
  email: String
});

UserSchema.path('email').validate(function(email){
  var emailRegex = /^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/;
  return emailRegex.test(email.text);
}, 'The e-mail field cannot be empty.');

module.exports = {
  User: mongoose.model('User', UserSchema)
}