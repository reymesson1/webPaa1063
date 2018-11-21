var mongoose = require('mongoose');
var webdriver = require('selenium-webdriver');
var express = require('express');
var app = express();

var Post = require('./models/post.js');
var Master = require('./models/master.js');
var kw = require('./models/keyword.js');

var abc = "abcdefghijklmnopqrstuvwxyz"

// var CronJob = require('cron').CronJob;
//  new CronJob('0 40 * * * *', function() {
//    console.log('You will see this message every second');

   setTimeout(async() => {

      var master = await Master.findOne({"sequence":0})
      dataMaster["title"] = master.title
      dataMaster["description"] = master.description
      dataMaster["order"] = master.order
  }, 2000);

   setTimeout(async() => {

  var kws = await kw.findOne({"order":dataMaster.order});

  console.log(kws.name);

  var master = Master.findOne({"sequence":0},function(err,master){
    if(!err){

      var titleText = new Date().getTime()

      master.header = master.title + " " + abc[titleText.toString().substring(7,8)] + abc[titleText.toString().substring(8,9)] + abc[titleText.toString().substring(9,10)] + abc[titleText.toString().substring(10,11)] 
      //master.header = master.title + " " + new Date().getTime()
      //master.header = master.title 
      master.order = master.order + 1
      master.save();
    }
  })

  /*
  var master = Master.findOne({"sequence":1},function(err,master){
    if(!err){

      var titleText = new Date().getTime()
      //master.header = master.title + " " + kws.name + " " + " #" + titleText + " " + abc[titleText.toString().substring(7,8)] + abc[titleText.toString().substring(8,9)] + abc[titleText.toString().substring(9,10)] + abc[titleText.toString().substring(10,11)] 

      master.header = master.title + " " + abc[titleText.toString().substring(7,8)] + abc[titleText.toString().substring(8,9)] + abc[titleText.toString().substring(9,10)] + abc[titleText.toString().substring(10,11)] 

      //master.header = master.title + " " + new Date().getTime()
      master.order = master.order + 1
      master.save();
    }
  })

  var master = Master.findOne({"sequence":2},function(err,master){
    if(!err){

      var titleText = new Date().getTime()
      //master.header = master.title + " " + kws.name + " " + " #" + titleText + " " + abc[titleText.toString().substring(7,8)] + abc[titleText.toString().substring(8,9)] + abc[titleText.toString().substring(9,10)] + abc[titleText.toString().substring(10,11)] 


      master.header = master.title + " " + abc[titleText.toString().substring(7,8)] + abc[titleText.toString().substring(8,9)] + abc[titleText.toString().substring(9,10)] + abc[titleText.toString().substring(10,11)] 
      //master.header = master.title + " " + new Date().getTime()
      master.order = master.order + 1
      master.save();
    }
  })

  var master = Master.findOne({"sequence":3},function(err,master){
    if(!err){

      var titleText = new Date().getTime()
      //master.header = master.title + " " + kws.name + " " + " #" + titleText + " " + abc[titleText.toString().substring(7,8)] + abc[titleText.toString().substring(8,9)] + abc[titleText.toString().substring(9,10)] + abc[titleText.toString().substring(10,11)] 

      master.header = master.title + " " + kws.name + " " +  " " + abc[titleText.toString().substring(7,8)] + abc[titleText.toString().substring(8,9)] + abc[titleText.toString().substring(9,10)] + abc[titleText.toString().substring(10,11)] 
      //master.header = master.title + " " + new Date().getTime()
      master.order = master.order + 1
      master.save();
    }
  })
  
  var master = Master.findOne({"sequence":4},function(err,master){
    if(!err){

      var titleText = new Date().getTime()
      //master.header = master.title + " " + kws.name + " " + " #" + titleText + " " + abc[titleText.toString().substring(7,8)] + abc[titleText.toString().substring(8,9)] + abc[titleText.toString().substring(9,10)] + abc[titleText.toString().substring(10,11)] 

      master.header = master.title + " " + kws.name + " " +  " " + abc[titleText.toString().substring(7,8)] + abc[titleText.toString().substring(8,9)] + abc[titleText.toString().substring(9,10)] + abc[titleText.toString().substring(10,11)] 

      //master.header = master.title + " " + new Date().getTime()
      master.order = master.order + 1
      master.save();
    }
  })

  var master = Master.findOne({"sequence":5},function(err,master){
    if(!err){

      var titleText = new Date().getTime()
      //master.header = master.title + " " + kws.name + " " + " #" + titleText + " " + abc[titleText.toString().substring(7,8)] + abc[titleText.toString().substring(8,9)] + abc[titleText.toString().substring(9,10)] + abc[titleText.toString().substring(10,11)] 

      master.header = master.title + " " + kws.name + " " +  " " + abc[titleText.toString().substring(7,8)] + abc[titleText.toString().substring(8,9)] + abc[titleText.toString().substring(9,10)] + abc[titleText.toString().substring(10,11)] 


     // master.header = master.title + " " + new Date().getTime()
      master.order = master.order + 1
      master.save();
    }
  })

  var master = Master.findOne({"sequence":6},function(err,master){
    if(!err){

      var titleText = new Date().getTime()
      //master.header = master.title + " " + kws.name + " " + " #" + titleText + " " + abc[titleText.toString().substring(7,8)] + abc[titleText.toString().substring(8,9)] + abc[titleText.toString().substring(9,10)] + abc[titleText.toString().substring(10,11)] 

      master.header = master.title + " " + kws.name + " " +  " " + abc[titleText.toString().substring(7,8)] + abc[titleText.toString().substring(8,9)] + abc[titleText.toString().substring(9,10)] + abc[titleText.toString().substring(10,11)] 


      //master.header = master.title + " " + new Date().getTime()
      master.order = master.order + 1
      master.save();
    }
  })

  var master = Master.findOne({"sequence":7},function(err,master){
    if(!err){

      var titleText = new Date().getTime()
      //master.header = master.title + " " + kws.name + " " + " #" + titleText + " " + abc[titleText.toString().substring(7,8)] + abc[titleText.toString().substring(8,9)] + abc[titleText.toString().substring(9,10)] + abc[titleText.toString().substring(10,11)] 


      master.header = master.title + " " + new Date().getTime()
      master.order = master.order + 1
      master.save();
    }
  })
  var master = Master.findOne({"sequence":8},function(err,master){
    if(!err){

      var titleText = new Date().getTime()
      //master.header = master.title + " " + kws.name + " " + " #" + titleText + " " + abc[titleText.toString().substring(7,8)] + abc[titleText.toString().substring(8,9)] + abc[titleText.toString().substring(9,10)] + abc[titleText.toString().substring(10,11)] 


      master.header = master.title + " " + new Date().getTime()
      master.order = master.order + 1
      master.save();
    }
  })
*/

   }, 6000);



