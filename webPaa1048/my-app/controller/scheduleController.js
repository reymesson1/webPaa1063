var mongoose = require('mongoose');
var Schedule = require('../models/schedule.js');
exports.schedule = async(req,res)=>{
    var schedule = await Schedule.find({})    
    res.send(schedule)  
}
exports.addschedule = async(req,res)=>{    
    var schedule = new Schedule(req.body)    
    schedule.save(function(err){
        if(!err){
            console.log('Saved')
        }
    })    
    res.send(schedule)  
}
exports.removeschedule = async(req,res)=>{
    const ObjectId = mongoose.Types.ObjectId;      
    var _id = new ObjectId(req.body._id);
    var schedule = await Schedule.findOne({"_id":_id},function(err,sch){
        if(!err){
            sch.remove(function(){
                console.log('Schedule removed')
            });
        }
    }); 
    res.send(schedule);
}
exports.editschedule = async(req,res)=>{
    const ObjectId = mongoose.Types.ObjectId;    
    var _id = new ObjectId(req.body._id);    
    var schedule = await Schedule.findOne({"_id":_id},function(err, sch){        
        if(!err){
            sch.start = req.body.start
            sch.name = req.body.name
            sch.alias = req.body.alias
            sch.save(function(){
                console.log('updated schedule', sch);
                res.send(sch);
            })
        }
    })  
    
    var masterData;
    setTimeout(() => {            
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
    }, 1000);
    
    setTimeout(() => {
    
        var fs = require('fs');
        path = require('path'),
        filePath = path.join(__dirname, '../../../../control/app.js');
        fs.writeFile(filePath, masterData, function(err) {
            if(err) {
                return console.log(err);
            }

            console.log("The file was saved!");
        }); 

    }, 2000);


}

exports.resetschedule = async(req,res)=>{
    console.log('reset')
    var schedule = await Schedule.update({},{"$set":{"start":0}},{multi:true})
    res.send("updated!")  
}

exports.resetschedulewithvalue = async(req,res)=>{
    console.log('reset')

    var schedule = await Schedule.findOne({"name":"bachfile"},function(err,sch){
        if(!err){
            sch.start = "10";
            sch.save()
        }
    })
    var schedule2 = await Schedule.findOne({"name":"bachfile1"},function(err,schedule){
        if(!err){
            schedule.start = "5";
            schedule.save(function(err,schedule){
                console.log('updated schedule',schedule)
            })
        }
    })
    var schedule3 = await Schedule.findOne({"name":"bachfile2"},function(err,schedule){
        if(!err){
            schedule.start = "20";
            schedule.save(function(err,schedule){
                console.log('updated schedule',schedule)
            })
        }
    })
    var schedule4 = await Schedule.findOne({"name":"bachfile3"},function(err,schedule){
        if(!err){
            schedule.start = "15";
            schedule.save(function(err,schedule){
                console.log('updated schedule',schedule)
            })
        }
    })
    var schedule5 = await Schedule.findOne({"name":"bachfile4"},function(err,schedule){
        if(!err){
            schedule.start = "30";
            schedule.save(function(err,schedule){
                console.log('updated schedule',schedule)
            })
        }
    })
    var schedule6 = await Schedule.findOne({"name":"bachfile5"},function(err,schedule){
        if(!err){
            schedule.start = "25";
            schedule.save(function(err,schedule){
                console.log('updated schedule',schedule)
            })
        }
    })
    var schedule7 = await Schedule.findOne({"name":"bachfile6"},function(err,schedule){
        if(!err){
            schedule.start = "40";
            schedule.save(function(err,schedule){
                console.log('updated schedule',schedule)
            })
        }
    })
    var schedule8 = await Schedule.findOne({"name":"bachfile7"},function(err,schedule){
        if(!err){
            schedule.start = "35"
            schedule.save(function(err,schedule){
                console.log('updated schedule',schedule)
            })
        }
    })
    var schedule9 = await Schedule.findOne({"name":"bachfile8"},function(err,schedule){
        if(!err){
            schedule.start = "50";
            schedule.save(function(err,schedule){
                console.log('updated schedule',schedule)
            })
        }
    })
    var schedule10 = await Schedule.findOne({"name":"bachfile9"},function(err,schedule){
        if(!err){
            schedule.start = "45";
            schedule.save(function(err,schedule){
                console.log('updated schedule',schedule)
            })
        }
    })

    var schedule11 = await Schedule.findOne({"name":"bachfile10"},function(err,schedule){
        if(!err){
            schedule.start = "59";
            schedule.save(function(err,schedule){
                console.log('updated schedule',schedule)
            })
        }
    })
    var schedule12 = await Schedule.findOne({"name":"bachfile11"},function(err,schedule){
        if(!err){
            schedule.start = "55";
            schedule.save(function(err,schedule){
                console.log('updated schedule',schedule)
            })
        }
    })

    res.send("updated!")  
}


exports.resetnowschedule = async(req,res)=>{
    var nextDay = new Date();
    var schedule = await Schedule.findOne(req.body,function(err,schedule){
        if(!err){
            schedule.start = nextDay.getMinutes()+1;
            schedule.save()
        }
    })  
    var masterData;
    setTimeout(() => {            
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
    }, 1000);
    
    setTimeout(() => {
    
        var fs = require('fs');
        path = require('path'),
        filePath = path.join(__dirname, '../../../../control/app.js');
        fs.writeFile(filePath, masterData, function(err) {
            if(err) {
                return console.log(err);
            }

            console.log("The file was saved!");
        }); 

    }, 2000);
}