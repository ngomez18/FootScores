var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var bcrypt = require('bcrypt');
var SALT_WORK_FACTOR = 10;

var User = mongoose.model('User', new Schema({
  username: {type: String, unique: true, required: true},
  password: {type: String, required: true},
  admin: {type: Boolean, required: true},
  email: {type: String, required: true},
  name: String,
  score: {type: Number, required: true},
  guesses: [{
    match: Number,
    homeTeamScore: Number,
    awayTeamScore: Number
  }]
}));

module.exports = User;

// Find all users
module.exports.getUsers = function(callback) {
  return User.find(callback);
};

// Find the user with the given username
module.exports.getUser = function(username, callback) {
  return User.find({username: username}, callback);
};

// Save a given user to the database
module.exports.saveUser = function(user, callback) {
  User.create(user, callback)
};

// Update the personal information of a user
module.exports.updateUser = function(username, user, options, callback) {
  var query = {username: username};
  var update = {
    password: user.password,
    email: user.email,
    name: user.name
  };
  User.findOneAndUpdate(query, update, options, callback);
};

// Modify a users score by a given amount
module.exports.updateScore = function(username, scoreChange, options, callback) {
  module.exports.getUser(username, function(err, result) {
    if(err) {
      throw err
    }
    if(result.isEmpty) {
      return;
    }
    var update = {score: result[0].score + scoreChange};
    var query = {username: result[0].username};
    User.findOneAndUpdate(query, update, options, callback);
  });
};