var By = webdriver.By;

var driver = new webdriver.Builder().withCapabilities(webdriver.Capabilities.chrome()).build();

var promise = require('selenium-webdriver').promise;

var dataMaster = {}

driver.get('https://www.corotos.com.do/profile');

driver.findElement(By.id('pid_email')).sendKeys('reymesson@gmail.com')
driver.findElement(By.className('_2QhqT _3NHOV _3z-oQ _2El2O _7xPBo _2pXQq _3WoTQ gO5qu _2h31L _1Dh7N')).click()

driver.wait(webdriver.until.elementLocated(webdriver.By.id('otp-verification-code')),20000)
.then(()=>{
  setTimeout(async() => {
    console.log('esperar....')
    var posts = await Post.find({})
    console.log(posts[0].code);
    return driver.findElement(webdriver.By.id('otp-verification-code')).sendKeys(posts[0].code);
  }, 15000);
  
}).then((element)=>{
    setTimeout(async() => {      
      console.log('esperar2....')
      return driver.findElement(By.className('_2QhqT _3NHOV _3z-oQ _2El2O _7xPBo _2pXQq _3WoTQ gO5qu _2h31L _1Dh7N')).click()
    }, 20000);
    setTimeout(async() => {      
      console.log('esperar3....')
      var posts = Post.remove({},function(err){
        if(!err){console.log('removed!')}
      })

      return driver.get('https://www.corotos.com.do/profile')      
    }, 25000);
    setTimeout(async()=>{ 

      return driver.findElement(By.className("_2mkTO")).click() 

}, 100000)
setTimeout(async()=>{ 

      return driver.findElement(By.className("cOriw _1jhdI btn-default")).click() 

}, 104000)
setTimeout(async()=>{ 

      return driver.findElement(By.xpath('//div[@id="delete-ad-modal"]/div/div[3]/button')).click() 

}, 108000)
setTimeout(async()=>{ 

      return driver.navigate().refresh(); 

}, 112000)
setTimeout(async()=>{ 

      return driver.findElement(By.className("_2mkTO")).click() 

}, 116000)
setTimeout(async()=>{ 

      return driver.findElement(By.className("cOriw _1jhdI btn-default")).click() 

}, 120000)
setTimeout(async()=>{ 

      return driver.findElement(By.xpath('//div[@id="delete-ad-modal"]/div/div[3]/button')).click() 

}, 124000)
setTimeout(async()=>{ 

      return driver.navigate().refresh(); 

}, 128000)
setTimeout(async()=>{ 

      return driver.findElement(By.className("_2mkTO")).click() 

}, 132000)
setTimeout(async()=>{ 

      return driver.findElement(By.className("cOriw _1jhdI btn-default")).click() 

}, 136000)
setTimeout(async()=>{ 

      return driver.findElement(By.xpath('//div[@id="delete-ad-modal"]/div/div[3]/button')).click() 

}, 140000)
setTimeout(async()=>{ 

      return driver.navigate().refresh(); 

}, 144000)
setTimeout(async()=>{ 

      return driver.findElement(By.className("_2mkTO")).click() 

}, 148000)
setTimeout(async()=>{ 

      return driver.findElement(By.className("cOriw _1jhdI btn-default")).click() 

}, 152000)
setTimeout(async()=>{ 

      return driver.findElement(By.xpath('//div[@id="delete-ad-modal"]/div/div[3]/button')).click() 

}, 156000)
setTimeout(async()=>{ 

      return driver.navigate().refresh(); 

}, 160000)
setTimeout(async()=>{ 

      return driver.findElement(By.className("_2mkTO")).click() 

}, 164000)
setTimeout(async()=>{ 

      return driver.findElement(By.className("cOriw _1jhdI btn-default")).click() 

}, 168000)
setTimeout(async()=>{ 

      return driver.findElement(By.xpath('//div[@id="delete-ad-modal"]/div/div[3]/button')).click() 

}, 172000)
setTimeout(async()=>{ 

      return driver.navigate().refresh(); 

}, 176000)
setTimeout(async()=>{ 

      return driver.findElement(By.className("_2mkTO")).click() 

}, 180000)
setTimeout(async()=>{ 

      return driver.findElement(By.className("cOriw _1jhdI btn-default")).click() 

}, 184000)
setTimeout(async()=>{ 

      return driver.findElement(By.xpath('//div[@id="delete-ad-modal"]/div/div[3]/button')).click() 

}, 188000)
setTimeout(async()=>{ 

      return driver.navigate().refresh(); 

}, 192000)
setTimeout(async()=>{ 

      return driver.findElement(By.className("_2mkTO")).click() 

}, 196000)
setTimeout(async()=>{ 

      return driver.findElement(By.className("cOriw _1jhdI btn-default")).click() 

}, 200000)
setTimeout(async()=>{ 

      return driver.findElement(By.xpath('//div[@id="delete-ad-modal"]/div/div[3]/button')).click() 

}, 204000)
setTimeout(async()=>{ 

      return driver.navigate().refresh(); 

}, 208000)
setTimeout(async()=>{ 

      return driver.findElement(By.className("_2mkTO")).click() 

}, 212000)
setTimeout(async()=>{ 

      return driver.findElement(By.className("cOriw _1jhdI btn-default")).click() 

}, 216000)
setTimeout(async()=>{ 

      return driver.findElement(By.xpath('//div[@id="delete-ad-modal"]/div/div[3]/button')).click() 

}, 220000)
setTimeout(async()=>{ 

      return driver.navigate().refresh(); 

}, 224000)
setTimeout(async()=>{ 

      return driver.findElement(By.className("_2mkTO")).click() 

}, 228000)
setTimeout(async()=>{ 

      return driver.findElement(By.className("cOriw _1jhdI btn-default")).click() 

}, 232000)
setTimeout(async()=>{ 

      return driver.findElement(By.xpath('//div[@id="delete-ad-modal"]/div/div[3]/button')).click() 

}, 236000)
setTimeout(async()=>{ 

      return driver.navigate().refresh(); 

}, 240000)
setTimeout(async()=>{ 

      return driver.findElement(By.className("_2mkTO")).click() 

}, 244000)
setTimeout(async()=>{ 

      return driver.findElement(By.className("cOriw _1jhdI btn-default")).click() 

}, 248000)
setTimeout(async()=>{ 

      return driver.findElement(By.xpath('//div[@id="delete-ad-modal"]/div/div[3]/button')).click() 

}, 252000)
setTimeout(async()=>{ 

      return driver.navigate().refresh(); 

}, 256000)
setTimeout(async()=>{ 

      return driver.findElement(By.className("_2mkTO")).click() 

}, 260000)
setTimeout(async()=>{ 

      return driver.findElement(By.className("cOriw _1jhdI btn-default")).click() 

}, 264000)
setTimeout(async()=>{ 

      return driver.findElement(By.xpath('//div[@id="delete-ad-modal"]/div/div[3]/button')).click() 

}, 268000)
setTimeout(async()=>{ 

      return driver.navigate().refresh(); 

}, 272000)
setTimeout(async()=>{ 

      return driver.findElement(By.className("_2mkTO")).click() 

}, 276000)
setTimeout(async()=>{ 

      return driver.findElement(By.className("cOriw _1jhdI btn-default")).click() 

}, 280000)
setTimeout(async()=>{ 

      return driver.findElement(By.xpath('//div[@id="delete-ad-modal"]/div/div[3]/button')).click() 

}, 284000)
setTimeout(async()=>{ 

      return driver.navigate().refresh(); 

}, 288000)
setTimeout(async()=>{ 

      return driver.findElement(By.className("_2mkTO")).click() 

}, 292000)
setTimeout(async()=>{ 

      return driver.findElement(By.className("cOriw _1jhdI btn-default")).click() 

}, 296000)
setTimeout(async()=>{ 

      return driver.findElement(By.xpath('//div[@id="delete-ad-modal"]/div/div[3]/button')).click() 

}, 300000)
setTimeout(async()=>{ 

      return driver.navigate().refresh(); 

}, 304000)
setTimeout(async()=>{ 

      return driver.findElement(By.className("_2mkTO")).click() 

}, 308000)
setTimeout(async()=>{ 

      return driver.findElement(By.className("cOriw _1jhdI btn-default")).click() 

}, 312000)
setTimeout(async()=>{ 

      return driver.findElement(By.xpath('//div[@id="delete-ad-modal"]/div/div[3]/button')).click() 

}, 316000)
setTimeout(async()=>{ 

      return driver.navigate().refresh(); 

}, 320000)
setTimeout(async()=>{ 

      return driver.findElement(By.className("_2mkTO")).click() 

}, 324000)
setTimeout(async()=>{ 

      return driver.findElement(By.className("cOriw _1jhdI btn-default")).click() 

}, 328000)
setTimeout(async()=>{ 

      return driver.findElement(By.xpath('//div[@id="delete-ad-modal"]/div/div[3]/button')).click() 

}, 332000)
setTimeout(async()=>{ 

      return driver.navigate().refresh(); 

}, 336000)


}).catch(()=>{
    console.log('Element not found');
    driver.close();
})

//}, null, true, 'America/Los_Angeles');


mongoose.connect('mongodb://localhost:27017/project2',(err)=>{
  if(!err){
      console.log('Connected to mongo Database');
  }
})