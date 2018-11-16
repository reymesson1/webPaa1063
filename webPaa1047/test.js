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




      return driver.findElement(By.xpath("//input[@type='file']")).sendKeys("C:/Users/PUBLICADOR_COROTOS1/Desktop/IMG-20181020-WA0060.jpg"); 

}, 33000)
setTimeout(async()=>{ 


      return driver.findElement(By.xpath("//input[@type='file']")).sendKeys("C:/Users/PUBLICADOR_COROTOS1/Desktop/IMG-20181020-WA0063.jpg"); 



}, 37000)
setTimeout(async()=>{ 




      return driver.findElement(By.xpath("//button[@type='submit']")).click(); 

}, 41000)
setTimeout(async()=>{ 




      return driver.findElement(By.id("title")).sendKeys(dataMaster.header); 

}, 42000)
setTimeout(async()=>{ 




      return driver.findElement(By.id("description")).sendKeys(dataMaster.description); 

}, 43000)
setTimeout(async()=>{ 




      return driver.findElement(By.id("category_0")).click(); 

}, 44000)
setTimeout(async()=>{ 




      return driver.findElement(By.id("category_0")).sendKeys("v"); 

}, 45000)
setTimeout(async()=>{ 




      return driver.findElement(By.tagName("body")).click(); 

}, 46000)
setTimeout(async()=>{ 




      return driver.findElement(By.id("category_1")).click(); 

}, 47000)
setTimeout(async()=>{ 




      return driver.findElement(By.id("category_1")).sendKeys("j"); 

}, 48000)
setTimeout(async()=>{ 




      return driver.findElement(By.tagName("body")).click(); 

}, 49000)
setTimeout(async()=>{ 




      return driver.findElement(By.xpath("//button[@type='submit']")).click(); 

}, 50000)
setTimeout(async()=>{ 




      return driver.findElement(By.id("metadata.year")).sendKeys("2013"); 

}, 52000)
setTimeout(async()=>{ 




      return driver.findElement(By.id("metadata.mileage")).sendKeys("1000"); 

}, 52000)
setTimeout(async()=>{ 




      return driver.findElement(By.id("metadata.fuel")).click(); 

}, 53000)
setTimeout(async()=>{ 




      return driver.findElement(By.id("metadata.fuel")).sendKeys("g"); 

}, 54000)
setTimeout(async()=>{ 




      return driver.findElement(By.id("metadata.fuel")).sendKeys("g"); 

}, 55000)
setTimeout(async()=>{ 




      return driver.findElement(By.id("metadata.transmission")).click(); 

}, 56000)
setTimeout(async()=>{ 




      return driver.findElement(By.id("metadata.transmission")).sendKeys("a"); 

}, 57000)
setTimeout(async()=>{ 




      return driver.findElement(By.tagName("body")).click(); 

}, 58000)
setTimeout(async()=>{ 




      return driver.findElement(By.tagName("body")).click(); 

}, 59000)
setTimeout(async()=>{ 




      return driver.findElement(By.id("metadata.outsideColor")).click(); 

}, 60000)
setTimeout(async()=>{ 




      return driver.findElement(By.id("metadata.outsideColor")).sendKeys("r"); 

}, 61000)
setTimeout(async()=>{ 




      return driver.findElement(By.tagName("body")).click(); 

}, 62000)
setTimeout(async()=>{ 




      return driver.findElement(By.id("metadata.insideColor")).click(); 

}, 63000)
setTimeout(async()=>{ 




      return driver.findElement(By.id("metadata.insideColor")).sendKeys("n"); 

}, 64000)
setTimeout(async()=>{ 




      return driver.findElement(By.id("metadata.insideColor")).sendKeys("n"); 

}, 65000)
setTimeout(async()=>{ 




      return driver.findElement(By.tagName("body")).click(); 

}, 66000)
setTimeout(async()=>{ 




      return driver.findElement(By.id("metadata.horsePower")).sendKeys("4"); 

}, 67000)
setTimeout(async()=>{ 




      return driver.findElement(By.tagName("body")).click(); 

}, 68000)
setTimeout(async()=>{ 




      return driver.findElement(By.id("metadata.condition")).click(); 

}, 69000)
setTimeout(async()=>{ 




      return driver.findElement(By.id("metadata.condition")).sendKeys("u"); 

}, 70000)
setTimeout(async()=>{ 




      return driver.findElement(By.tagName("body")).click(); 

}, 71000)
setTimeout(async()=>{ 




      return driver.findElement(By.tagName("body")).click(); 

}, 72000)
setTimeout(async()=>{ 




      return driver.findElement(By.tagName("body")).click(); 

}, 73000)
setTimeout(async()=>{ 




      return driver.findElement(By.id("metadata.make")).click(); 

}, 74000)
setTimeout(async()=>{ 




      return driver.findElement(By.id("metadata.make")).sendKeys("h"); 

}, 75000)
setTimeout(async()=>{ 




      return driver.findElement(By.tagName("body")).click(); 

}, 76000)
setTimeout(async()=>{ 




      return driver.findElement(By.id("metadata.model")).click(); 

}, 77000)
setTimeout(async()=>{ 




      return driver.findElement(By.id("metadata.model")).sendKeys("f"); 

}, 78000)
setTimeout(async()=>{ 




      return driver.findElement(By.tagName("body")).click(); 

}, 79000)
setTimeout(async()=>{ 




      return driver.findElement(By.id("metadata.heavyVehicleType")).click(); 

}, 80000)
setTimeout(async()=>{ 




      return driver.findElement(By.id("metadata.heavyVehicleType")).sendKeys("j"); 

}, 81000)
setTimeout(async()=>{ 




      return driver.findElement(By.tagName("body")).click(); 

}, 82000)
setTimeout(async()=>{ 




      return driver.findElement(By.xpath("//button[@type='submit']")).click(); 

}, 83000)
setTimeout(async()=>{ 




      return driver.findElement(By.id("price")).sendKeys(99000); 

}, 84000)
setTimeout(async()=>{ 




      return driver.findElement(By.id("region_0")).click(); 

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




      return driver.findElement(By.id("region_0")).sendKeys("s"); 

}, 91000)
setTimeout(async()=>{ 




      return driver.findElement(By.id("region_0")).sendKeys("s"); 

}, 92000)
setTimeout(async()=>{ 




      return driver.findElement(By.id("region_0")).sendKeys("s"); 

}, 93000)
setTimeout(async()=>{ 




      return driver.findElement(By.tagName("body")).click(); 

}, 94000)
setTimeout(async()=>{ 




      return driver.findElement(By.id("region_1")).click(); 

}, 95000)
setTimeout(async()=>{ 




      return driver.findElement(By.id("region_1")).sendKeys("s"); 

}, 96000)
setTimeout(async()=>{ 




      return driver.findElement(By.xpath("//button[@type='submit']")).click(); 

}, 97000)
setTimeout(async()=>{ 




      return driver.findElement(By.xpath("//button[@type='submit']")).click(); 

}, 98000)



