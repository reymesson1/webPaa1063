var mongoose = require('mongoose');
var Schedule = require('../models/schedule.js');

exports.schedule = async(req,res)=>{
    var schedule = await Schedule.find({})
    res.send(schedule)  
}

exports.editschedule = async(req,res)=>{
    const ObjectId = mongoose.Types.ObjectId;    
    var _id = new ObjectId(req.body._id);    
    var schedule = await Schedule.findOne({"_id":_id},function(err, sch){        
        if(!err){
            sch.start = req.body.start
            sch.save(function(){
                console.log('updated schedule', sch);
                res.send(sch);
            })
        }
    })     
}