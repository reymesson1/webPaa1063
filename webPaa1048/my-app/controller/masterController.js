var mongoose = require('mongoose');
var Schedule = require('../models/schedule.js');
var Master = require('../models/master.js');
var jwt = require('jwt-simple');

exports.getMaster = async(req,res)=>{

  var master = await Master.find({})
  
  res.send(master);
}
exports.setMaster = async(req,res)=>{

  var masterData = req.body   
  
  var decode = jwt.decode(req.body.token,'123')
  masterData.author = decode.sub  
  var master = new Master(masterData)  
  master.save((err, result)=>{
    if(!err){
      console.log('Saved!', result)
      res.send(result)
    }    
  })

}

exports.setMasterPicture = async(req,res)=>{
  
  var master = await Master.findOne(
    {"_id":req.body._id},
    function(err,master){
      if(!err){
        master.nameImage.push(req.body.nameImage);
        master.pathImage.push('./src/assets/'+master.fullname+'/'+req.body.nameImage);
        master.save()        
      }      
    }
  )
  
  var fs = require('fs');    
  var string = req.body.url
  var nameImage = req.body.nameImage    
  var regex = /^data:.+\/(.+);base64,(.*)$/;
  
  var matches = string.match(regex);
  var ext = matches[1];
  var data = matches[2];
  var buffer = new Buffer(data, 'base64');
  var dir = './src/assets/'+master.fullname+'/';
  if (!fs.existsSync(dir)){
    fs.mkdirSync(dir);
  }
  fs.writeFileSync('./src/assets/'+master.fullname+'/'+nameImage, buffer); 
  
  res.send(master);
  
  
  
}

exports.setMasterStatus = async(req,res)=>{
  
  var master = Master.findOne({"_id":req.body._id},function(err,master){
    master.status = req.body.status
    master.save()
  })  
}

exports.setMasterEdit = async(req,res)=>{
  
  var master = Master.findOne({"_id":req.body._id},function(err,master){
    master.fullname = req.body.fullname
    master.title = req.body.title
    master.description = req.body.description
    master.category = req.body.category
    master.order = req.body.order
    master.sequence = req.body.sequence
    master.price = req.body.price
    master.save()    
  })  
  
  
}

exports.setMasterRemove = async(req,res)=>{
  const ObjectId = mongoose.Types.ObjectId;      
  var _id = new ObjectId(req.body._id);

  var master = await Master.findOne({"_id":_id},function(err,field){
    if(!err){
      field.remove(function(err){
        
      })
    }
  });

  res.send(master);
}