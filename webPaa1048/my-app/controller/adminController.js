var mongoose = require('mongoose');
var Schedule = require('../models/schedule.js');
var Master = require('../models/master.js');
var User = require('../models/user.js');
var jwt = require('jwt-simple');

exports.getUser = async(req,res)=>{
  var decode = jwt.decode(req.params.id,'123');
  var author = decode.sub
  const ObjectId = mongoose.Types.ObjectId;    
  var user = await User.find({"_id":ObjectId(author)})    
  res.send(user[0]);  
}


exports.setUser = async(req,res)=>{
  
  var decode = jwt.decode(req.body.token,'123');
  var userObj = this;
  userObj = {"author":decode.sub,"password":req.body.password,"language":req.body.language}; 
  
  const ObjectId = mongoose.Types.ObjectId;        
  var user = await User.findOne({"_id":ObjectId(userObj.author)},function(err,users){
    
    if(!err){
      users.language = userObj.language
      bcrypt.hash(userObj.password, null, null, (err, hash)=>{                   
        users.password = hash;          
      })
      users.save()
    }
  })    
  
}
    
exports.getLogin = async(req,res)=>{
  
  var userData = req.body;
  var user = await User.findOne({username: userData.username});
  
  if(!user){
    return res.status(401).send({message: 'Email or Password Invalid'})
  }
  
  bcrypt.compare(userData.password, user.password, (err, isMatch) =>{
    if(!isMatch){
      return res.status(401).send({message: 'Email or Password Invalid'})
    }
    
    var payload = { sub: user._id, expiresIn: 1 }
    
    var token = jwt.encode(payload, '123',)
    
    res.status(200).send({token})
  })
}

exports.register = async(req,res)=>{

  var userData = req.body;
  
    var user = new User(userData);
  
    bcrypt.hash(userData.password, null, null, (err, hash)=>{                   
      user.password = hash;          
    })
  
    user.save((err, newUser) =>{
      if(!err){
        console.log('User registed');
      }
    })
}