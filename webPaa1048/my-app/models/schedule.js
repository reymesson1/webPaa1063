var mongoose = require('mongoose');

module.exports = mongoose.model('schedule',{    
  name: String,
  start: String,
  error: String
})