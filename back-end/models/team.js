var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var Team = mongoose.model('Team', new Schema({
  name: {type: String, required: true},
  code: {type: String, required: true},
  shortName: String,
  crest: String
}));

module.exports = Team;

// Find all teams
module.exports.getTeams = function(callback) {
  return Team.find(callback);
};

// Find the team with the given code
module.exports.getTeam = function(_id, callback) {
  return Team.find({_id: _id}, callback);
};

// Save a given team to the database
module.exports.saveTeam = function(_id, callback) {
  Team.create(_id, callback)
};

// Update the information of the given team
module.exports.updateTeam = function(_id, team, options, callback) {
  var query = {_id: _id};
  var update = {
    name: team.name,
    code: team.code,
    shortName: team.shortName,
    crest: team.crest
  };
  Team.findOneAndUpdate(query, update, options, callback);
};
