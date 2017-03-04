var mongoose = require('mongoose');
var Schema = mongoose.Schema;

module.exports = mongoose.model('User', new Schema({
  name: {type: String, required: true},
  code: {type: String, required: true},
  shortName: String,
  crest: String
}));