/********************************
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

}, 100000)
setTimeout(async()=>{ 




      return driver.findElement(By.id("_tealiumModalClose")).click(); 

}, 104000)
setTimeout(async()=>{ 



      return driver.findElement(By.xpath("//input[@type='file']")).sendKeys("C:/Users/PUBLICADOR_COROTOS1/Desktop/IMG-20181106-WA0018.jpg"); 


}, 108000)
setTimeout(async()=>{ 



      return driver.findElement(By.xpath("//input[@type='file']")).sendKeys("C:/Users/PUBLICADOR_COROTOS1/Desktop/IMG-20181106-WA0017.jpg"); 


}, 112000)
setTimeout(async()=>{ 




      return driver.findElement(By.xpath("//button[@type='submit']")).click(); 

}, 116000)
setTimeout(async()=>{ 




      return driver.findElement(By.id("title")).sendKeys(dataMaster2.header); 

}, 117000)
setTimeout(async()=>{ 




      return driver.findElement(By.id("description")).sendKeys(dataMaster2.description); 

}, 118000)
setTimeout(async()=>{ 




      return driver.findElement(By.id("category_0")).click(); 

}, 119000)
setTimeout(async()=>{ 




      return driver.findElement(By.id("category_0")).sendKeys("v"); 

}, 120000)
setTimeout(async()=>{ 




      return driver.findElement(By.tagName("body")).click(); 

}, 121000)
setTimeout(async()=>{ 




      return driver.findElement(By.id("category_1")).click(); 

}, 122000)
setTimeout(async()=>{ 




      return driver.findElement(By.id("category_1")).sendKeys("j"); 

}, 123000)
setTimeout(async()=>{ 




      return driver.findElement(By.tagName("body")).click(); 

}, 124000)
setTimeout(async()=>{ 




      return driver.findElement(By.xpath("//button[@type='submit']")).click(); 

}, 125000)
setTimeout(async()=>{ 




      return driver.findElement(By.id("metadata.year")).sendKeys("2013"); 

}, 127000)
setTimeout(async()=>{ 




      return driver.findElement(By.id("metadata.mileage")).sendKeys("1000"); 

}, 127000)
setTimeout(async()=>{ 




      return driver.findElement(By.id("metadata.fuel")).click(); 

}, 128000)
setTimeout(async()=>{ 




      return driver.findElement(By.id("metadata.fuel")).sendKeys("g"); 

}, 129000)
setTimeout(async()=>{ 




      return driver.findElement(By.id("metadata.fuel")).sendKeys("g"); 

}, 130000)
setTimeout(async()=>{ 




      return driver.findElement(By.id("metadata.transmission")).click(); 

}, 131000)
setTimeout(async()=>{ 




      return driver.findElement(By.id("metadata.transmission")).sendKeys("a"); 

}, 132000)
setTimeout(async()=>{ 




      return driver.findElement(By.tagName("body")).click(); 

}, 133000)
setTimeout(async()=>{ 




      return driver.findElement(By.tagName("body")).click(); 

}, 134000)
setTimeout(async()=>{ 




      return driver.findElement(By.id("metadata.outsideColor")).click(); 

}, 135000)
setTimeout(async()=>{ 




      return driver.findElement(By.id("metadata.outsideColor")).sendKeys("r"); 

}, 136000)
setTimeout(async()=>{ 




      return driver.findElement(By.tagName("body")).click(); 

}, 137000)
setTimeout(async()=>{ 




      return driver.findElement(By.id("metadata.insideColor")).click(); 

}, 138000)
setTimeout(async()=>{ 




      return driver.findElement(By.id("metadata.insideColor")).sendKeys("n"); 

}, 139000)
setTimeout(async()=>{ 




      return driver.findElement(By.id("metadata.insideColor")).sendKeys("n"); 

}, 140000)
setTimeout(async()=>{ 




      return driver.findElement(By.tagName("body")).click(); 

}, 141000)
setTimeout(async()=>{ 




      return driver.findElement(By.id("metadata.horsePower")).sendKeys("4"); 

}, 142000)
setTimeout(async()=>{ 




      return driver.findElement(By.tagName("body")).click(); 

}, 143000)
setTimeout(async()=>{ 




      return driver.findElement(By.id("metadata.condition")).click(); 

}, 144000)
setTimeout(async()=>{ 




      return driver.findElement(By.id("metadata.condition")).sendKeys("u"); 

}, 145000)
setTimeout(async()=>{ 




      return driver.findElement(By.tagName("body")).click(); 

}, 146000)
setTimeout(async()=>{ 




      return driver.findElement(By.tagName("body")).click(); 

}, 147000)
setTimeout(async()=>{ 




      return driver.findElement(By.tagName("body")).click(); 

}, 148000)
setTimeout(async()=>{ 




      return driver.findElement(By.id("metadata.make")).click(); 

}, 149000)
setTimeout(async()=>{ 




      return driver.findElement(By.id("metadata.make")).sendKeys("h"); 

}, 150000)
setTimeout(async()=>{ 




      return driver.findElement(By.tagName("body")).click(); 

}, 151000)
setTimeout(async()=>{ 




      return driver.findElement(By.id("metadata.model")).click(); 

}, 152000)
setTimeout(async()=>{ 




      return driver.findElement(By.id("metadata.model")).sendKeys("f"); 

}, 153000)
setTimeout(async()=>{ 




      return driver.findElement(By.tagName("body")).click(); 

}, 154000)
setTimeout(async()=>{ 




      return driver.findElement(By.id("metadata.heavyVehicleType")).click(); 

}, 155000)
setTimeout(async()=>{ 




      return driver.findElement(By.id("metadata.heavyVehicleType")).sendKeys("j"); 

}, 156000)
setTimeout(async()=>{ 




      return driver.findElement(By.tagName("body")).click(); 

}, 157000)
setTimeout(async()=>{ 




      return driver.findElement(By.xpath("//button[@type='submit']")).click(); 

}, 158000)
setTimeout(async()=>{ 




      return driver.findElement(By.id("price")).sendKeys(46000); 

}, 159000)
setTimeout(async()=>{ 




      return driver.findElement(By.id("region_0")).click(); 

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




      return driver.findElement(By.id("region_0")).sendKeys("s"); 

}, 166000)
setTimeout(async()=>{ 




      return driver.findElement(By.id("region_0")).sendKeys("s"); 

}, 167000)
setTimeout(async()=>{ 




      return driver.findElement(By.id("region_0")).sendKeys("s"); 

}, 168000)
setTimeout(async()=>{ 




      return driver.findElement(By.tagName("body")).click(); 

}, 169000)
setTimeout(async()=>{ 




      return driver.findElement(By.id("region_1")).click(); 

}, 170000)
setTimeout(async()=>{ 




      return driver.findElement(By.id("region_1")).sendKeys("s"); 

}, 171000)
setTimeout(async()=>{ 




      return driver.findElement(By.xpath("//button[@type='submit']")).click(); 

}, 172000)
setTimeout(async()=>{ 




      return driver.findElement(By.xpath("//button[@type='submit']")).click(); 

}, 173000)


/***********************************
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


      
      return driver.findElement(By.xpath("//input[@type='file']")).sendKeys("C:/Users/PUBLICADOR_COROTOS1/Desktop/IMG-20181108-WA0015.jpg"); 


}, 188000)
setTimeout(async()=>{ 



      return driver.findElement(By.xpath("//input[@type='file']")).sendKeys("C:/Users/PUBLICADOR_COROTOS1/Desktop/IMG-20181108-WA0018.jpg"); 


}, 192000)
setTimeout(async()=>{ 




      return driver.findElement(By.xpath("//button[@type='submit']")).click(); 

}, 196000)
setTimeout(async()=>{ 




      return driver.findElement(By.id("title")).sendKeys(dataMaster3.header); 

}, 197000)
setTimeout(async()=>{ 




      return driver.findElement(By.id("description")).sendKeys(dataMaster3.description); 

}, 198000)
setTimeout(async()=>{ 




      return driver.findElement(By.id("category_0")).click(); 

}, 199000)
setTimeout(async()=>{ 




      return driver.findElement(By.id("category_0")).sendKeys("v"); 

}, 200000)
setTimeout(async()=>{ 




      return driver.findElement(By.tagName("body")).click(); 

}, 201000)
setTimeout(async()=>{ 




      return driver.findElement(By.id("category_1")).click(); 

}, 202000)
setTimeout(async()=>{ 




      return driver.findElement(By.id("category_1")).sendKeys("j"); 

}, 203000)
setTimeout(async()=>{ 




      return driver.findElement(By.tagName("body")).click(); 

}, 204000)
setTimeout(async()=>{ 




      return driver.findElement(By.xpath("//button[@type='submit']")).click(); 

}, 205000)
setTimeout(async()=>{ 




      return driver.findElement(By.id("metadata.year")).sendKeys("2013"); 

}, 207000)
setTimeout(async()=>{ 




      return driver.findElement(By.id("metadata.mileage")).sendKeys("1000"); 

}, 207000)
setTimeout(async()=>{ 




      return driver.findElement(By.id("metadata.fuel")).click(); 

}, 208000)
setTimeout(async()=>{ 




      return driver.findElement(By.id("metadata.fuel")).sendKeys("g"); 

}, 209000)
setTimeout(async()=>{ 




      return driver.findElement(By.id("metadata.fuel")).sendKeys("g"); 

}, 210000)
setTimeout(async()=>{ 




      return driver.findElement(By.id("metadata.transmission")).click(); 

}, 211000)
setTimeout(async()=>{ 




      return driver.findElement(By.id("metadata.transmission")).sendKeys("a"); 

}, 212000)
setTimeout(async()=>{ 




      return driver.findElement(By.tagName("body")).click(); 

}, 213000)
setTimeout(async()=>{ 




      return driver.findElement(By.tagName("body")).click(); 

}, 214000)
setTimeout(async()=>{ 




      return driver.findElement(By.id("metadata.outsideColor")).click(); 

}, 215000)
setTimeout(async()=>{ 




      return driver.findElement(By.id("metadata.outsideColor")).sendKeys("r"); 

}, 216000)
setTimeout(async()=>{ 




      return driver.findElement(By.tagName("body")).click(); 

}, 217000)
setTimeout(async()=>{ 




      return driver.findElement(By.id("metadata.insideColor")).click(); 

}, 218000)
setTimeout(async()=>{ 




      return driver.findElement(By.id("metadata.insideColor")).sendKeys("n"); 

}, 219000)
setTimeout(async()=>{ 




      return driver.findElement(By.id("metadata.insideColor")).sendKeys("n"); 

}, 220000)
setTimeout(async()=>{ 




      return driver.findElement(By.tagName("body")).click(); 

}, 221000)
setTimeout(async()=>{ 




      return driver.findElement(By.id("metadata.horsePower")).sendKeys("4"); 

}, 222000)
setTimeout(async()=>{ 




      return driver.findElement(By.tagName("body")).click(); 

}, 223000)
setTimeout(async()=>{ 




      return driver.findElement(By.id("metadata.condition")).click(); 

}, 224000)
setTimeout(async()=>{ 




      return driver.findElement(By.id("metadata.condition")).sendKeys("u"); 

}, 225000)
setTimeout(async()=>{ 




      return driver.findElement(By.tagName("body")).click(); 

}, 226000)
setTimeout(async()=>{ 




      return driver.findElement(By.tagName("body")).click(); 

}, 227000)
setTimeout(async()=>{ 




      return driver.findElement(By.tagName("body")).click(); 

}, 228000)
setTimeout(async()=>{ 




      return driver.findElement(By.id("metadata.make")).click(); 

}, 229000)
setTimeout(async()=>{ 




      return driver.findElement(By.id("metadata.make")).sendKeys("h"); 

}, 230000)
setTimeout(async()=>{ 




      return driver.findElement(By.tagName("body")).click(); 

}, 231000)
setTimeout(async()=>{ 




      return driver.findElement(By.id("metadata.model")).click(); 

}, 232000)
setTimeout(async()=>{ 




      return driver.findElement(By.id("metadata.model")).sendKeys("f"); 

}, 233000)
setTimeout(async()=>{ 




      return driver.findElement(By.tagName("body")).click(); 

}, 234000)
setTimeout(async()=>{ 




      return driver.findElement(By.id("metadata.heavyVehicleType")).click(); 

}, 235000)
setTimeout(async()=>{ 




      return driver.findElement(By.id("metadata.heavyVehicleType")).sendKeys("j"); 

}, 236000)
setTimeout(async()=>{ 




      return driver.findElement(By.tagName("body")).click(); 

}, 237000)
setTimeout(async()=>{ 




      return driver.findElement(By.xpath("//button[@type='submit']")).click(); 

}, 238000)
setTimeout(async()=>{ 




      return driver.findElement(By.id("price")).sendKeys(69000); 

}, 239000)
setTimeout(async()=>{ 




      return driver.findElement(By.id("region_0")).click(); 

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




      return driver.findElement(By.id("region_0")).sendKeys("s"); 

}, 246000)
setTimeout(async()=>{ 




      return driver.findElement(By.id("region_0")).sendKeys("s"); 

}, 247000)
setTimeout(async()=>{ 




      return driver.findElement(By.id("region_0")).sendKeys("s"); 

}, 248000)
setTimeout(async()=>{ 




      return driver.findElement(By.tagName("body")).click(); 

}, 249000)
setTimeout(async()=>{ 




      return driver.findElement(By.id("region_1")).click(); 

}, 250000)
setTimeout(async()=>{ 




      return driver.findElement(By.id("region_1")).sendKeys("s"); 

}, 251000)
setTimeout(async()=>{ 




      return driver.findElement(By.xpath("//button[@type='submit']")).click(); 

}, 252000)
setTimeout(async()=>{ 




      return driver.findElement(By.xpath("//button[@type='submit']")).click(); 

}, 253000)


/**********************************************
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

}, 260000)
setTimeout(async()=>{ 




      return driver.findElement(By.id("_tealiumModalClose")).click(); 

}, 264000)
setTimeout(async()=>{ 


      return driver.findElement(By.xpath("//input[@type='file']")).sendKeys("C:/Users/PUBLICADOR_COROTOS1/Desktop/IMG-20181106-WA0034.jpg"); 



}, 268000)
setTimeout(async()=>{ 



      return driver.findElement(By.xpath("//input[@type='file']")).sendKeys("C:/Users/PUBLICADOR_COROTOS1/Desktop/IMG-20181106-WA0031.jpg"); 


}, 272000)
setTimeout(async()=>{ 




      return driver.findElement(By.xpath("//button[@type='submit']")).click(); 

}, 276000)
setTimeout(async()=>{ 




      return driver.findElement(By.id("title")).sendKeys(dataMaster4.header); 

}, 277000)
setTimeout(async()=>{ 




      return driver.findElement(By.id("description")).sendKeys(dataMaster4.description); 

}, 278000)
setTimeout(async()=>{ 




      return driver.findElement(By.id("category_0")).click(); 

}, 279000)
setTimeout(async()=>{ 




      return driver.findElement(By.id("category_0")).sendKeys("v"); 

}, 280000)
setTimeout(async()=>{ 




      return driver.findElement(By.tagName("body")).click(); 

}, 281000)
setTimeout(async()=>{ 




      return driver.findElement(By.id("category_1")).click(); 

}, 282000)
setTimeout(async()=>{ 




      return driver.findElement(By.id("category_1")).sendKeys("j"); 

}, 283000)
setTimeout(async()=>{ 




      return driver.findElement(By.tagName("body")).click(); 

}, 284000)
setTimeout(async()=>{ 




      return driver.findElement(By.xpath("//button[@type='submit']")).click(); 

}, 285000)
setTimeout(async()=>{ 




      return driver.findElement(By.id("metadata.year")).sendKeys("2013"); 

}, 286000)
setTimeout(async()=>{ 




      return driver.findElement(By.id("metadata.mileage")).sendKeys("1000"); 

}, 287000)
setTimeout(async()=>{ 




      return driver.findElement(By.id("metadata.fuel")).click(); 

}, 288000)
setTimeout(async()=>{ 




      return driver.findElement(By.id("metadata.fuel")).sendKeys("g"); 

}, 289000)
setTimeout(async()=>{ 




      return driver.findElement(By.id("metadata.fuel")).sendKeys("g"); 

}, 290000)
setTimeout(async()=>{ 




      return driver.findElement(By.id("metadata.transmission")).click(); 

}, 291000)
setTimeout(async()=>{ 




      return driver.findElement(By.id("metadata.transmission")).sendKeys("a"); 

}, 292000)
setTimeout(async()=>{ 




      return driver.findElement(By.tagName("body")).click(); 

}, 293000)
setTimeout(async()=>{ 




      return driver.findElement(By.tagName("body")).click(); 

}, 294000)
setTimeout(async()=>{ 




      return driver.findElement(By.id("metadata.outsideColor")).click(); 

}, 295000)
setTimeout(async()=>{ 




      return driver.findElement(By.id("metadata.outsideColor")).sendKeys("r"); 

}, 296000)
setTimeout(async()=>{ 




      return driver.findElement(By.tagName("body")).click(); 

}, 297000)
setTimeout(async()=>{ 




      return driver.findElement(By.id("metadata.insideColor")).click(); 

}, 298000)
setTimeout(async()=>{ 




      return driver.findElement(By.id("metadata.insideColor")).sendKeys("n"); 

}, 299000)
setTimeout(async()=>{ 




      return driver.findElement(By.id("metadata.insideColor")).sendKeys("n"); 

}, 300000)
setTimeout(async()=>{ 




      return driver.findElement(By.tagName("body")).click(); 

}, 301000)
setTimeout(async()=>{ 




      return driver.findElement(By.id("metadata.horsePower")).sendKeys("4"); 

}, 302000)
setTimeout(async()=>{ 




      return driver.findElement(By.tagName("body")).click(); 

}, 303000)
setTimeout(async()=>{ 




      return driver.findElement(By.id("metadata.condition")).click(); 

}, 304000)
setTimeout(async()=>{ 




      return driver.findElement(By.id("metadata.condition")).sendKeys("u"); 

}, 305000)
setTimeout(async()=>{ 




      return driver.findElement(By.tagName("body")).click(); 

}, 306000)
setTimeout(async()=>{ 




      return driver.findElement(By.tagName("body")).click(); 

}, 307000)
setTimeout(async()=>{ 




      return driver.findElement(By.tagName("body")).click(); 

}, 308000)
setTimeout(async()=>{ 




      return driver.findElement(By.id("metadata.make")).click(); 

}, 309000)
setTimeout(async()=>{ 




      return driver.findElement(By.id("metadata.make")).sendKeys("h"); 

}, 310000)
setTimeout(async()=>{ 




      return driver.findElement(By.tagName("body")).click(); 

}, 311000)
setTimeout(async()=>{ 




      return driver.findElement(By.id("metadata.model")).click(); 

}, 312000)
setTimeout(async()=>{ 




      return driver.findElement(By.id("metadata.model")).sendKeys("f"); 

}, 313000)
setTimeout(async()=>{ 




      return driver.findElement(By.tagName("body")).click(); 

}, 314000)
setTimeout(async()=>{ 




      return driver.findElement(By.id("metadata.heavyVehicleType")).click(); 

}, 315000)
setTimeout(async()=>{ 




      return driver.findElement(By.id("metadata.heavyVehicleType")).sendKeys("j"); 

}, 316000)
setTimeout(async()=>{ 




      return driver.findElement(By.tagName("body")).click(); 

}, 317000)
setTimeout(async()=>{ 




      return driver.findElement(By.xpath("//button[@type='submit']")).click(); 

}, 318000)
setTimeout(async()=>{ 




      return driver.findElement(By.id("price")).sendKeys(37000); 

}, 319000)
setTimeout(async()=>{ 




      return driver.findElement(By.id("region_0")).click(); 

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




      return driver.findElement(By.id("region_0")).sendKeys("s"); 

}, 326000)
setTimeout(async()=>{ 




      return driver.findElement(By.id("region_0")).sendKeys("s"); 

}, 327000)
setTimeout(async()=>{ 




      return driver.findElement(By.id("region_0")).sendKeys("s"); 

}, 328000)
setTimeout(async()=>{ 




      return driver.findElement(By.tagName("body")).click(); 

}, 329000)
setTimeout(async()=>{ 




      return driver.findElement(By.id("region_1")).click(); 

}, 330000)
setTimeout(async()=>{ 




      return driver.findElement(By.id("region_1")).sendKeys("s"); 

}, 331000)
setTimeout(async()=>{ 




      return driver.findElement(By.xpath("//button[@type='submit']")).click(); 

}, 332000)
setTimeout(async()=>{ 




      return driver.findElement(By.xpath("//button[@type='submit']")).click(); 

}, 333000)

/********************
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


      return driver.findElement(By.xpath("//input[@type='file']")).sendKeys("C:/Users/PUBLICADOR_COROTOS1/Desktop/IMG-20181009-WA0014.jpg"); 



}, 348000)
setTimeout(async()=>{ 

      return driver.findElement(By.xpath("//input[@type='file']")).sendKeys("C:/Users/PUBLICADOR_COROTOS1/Desktop/IMG-20181009-WA0013.jpg"); 




}, 352000)
setTimeout(async()=>{ 




      return driver.findElement(By.xpath("//button[@type='submit']")).click(); 

}, 356000)
setTimeout(async()=>{ 




      return driver.findElement(By.id("title")).sendKeys(dataMaster5.header); 

}, 357000)
setTimeout(async()=>{ 




      return driver.findElement(By.id("description")).sendKeys(dataMaster5.description); 

}, 358000)
setTimeout(async()=>{ 




      return driver.findElement(By.id("category_0")).click(); 

}, 359000)
setTimeout(async()=>{ 




      return driver.findElement(By.id("category_0")).sendKeys("v"); 

}, 360000)
setTimeout(async()=>{ 




      return driver.findElement(By.tagName("body")).click(); 

}, 361000)
setTimeout(async()=>{ 




      return driver.findElement(By.id("category_1")).click(); 

}, 362000)
setTimeout(async()=>{ 




      return driver.findElement(By.id("category_1")).sendKeys("c"); 

}, 363000)
setTimeout(async()=>{ 




      return driver.findElement(By.tagName("body")).click(); 

}, 364000)
setTimeout(async()=>{ 




      return driver.findElement(By.xpath("//button[@type='submit']")).click(); 

}, 365000)
setTimeout(async()=>{ 




      return driver.findElement(By.id("metadata.vehicleType")).click(); 

}, 366000)
setTimeout(async()=>{ 




      return driver.findElement(By.id("metadata.vehicleType")).sendKeys("s"); 

}, 367000)
setTimeout(async()=>{ 




      return driver.findElement(By.tagName("body")).click(); 

}, 368000)
setTimeout(async()=>{ 




      return driver.findElement(By.id("metadata.year")).sendKeys("2012"); 

}, 369000)
setTimeout(async()=>{ 




      return driver.findElement(By.id("metadata.mileage")).sendKeys("1000"); 

}, 370000)
setTimeout(async()=>{ 




      return driver.findElement(By.id("metadata.fuel")).click(); 

}, 371000)
setTimeout(async()=>{ 




      return driver.findElement(By.id("metadata.fuel")).sendKeys("g"); 

}, 372000)
setTimeout(async()=>{ 




      return driver.findElement(By.id("metadata.fuel")).sendKeys("g"); 

}, 373000)
setTimeout(async()=>{ 




      return driver.findElement(By.id("metadata.horsePower")).sendKeys("4"); 

}, 374000)
setTimeout(async()=>{ 




      return driver.findElement(By.id("metadata.transmission")).click(); 

}, 375000)
setTimeout(async()=>{ 




      return driver.findElement(By.id("metadata.transmission")).sendKeys("a"); 

}, 376000)
setTimeout(async()=>{ 




      return driver.findElement(By.tagName("body")).click(); 

}, 377000)
setTimeout(async()=>{ 




      return driver.findElement(By.id("metadata.outsideColor")).click(); 

}, 378000)
setTimeout(async()=>{ 




      return driver.findElement(By.id("metadata.outsideColor")).sendKeys("r"); 

}, 379000)
setTimeout(async()=>{ 




      return driver.findElement(By.tagName("body")).click(); 

}, 380000)
setTimeout(async()=>{ 




      return driver.findElement(By.id("metadata.condition")).click(); 

}, 381000)
setTimeout(async()=>{ 




      return driver.findElement(By.id("metadata.condition")).sendKeys("u"); 

}, 382000)
setTimeout(async()=>{ 




      return driver.findElement(By.tagName("body")).click(); 

}, 383000)
setTimeout(async()=>{ 




      return driver.findElement(By.id("metadata.insideColor")).click(); 

}, 384000)
setTimeout(async()=>{ 




      return driver.findElement(By.id("metadata.insideColor")).sendKeys("n"); 

}, 385000)
setTimeout(async()=>{ 




      return driver.findElement(By.id("metadata.insideColor")).sendKeys("n"); 

}, 386000)
setTimeout(async()=>{ 




      return driver.findElement(By.tagName("body")).click(); 

}, 387000)
setTimeout(async()=>{ 




      return driver.findElement(By.id("metadata.make")).click(); 

}, 388000)
setTimeout(async()=>{ 




      return driver.findElement(By.id("metadata.make")).sendKeys("t"); 

}, 389000)
setTimeout(async()=>{ 




      return driver.findElement(By.id("metadata.make")).sendKeys("t"); 

}, 390000)
setTimeout(async()=>{ 




      return driver.findElement(By.tagName("body")).click(); 

}, 391000)
setTimeout(async()=>{ 




      return driver.findElement(By.id("metadata.model")).click(); 

}, 392000)
setTimeout(async()=>{ 




      return driver.findElement(By.id("metadata.model")).sendKeys("p"); 

}, 393000)
setTimeout(async()=>{ 




      return driver.findElement(By.tagName("body")).click(); 

}, 394000)
setTimeout(async()=>{ 




      return driver.findElement(By.tagName("body")).click(); 

}, 395000)
setTimeout(async()=>{ 




      return driver.findElement(By.xpath("//button[@type='submit']")).click(); 

}, 396000)
setTimeout(async()=>{ 




      return driver.findElement(By.id("price")).sendKeys(42500); 

}, 397000)
setTimeout(async()=>{ 




      return driver.findElement(By.id("region_0")).click(); 

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




      return driver.findElement(By.id("region_0")).sendKeys("s"); 

}, 406000)
setTimeout(async()=>{ 




      return driver.findElement(By.tagName("body")).click(); 

}, 407000)
setTimeout(async()=>{ 




      return driver.findElement(By.id("region_1")).click(); 

}, 408000)
setTimeout(async()=>{ 




      return driver.findElement(By.id("region_1")).sendKeys("s"); 

}, 409000)
setTimeout(async()=>{ 




      return driver.findElement(By.xpath("//button[@type='submit']")).click(); 

}, 410000)
setTimeout(async()=>{ 




      return driver.findElement(By.xpath("//button[@type='submit']")).click(); 

}, 411000)




/*******************************************
 * 
 * 
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

}, 420000)
setTimeout(async()=>{ 




      return driver.findElement(By.id("_tealiumModalClose")).click(); 

}, 424000)
setTimeout(async()=>{ 



      return driver.findElement(By.xpath("//input[@type='file']")).sendKeys("C:/Users/PUBLICADOR_COROTOS1/Desktop/IMG-20181020-WA0043.jpg"); 


}, 428000)
setTimeout(async()=>{ 


      return driver.findElement(By.xpath("//input[@type='file']")).sendKeys("C:/Users/PUBLICADOR_COROTOS1/Desktop/IMG-20181020-WA0042.jpg"); 



}, 432000)
setTimeout(async()=>{ 




      return driver.findElement(By.xpath("//button[@type='submit']")).click(); 

}, 436000)
setTimeout(async()=>{ 




      return driver.findElement(By.id("title")).sendKeys(dataMaster6.header); 

}, 437000)
setTimeout(async()=>{ 




      return driver.findElement(By.id("description")).sendKeys(dataMaster6.description); 

}, 438000)
setTimeout(async()=>{ 




      return driver.findElement(By.id("category_0")).click(); 

}, 439000)
setTimeout(async()=>{ 




      return driver.findElement(By.id("category_0")).sendKeys("v"); 

}, 440000)
setTimeout(async()=>{ 




      return driver.findElement(By.tagName("body")).click(); 

}, 441000)
setTimeout(async()=>{ 




      return driver.findElement(By.id("category_1")).click(); 

}, 442000)
setTimeout(async()=>{ 




      return driver.findElement(By.id("category_1")).sendKeys("j"); 

}, 443000)
setTimeout(async()=>{ 




      return driver.findElement(By.tagName("body")).click(); 

}, 444000)
setTimeout(async()=>{ 




      return driver.findElement(By.xpath("//button[@type='submit']")).click(); 

}, 445000)
setTimeout(async()=>{ 




      return driver.findElement(By.id("metadata.year")).sendKeys("2013"); 

}, 446000)
setTimeout(async()=>{ 




      return driver.findElement(By.id("metadata.mileage")).sendKeys("1000"); 

}, 447000)
setTimeout(async()=>{ 




      return driver.findElement(By.id("metadata.fuel")).click(); 

}, 448000)
setTimeout(async()=>{ 




      return driver.findElement(By.id("metadata.fuel")).sendKeys("g"); 

}, 449000)
setTimeout(async()=>{ 




      return driver.findElement(By.id("metadata.fuel")).sendKeys("g"); 

}, 450000)
setTimeout(async()=>{ 




      return driver.findElement(By.id("metadata.transmission")).click(); 

}, 451000)
setTimeout(async()=>{ 




      return driver.findElement(By.id("metadata.transmission")).sendKeys("a"); 

}, 452000)
setTimeout(async()=>{ 




      return driver.findElement(By.tagName("body")).click(); 

}, 453000)
setTimeout(async()=>{ 




      return driver.findElement(By.tagName("body")).click(); 

}, 454000)
setTimeout(async()=>{ 




      return driver.findElement(By.id("metadata.outsideColor")).click(); 

}, 455000)
setTimeout(async()=>{ 




      return driver.findElement(By.id("metadata.outsideColor")).sendKeys("r"); 

}, 456000)
setTimeout(async()=>{ 




      return driver.findElement(By.tagName("body")).click(); 

}, 457000)
setTimeout(async()=>{ 




      return driver.findElement(By.id("metadata.insideColor")).click(); 

}, 458000)
setTimeout(async()=>{ 




      return driver.findElement(By.id("metadata.insideColor")).sendKeys("n"); 

}, 459000)
setTimeout(async()=>{ 




      return driver.findElement(By.id("metadata.insideColor")).sendKeys("n"); 

}, 460000)
setTimeout(async()=>{ 




      return driver.findElement(By.tagName("body")).click(); 

}, 461000)
setTimeout(async()=>{ 




      return driver.findElement(By.id("metadata.horsePower")).sendKeys("4"); 

}, 462000)
setTimeout(async()=>{ 




      return driver.findElement(By.tagName("body")).click(); 

}, 463000)
setTimeout(async()=>{ 




      return driver.findElement(By.id("metadata.condition")).click(); 

}, 464000)
setTimeout(async()=>{ 




      return driver.findElement(By.id("metadata.condition")).sendKeys("u"); 

}, 465000)
setTimeout(async()=>{ 




      return driver.findElement(By.tagName("body")).click(); 

}, 466000)
setTimeout(async()=>{ 




      return driver.findElement(By.tagName("body")).click(); 

}, 467000)
setTimeout(async()=>{ 




      return driver.findElement(By.tagName("body")).click(); 

}, 468000)
setTimeout(async()=>{ 




      return driver.findElement(By.id("metadata.make")).click(); 

}, 469000)
setTimeout(async()=>{ 




      return driver.findElement(By.id("metadata.make")).sendKeys("h"); 

}, 470000)
setTimeout(async()=>{ 




      return driver.findElement(By.tagName("body")).click(); 

}, 471000)
setTimeout(async()=>{ 




      return driver.findElement(By.id("metadata.model")).click(); 

}, 472000)
setTimeout(async()=>{ 




      return driver.findElement(By.id("metadata.model")).sendKeys("f"); 

}, 473000)
setTimeout(async()=>{ 




      return driver.findElement(By.tagName("body")).click(); 

}, 474000)
setTimeout(async()=>{ 




      return driver.findElement(By.id("metadata.heavyVehicleType")).click(); 

}, 475000)
setTimeout(async()=>{ 




      return driver.findElement(By.id("metadata.heavyVehicleType")).sendKeys("j"); 

}, 476000)
setTimeout(async()=>{ 




      return driver.findElement(By.tagName("body")).click(); 

}, 477000)
setTimeout(async()=>{ 




      return driver.findElement(By.xpath("//button[@type='submit']")).click(); 

}, 478000)
setTimeout(async()=>{ 




      return driver.findElement(By.id("price")).sendKeys(73000); 

}, 479000)
setTimeout(async()=>{ 




      return driver.findElement(By.id("region_0")).click(); 

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




      return driver.findElement(By.id("region_0")).sendKeys("s"); 

}, 488000)
setTimeout(async()=>{ 




      return driver.findElement(By.tagName("body")).click(); 

}, 489000)
setTimeout(async()=>{ 




      return driver.findElement(By.id("region_1")).click(); 

}, 490000)
setTimeout(async()=>{ 




      return driver.findElement(By.id("region_1")).sendKeys("s"); 

}, 491000)
setTimeout(async()=>{ 




      return driver.findElement(By.xpath("//button[@type='submit']")).click(); 

}, 492000)
setTimeout(async()=>{ 




      return driver.findElement(By.xpath("//button[@type='submit']")).click(); 

}, 493000)



/****************†***************************
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

}, 460000)
setTimeout(async()=>{ 




      return driver.findElement(By.id("_tealiumModalClose")).click(); 

}, 464000)
setTimeout(async()=>{ 


      return driver.findElement(By.xpath("//input[@type='file']")).sendKeys("C:/Users/PUBLICADOR_COROTOS1/Desktop/IMG-20181020-WA0015.jpg"); 



}, 468000)
setTimeout(async()=>{ 


      return driver.findElement(By.xpath("//input[@type='file']")).sendKeys("C:/Users/PUBLICADOR_COROTOS1/Desktop/IMG-20181020-WA0019.jpg"); 



}, 472000)
setTimeout(async()=>{ 




      return driver.findElement(By.xpath("//button[@type='submit']")).click(); 

}, 476000)
setTimeout(async()=>{ 




      return driver.findElement(By.id("title")).sendKeys(dataMaster7.header); 

}, 477000)
setTimeout(async()=>{ 




      return driver.findElement(By.id("description")).sendKeys(dataMaster7.description); 

}, 478000)
setTimeout(async()=>{ 




      return driver.findElement(By.id("category_0")).click(); 

}, 479000)
setTimeout(async()=>{ 




      return driver.findElement(By.id("category_0")).sendKeys("v"); 

}, 480000)
setTimeout(async()=>{ 




      return driver.findElement(By.tagName("body")).click(); 

}, 481000)
setTimeout(async()=>{ 




      return driver.findElement(By.id("category_1")).click(); 

}, 482000)
setTimeout(async()=>{ 




      return driver.findElement(By.id("category_1")).sendKeys("j"); 

}, 483000)
setTimeout(async()=>{ 




      return driver.findElement(By.tagName("body")).click(); 

}, 484000)
setTimeout(async()=>{ 




      return driver.findElement(By.xpath("//button[@type='submit']")).click(); 

}, 485000)
setTimeout(async()=>{ 




      return driver.findElement(By.id("metadata.year")).sendKeys("2013"); 

}, 486000)
setTimeout(async()=>{ 




      return driver.findElement(By.id("metadata.mileage")).sendKeys("1000"); 

}, 487000)
setTimeout(async()=>{ 




      return driver.findElement(By.id("metadata.fuel")).click(); 

}, 488000)
setTimeout(async()=>{ 




      return driver.findElement(By.id("metadata.fuel")).sendKeys("g"); 

}, 489000)
setTimeout(async()=>{ 




      return driver.findElement(By.id("metadata.fuel")).sendKeys("g"); 

}, 490000)
setTimeout(async()=>{ 




      return driver.findElement(By.id("metadata.transmission")).click(); 

}, 491000)
setTimeout(async()=>{ 




      return driver.findElement(By.id("metadata.transmission")).sendKeys("a"); 

}, 492000)
setTimeout(async()=>{ 




      return driver.findElement(By.tagName("body")).click(); 

}, 493000)
setTimeout(async()=>{ 




      return driver.findElement(By.tagName("body")).click(); 

}, 494000)
setTimeout(async()=>{ 




      return driver.findElement(By.id("metadata.outsideColor")).click(); 

}, 495000)
setTimeout(async()=>{ 




      return driver.findElement(By.id("metadata.outsideColor")).sendKeys("r"); 

}, 496000)
setTimeout(async()=>{ 




      return driver.findElement(By.tagName("body")).click(); 

}, 497000)
setTimeout(async()=>{ 




      return driver.findElement(By.id("metadata.insideColor")).click(); 

}, 498000)
setTimeout(async()=>{ 




      return driver.findElement(By.id("metadata.insideColor")).sendKeys("n"); 

}, 499000)
setTimeout(async()=>{ 




      return driver.findElement(By.id("metadata.insideColor")).sendKeys("n"); 

}, 500000)
setTimeout(async()=>{ 




      return driver.findElement(By.tagName("body")).click(); 

}, 501000)
setTimeout(async()=>{ 




      return driver.findElement(By.id("metadata.horsePower")).sendKeys("4"); 

}, 502000)
setTimeout(async()=>{ 




      return driver.findElement(By.tagName("body")).click(); 

}, 503000)
setTimeout(async()=>{ 




      return driver.findElement(By.id("metadata.condition")).click(); 

}, 504000)
setTimeout(async()=>{ 




      return driver.findElement(By.id("metadata.condition")).sendKeys("u"); 

}, 505000)
setTimeout(async()=>{ 




      return driver.findElement(By.tagName("body")).click(); 

}, 506000)
setTimeout(async()=>{ 




      return driver.findElement(By.tagName("body")).click(); 

}, 507000)
setTimeout(async()=>{ 




      return driver.findElement(By.tagName("body")).click(); 

}, 508000)
setTimeout(async()=>{ 




      return driver.findElement(By.id("metadata.make")).click(); 

}, 509000)
setTimeout(async()=>{ 




      return driver.findElement(By.id("metadata.make")).sendKeys("h"); 

}, 510000)
setTimeout(async()=>{ 




      return driver.findElement(By.tagName("body")).click(); 

}, 511000)
setTimeout(async()=>{ 




      return driver.findElement(By.id("metadata.model")).click(); 

}, 512000)
setTimeout(async()=>{ 




      return driver.findElement(By.id("metadata.model")).sendKeys("f"); 

}, 513000)
setTimeout(async()=>{ 




      return driver.findElement(By.tagName("body")).click(); 

}, 514000)
setTimeout(async()=>{ 




      return driver.findElement(By.id("metadata.heavyVehicleType")).click(); 

}, 515000)
setTimeout(async()=>{ 




      return driver.findElement(By.id("metadata.heavyVehicleType")).sendKeys("j"); 

}, 516000)
setTimeout(async()=>{ 




      return driver.findElement(By.tagName("body")).click(); 

}, 517000)
setTimeout(async()=>{ 




      return driver.findElement(By.xpath("//button[@type='submit']")).click(); 

}, 518000)
setTimeout(async()=>{ 




      return driver.findElement(By.id("price")).sendKeys(62000); 

}, 519000)
setTimeout(async()=>{ 




      return driver.findElement(By.id("region_0")).click(); 

}, 520000)
setTimeout(async()=>{ 




      return driver.findElement(By.id("region_0")).sendKeys("s"); 

}, 521000)
setTimeout(async()=>{ 




      return driver.findElement(By.id("region_0")).sendKeys("s"); 

}, 522000)
setTimeout(async()=>{ 




      return driver.findElement(By.id("region_0")).sendKeys("s"); 

}, 523000)
setTimeout(async()=>{ 




      return driver.findElement(By.id("region_0")).sendKeys("s"); 

}, 524000)
setTimeout(async()=>{ 




      return driver.findElement(By.id("region_0")).sendKeys("s"); 

}, 525000)
setTimeout(async()=>{ 




      return driver.findElement(By.id("region_0")).sendKeys("s"); 

}, 526000)
setTimeout(async()=>{ 




      return driver.findElement(By.id("region_0")).sendKeys("s"); 

}, 527000)
setTimeout(async()=>{ 




      return driver.findElement(By.id("region_0")).sendKeys("s"); 

}, 528000)
setTimeout(async()=>{ 




      return driver.findElement(By.tagName("body")).click(); 

}, 529000)
setTimeout(async()=>{ 




      return driver.findElement(By.id("region_1")).click(); 

}, 530000)
setTimeout(async()=>{ 




      return driver.findElement(By.id("region_1")).sendKeys("s"); 

}, 531000)
setTimeout(async()=>{ 




      return driver.findElement(By.xpath("//button[@type='submit']")).click(); 

}, 532000)
setTimeout(async()=>{ 




      return driver.findElement(By.xpath("//button[@type='submit']")).click(); 

}, 533000)






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
