var mongoose = require('mongoose');
var webdriver = require('selenium-webdriver');
var express = require('express');
var app = express();

var Post = require('./models/post.js');
var Master = require('./models/master.js');

// var CronJob = require('cron').CronJob;
// new CronJob('0 49 * * * *', function() {
//   console.log('You will see this message every second');  


var dataMaster = {}
var dataMaster2 = {}
var dataMaster3 = {}
var dataMaster4 = {}
var dataMaster5 = {}
var dataMaster6 = {}
var dataMaster7 = {}
var dataMaster8 = {}
var dataMaster9 = {}


  setTimeout(async() => {

    var master = await Master.findOne({"sequence":0})
    console.log(master)      
    dataMaster["title"] = master.title
    dataMaster["header"] = master.header
    dataMaster["description"] = master.description

    var posts = Post.remove({},function(err){
      if(!err){console.log('removed!')}
    })
 
    var master2 = await Master.findOne({"sequence":1})
    console.log(master2)      
    dataMaster2["title"] = master2.title
    dataMaster2["header"] = master2.header
    dataMaster2["description"] = master2.description

    var master3 = await Master.findOne({"sequence":2})
    console.log(master3)      
    dataMaster3["title"] = master3.title
    dataMaster3["header"] = master3.header
    dataMaster3["description"] = master3.description

    var master4= await Master.findOne({"sequence":3})
    console.log(master4)      
    dataMaster4["title"] = master4.title
    dataMaster4["header"] = master4.header
    dataMaster4["description"] = master4.description

    var master5= await Master.findOne({"sequence":4})
    console.log(master5)      
    dataMaster5["title"] = master5.title
    dataMaster5["header"] = master5.header
    dataMaster5["description"] = master5.description

    var master6= await Master.findOne({"sequence":5})
    console.log(master6)      
    dataMaster6["title"] = master6.title
    dataMaster6["header"] = master6.header
    dataMaster6["description"] = master6.description

    var master7= await Master.findOne({"sequence":6})
    console.log(master7)      
    dataMaster7["title"] = master7.title
    dataMaster7["header"] = master7.header
    dataMaster7["description"] = master7.description

    // var master8= await Master.findOne({"sequence":7})
    // console.log(master8)      
    // dataMaster8["title"] = master8.title
    // dataMaster8["header"] = master8.header
    // dataMaster8["description"] = master8.description

    // var master9= await Master.findOne({"sequence":8})
    // console.log(master9)      
    // dataMaster9["title"] = master9.title
    // dataMaster9["header"] = master9.header
    // dataMaster9["description"] = master9.description
    
  }, 6000);

var By = webdriver.By;

var driver = new webdriver.Builder().withCapabilities(webdriver.Capabilities.chrome()).build();

var promise = require('selenium-webdriver').promise;

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
      console.log('esperar3....')
      var posts = Post.remove({},function(err){
        if(!err){console.log('removed!')}
      })
      return driver.findElement(By.className('_2QhqT _3NHOV _3z-oQ _2El2O _7xPBo _2pXQq _3WoTQ gO5qu _2h31L _1Dh7N')).click()
    }, 20000);
    setTimeout(async()=>{ 




      return driver.get("https://www.corotos.com.do/create") 

}, 25000)
setTimeout(async()=>{ 




      return driver.findElement(By.id("_tealiumModalClose")).click(); 

}, 29000)
setTimeout(async()=>{ 




      return driver.findElement(By.xpath("//input[@type='file']")).sendKeys("C:/Users/PUBLICADOR_COROTOS1/Desktop/honda_fit_rojo_3-2.jpg"); 

}, 33000)
setTimeout(async()=>{ 




      return driver.findElement(By.xpath("//button[@type='submit']")).click(); 

}, 37000)
setTimeout(async()=>{ 




      return driver.findElement(By.id("title")).sendKeys(dataMaster.header); 

}, 41000)
setTimeout(async()=>{ 




      return driver.findElement(By.id("description")).sendKeys(dataMaster.description); 

}, 42000)
setTimeout(async()=>{ 




      return driver.findElement(By.id("category_0")).click(); 

}, 43000)
setTimeout(async()=>{ 




      return driver.findElement(By.id("category_0")).sendKeys("v"); 

}, 44000)
setTimeout(async()=>{ 




      return driver.findElement(By.tagName("body")).click(); 

}, 45000)
setTimeout(async()=>{ 




      return driver.findElement(By.id("category_1")).click(); 

}, 46000)
setTimeout(async()=>{ 




      return driver.findElement(By.id("category_1")).sendKeys("c"); 

}, 47000)
setTimeout(async()=>{ 




      return driver.findElement(By.tagName("body")).click(); 

}, 48000)
setTimeout(async()=>{ 




      return driver.findElement(By.xpath("//button[@type='submit']")).click(); 

}, 49000)
setTimeout(async()=>{ 




      return driver.findElement(By.id("metadata.vehicleType")).click(); 

}, 50000)
setTimeout(async()=>{ 




      return driver.findElement(By.id("metadata.vehicleType")).sendKeys("s"); 

}, 51000)
setTimeout(async()=>{ 




      return driver.findElement(By.tagName("body")).click(); 

}, 52000)
setTimeout(async()=>{ 




      return driver.findElement(By.id("metadata.year")).sendKeys("2012"); 

}, 53000)
setTimeout(async()=>{ 




      return driver.findElement(By.id("metadata.mileage")).sendKeys("1000"); 

}, 54000)
setTimeout(async()=>{ 




      return driver.findElement(By.id("metadata.fuel")).click(); 

}, 55000)
setTimeout(async()=>{ 




      return driver.findElement(By.id("metadata.fuel")).sendKeys("g"); 

}, 56000)
setTimeout(async()=>{ 




      return driver.findElement(By.id("metadata.fuel")).sendKeys("g"); 

}, 57000)
setTimeout(async()=>{ 




      return driver.findElement(By.id("metadata.horsePower")).sendKeys("4"); 

}, 58000)
setTimeout(async()=>{ 




      return driver.findElement(By.id("metadata.transmission")).click(); 

}, 59000)
setTimeout(async()=>{ 




      return driver.findElement(By.id("metadata.transmission")).sendKeys("a"); 

}, 60000)
setTimeout(async()=>{ 




      return driver.findElement(By.tagName("body")).click(); 

}, 61000)
setTimeout(async()=>{ 




      return driver.findElement(By.id("metadata.outsideColor")).click(); 

}, 62000)
setTimeout(async()=>{ 




      return driver.findElement(By.id("metadata.outsideColor")).sendKeys("r"); 

}, 63000)
setTimeout(async()=>{ 




      return driver.findElement(By.tagName("body")).click(); 

}, 64000)
setTimeout(async()=>{ 




      return driver.findElement(By.id("metadata.condition")).click(); 

}, 65000)
setTimeout(async()=>{ 




      return driver.findElement(By.id("metadata.condition")).sendKeys("u"); 

}, 66000)
setTimeout(async()=>{ 




      return driver.findElement(By.tagName("body")).click(); 

}, 67000)
setTimeout(async()=>{ 




      return driver.findElement(By.id("metadata.insideColor")).click(); 

}, 68000)
setTimeout(async()=>{ 




      return driver.findElement(By.id("metadata.insideColor")).sendKeys("n"); 

}, 69000)
setTimeout(async()=>{ 




      return driver.findElement(By.id("metadata.insideColor")).sendKeys("n"); 

}, 70000)
setTimeout(async()=>{ 




      return driver.findElement(By.tagName("body")).click(); 

}, 71000)
setTimeout(async()=>{ 




      return driver.findElement(By.id("metadata.make")).click(); 

}, 72000)
setTimeout(async()=>{ 




      return driver.findElement(By.id("metadata.make")).sendKeys("f"); 

}, 73000)
setTimeout(async()=>{ 




      return driver.findElement(By.id("metadata.make")).sendKeys("f"); 

}, 73300)
setTimeout(async()=>{ 




      return driver.findElement(By.id("metadata.make")).sendKeys("f"); 

}, 73600)
setTimeout(async()=>{ 




      return driver.findElement(By.tagName("body")).click(); 

}, 75000)
setTimeout(async()=>{ 




      return driver.findElement(By.id("metadata.model")).click(); 

}, 76000)
setTimeout(async()=>{ 




      return driver.findElement(By.id("metadata.model")).sendKeys("f"); 

}, 77000)
setTimeout(async()=>{ 




      return driver.findElement(By.id("metadata.model")).sendKeys("f"); 

}, 77300)
setTimeout(async()=>{ 




      return driver.findElement(By.id("metadata.model")).sendKeys("f"); 

}, 77600)
setTimeout(async()=>{ 




      return driver.findElement(By.tagName("body")).click(); 

}, 78000)
setTimeout(async()=>{ 




      return driver.findElement(By.tagName("body")).click(); 

}, 79000)
setTimeout(async()=>{ 




      return driver.findElement(By.xpath("//button[@type='submit']")).click(); 

}, 80000)
setTimeout(async()=>{ 




      return driver.findElement(By.id("price")).sendKeys(40000); 

}, 81000)
setTimeout(async()=>{ 




      return driver.findElement(By.id("region_0")).click(); 

}, 82000)
setTimeout(async()=>{ 




      return driver.findElement(By.id("region_0")).sendKeys("s"); 

}, 83000)
setTimeout(async()=>{ 




      return driver.findElement(By.id("region_0")).sendKeys("s"); 

}, 84000)
setTimeout(async()=>{ 




      return driver.findElement(By.id("region_0")).sendKeys("s"); 

}, 85000)
setTimeout(async()=>{ 




      return driver.findElement(By.id("region_0")).sendKeys("s"); 

}, 86000)
setTimeout(async()=>{ 




      return driver.findElement(By.id("region_0")).sendKeys("s"); 

}, 87000)
setTimeout(async()=>{ 




      return driver.findElement(By.id("region_0")).sendKeys("s"); 

}, 88000)
setTimeout(async()=>{ 




      return driver.findElement(By.id("region_0")).sendKeys("s"); 

}, 89000)
setTimeout(async()=>{ 




      return driver.findElement(By.id("region_0")).sendKeys("s"); 

}, 90000)
setTimeout(async()=>{ 




      return driver.findElement(By.tagName("body")).click(); 

}, 91000)
setTimeout(async()=>{ 




      return driver.findElement(By.id("region_1")).click(); 

}, 92000)
setTimeout(async()=>{ 




      return driver.findElement(By.id("region_1")).sendKeys("s"); 

}, 93000)
setTimeout(async()=>{ 




      return driver.findElement(By.xpath("//button[@type='submit']")).click(); 

}, 94000)
setTimeout(async()=>{ 




      return driver.findElement(By.xpath("//button[@type='submit']")).click(); 

}, 95000)

  
/*************************************
 * 
 * 
 * 
 * 
 * 
 * 
 * 
 */


