var mongoose = require('mongoose');
var Schema = mongoose.Schema;

module.exports = mongoose.model('User', new Schema({
  name: String,
  code: String,
  shortName: String,
  crest: String
}));
