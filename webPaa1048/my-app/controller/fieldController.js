var mongoose = require('mongoose');
var Schedule = require('../models/schedule.js');
var Master = require('../models/master.js');
var User = require('../models/user.js');
var Field = require('../models/field.js');

exports.getField = async(req,res)=>{ 
  var fields = await Field.find({})
  res.send(fields);
}
exports.setField = async(req,res)=>{ 

  var postData = req.body        
  var field = new Field(postData);
  field.save((err, result)=>{
      if(err){
          console.error('Saving Post Error');
          return res.status(500).send({message: 'Saving Post Causing an error'});
      }
    })
    res.send(postData);
}
exports.setFieldRemove = async(req,res)=>{ 
  var postData = req.body 
  const ObjectId = mongoose.Types.ObjectId;    
  var _id = new ObjectId(req.body._id);
  var field = await Field.findOne({"_id":_id},function(err,field){
    if(!err){
      field.remove(function(err){
        
      })
    }
  });
  res.send(postData);
}
exports.setFieldEdit = async(req,res)=>{ 
  var postData = req.body 
  
  const ObjectId = mongoose.Types.ObjectId;    

  var _id = new ObjectId(req.body._id);

  var field = await Field.findOne({"_id":_id},function(err,field){
    if(!err){
      field.description = req.body.description
      field.value = req.body.value
      field.category = req.body.category
      field.field = req.body.field
      field.save(function(err){
        
      })
    }
  });

  res.send(postData);

}