setTimeout(async()=>{ 




  return driver.get("https://www.corotos.com.do/create") 

}, 100000)
setTimeout(async()=>{ 




  return driver.findElement(By.id("_tealiumModalClose")).click(); 

}, 104000)
setTimeout(async()=>{ 




  return driver.findElement(By.xpath("//input[@type='file']")).sendKeys("C:/Users/PUBLICADOR_COROTOS1/Desktop/honda_fit_rojo_3-3.jpg"); 

}, 108000)
setTimeout(async()=>{ 




  return driver.findElement(By.xpath("//button[@type='submit']")).click(); 

}, 112000)
setTimeout(async()=>{ 




  return driver.findElement(By.id("title")).sendKeys(dataMaster2.header); 

}, 116000)
setTimeout(async()=>{ 




  return driver.findElement(By.id("description")).sendKeys(dataMaster2.description); 

}, 117000)
setTimeout(async()=>{ 




  return driver.findElement(By.id("category_0")).click(); 

}, 118000)
setTimeout(async()=>{ 




  return driver.findElement(By.id("category_0")).sendKeys("v"); 

}, 119000)
setTimeout(async()=>{ 




  return driver.findElement(By.tagName("body")).click(); 

}, 120000)
setTimeout(async()=>{ 




  return driver.findElement(By.id("category_1")).click(); 

}, 121000)
setTimeout(async()=>{ 




  return driver.findElement(By.id("category_1")).sendKeys("c"); 

}, 122000)
setTimeout(async()=>{ 




  return driver.findElement(By.tagName("body")).click(); 

}, 123000)
setTimeout(async()=>{ 




  return driver.findElement(By.xpath("//button[@type='submit']")).click(); 

}, 124000)
setTimeout(async()=>{ 




  return driver.findElement(By.id("metadata.vehicleType")).click(); 

}, 125000)
setTimeout(async()=>{ 




  return driver.findElement(By.id("metadata.vehicleType")).sendKeys("s"); 

}, 126000)
setTimeout(async()=>{ 




  return driver.findElement(By.tagName("body")).click(); 

}, 127000)
setTimeout(async()=>{ 




  return driver.findElement(By.id("metadata.year")).sendKeys("2012"); 

}, 128000)
setTimeout(async()=>{ 




  return driver.findElement(By.id("metadata.mileage")).sendKeys("1000"); 

}, 129000)
setTimeout(async()=>{ 




  return driver.findElement(By.id("metadata.fuel")).click(); 

}, 130000)
setTimeout(async()=>{ 




  return driver.findElement(By.id("metadata.fuel")).sendKeys("g"); 

}, 131000)
setTimeout(async()=>{ 




  return driver.findElement(By.id("metadata.fuel")).sendKeys("g"); 

}, 132000)
setTimeout(async()=>{ 




  return driver.findElement(By.id("metadata.horsePower")).sendKeys("4"); 

}, 133000)
setTimeout(async()=>{ 




  return driver.findElement(By.id("metadata.transmission")).click(); 

}, 134000)
setTimeout(async()=>{ 




  return driver.findElement(By.id("metadata.transmission")).sendKeys("a"); 

}, 135000)
setTimeout(async()=>{ 




  return driver.findElement(By.tagName("body")).click(); 

}, 136000)
setTimeout(async()=>{ 




  return driver.findElement(By.id("metadata.outsideColor")).click(); 

}, 137000)
setTimeout(async()=>{ 




  return driver.findElement(By.id("metadata.outsideColor")).sendKeys("r"); 

}, 138000)
setTimeout(async()=>{ 




  return driver.findElement(By.tagName("body")).click(); 

}, 139000)
setTimeout(async()=>{ 




  return driver.findElement(By.id("metadata.condition")).click(); 

}, 140000)
setTimeout(async()=>{ 




  return driver.findElement(By.id("metadata.condition")).sendKeys("u"); 

}, 141000)
setTimeout(async()=>{ 




  return driver.findElement(By.tagName("body")).click(); 

}, 142000)
setTimeout(async()=>{ 




  return driver.findElement(By.id("metadata.insideColor")).click(); 

}, 143000)
setTimeout(async()=>{ 




  return driver.findElement(By.id("metadata.insideColor")).sendKeys("n"); 

}, 144000)
setTimeout(async()=>{ 




  return driver.findElement(By.id("metadata.insideColor")).sendKeys("n"); 

}, 145000)
setTimeout(async()=>{ 




  return driver.findElement(By.tagName("body")).click(); 

}, 146000)
setTimeout(async()=>{ 




  return driver.findElement(By.id("metadata.make")).click(); 

}, 147000)
setTimeout(async()=>{ 




  return driver.findElement(By.id("metadata.make")).sendKeys("t"); 

}, 148000)
setTimeout(async()=>{ 




  return driver.findElement(By.id("metadata.make")).sendKeys("t"); 

}, 149000)
setTimeout(async()=>{ 




  return driver.findElement(By.tagName("body")).click(); 

}, 150000)
setTimeout(async()=>{ 




  return driver.findElement(By.id("metadata.model")).click(); 

}, 151000)
setTimeout(async()=>{ 




  return driver.findElement(By.id("metadata.model")).sendKeys("p"); 

}, 152000)
setTimeout(async()=>{ 




  return driver.findElement(By.tagName("body")).click(); 

}, 153000)
setTimeout(async()=>{ 




  return driver.findElement(By.tagName("body")).click(); 

}, 154000)
setTimeout(async()=>{ 




  return driver.findElement(By.xpath("//button[@type='submit']")).click(); 

}, 155000)
setTimeout(async()=>{ 




  return driver.findElement(By.id("price")).sendKeys(59000); 

}, 156000)
setTimeout(async()=>{ 




  return driver.findElement(By.id("region_0")).click(); 

}, 157000)
setTimeout(async()=>{ 




  return driver.findElement(By.id("region_0")).sendKeys("s"); 

}, 158000)
setTimeout(async()=>{ 




  return driver.findElement(By.id("region_0")).sendKeys("s"); 

}, 159000)
setTimeout(async()=>{ 




  return driver.findElement(By.id("region_0")).sendKeys("s"); 

}, 160000)
setTimeout(async()=>{ 




  return driver.findElement(By.id("region_0")).sendKeys("s"); 

}, 161000)
setTimeout(async()=>{ 




  return driver.findElement(By.id("region_0")).sendKeys("s"); 

}, 162000)
setTimeout(async()=>{ 




  return driver.findElement(By.id("region_0")).sendKeys("s"); 

}, 163000)
setTimeout(async()=>{ 




  return driver.findElement(By.id("region_0")).sendKeys("s"); 

}, 164000)
setTimeout(async()=>{ 




  return driver.findElement(By.id("region_0")).sendKeys("s"); 

}, 165000)
setTimeout(async()=>{ 




  return driver.findElement(By.tagName("body")).click(); 

}, 166000)
setTimeout(async()=>{ 




  return driver.findElement(By.id("region_1")).click(); 

}, 167000)
setTimeout(async()=>{ 




  return driver.findElement(By.id("region_1")).sendKeys("s"); 

}, 168000)
setTimeout(async()=>{ 




  return driver.findElement(By.xpath("//button[@type='submit']")).click(); 

}, 169000)
setTimeout(async()=>{ 




  return driver.findElement(By.xpath("//button[@type='submit']")).click(); 

}, 170000)


