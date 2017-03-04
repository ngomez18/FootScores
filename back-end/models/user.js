var mongoose = require('mongoose');
var Schema = mongoose.Schema;

module.exports = mongoose.model('User', new Schema({
  username: {type: String, required: true},
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
