var mongoose = require('mongoose');
var webdriver = require('selenium-webdriver');
var express = require('express');
var app = express();

var Post = require('./models/post.js');
var Master = require('./models/master.js');

var CronJob = require('cron').CronJob;
new CronJob('0 7,12,20,30,40,50 * * * *', function() {
  console.log('You will see this message every second');

  setTimeout(async() => {

    var master = await Master.findOne({"status":true})
    console.log(master)      
    dataMaster["title"] = master.title
    dataMaster["description"] = master.description

    
  }, 2000);

var By = webdriver.By;

var driver = new webdriver.Builder().withCapabilities(webdriver.Capabilities.chrome()).build();

var promise = require('selenium-webdriver').promise;

var dataMaster = {}

driver.get('https://www.corotos.com.do/create');

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

      return driver.get('https://www.corotos.com.do/create')      
    }, 25000);
    setTimeout(async() => {      
      console.log('esperar4....')
      return driver.findElement(By.xpath("//input[@type='file']")).sendKeys("C:/Users/PUBLICADOR_COROTOS1/Desktop/honda_fit_rojo.jpg");
    }, 30000);
    setTimeout(async() => {      
      console.log('esperar5....')
      return driver.findElement(By.xpath("//button[@type='submit']")).click();
    }, 35000);
    setTimeout(async() => {      
      console.log('esperar5....')
      return driver.findElement(By.id("title")).sendKeys(dataMaster.title);
    }, 36000);
    setTimeout(async() => {      
      console.log('esperar5....')
      return driver.findElement(By.id("description")).sendKeys(dataMaster.description);
    }, 37000);
    setTimeout(async() => {      
      console.log('esperar5....')
      return driver.findElement(By.id("category_0")).click();
    }, 42000);
    setTimeout(async() => {      
      console.log('esperar5....')
      return driver.findElement(By.id("category_0")).sendKeys("v");
    }, 43000);
    setTimeout(async() => {      
      console.log('esperar5....')
      return driver.findElement(By.tagName("body")).click();
    }, 44000);  
    setTimeout(async() => {      
      console.log('esperar5....')
      return driver.findElement(By.id("category_1")).click();
    }, 45000);  
    setTimeout(async() => {      
      console.log('esperar5....')
      return driver.findElement(By.id("category_1")).sendKeys("c");
    }, 45000);
    setTimeout(async() => {      
      console.log('esperar5....')
      return driver.findElement(By.tagName("body")).click();
    }, 45000);    
    setTimeout(async() => {      
      console.log('esperar5....')
      return driver.findElement(By.xpath("//button[@type='submit']")).click();
    }, 45000);
    setTimeout(async() => {      
      console.log('esperar5....')
      return driver.findElement(By.id("metadata.vehicleType")).click();
    }, 47000);  
    setTimeout(async() => {      
      console.log('esperar5....')
      return driver.findElement(By.id("metadata.vehicleType")).sendKeys("s");
    }, 48000);  
    setTimeout(async() => {      
      console.log('esperar5....')
      return driver.findElement(By.tagName("body")).click();
    }, 48000);    
    setTimeout(async() => {      
      console.log('esperar5....')
      return driver.findElement(By.id("metadata.year")).sendKeys("2012");
    }, 50000);
    setTimeout(async() => {      
      console.log('esperar5....')
      return driver.findElement(By.id("metadata.mileage")).sendKeys("1000");
    }, 50000);
    setTimeout(async() => {      
      console.log('esperar5....')
      return driver.findElement(By.id("metadata.fuel")).click();
    }, 51000);
    setTimeout(async() => {      
      console.log('esperar5....')
      return driver.findElement(By.id("metadata.fuel")).sendKeys("g");
    }, 51000);
    setTimeout(async() => {      
      console.log('esperar5....')
      return driver.findElement(By.id("metadata.fuel")).sendKeys("g");
    }, 51000);
    setTimeout(async() => {      
      console.log('esperar5....')
      return driver.findElement(By.id("metadata.horsePower")).sendKeys("4");
    }, 52000);
    setTimeout(async() => {      
      console.log('esperar5....')
      return driver.findElement(By.id("metadata.transmission")).click();
    }, 53000);
    setTimeout(async() => {      
      console.log('esperar5....')
      return driver.findElement(By.id("metadata.transmission")).sendKeys("a");
    }, 53000);
    setTimeout(async() => {      
      console.log('esperar5....')
      return driver.findElement(By.tagName("body")).click();
    }, 53000);    
    setTimeout(async() => {      
      console.log('esperar5....')
      return driver.findElement(By.id("metadata.outsideColor")).click();
    }, 54000);
    setTimeout(async() => {      
      console.log('esperar5....')
      return driver.findElement(By.id("metadata.outsideColor")).sendKeys("r");
    }, 54000);
    setTimeout(async() => {      
      console.log('esperar5....')
      return driver.findElement(By.tagName("body")).click();
    }, 54000);    
    setTimeout(async() => {      
      console.log('esperar5....')
      return driver.findElement(By.id("metadata.condition")).click();
    }, 55000);
    setTimeout(async() => {      
      console.log('esperar5....')
      return driver.findElement(By.id("metadata.condition")).sendKeys("u");
    }, 55000);
    setTimeout(async() => {      
      console.log('esperar5....')
      return driver.findElement(By.tagName("body")).click();
    }, 56000);    
    setTimeout(async() => {      
      console.log('esperar5....')
      return driver.findElement(By.id("metadata.insideColor")).click();
    }, 57000);
    setTimeout(async() => {      
      console.log('esperar5....')
      return driver.findElement(By.id("metadata.insideColor")).sendKeys("n");
    }, 57000);
    setTimeout(async() => {      
      console.log('esperar5....')
      return driver.findElement(By.id("metadata.insideColor")).sendKeys("n");
    }, 57000);
    setTimeout(async() => {      
      console.log('esperar5....')
      return driver.findElement(By.tagName("body")).click();
    }, 58000);    
    setTimeout(async() => {      
      console.log('esperar5....')
      return driver.findElement(By.id("metadata.make")).click();
    }, 59000);
    setTimeout(async() => {      
      console.log('esperar5....')
      return driver.findElement(By.id("metadata.make")).sendKeys("h");
    }, 59000);
    setTimeout(async() => {      
      console.log('esperar5....')
      return driver.findElement(By.tagName("body")).click();
    }, 59000);    
    setTimeout(async() => {      
      console.log('esperar5....')
      return driver.findElement(By.id("metadata.model")).click();
    }, 60000);
    setTimeout(async() => {      
      console.log('esperar5....')
      return driver.findElement(By.id("metadata.model")).sendKeys("f");
    }, 60000);
    setTimeout(async() => {      
      console.log('esperar5....')
      return driver.findElement(By.tagName("body")).click();
    }, 60000);    
    setTimeout(async() => {      
      console.log('esperar5....')
      return driver.findElement(By.tagName("body")).click();
    }, 61000);    
    setTimeout(async() => {      
      console.log('esperar5....')
      return driver.findElement(By.xpath("//button[@type='submit']")).click();
    }, 61000);
    setTimeout(async() => {      
      console.log('esperar5....')
      return driver.findElement(By.id("price")).sendKeys(43000);
    }, 62000);
    setTimeout(async() => {      
      console.log('esperar5....')
      return driver.findElement(By.id("region_0")).click();
    }, 62000);
    setTimeout(async() => {      
      console.log('esperar5....')
      return driver.findElement(By.id("region_0")).sendKeys("s");
    }, 63000);
    setTimeout(async() => {      
      console.log('esperar5....')
      return driver.findElement(By.id("region_0")).sendKeys("s");
    }, 64000);
    setTimeout(async() => {      
      console.log('esperar5....')
      return driver.findElement(By.id("region_0")).sendKeys("s");
    }, 65000);
    setTimeout(async() => {      
      console.log('esperar5....')
      return driver.findElement(By.id("region_0")).sendKeys("s");
    }, 66000);
    setTimeout(async() => {      
      console.log('esperar5....')
      return driver.findElement(By.id("region_0")).sendKeys("s");
    }, 67000);
    setTimeout(async() => {      
      console.log('esperar5....')
      return driver.findElement(By.id("region_0")).sendKeys("s");
    }, 67000);
    setTimeout(async() => {      
      console.log('esperar5....')
      return driver.findElement(By.id("region_0")).sendKeys("s");
    }, 68000);
    setTimeout(async() => {      
      console.log('esperar5....')
      return driver.findElement(By.id("region_0")).sendKeys("s");
    }, 69000);
    setTimeout(async() => {      
      console.log('esperar5....')
      return driver.findElement(By.tagName("body")).click();
    }, 70000);    
    setTimeout(async() => {      
      console.log('esperar5....')
      return driver.findElement(By.id("region_1")).click();
    }, 80000);
    setTimeout(async() => {      
      console.log('esperar5....')
      return driver.findElement(By.id("region_1")).sendKeys("s");
    }, 81000);/*
    setTimeout(async() => {      
      console.log('esperar5....')
      return driver.findElement(By.tagName("body")).click();
    }, 82000); */

    setTimeout(async() => {      
      console.log('esperar5....')
      return driver.findElement(By.xpath("//button[@type='submit']")).click();
    }, 90000);
    setTimeout(async() => {      
      console.log('esperar5....')
      return driver.findElement(By.xpath("//button[@type='submit']")).click();
    }, 95000);




}).catch(()=>{
    console.log('Element not found');
    driver.close();
})

}, null, true, 'America/Los_Angeles');


mongoose.connect('mongodb://localhost:27017/project2',(err)=>{
  if(!err){
      console.log('Connected to mongo Database');
  }
})