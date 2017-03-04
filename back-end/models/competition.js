var mongoose = require('mongoose');
var Schema = mongoose.Schema;

module.exports = mongoose.model('Competition', new Schema({
  id: Number,
  league: String,
  name: String,
  logo: String
}));