/****************************
 * 
 * 
 * 
 * 
 * 
 * 
 * 
 * 
 */


setTimeout(async()=>{ 




  return driver.get("https://www.corotos.com.do/create") 

}, 180000)
setTimeout(async()=>{ 




  return driver.findElement(By.id("_tealiumModalClose")).click(); 

}, 184000)
setTimeout(async()=>{ 




  return driver.findElement(By.xpath("//input[@type='file']")).sendKeys("C:/Users/PUBLICADOR_COROTOS1/Desktop/honda_fit_rojo_3.jpg"); 

}, 188000)
setTimeout(async()=>{ 




  return driver.findElement(By.xpath("//button[@type='submit']")).click(); 

}, 192000)
setTimeout(async()=>{ 




  return driver.findElement(By.id("title")).sendKeys(dataMaster3.header); 

}, 196000)
setTimeout(async()=>{ 




  return driver.findElement(By.id("description")).sendKeys(dataMaster3.description); 

}, 197000)
setTimeout(async()=>{ 




  return driver.findElement(By.id("category_0")).click(); 

}, 198000)
setTimeout(async()=>{ 




  return driver.findElement(By.id("category_0")).sendKeys("v"); 

}, 199000)
setTimeout(async()=>{ 




  return driver.findElement(By.tagName("body")).click(); 

}, 200000)
setTimeout(async()=>{ 




  return driver.findElement(By.id("category_1")).click(); 

}, 201000)
setTimeout(async()=>{ 




  return driver.findElement(By.id("category_1")).sendKeys("c"); 

}, 202000)
setTimeout(async()=>{ 




  return driver.findElement(By.tagName("body")).click(); 

}, 203000)
setTimeout(async()=>{ 




  return driver.findElement(By.xpath("//button[@type='submit']")).click(); 

}, 204000)
setTimeout(async()=>{ 




  return driver.findElement(By.id("metadata.vehicleType")).click(); 

}, 205000)
setTimeout(async()=>{ 




  return driver.findElement(By.id("metadata.vehicleType")).sendKeys("s"); 

}, 206000)
setTimeout(async()=>{ 




  return driver.findElement(By.tagName("body")).click(); 

}, 207000)
setTimeout(async()=>{ 




  return driver.findElement(By.id("metadata.year")).sendKeys("2012"); 

}, 208000)
setTimeout(async()=>{ 




  return driver.findElement(By.id("metadata.mileage")).sendKeys("1000"); 

}, 209000)
setTimeout(async()=>{ 




  return driver.findElement(By.id("metadata.fuel")).click(); 

}, 210000)
setTimeout(async()=>{ 




  return driver.findElement(By.id("metadata.fuel")).sendKeys("g"); 

}, 211000)
setTimeout(async()=>{ 




  return driver.findElement(By.id("metadata.fuel")).sendKeys("g"); 

}, 212000)
setTimeout(async()=>{ 




  return driver.findElement(By.id("metadata.horsePower")).sendKeys("4"); 

}, 213000)
setTimeout(async()=>{ 




  return driver.findElement(By.id("metadata.transmission")).click(); 

}, 214000)
setTimeout(async()=>{ 




  return driver.findElement(By.id("metadata.transmission")).sendKeys("a"); 

}, 215000)
setTimeout(async()=>{ 




  return driver.findElement(By.tagName("body")).click(); 

}, 216000)
setTimeout(async()=>{ 




  return driver.findElement(By.id("metadata.outsideColor")).click(); 

}, 217000)
setTimeout(async()=>{ 




  return driver.findElement(By.id("metadata.outsideColor")).sendKeys("r"); 

}, 218000)
setTimeout(async()=>{ 




  return driver.findElement(By.tagName("body")).click(); 

}, 219000)
setTimeout(async()=>{ 




  return driver.findElement(By.id("metadata.condition")).click(); 

}, 220000)
setTimeout(async()=>{ 




  return driver.findElement(By.id("metadata.condition")).sendKeys("u"); 

}, 221000)
setTimeout(async()=>{ 




  return driver.findElement(By.tagName("body")).click(); 

}, 222000)
setTimeout(async()=>{ 




  return driver.findElement(By.id("metadata.insideColor")).click(); 

}, 223000)
setTimeout(async()=>{ 




  return driver.findElement(By.id("metadata.insideColor")).sendKeys("n"); 

}, 224000)
setTimeout(async()=>{ 




  return driver.findElement(By.id("metadata.insideColor")).sendKeys("n"); 

}, 225000)
setTimeout(async()=>{ 




  return driver.findElement(By.tagName("body")).click(); 

}, 226000)
setTimeout(async()=>{ 




  return driver.findElement(By.id("metadata.make")).click(); 

}, 227000)
setTimeout(async()=>{ 




  return driver.findElement(By.id("metadata.make")).sendKeys("t"); 

}, 228000)
setTimeout(async()=>{ 




  return driver.findElement(By.id("metadata.make")).sendKeys("t"); 

}, 229000)
setTimeout(async()=>{ 




  return driver.findElement(By.tagName("body")).click(); 

}, 230000)
setTimeout(async()=>{ 




  return driver.findElement(By.id("metadata.model")).click(); 

}, 231000)
setTimeout(async()=>{ 




  return driver.findElement(By.id("metadata.model")).sendKeys("p"); 

}, 232000)
setTimeout(async()=>{ 




  return driver.findElement(By.tagName("body")).click(); 

}, 233000)
setTimeout(async()=>{ 




  return driver.findElement(By.tagName("body")).click(); 

}, 234000)
setTimeout(async()=>{ 




  return driver.findElement(By.xpath("//button[@type='submit']")).click(); 

}, 235000)
setTimeout(async()=>{ 




  return driver.findElement(By.id("price")).sendKeys(67500); 

}, 236000)
setTimeout(async()=>{ 




  return driver.findElement(By.id("region_0")).click(); 

}, 237000)
setTimeout(async()=>{ 




  return driver.findElement(By.id("region_0")).sendKeys("s"); 

}, 238000)
setTimeout(async()=>{ 




  return driver.findElement(By.id("region_0")).sendKeys("s"); 

}, 239000)
setTimeout(async()=>{ 




  return driver.findElement(By.id("region_0")).sendKeys("s"); 

}, 240000)
setTimeout(async()=>{ 




  return driver.findElement(By.id("region_0")).sendKeys("s"); 

}, 241000)
setTimeout(async()=>{ 




  return driver.findElement(By.id("region_0")).sendKeys("s"); 

}, 242000)
setTimeout(async()=>{ 




  return driver.findElement(By.id("region_0")).sendKeys("s"); 

}, 243000)
setTimeout(async()=>{ 




  return driver.findElement(By.id("region_0")).sendKeys("s"); 

}, 244000)
setTimeout(async()=>{ 




  return driver.findElement(By.id("region_0")).sendKeys("s"); 

}, 245000)
setTimeout(async()=>{ 




  return driver.findElement(By.tagName("body")).click(); 

}, 246000)
setTimeout(async()=>{ 




  return driver.findElement(By.id("region_1")).click(); 

}, 247000)
setTimeout(async()=>{ 




  return driver.findElement(By.id("region_1")).sendKeys("s"); 

}, 248000)
setTimeout(async()=>{ 




  return driver.findElement(By.xpath("//button[@type='submit']")).click(); 

}, 249000)
setTimeout(async()=>{ 




  return driver.findElement(By.xpath("//button[@type='submit']")).click(); 

}, 250000)

