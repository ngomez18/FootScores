var mongoose = require('mongoose');
var Schema = mongoose.Schema;

module.exports = mongoose.model('Competition', new Schema({
  id: {type: Number, required: true},
  league: {type: String, required: true},
  name: {type: String, required: true},
  logo: String
}));
