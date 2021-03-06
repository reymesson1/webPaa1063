var mongoose = require('mongoose');

module.exports = mongoose.model('master',{    
  category: String,
  date: String,
  description: String,
  location: String,    
  nameImage: Array,
  pathImage: Array,  
  place: String,
  title: String,
  header: String,
  fullname: String,
  status: Boolean,
  order: Number,
  author: {type: mongoose.Schema.Types.ObjectId, ref: 'User'}
})