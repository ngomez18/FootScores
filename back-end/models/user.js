var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var bcrypt = require('bcrypt');
var SALT_WORK_FACTOR = 10;

var userSchema = new Schema({
  username: {type: String, unique: true, required: true},
  password: {type: String, required: true},
  admin: {type: Boolean, default: false, required: true},
  email: {type: String, required: true},
  name: String,
  score: {type: Number, default: 0, required: true},
  guesses: [{
    date: Date,
    homeTeam: String,
    awayTeam: String,
    homeTeamScore: Number,
    awayTeamScore: Number
  }]
});

userSchema.methods.correctPassword = function(pass) {
  return this.password == pass;
};

userSchema.methods.findGuess = function(homeTeam, awayTeam) {
  for (var i = 0; i < this.guesses.length; i++) {
    if(this.guesses[i].homeTeam == homeTeam && this.guesses[i].awayTeam == awayTeam) {
      return this.guesses[i];
    }
  }
};

var User = mongoose.model('User', userSchema);

module.exports = User;

// Find all users
module.exports.getUsers = function(callback) {
  return User.find(callback);
};

// Find all users sorted decreasingly by points
module.exports.getLeaderboard = function(callback) {
  return User.find(callback).sort({score:-1});
};

// Find the user with the given username
module.exports.getUser = function(username, callback) {
  return User.find({username: username}, callback);
};

// Find the users who have a guess for a certain match
module.exports.getUserByGuess = function(homeTeam, awayTeam, callback) {
  var query = {
    'guesses.homeTeam': homeTeam,
    'guesses.awayTeam': awayTeam
  };
  return User.find(query, callback);
}

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

// Add a guess to the user
module.exports.addGuess = function(username, guess, options, callback) {
  module.exports.getUser(username, function(err, result) {
    if(err) {
      throw err;
    }
    if(result.isEmpty) {
      return;
    }
    var guesses = result[0].guesses;
    var query = {username: result[0].username};
    guesses.push(guess);
    var update = {guesses: guesses};
    User.findOneAndUpdate(query, update, options, callback);
  })
};

// Remove a guess from the user
module.exports.removeGuess = function(username, guess, options, callback) {
  module.exports.getUser(username, function(err, result) {
    if(err) {
      throw err;
    }
    if(result.isEmpty) {
      return;
    }
    var guesses = result[0].guesses;
    var index = -1;
    for(var i=0; i<guesses.length; i++) {
      if(guesses[i].date.getTime() == new Date(guess.date).getTime() &&
        guesses[i].homeTeam == guess.homeTeam &&
        guesses[i].awayTeam == guess.awayTeam) {
        index = i;
        break;
      }
    }
    if(index>-1) {
      guesses.splice(index, 1);
    }
    var query = {username: username};
    var update = {guesses: guesses};
    User.findOneAndUpdate(query, update, options, callback);
  })
};

// Remove all guesses from a user
module.exports.removeGuesses = function(username, options, callback) {
  module.exports.getUser(username, function(err, result) {
    if(err) {
      throw err;
    }
    if(result.isEmpty) {
      return;
    }
    var query = {username: username};
    var update = {guesses: []};
    User.findOneAndUpdate(query, update, options, callback);
  })
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
    var query = {username: result[0].username};
    var update = {score: result[0].score + scoreChange};
    User.findOneAndUpdate(query, update, options, callback);
  });
};
