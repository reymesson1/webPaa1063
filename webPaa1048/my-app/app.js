var express = require('express');
var cors = require('cors');
var bodyParser = require('body-parser');
var bcrypt = require('bcrypt-nodejs');
var jwt = require('jwt-simple');
var app = express();
var mongoose = require('mongoose');
var fs = require('fs');
app.use(express.static('./dist/my-app'));
app.use(bodyParser.json({limit: '50mb', type: 'application/json'}));
app.use(cors());
app.options('*', cors());
var User = require('./models/user.js');
var Field = require('./models/field.js');
var Master = require('./models/master.js');
var Keyword = require('./models/keyword.js');
var activityController = require('./controller/acvitiyController');
var scheduleController = require('./controller/scheduleController');
var masterController = require('./controller/masterController');
var adminController = require('./controller/adminController');
var fieldController = require('./controller/fieldController');
var keywordController = require('./controller/keywordController'); 
app.get('/master', masterController.getMaster)
app.post('/master', masterController.setMaster)
app.post('/masterpicture', masterController.setMasterPicture)
app.post('/masterstatus', masterController.setMasterStatus) 
app.post('/masteredit', masterController.setMasterEdit) 
app.post('/masterremove', masterController.setMasterRemove) 
app.get('/userdata/:id', adminController.getUser)
app.post('/userdata', adminController.setUser)
app.post('/login', adminController.getLogin)  
app.post('/register', adminController.register)
app.get('/fields',  fieldController.getField)
app.post('/field', fieldController.setField)
app.post('/removefield',  fieldController.setFieldRemove)
app.post('/updatefield',  fieldController.setFieldEdit)
app.post('/addwordlist', keywordController.addKeyword)
app.get('/wordlist', keywordController.getKeyword)  
app.post('/removewordlist', keywordController.setKeywordRemove)
app.post('/updatewordlist', keywordController.setKeywordEdit)
app.get('/activities', activityController.activity)
app.get('/schedules', scheduleController.schedule)
app.post('/addschedules', scheduleController.addschedule)
app.post('/editschedules', scheduleController.editschedule)
app.post('/removeschedules', scheduleController.removeschedule)
app.get('/resetschedules', scheduleController.resetschedule)
app.get('/resetscheduleswithvalue', scheduleController.resetschedulewithvalue)
app.post('/resetnowschedules', scheduleController.resetnowschedule)
app.post('/runscript',async(req,res)=>{
  Master.find({},(err,master)=>{
    master.map(m=>{      
      m.header = m.header + " " + req.body.title
      m.save(function(err,mast){
        console.log('saved');
      })
    })    
  })
  res.send('Test')
})
mongoose.connect('mongodb://localhost:27017/project2',(err)=>{
  if(!err){
      console.log('Connected to mongo Database');
  }
})
app.listen(4201, function(){
  console.log("Listening from 4201...");
});