/****************************************
 * 
 * 
 * 
 * 
 * 
 * 
 */

setTimeout(async()=>{ 




  return driver.get("https://www.corotos.com.do/create") 

}, 260000)
setTimeout(async()=>{ 




  return driver.findElement(By.id("_tealiumModalClose")).click(); 

}, 264000)
setTimeout(async()=>{ 




  return driver.findElement(By.xpath("//input[@type='file']")).sendKeys("C:/Users/PUBLICADOR_COROTOS1/Desktop/honda_fit_rojo_3-1.jpg"); 

}, 268000)
setTimeout(async()=>{ 




  return driver.findElement(By.xpath("//button[@type='submit']")).click(); 

}, 272000)
setTimeout(async()=>{ 




  return driver.findElement(By.id("title")).sendKeys(dataMaster4.header); 

}, 276000)
setTimeout(async()=>{ 




  return driver.findElement(By.id("description")).sendKeys(dataMaster4.description); 

}, 277000)
setTimeout(async()=>{ 




  return driver.findElement(By.id("category_0")).click(); 

}, 278000)
setTimeout(async()=>{ 




  return driver.findElement(By.id("category_0")).sendKeys("v"); 

}, 279000)
setTimeout(async()=>{ 




  return driver.findElement(By.tagName("body")).click(); 

}, 280000)
setTimeout(async()=>{ 




  return driver.findElement(By.id("category_1")).click(); 

}, 281000)
setTimeout(async()=>{ 




  return driver.findElement(By.id("category_1")).sendKeys("c"); 

}, 282000)
setTimeout(async()=>{ 




  return driver.findElement(By.tagName("body")).click(); 

}, 283000)
setTimeout(async()=>{ 




  return driver.findElement(By.xpath("//button[@type='submit']")).click(); 

}, 284000)
setTimeout(async()=>{ 




  return driver.findElement(By.id("metadata.vehicleType")).click(); 

}, 285000)
setTimeout(async()=>{ 




  return driver.findElement(By.id("metadata.vehicleType")).sendKeys("s"); 

}, 286000)
setTimeout(async()=>{ 




  return driver.findElement(By.tagName("body")).click(); 

}, 287000)
setTimeout(async()=>{ 




  return driver.findElement(By.id("metadata.year")).sendKeys("2012"); 

}, 288000)
setTimeout(async()=>{ 




  return driver.findElement(By.id("metadata.mileage")).sendKeys("1000"); 

}, 289000)
setTimeout(async()=>{ 




  return driver.findElement(By.id("metadata.fuel")).click(); 

}, 290000)
setTimeout(async()=>{ 




  return driver.findElement(By.id("metadata.fuel")).sendKeys("g"); 

}, 291000)
setTimeout(async()=>{ 




  return driver.findElement(By.id("metadata.fuel")).sendKeys("g"); 

}, 292000)
setTimeout(async()=>{ 




  return driver.findElement(By.id("metadata.horsePower")).sendKeys("4"); 

}, 293000)
setTimeout(async()=>{ 




  return driver.findElement(By.id("metadata.transmission")).click(); 

}, 294000)
setTimeout(async()=>{ 




  return driver.findElement(By.id("metadata.transmission")).sendKeys("a"); 

}, 295000)
setTimeout(async()=>{ 




  return driver.findElement(By.tagName("body")).click(); 

}, 296000)
setTimeout(async()=>{ 




  return driver.findElement(By.id("metadata.outsideColor")).click(); 

}, 297000)
setTimeout(async()=>{ 




  return driver.findElement(By.id("metadata.outsideColor")).sendKeys("r"); 

}, 298000)
setTimeout(async()=>{ 




  return driver.findElement(By.tagName("body")).click(); 

}, 299000)
setTimeout(async()=>{ 




  return driver.findElement(By.id("metadata.condition")).click(); 

}, 300000)
setTimeout(async()=>{ 




  return driver.findElement(By.id("metadata.condition")).sendKeys("u"); 

}, 301000)
setTimeout(async()=>{ 




  return driver.findElement(By.tagName("body")).click(); 

}, 302000)
setTimeout(async()=>{ 




  return driver.findElement(By.id("metadata.insideColor")).click(); 

}, 303000)
setTimeout(async()=>{ 




  return driver.findElement(By.id("metadata.insideColor")).sendKeys("n"); 

}, 304000)
setTimeout(async()=>{ 




  return driver.findElement(By.id("metadata.insideColor")).sendKeys("n"); 

}, 305000)
setTimeout(async()=>{ 




  return driver.findElement(By.tagName("body")).click(); 

}, 306000)
setTimeout(async()=>{ 




  return driver.findElement(By.id("metadata.make")).click(); 

}, 307000)
setTimeout(async()=>{ 




  return driver.findElement(By.id("metadata.make")).sendKeys("t"); 

}, 308000)
setTimeout(async()=>{ 




  return driver.findElement(By.id("metadata.make")).sendKeys("t"); 

}, 309000)
setTimeout(async()=>{ 




  return driver.findElement(By.tagName("body")).click(); 

}, 310000)
setTimeout(async()=>{ 




  return driver.findElement(By.id("metadata.model")).click(); 

}, 311000)
setTimeout(async()=>{ 




  return driver.findElement(By.id("metadata.model")).sendKeys("p"); 

}, 312000)
setTimeout(async()=>{ 




  return driver.findElement(By.tagName("body")).click(); 

}, 313000)
setTimeout(async()=>{ 




  return driver.findElement(By.tagName("body")).click(); 

}, 314000)
setTimeout(async()=>{ 




  return driver.findElement(By.xpath("//button[@type='submit']")).click(); 

}, 315000)
setTimeout(async()=>{ 




  return driver.findElement(By.id("price")).sendKeys(61000); 

}, 316000)
setTimeout(async()=>{ 




  return driver.findElement(By.id("region_0")).click(); 

}, 317000)
setTimeout(async()=>{ 




  return driver.findElement(By.id("region_0")).sendKeys("s"); 

}, 318000)
setTimeout(async()=>{ 




  return driver.findElement(By.id("region_0")).sendKeys("s"); 

}, 319000)
setTimeout(async()=>{ 




  return driver.findElement(By.id("region_0")).sendKeys("s"); 

}, 320000)
setTimeout(async()=>{ 




  return driver.findElement(By.id("region_0")).sendKeys("s"); 

}, 321000)
setTimeout(async()=>{ 




  return driver.findElement(By.id("region_0")).sendKeys("s"); 

}, 322000)
setTimeout(async()=>{ 




  return driver.findElement(By.id("region_0")).sendKeys("s"); 

}, 323000)
setTimeout(async()=>{ 




  return driver.findElement(By.id("region_0")).sendKeys("s"); 

}, 324000)
setTimeout(async()=>{ 




  return driver.findElement(By.id("region_0")).sendKeys("s"); 

}, 325000)
setTimeout(async()=>{ 




  return driver.findElement(By.tagName("body")).click(); 

}, 326000)
setTimeout(async()=>{ 




  return driver.findElement(By.id("region_1")).click(); 

}, 327000)
setTimeout(async()=>{ 




  return driver.findElement(By.id("region_1")).sendKeys("s"); 

}, 328000)
setTimeout(async()=>{ 




  return driver.findElement(By.xpath("//button[@type='submit']")).click(); 

}, 329000)
setTimeout(async()=>{ 




  return driver.findElement(By.xpath("//button[@type='submit']")).click(); 

}, 330000)



