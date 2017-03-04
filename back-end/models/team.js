var mongoose = require('mongoose');
var Schema = mongoose.Schema;

module.exports = mongoose.model('Team', new Schema({
  name: {type: String, required: true},
  code: {type: String, required: true},
  shortName: String,
  crest: String
}));
