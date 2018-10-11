var Activity = require('../models/activity.js');

exports.activity = async(req,res)=>{
    var activity = await Activity.find({})
    res.send(activity)  
}