/******************************************
 * 
 * 
 * 
 * 
 * 
 * 
 * 
 */


          setTimeout(async()=>{ 




 	       return driver.get("https://www.corotos.com.do/create") 

  }, 340000)
 setTimeout(async()=>{ 




 	       return driver.findElement(By.id("_tealiumModalClose")).click(); 

  }, 344000)
 setTimeout(async()=>{ 




 	       return driver.findElement(By.xpath("//input[@type='file']")).sendKeys("C:/Users/PUBLICADOR_COROTOS1/Desktop/honda_fit_rojo_3-4.jpg"); 

  }, 348000)
 setTimeout(async()=>{ 




 	       return driver.findElement(By.xpath("//button[@type='submit']")).click(); 

  }, 352000)
 setTimeout(async()=>{ 




 	       return driver.findElement(By.id("title")).sendKeys(dataMaster5.header); 

  }, 356000)
 setTimeout(async()=>{ 




 	       return driver.findElement(By.id("description")).sendKeys(dataMaster5.description); 

  }, 357000)
 setTimeout(async()=>{ 




 	       return driver.findElement(By.id("category_0")).click(); 

  }, 358000)
 setTimeout(async()=>{ 




 	       return driver.findElement(By.id("category_0")).sendKeys("v"); 

  }, 359000)
 setTimeout(async()=>{ 




 	       return driver.findElement(By.tagName("body")).click(); 

  }, 360000)
 setTimeout(async()=>{ 




 	       return driver.findElement(By.id("category_1")).click(); 

  }, 361000)
 setTimeout(async()=>{ 




 	       return driver.findElement(By.id("category_1")).sendKeys("c"); 

  }, 362000)
 setTimeout(async()=>{ 




 	       return driver.findElement(By.tagName("body")).click(); 

  }, 363000)
 setTimeout(async()=>{ 




 	       return driver.findElement(By.xpath("//button[@type='submit']")).click(); 

  }, 364000)
 setTimeout(async()=>{ 




 	       return driver.findElement(By.id("metadata.vehicleType")).click(); 

  }, 365000)
 setTimeout(async()=>{ 




 	       return driver.findElement(By.id("metadata.vehicleType")).sendKeys("s"); 

  }, 366000)
 setTimeout(async()=>{ 




 	       return driver.findElement(By.tagName("body")).click(); 

  }, 367000)
 setTimeout(async()=>{ 




 	       return driver.findElement(By.id("metadata.year")).sendKeys("2012"); 

  }, 368000)
 setTimeout(async()=>{ 




 	       return driver.findElement(By.id("metadata.mileage")).sendKeys("1000"); 

  }, 369000)
 setTimeout(async()=>{ 




 	       return driver.findElement(By.id("metadata.fuel")).click(); 

  }, 370000)
 setTimeout(async()=>{ 




 	       return driver.findElement(By.id("metadata.fuel")).sendKeys("g"); 

  }, 371000)
 setTimeout(async()=>{ 




 	       return driver.findElement(By.id("metadata.fuel")).sendKeys("g"); 

  }, 372000)
 setTimeout(async()=>{ 




 	       return driver.findElement(By.id("metadata.horsePower")).sendKeys("4"); 

  }, 373000)
 setTimeout(async()=>{ 




 	       return driver.findElement(By.id("metadata.transmission")).click(); 

  }, 374000)
 setTimeout(async()=>{ 




 	       return driver.findElement(By.id("metadata.transmission")).sendKeys("a"); 

  }, 375000)
 setTimeout(async()=>{ 




 	       return driver.findElement(By.tagName("body")).click(); 

  }, 376000)
 setTimeout(async()=>{ 




 	       return driver.findElement(By.id("metadata.outsideColor")).click(); 

  }, 377000)
 setTimeout(async()=>{ 




 	       return driver.findElement(By.id("metadata.outsideColor")).sendKeys("r"); 

  }, 378000)
 setTimeout(async()=>{ 




 	       return driver.findElement(By.tagName("body")).click(); 

  }, 379000)
 setTimeout(async()=>{ 




 	       return driver.findElement(By.id("metadata.condition")).click(); 

  }, 380000)
 setTimeout(async()=>{ 




 	       return driver.findElement(By.id("metadata.condition")).sendKeys("u"); 

  }, 381000)
 setTimeout(async()=>{ 




 	       return driver.findElement(By.tagName("body")).click(); 

  }, 382000)
 setTimeout(async()=>{ 




 	       return driver.findElement(By.id("metadata.insideColor")).click(); 

  }, 383000)
 setTimeout(async()=>{ 




 	       return driver.findElement(By.id("metadata.insideColor")).sendKeys("n"); 

  }, 384000)
 setTimeout(async()=>{ 




 	       return driver.findElement(By.id("metadata.insideColor")).sendKeys("n"); 

  }, 385000)
 setTimeout(async()=>{ 




 	       return driver.findElement(By.tagName("body")).click(); 

  }, 386000)
 setTimeout(async()=>{ 




 	       return driver.findElement(By.id("metadata.make")).click(); 

  }, 387000)
 setTimeout(async()=>{ 




 	       return driver.findElement(By.id("metadata.make")).sendKeys("t"); 

  }, 388000)
 setTimeout(async()=>{ 




 	       return driver.findElement(By.id("metadata.make")).sendKeys("t"); 

  }, 389000)
 setTimeout(async()=>{ 




 	       return driver.findElement(By.tagName("body")).click(); 

  }, 390000)
 setTimeout(async()=>{ 




 	       return driver.findElement(By.id("metadata.model")).click(); 

  }, 391000)
 setTimeout(async()=>{ 




 	       return driver.findElement(By.id("metadata.model")).sendKeys("p"); 

  }, 392000)
 setTimeout(async()=>{ 




 	       return driver.findElement(By.tagName("body")).click(); 

  }, 393000)
 setTimeout(async()=>{ 




 	       return driver.findElement(By.tagName("body")).click(); 

  }, 394000)
 setTimeout(async()=>{ 




 	       return driver.findElement(By.xpath("//button[@type='submit']")).click(); 

  }, 395000)
 setTimeout(async()=>{ 




 	       return driver.findElement(By.id("price")).sendKeys(57500); 

  }, 396000)
 setTimeout(async()=>{ 




 	       return driver.findElement(By.id("region_0")).click(); 

  }, 397000)
 setTimeout(async()=>{ 




 	       return driver.findElement(By.id("region_0")).sendKeys("s"); 

  }, 398000)
 setTimeout(async()=>{ 




 	       return driver.findElement(By.id("region_0")).sendKeys("s"); 

  }, 399000)
 setTimeout(async()=>{ 




 	       return driver.findElement(By.id("region_0")).sendKeys("s"); 

  }, 400000)
 setTimeout(async()=>{ 




 	       return driver.findElement(By.id("region_0")).sendKeys("s"); 

  }, 401000)
 setTimeout(async()=>{ 




 	       return driver.findElement(By.id("region_0")).sendKeys("s"); 

  }, 402000)
 setTimeout(async()=>{ 




 	       return driver.findElement(By.id("region_0")).sendKeys("s"); 

  }, 403000)
 setTimeout(async()=>{ 




 	       return driver.findElement(By.id("region_0")).sendKeys("s"); 

  }, 404000)
 setTimeout(async()=>{ 




 	       return driver.findElement(By.id("region_0")).sendKeys("s"); 

  }, 405000)
 setTimeout(async()=>{ 




 	       return driver.findElement(By.tagName("body")).click(); 

  }, 406000)
 setTimeout(async()=>{ 




 	       return driver.findElement(By.id("region_1")).click(); 

  }, 407000)
 setTimeout(async()=>{ 




 	       return driver.findElement(By.id("region_1")).sendKeys("s"); 

  }, 408000)
 setTimeout(async()=>{ 




 	       return driver.findElement(By.xpath("//button[@type='submit']")).click(); 

  }, 409000)
 setTimeout(async()=>{ 




 	       return driver.findElement(By.xpath("//button[@type='submit']")).click(); 

  }, 410000)

      
