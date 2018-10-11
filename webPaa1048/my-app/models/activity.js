var mongoose = require('mongoose');

module.exports = mongoose.model('activity',{    
  name: String,
  date: Date,
  lastRun: String
})