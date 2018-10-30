var User = require('../models/user.js');
var Field = require('../models/field.js');
var Master = require('../models/master.js');
var Keyword = require('../models/keyword.js');

exports.addKeyword = async(req,res)=>{ 
  
  var keyword = new Keyword(req.body)  
  keyword.save(function(err){
    if(!err){
      console.log('Saved!');
    }
  })  
  res.send(req.body);
}
exports.getKeyword = async(req,res)=>{ 
  var keyword = await Keyword.find({})
  res.send(keyword)
}
exports.setKeywordRemove = async(req,res)=>{ 
  const ObjectId = mongoose.Types.ObjectId;  
  var _id = new ObjectId(req.body._id);  
  var keyword = await Keyword.remove({"_id":_id},function(err){
    if(!err){
      console.log('Removed!');
    }
  })
}
exports.setKeywordEdit = async(req,res)=>{ 

}