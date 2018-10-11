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
    
    var masterData;
    var fs = require('fs'),
    path = require('path'),    
    filePath = path.join(__dirname, '../../../../control/app.js');

    fs.readFile(filePath, {encoding: 'utf-8'}, function(err,data){
        if (!err) {
            masterData=data
        } else {
            console.log(err);
        }
    });

    var fs = require('fs');
    fs.writeFile(filePath, masterData, function(err) {
        if(err) {
            return console.log(err);
        }

        console.log("The file was saved!");
    }); 

}