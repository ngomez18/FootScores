var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var Competition = mongoose.model('Competition', new Schema({
  id: {type: Number, unique: true, required: true},
  league: {type: String, unique: true, required: true},
  name: {type: String, required: true},
  logo: String
}));

module.exports = Competition;

// Find all users
module.exports.getCompetitions = function(callback) {
  return Competition.find(callback);
};

// Find the user with the given username
module.exports.getCompetition = function(league, callback) {
  return Competition.find({league: league}, callback);
};

// Save a given competition to the database
module.exports.saveCompetition = function(comp, callback) {
  Competition.create(comp, callback)
};