/*****************************************
 * 
 * 
 * 
 * 
 * 
 * 
 */

setTimeout(async()=>{ 




  return driver.get("https://www.corotos.com.do/create") 

}, 420000)
setTimeout(async()=>{ 




  return driver.findElement(By.id("_tealiumModalClose")).click(); 

}, 424000)
setTimeout(async()=>{ 




  return driver.findElement(By.xpath("//input[@type='file']")).sendKeys("C:/Users/PUBLICADOR_COROTOS1/Desktop/honda_fit_rojo_3-8.jpg"); 

}, 428000)
setTimeout(async()=>{ 




  return driver.findElement(By.xpath("//button[@type='submit']")).click(); 

}, 432000)
setTimeout(async()=>{ 




  return driver.findElement(By.id("title")).sendKeys(dataMaster6.header); 

}, 436000)
setTimeout(async()=>{ 




  return driver.findElement(By.id("description")).sendKeys(dataMaster6.description); 

}, 437000)
setTimeout(async()=>{ 




  return driver.findElement(By.id("category_0")).click(); 

}, 438000)
setTimeout(async()=>{ 




  return driver.findElement(By.id("category_0")).sendKeys("v"); 

}, 439000)
setTimeout(async()=>{ 




  return driver.findElement(By.tagName("body")).click(); 

}, 440000)
setTimeout(async()=>{ 




  return driver.findElement(By.id("category_1")).click(); 

}, 441000)
setTimeout(async()=>{ 




  return driver.findElement(By.id("category_1")).sendKeys("j"); 

}, 442000)
setTimeout(async()=>{ 




  return driver.findElement(By.tagName("body")).click(); 

}, 443000)
setTimeout(async()=>{ 




  return driver.findElement(By.xpath("//button[@type='submit']")).click(); 

}, 444000)
setTimeout(async()=>{ 




  return driver.findElement(By.id("metadata.year")).sendKeys("2013"); 

}, 445000)
setTimeout(async()=>{ 




  return driver.findElement(By.id("metadata.mileage")).sendKeys("1000"); 

}, 446000)
setTimeout(async()=>{ 




  return driver.findElement(By.id("metadata.fuel")).click(); 

}, 447000)
setTimeout(async()=>{ 




  return driver.findElement(By.id("metadata.fuel")).sendKeys("g"); 

}, 448000)
setTimeout(async()=>{ 




  return driver.findElement(By.id("metadata.fuel")).sendKeys("g"); 

}, 449000)
setTimeout(async()=>{ 




  return driver.findElement(By.id("metadata.transmission")).click(); 

}, 450000)
setTimeout(async()=>{ 




  return driver.findElement(By.id("metadata.transmission")).sendKeys("a"); 

}, 451000)
setTimeout(async()=>{ 




  return driver.findElement(By.tagName("body")).click(); 

}, 452000)
setTimeout(async()=>{ 




  return driver.findElement(By.tagName("body")).click(); 

}, 453000)
setTimeout(async()=>{ 




  return driver.findElement(By.id("metadata.outsideColor")).click(); 

}, 454000)
setTimeout(async()=>{ 




  return driver.findElement(By.id("metadata.outsideColor")).sendKeys("r"); 

}, 455000)
setTimeout(async()=>{ 




  return driver.findElement(By.tagName("body")).click(); 

}, 456000)
setTimeout(async()=>{ 




  return driver.findElement(By.id("metadata.insideColor")).click(); 

}, 457000)
setTimeout(async()=>{ 




  return driver.findElement(By.id("metadata.insideColor")).sendKeys("n"); 

}, 458000)
setTimeout(async()=>{ 




  return driver.findElement(By.id("metadata.insideColor")).sendKeys("n"); 

}, 459000)
setTimeout(async()=>{ 




  return driver.findElement(By.tagName("body")).click(); 

}, 460000)
setTimeout(async()=>{ 




  return driver.findElement(By.id("metadata.horsePower")).sendKeys("4"); 

}, 461000)
setTimeout(async()=>{ 




  return driver.findElement(By.tagName("body")).click(); 

}, 462000)
setTimeout(async()=>{ 




  return driver.findElement(By.id("metadata.condition")).click(); 

}, 463000)
setTimeout(async()=>{ 




  return driver.findElement(By.id("metadata.condition")).sendKeys("u"); 

}, 464000)
setTimeout(async()=>{ 




  return driver.findElement(By.tagName("body")).click(); 

}, 465000)
setTimeout(async()=>{ 




  return driver.findElement(By.tagName("body")).click(); 

}, 466000)
setTimeout(async()=>{ 




  return driver.findElement(By.tagName("body")).click(); 

}, 467000)
setTimeout(async()=>{ 




  return driver.findElement(By.id("metadata.make")).click(); 

}, 468000)
setTimeout(async()=>{ 




  return driver.findElement(By.id("metadata.make")).sendKeys("h"); 

}, 469000)
setTimeout(async()=>{ 




  return driver.findElement(By.tagName("body")).click(); 

}, 470000)
setTimeout(async()=>{ 




  return driver.findElement(By.id("metadata.model")).click(); 

}, 471000)
setTimeout(async()=>{ 




  return driver.findElement(By.id("metadata.model")).sendKeys("f"); 

}, 472000)
setTimeout(async()=>{ 




  return driver.findElement(By.tagName("body")).click(); 

}, 473000)
setTimeout(async()=>{ 




  return driver.findElement(By.id("metadata.heavyVehicleType")).click(); 

}, 474000)
setTimeout(async()=>{ 




  return driver.findElement(By.id("metadata.heavyVehicleType")).sendKeys("j"); 

}, 475000)
setTimeout(async()=>{ 




  return driver.findElement(By.tagName("body")).click(); 

}, 476000)
setTimeout(async()=>{ 




  return driver.findElement(By.xpath("//button[@type='submit']")).click(); 

}, 477000)
setTimeout(async()=>{ 




  return driver.findElement(By.id("price")).sendKeys(99000); 

}, 478000)
setTimeout(async()=>{ 




  return driver.findElement(By.id("region_0")).click(); 

}, 479000)
setTimeout(async()=>{ 




  return driver.findElement(By.id("region_0")).sendKeys("s"); 

}, 480000)
setTimeout(async()=>{ 




  return driver.findElement(By.id("region_0")).sendKeys("s"); 

}, 481000)
setTimeout(async()=>{ 




  return driver.findElement(By.id("region_0")).sendKeys("s"); 

}, 482000)
setTimeout(async()=>{ 




  return driver.findElement(By.id("region_0")).sendKeys("s"); 

}, 483000)
setTimeout(async()=>{ 




  return driver.findElement(By.id("region_0")).sendKeys("s"); 

}, 484000)
setTimeout(async()=>{ 




  return driver.findElement(By.id("region_0")).sendKeys("s"); 

}, 485000)
setTimeout(async()=>{ 




  return driver.findElement(By.id("region_0")).sendKeys("s"); 

}, 486000)
setTimeout(async()=>{ 




  return driver.findElement(By.id("region_0")).sendKeys("s"); 

}, 487000)
setTimeout(async()=>{ 




  return driver.findElement(By.tagName("body")).click(); 

}, 488000)
setTimeout(async()=>{ 




  return driver.findElement(By.id("region_1")).click(); 

}, 489000)
setTimeout(async()=>{ 




  return driver.findElement(By.id("region_1")).sendKeys("s"); 

}, 490000)
setTimeout(async()=>{ 




  return driver.findElement(By.xpath("//button[@type='submit']")).click(); 

}, 491000)
setTimeout(async()=>{ 




  return driver.findElement(By.xpath("//button[@type='submit']")).click(); 

}, 492000)


