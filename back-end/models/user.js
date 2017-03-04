var mongoose = require('mongoose');
var Schema = mongoose.Schema;

module.exports = mongoose.model('User', new Schema({
  username: String,
  password: String,
  admin: Boolean,
  email: String,
  name: String,
  score: Number,
  guesses: [{
    match: Number,
    homeTeamScore: Number,
    awayTeamScore: Number
  }]
}));