/*********************************†
 * 
 * 
 * 
 * 
 * 
 * 
 * 
 * 
 */


setTimeout(async()=>{ 




  return driver.get("https://www.corotos.com.do/create") 

}, 500000)
setTimeout(async()=>{ 




  return driver.findElement(By.id("_tealiumModalClose")).click(); 

}, 504000)
setTimeout(async()=>{ 




  return driver.findElement(By.xpath("//input[@type='file']")).sendKeys("C:/Users/PUBLICADOR_COROTOS1/Desktop/honda_fit_rojo_3-6.jpg"); 

}, 508000)
setTimeout(async()=>{ 




  return driver.findElement(By.xpath("//button[@type='submit']")).click(); 

}, 512000)
setTimeout(async()=>{ 




  return driver.findElement(By.id("title")).sendKeys(dataMaster7.header); 

}, 516000)
setTimeout(async()=>{ 




  return driver.findElement(By.id("description")).sendKeys(dataMaster7.description); 

}, 517000)
setTimeout(async()=>{ 




  return driver.findElement(By.id("category_0")).click(); 

}, 518000)
setTimeout(async()=>{ 




  return driver.findElement(By.id("category_0")).sendKeys("v"); 

}, 519000)
setTimeout(async()=>{ 




  return driver.findElement(By.tagName("body")).click(); 

}, 520000)
setTimeout(async()=>{ 




  return driver.findElement(By.id("category_1")).click(); 

}, 521000)
setTimeout(async()=>{ 




  return driver.findElement(By.id("category_1")).sendKeys("j"); 

}, 522000)
setTimeout(async()=>{ 




  return driver.findElement(By.tagName("body")).click(); 

}, 523000)
setTimeout(async()=>{ 




  return driver.findElement(By.xpath("//button[@type='submit']")).click(); 

}, 524000)
setTimeout(async()=>{ 




  return driver.findElement(By.id("metadata.year")).sendKeys("2013"); 

}, 525000)
setTimeout(async()=>{ 




  return driver.findElement(By.id("metadata.mileage")).sendKeys("1000"); 

}, 526000)
setTimeout(async()=>{ 




  return driver.findElement(By.id("metadata.fuel")).click(); 

}, 527000)
setTimeout(async()=>{ 




  return driver.findElement(By.id("metadata.fuel")).sendKeys("g"); 

}, 528000)
setTimeout(async()=>{ 




  return driver.findElement(By.id("metadata.fuel")).sendKeys("g"); 

}, 529000)
setTimeout(async()=>{ 




  return driver.findElement(By.id("metadata.transmission")).click(); 

}, 530000)
setTimeout(async()=>{ 




  return driver.findElement(By.id("metadata.transmission")).sendKeys("a"); 

}, 531000)
setTimeout(async()=>{ 




  return driver.findElement(By.tagName("body")).click(); 

}, 532000)
setTimeout(async()=>{ 




  return driver.findElement(By.tagName("body")).click(); 

}, 533000)
setTimeout(async()=>{ 




  return driver.findElement(By.id("metadata.outsideColor")).click(); 

}, 534000)
setTimeout(async()=>{ 




  return driver.findElement(By.id("metadata.outsideColor")).sendKeys("r"); 

}, 535000)
setTimeout(async()=>{ 




  return driver.findElement(By.tagName("body")).click(); 

}, 536000)
setTimeout(async()=>{ 




  return driver.findElement(By.id("metadata.insideColor")).click(); 

}, 537000)
setTimeout(async()=>{ 




  return driver.findElement(By.id("metadata.insideColor")).sendKeys("n"); 

}, 538000)
setTimeout(async()=>{ 




  return driver.findElement(By.id("metadata.insideColor")).sendKeys("n"); 

}, 539000)
setTimeout(async()=>{ 




  return driver.findElement(By.tagName("body")).click(); 

}, 540000)
setTimeout(async()=>{ 




  return driver.findElement(By.id("metadata.horsePower")).sendKeys("4"); 

}, 541000)
setTimeout(async()=>{ 




  return driver.findElement(By.tagName("body")).click(); 

}, 542000)
setTimeout(async()=>{ 




  return driver.findElement(By.id("metadata.condition")).click(); 

}, 543000)
setTimeout(async()=>{ 




  return driver.findElement(By.id("metadata.condition")).sendKeys("u"); 

}, 544000)
setTimeout(async()=>{ 




  return driver.findElement(By.tagName("body")).click(); 

}, 545000)
setTimeout(async()=>{ 




  return driver.findElement(By.tagName("body")).click(); 

}, 546000)
setTimeout(async()=>{ 




  return driver.findElement(By.tagName("body")).click(); 

}, 547000)
setTimeout(async()=>{ 




  return driver.findElement(By.id("metadata.make")).click(); 

}, 548000)
setTimeout(async()=>{ 




  return driver.findElement(By.id("metadata.make")).sendKeys("h"); 

}, 549000)
setTimeout(async()=>{ 




  return driver.findElement(By.tagName("body")).click(); 

}, 550000)
setTimeout(async()=>{ 




  return driver.findElement(By.id("metadata.model")).click(); 

}, 551000)
setTimeout(async()=>{ 




  return driver.findElement(By.id("metadata.model")).sendKeys("f"); 

}, 552000)
setTimeout(async()=>{ 




  return driver.findElement(By.tagName("body")).click(); 

}, 553000)
setTimeout(async()=>{ 




  return driver.findElement(By.id("metadata.heavyVehicleType")).click(); 

}, 554000)
setTimeout(async()=>{ 




  return driver.findElement(By.id("metadata.heavyVehicleType")).sendKeys("j"); 

}, 555000)
setTimeout(async()=>{ 




  return driver.findElement(By.tagName("body")).click(); 

}, 556000)
setTimeout(async()=>{ 




  return driver.findElement(By.xpath("//button[@type='submit']")).click(); 

}, 557000)
setTimeout(async()=>{ 




  return driver.findElement(By.id("price")).sendKeys(73000); 

}, 558000)
setTimeout(async()=>{ 




  return driver.findElement(By.id("region_0")).click(); 

}, 559000)
setTimeout(async()=>{ 




  return driver.findElement(By.id("region_0")).sendKeys("s"); 

}, 560000)
setTimeout(async()=>{ 




  return driver.findElement(By.id("region_0")).sendKeys("s"); 

}, 561000)
setTimeout(async()=>{ 




  return driver.findElement(By.id("region_0")).sendKeys("s"); 

}, 562000)
setTimeout(async()=>{ 




  return driver.findElement(By.id("region_0")).sendKeys("s"); 

}, 563000)
setTimeout(async()=>{ 




  return driver.findElement(By.id("region_0")).sendKeys("s"); 

}, 564000)
setTimeout(async()=>{ 




  return driver.findElement(By.id("region_0")).sendKeys("s"); 

}, 565000)
setTimeout(async()=>{ 




  return driver.findElement(By.id("region_0")).sendKeys("s"); 

}, 566000)
setTimeout(async()=>{ 




  return driver.findElement(By.id("region_0")).sendKeys("s"); 

}, 567000)
setTimeout(async()=>{ 




  return driver.findElement(By.tagName("body")).click(); 

}, 568000)
setTimeout(async()=>{ 




  return driver.findElement(By.id("region_1")).click(); 

}, 569000)
setTimeout(async()=>{ 




  return driver.findElement(By.id("region_1")).sendKeys("s"); 

}, 570000)
setTimeout(async()=>{ 




  return driver.findElement(By.xpath("//button[@type='submit']")).click(); 

}, 571000)
setTimeout(async()=>{ 




  return driver.findElement(By.xpath("//button[@type='submit']")).click(); 

}, 572000)








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
