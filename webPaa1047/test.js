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
var dataMaster10 = {}
var dataMaster11 = {}
var dataMaster12 = {}
var dataMaster13 = {}
var dataMaster14 = {}
var dataMaster15 = {}
var dataMaster16 = {}
var dataMaster17 = {}
var dataMaster18 = {}
var dataMaster19 = {}
var dataMaster20 = {}
var dataMaster21 = {}
var dataMaster22 = {}
var dataMaster23 = {}
var dataMaster24 = {}


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

    var master8= await Master.findOne({"sequence":7})
    console.log(master8)      
    dataMaster8["title"] = master8.title
    dataMaster8["header"] = master8.header
    dataMaster8["description"] = master8.description

    var master9= await Master.findOne({"sequence":8})
    console.log(master9)      
    dataMaster9["title"] = master9.title
    dataMaster9["header"] = master9.header
    dataMaster9["description"] = master9.description

    var master10= await Master.findOne({"sequence":9})
    console.log(master10)      
    dataMaster10["title"] = master10.title
    dataMaster10["header"] = master10.header
    dataMaster10["description"] = master10.description

    var master11= await Master.findOne({"sequence":10})
    console.log(master11)      
    dataMaster11["title"] = master11.title
    dataMaster11["header"] = master11.header
    dataMaster11["description"] = master11.description

    var master12= await Master.findOne({"sequence":11})
    console.log(master12)      
    dataMaster12["title"] = master12.title
    dataMaster12["header"] = master12.header
    dataMaster12["description"] = master12.description

    var master13= await Master.findOne({"sequence":12})
    console.log(master13)      
    dataMaster13["title"] = master13.title
    dataMaster13["header"] = master13.header
    dataMaster13["description"] = master13.description

    var master14= await Master.findOne({"sequence":13})
    console.log(master14)      
    dataMaster14["title"] = master14.title
    dataMaster14["header"] = master14.header
    dataMaster14["description"] = master14.description

    var master15= await Master.findOne({"sequence":14})
    console.log(master15)      
    dataMaster15["title"] = master15.title
    dataMaster15["header"] = master15.header
    dataMaster15["description"] = master15.description

    var master16= await Master.findOne({"sequence":15})
    console.log(master16)      
    dataMaster16["title"] = master16.title
    dataMaster16["header"] = master16.header
    dataMaster16["description"] = master16.description

    var master17= await Master.findOne({"sequence":16})
    console.log(master17)      
    dataMaster17["title"] = master17.title
    dataMaster17["header"] = master17.header
    dataMaster17["description"] = master17.description

    var master18= await Master.findOne({"sequence":17})
    console.log(master18)      
    dataMaster18["title"] = master18.title
    dataMaster18["header"] = master18.header
    dataMaster18["description"] = master18.description

    var master19= await Master.findOne({"sequence":18})
    console.log(master19)      
    dataMaster19["title"] = master19.title
    dataMaster19["header"] = master19.header
    dataMaster19["description"] = master19.description

    var master20= await Master.findOne({"sequence":19})
    console.log(master20)      
    dataMaster20["title"] = master20.title
    dataMaster20["header"] = master20.header
    dataMaster20["description"] = master20.description

    var master21= await Master.findOne({"sequence":20})
    console.log(master21)      
    dataMaster21["title"] = master21.title
    dataMaster21["header"] = master21.header
    dataMaster21["description"] = master21.description

    var master22= await Master.findOne({"sequence":21})
    console.log(master22)      
    dataMaster22["title"] = master22.title
    dataMaster22["header"] = master22.header
    dataMaster22["description"] = master22.description

    var master23= await Master.findOne({"sequence":22})
    console.log(master23)      
    dataMaster23["title"] = master23.title
    dataMaster23["header"] = master23.header
    dataMaster23["description"] = master23.description

    var master24= await Master.findOne({"sequence":23})
    console.log(master24)      
    dataMaster24["title"] = master24.title
    dataMaster24["header"] = master24.header
    dataMaster24["description"] = master24.description



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




      return driver.findElement(By.xpath("//input[@type='file']")).sendKeys("c:/Users/Rey Messon/Desktop/anuncio/WhatsApp Image 2018-11-14 at 4.08.25 PM (1).jpeg"); 

}, 33000)
setTimeout(async()=>{ 




      return driver.findElement(By.xpath("//input[@type='file']")).sendKeys("c:/Users/Rey Messon/Desktop/anuncio/WhatsApp Image 2018-11-14 at 4.08.25 PM.jpeg"); 

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




      return driver.findElement(By.id("category_1")).sendKeys("c"); 

}, 48000)
setTimeout(async()=>{ 




      return driver.findElement(By.tagName("body")).click(); 

}, 49000)
setTimeout(async()=>{ 




      return driver.findElement(By.xpath("//button[@type='submit']")).click(); 

}, 50000)
setTimeout(async()=>{ 




      return driver.findElement(By.id("metadata.vehicleType")).click(); 

}, 51000)
setTimeout(async()=>{ 




      return driver.findElement(By.id("metadata.vehicleType")).sendKeys("s"); 

}, 52000)
setTimeout(async()=>{ 




      return driver.findElement(By.tagName("body")).click(); 

}, 53000)
setTimeout(async()=>{ 




      return driver.findElement(By.id("metadata.year")).sendKeys("2012"); 

}, 54000)
setTimeout(async()=>{ 




      return driver.findElement(By.id("metadata.mileage")).sendKeys("1000"); 

}, 55000)
setTimeout(async()=>{ 




      return driver.findElement(By.id("metadata.fuel")).click(); 

}, 56000)
setTimeout(async()=>{ 




      return driver.findElement(By.id("metadata.fuel")).sendKeys("g"); 

}, 57000)
setTimeout(async()=>{ 




      return driver.findElement(By.id("metadata.fuel")).sendKeys("g"); 

}, 58000)
setTimeout(async()=>{ 




      return driver.findElement(By.id("metadata.horsePower")).sendKeys("4"); 

}, 59000)
setTimeout(async()=>{ 




      return driver.findElement(By.id("metadata.transmission")).click(); 

}, 60000)
setTimeout(async()=>{ 




      return driver.findElement(By.id("metadata.transmission")).sendKeys("a"); 

}, 61000)
setTimeout(async()=>{ 




      return driver.findElement(By.tagName("body")).click(); 

}, 62000)
setTimeout(async()=>{ 




      return driver.findElement(By.id("metadata.outsideColor")).click(); 

}, 63000)
setTimeout(async()=>{ 




      return driver.findElement(By.id("metadata.outsideColor")).sendKeys("r"); 

}, 64000)
setTimeout(async()=>{ 




      return driver.findElement(By.tagName("body")).click(); 

}, 65000)
setTimeout(async()=>{ 




      return driver.findElement(By.id("metadata.condition")).click(); 

}, 66000)
setTimeout(async()=>{ 




      return driver.findElement(By.id("metadata.condition")).sendKeys("u"); 

}, 67000)
setTimeout(async()=>{ 




      return driver.findElement(By.tagName("body")).click(); 

}, 68000)
setTimeout(async()=>{ 




      return driver.findElement(By.id("metadata.insideColor")).click(); 

}, 69000)
setTimeout(async()=>{ 




      return driver.findElement(By.id("metadata.insideColor")).sendKeys("n"); 

}, 70000)
setTimeout(async()=>{ 




      return driver.findElement(By.id("metadata.insideColor")).sendKeys("n"); 

}, 71000)
setTimeout(async()=>{ 




      return driver.findElement(By.tagName("body")).click(); 

}, 72000)
setTimeout(async()=>{ 




      return driver.findElement(By.id("metadata.make")).click(); 

}, 73000)
setTimeout(async()=>{ 




      return driver.findElement(By.id("metadata.make")).sendKeys("t"); 

}, 74000)
setTimeout(async()=>{ 




      return driver.findElement(By.id("metadata.make")).sendKeys("t"); 

}, 75000)
setTimeout(async()=>{ 




      return driver.findElement(By.tagName("body")).click(); 

}, 76000)
setTimeout(async()=>{ 




      return driver.findElement(By.id("metadata.model")).click(); 

}, 77000)
setTimeout(async()=>{ 




      return driver.findElement(By.id("metadata.model")).sendKeys("p"); 

}, 78000)
setTimeout(async()=>{ 




      return driver.findElement(By.tagName("body")).click(); 

}, 79000)
setTimeout(async()=>{ 




      return driver.findElement(By.tagName("body")).click(); 

}, 80000)
setTimeout(async()=>{ 




      return driver.findElement(By.xpath("//button[@type='submit']")).click(); 

}, 81000)
setTimeout(async()=>{ 




      return driver.findElement(By.id("price")).sendKeys(49000); 

}, 82000)
setTimeout(async()=>{ 




      return driver.findElement(By.id("region_0")).click(); 

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




      return driver.findElement(By.id("region_0")).sendKeys("s"); 

}, 91000)
setTimeout(async()=>{ 




      return driver.findElement(By.tagName("body")).click(); 

}, 92000)
setTimeout(async()=>{ 




      return driver.findElement(By.id("region_1")).click(); 

}, 93000)
setTimeout(async()=>{ 




      return driver.findElement(By.id("region_1")).sendKeys("s"); 

}, 94000)
setTimeout(async()=>{ 




      return driver.findElement(By.xpath("//button[@type='submit']")).click(); 

}, 95000)
setTimeout(async()=>{ 




      return driver.findElement(By.xpath("//button[@type='submit']")).click(); 

}, 96000)


/****************************************************************************************
 * 
 * 
 * 
 * Kia Sorento 2013	
 * 
 * 
 * 
 * 
 *****************************************************************************************/


setTimeout(async()=>{ 




      return driver.get("https://www.corotos.com.do/create") 

}, 110000)
setTimeout(async()=>{ 




      return driver.findElement(By.id("_tealiumModalClose")).click(); 

}, 114000)
setTimeout(async()=>{ 




      return driver.findElement(By.xpath("//input[@type='file']")).sendKeys("c:/Users/Rey Messon/Desktop/anuncio/WhatsApp Image 2018-11-17 at 11.48.22 AM.jpeg"); 

}, 118000)
setTimeout(async()=>{ 




      return driver.findElement(By.xpath("//input[@type='file']")).sendKeys("c:/Users/Rey Messon/Desktop/anuncio/WhatsApp Image 2018-11-17 at 11.48.24 AM.jpeg"); 

}, 122000)
setTimeout(async()=>{ 




      return driver.findElement(By.xpath("//button[@type='submit']")).click(); 

}, 126000)
setTimeout(async()=>{ 




      return driver.findElement(By.id("title")).sendKeys(dataMaster2.header); 

}, 127000)
setTimeout(async()=>{ 




      return driver.findElement(By.id("description")).sendKeys(dataMaster2.description); 

}, 128000)
setTimeout(async()=>{ 




      return driver.findElement(By.id("category_0")).click(); 

}, 129000)
setTimeout(async()=>{ 




      return driver.findElement(By.id("category_0")).sendKeys("v"); 

}, 130000)
setTimeout(async()=>{ 




      return driver.findElement(By.tagName("body")).click(); 

}, 131000)
setTimeout(async()=>{ 




      return driver.findElement(By.id("category_1")).click(); 

}, 132000)
setTimeout(async()=>{ 




      return driver.findElement(By.id("category_1")).sendKeys("j"); 

}, 133000)
setTimeout(async()=>{ 




      return driver.findElement(By.tagName("body")).click(); 

}, 134000)
setTimeout(async()=>{ 




      return driver.findElement(By.xpath("//button[@type='submit']")).click(); 

}, 135000)
setTimeout(async()=>{ 




      return driver.findElement(By.id("metadata.year")).sendKeys("2013"); 

}, 137000)
setTimeout(async()=>{ 




      return driver.findElement(By.id("metadata.mileage")).sendKeys("1000"); 

}, 137000)
setTimeout(async()=>{ 




      return driver.findElement(By.id("metadata.fuel")).click(); 

}, 138000)
setTimeout(async()=>{ 




      return driver.findElement(By.id("metadata.fuel")).sendKeys("g"); 

}, 139000)
setTimeout(async()=>{ 




      return driver.findElement(By.id("metadata.fuel")).sendKeys("g"); 

}, 140000)
setTimeout(async()=>{ 




      return driver.findElement(By.id("metadata.transmission")).click(); 

}, 141000)
setTimeout(async()=>{ 




      return driver.findElement(By.id("metadata.transmission")).sendKeys("a"); 

}, 142000)
setTimeout(async()=>{ 




      return driver.findElement(By.tagName("body")).click(); 

}, 143000)
setTimeout(async()=>{ 




      return driver.findElement(By.tagName("body")).click(); 

}, 144000)
setTimeout(async()=>{ 




      return driver.findElement(By.id("metadata.outsideColor")).click(); 

}, 145000)
setTimeout(async()=>{ 




      return driver.findElement(By.id("metadata.outsideColor")).sendKeys("r"); 

}, 146000)
setTimeout(async()=>{ 




      return driver.findElement(By.tagName("body")).click(); 

}, 147000)
setTimeout(async()=>{ 




      return driver.findElement(By.id("metadata.insideColor")).click(); 

}, 148000)
setTimeout(async()=>{ 




      return driver.findElement(By.id("metadata.insideColor")).sendKeys("n"); 

}, 149000)
setTimeout(async()=>{ 




      return driver.findElement(By.id("metadata.insideColor")).sendKeys("n"); 

}, 150000)
setTimeout(async()=>{ 




      return driver.findElement(By.tagName("body")).click(); 

}, 151000)
setTimeout(async()=>{ 




      return driver.findElement(By.id("metadata.horsePower")).sendKeys("4"); 

}, 152000)
setTimeout(async()=>{ 




      return driver.findElement(By.tagName("body")).click(); 

}, 153000)
setTimeout(async()=>{ 




      return driver.findElement(By.id("metadata.condition")).click(); 

}, 154000)
setTimeout(async()=>{ 




      return driver.findElement(By.id("metadata.condition")).sendKeys("u"); 

}, 155000)
setTimeout(async()=>{ 




      return driver.findElement(By.tagName("body")).click(); 

}, 156000)
setTimeout(async()=>{ 




      return driver.findElement(By.tagName("body")).click(); 

}, 157000)
setTimeout(async()=>{ 




      return driver.findElement(By.tagName("body")).click(); 

}, 158000)
setTimeout(async()=>{ 




      return driver.findElement(By.id("metadata.make")).click(); 

}, 159000)
setTimeout(async()=>{ 




      return driver.findElement(By.id("metadata.make")).sendKeys("h"); 

}, 160000)
setTimeout(async()=>{ 




      return driver.findElement(By.tagName("body")).click(); 

}, 161000)
setTimeout(async()=>{ 




      return driver.findElement(By.id("metadata.model")).click(); 

}, 162000)
setTimeout(async()=>{ 




      return driver.findElement(By.id("metadata.model")).sendKeys("f"); 

}, 163000)
setTimeout(async()=>{ 




      return driver.findElement(By.tagName("body")).click(); 

}, 164000)
setTimeout(async()=>{ 




      return driver.findElement(By.id("metadata.heavyVehicleType")).click(); 

}, 165000)
setTimeout(async()=>{ 




      return driver.findElement(By.id("metadata.heavyVehicleType")).sendKeys("j"); 

}, 166000)
setTimeout(async()=>{ 




      return driver.findElement(By.tagName("body")).click(); 

}, 167000)
setTimeout(async()=>{ 




      return driver.findElement(By.xpath("//button[@type='submit']")).click(); 

}, 168000)
setTimeout(async()=>{ 




      return driver.findElement(By.id("price")).sendKeys(69000); 

}, 169000)
setTimeout(async()=>{ 




      return driver.findElement(By.id("region_0")).click(); 

}, 170000)
setTimeout(async()=>{ 




      return driver.findElement(By.id("region_0")).sendKeys("s"); 

}, 171000)
setTimeout(async()=>{ 




      return driver.findElement(By.id("region_0")).sendKeys("s"); 

}, 172000)
setTimeout(async()=>{ 




      return driver.findElement(By.id("region_0")).sendKeys("s"); 

}, 173000)
setTimeout(async()=>{ 




      return driver.findElement(By.id("region_0")).sendKeys("s"); 

}, 174000)
setTimeout(async()=>{ 




      return driver.findElement(By.id("region_0")).sendKeys("s"); 

}, 175000)
setTimeout(async()=>{ 




      return driver.findElement(By.id("region_0")).sendKeys("s"); 

}, 176000)
setTimeout(async()=>{ 




      return driver.findElement(By.id("region_0")).sendKeys("s"); 

}, 177000)
setTimeout(async()=>{ 




      return driver.findElement(By.id("region_0")).sendKeys("s"); 

}, 178000)
setTimeout(async()=>{ 




      return driver.findElement(By.tagName("body")).click(); 

}, 179000)
setTimeout(async()=>{ 




      return driver.findElement(By.id("region_1")).click(); 

}, 180000)
setTimeout(async()=>{ 




      return driver.findElement(By.id("region_1")).sendKeys("s"); 

}, 181000)
setTimeout(async()=>{ 




      return driver.findElement(By.xpath("//button[@type='submit']")).click(); 

}, 182000)
setTimeout(async()=>{ 




      return driver.findElement(By.xpath("//button[@type='submit']")).click(); 

}, 183000)



/****************************************************************************
 * 
 * 
 * 
 * 
 * Ford Escape 2014	
 * 
 * 
 *****************************************************************************/

setTimeout(async()=>{ 




      return driver.get("https://www.corotos.com.do/create") 

}, 190000)
setTimeout(async()=>{ 




      return driver.findElement(By.id("_tealiumModalClose")).click(); 

}, 194000)
setTimeout(async()=>{ 




      return driver.findElement(By.xpath("//input[@type='file']")).sendKeys("c:/Users/Rey Messon/Desktop/anuncio/WhatsApp Image 2018-10-20 at 1.08.03 PM (1).jpeg"); 

}, 198000)
setTimeout(async()=>{ 




      return driver.findElement(By.xpath("//input[@type='file']")).sendKeys("c:/Users/Rey Messon/Desktop/anuncio/WhatsApp Image 2018-10-20 at 1.08.03 PM.jpeg"); 

}, 202000)
setTimeout(async()=>{ 




      return driver.findElement(By.xpath("//button[@type='submit']")).click(); 

}, 206000)
setTimeout(async()=>{ 




      return driver.findElement(By.id("title")).sendKeys(dataMaster3.header); 

}, 207000)
setTimeout(async()=>{ 




      return driver.findElement(By.id("description")).sendKeys(dataMaster3.description); 

}, 208000)
setTimeout(async()=>{ 




      return driver.findElement(By.id("category_0")).click(); 

}, 209000)
setTimeout(async()=>{ 




      return driver.findElement(By.id("category_0")).sendKeys("v"); 

}, 210000)
setTimeout(async()=>{ 




      return driver.findElement(By.tagName("body")).click(); 

}, 211000)
setTimeout(async()=>{ 




      return driver.findElement(By.id("category_1")).click(); 

}, 212000)
setTimeout(async()=>{ 




      return driver.findElement(By.id("category_1")).sendKeys("j"); 

}, 213000)
setTimeout(async()=>{ 




      return driver.findElement(By.tagName("body")).click(); 

}, 214000)
setTimeout(async()=>{ 




      return driver.findElement(By.xpath("//button[@type='submit']")).click(); 

}, 215000)
setTimeout(async()=>{ 




      return driver.findElement(By.id("metadata.year")).sendKeys("2013"); 

}, 217000)
setTimeout(async()=>{ 




      return driver.findElement(By.id("metadata.mileage")).sendKeys("1000"); 

}, 217000)
setTimeout(async()=>{ 




      return driver.findElement(By.id("metadata.fuel")).click(); 

}, 218000)
setTimeout(async()=>{ 




      return driver.findElement(By.id("metadata.fuel")).sendKeys("g"); 

}, 219000)
setTimeout(async()=>{ 




      return driver.findElement(By.id("metadata.fuel")).sendKeys("g"); 

}, 220000)
setTimeout(async()=>{ 




      return driver.findElement(By.id("metadata.transmission")).click(); 

}, 221000)
setTimeout(async()=>{ 




      return driver.findElement(By.id("metadata.transmission")).sendKeys("a"); 

}, 222000)
setTimeout(async()=>{ 




      return driver.findElement(By.tagName("body")).click(); 

}, 223000)
setTimeout(async()=>{ 




      return driver.findElement(By.tagName("body")).click(); 

}, 224000)
setTimeout(async()=>{ 




      return driver.findElement(By.id("metadata.outsideColor")).click(); 

}, 225000)
setTimeout(async()=>{ 




      return driver.findElement(By.id("metadata.outsideColor")).sendKeys("r"); 

}, 226000)
setTimeout(async()=>{ 




      return driver.findElement(By.tagName("body")).click(); 

}, 227000)
setTimeout(async()=>{ 




      return driver.findElement(By.id("metadata.insideColor")).click(); 

}, 228000)
setTimeout(async()=>{ 




      return driver.findElement(By.id("metadata.insideColor")).sendKeys("n"); 

}, 229000)
setTimeout(async()=>{ 




      return driver.findElement(By.id("metadata.insideColor")).sendKeys("n"); 

}, 230000)
setTimeout(async()=>{ 




      return driver.findElement(By.tagName("body")).click(); 

}, 231000)
setTimeout(async()=>{ 




      return driver.findElement(By.id("metadata.horsePower")).sendKeys("4"); 

}, 232000)
setTimeout(async()=>{ 




      return driver.findElement(By.tagName("body")).click(); 

}, 233000)
setTimeout(async()=>{ 




      return driver.findElement(By.id("metadata.condition")).click(); 

}, 234000)
setTimeout(async()=>{ 




      return driver.findElement(By.id("metadata.condition")).sendKeys("u"); 

}, 235000)
setTimeout(async()=>{ 




      return driver.findElement(By.tagName("body")).click(); 

}, 236000)
setTimeout(async()=>{ 




      return driver.findElement(By.tagName("body")).click(); 

}, 237000)
setTimeout(async()=>{ 




      return driver.findElement(By.tagName("body")).click(); 

}, 238000)
setTimeout(async()=>{ 




      return driver.findElement(By.id("metadata.make")).click(); 

}, 239000)
setTimeout(async()=>{ 




      return driver.findElement(By.id("metadata.make")).sendKeys("h"); 

}, 240000)
setTimeout(async()=>{ 




      return driver.findElement(By.tagName("body")).click(); 

}, 241000)
setTimeout(async()=>{ 




      return driver.findElement(By.id("metadata.model")).click(); 

}, 242000)
setTimeout(async()=>{ 




      return driver.findElement(By.id("metadata.model")).sendKeys("f"); 

}, 243000)
setTimeout(async()=>{ 




      return driver.findElement(By.tagName("body")).click(); 

}, 244000)
setTimeout(async()=>{ 




      return driver.findElement(By.id("metadata.heavyVehicleType")).click(); 

}, 245000)
setTimeout(async()=>{ 




      return driver.findElement(By.id("metadata.heavyVehicleType")).sendKeys("j"); 

}, 246000)
setTimeout(async()=>{ 




      return driver.findElement(By.tagName("body")).click(); 

}, 247000)
setTimeout(async()=>{ 




      return driver.findElement(By.xpath("//button[@type='submit']")).click(); 

}, 248000)
setTimeout(async()=>{ 




      return driver.findElement(By.id("price")).sendKeys(73000); 

}, 249000)
setTimeout(async()=>{ 




      return driver.findElement(By.id("region_0")).click(); 

}, 250000)
setTimeout(async()=>{ 




      return driver.findElement(By.id("region_0")).sendKeys("s"); 

}, 251000)
setTimeout(async()=>{ 




      return driver.findElement(By.id("region_0")).sendKeys("s"); 

}, 252000)
setTimeout(async()=>{ 




      return driver.findElement(By.id("region_0")).sendKeys("s"); 

}, 253000)
setTimeout(async()=>{ 




      return driver.findElement(By.id("region_0")).sendKeys("s"); 

}, 254000)
setTimeout(async()=>{ 




      return driver.findElement(By.id("region_0")).sendKeys("s"); 

}, 255000)
setTimeout(async()=>{ 




      return driver.findElement(By.id("region_0")).sendKeys("s"); 

}, 256000)
setTimeout(async()=>{ 




      return driver.findElement(By.id("region_0")).sendKeys("s"); 

}, 257000)
setTimeout(async()=>{ 




      return driver.findElement(By.id("region_0")).sendKeys("s"); 

}, 258000)
setTimeout(async()=>{ 




      return driver.findElement(By.tagName("body")).click(); 

}, 259000)
setTimeout(async()=>{ 




      return driver.findElement(By.id("region_1")).click(); 

}, 260000)
setTimeout(async()=>{ 




      return driver.findElement(By.id("region_1")).sendKeys("s"); 

}, 261000)
setTimeout(async()=>{ 




      return driver.findElement(By.xpath("//button[@type='submit']")).click(); 

}, 262000)
setTimeout(async()=>{ 




      return driver.findElement(By.xpath("//button[@type='submit']")).click(); 

}, 263000)


/***************************************************************************************
 * 
 * 
 * 
 * 
 * Honda Accord 2013	
 * 
 * 
 * 
 */

setTimeout(async()=>{ 




      return driver.get("https://www.corotos.com.do/create") 

}, 270000)
setTimeout(async()=>{ 




      return driver.findElement(By.id("_tealiumModalClose")).click(); 

}, 274000)
setTimeout(async()=>{ 




      return driver.findElement(By.xpath("//input[@type='file']")).sendKeys("c:/Users/Rey Messon/Desktop/anuncio/WhatsApp Image 2018-10-20 at 1.13.05 PM (1).jpeg"); 

}, 278000)
setTimeout(async()=>{ 




      return driver.findElement(By.xpath("//input[@type='file']")).sendKeys("c:/Users/Rey Messon/Desktop/anuncio/WhatsApp Image 2018-10-20 at 1.13.05 PM.jpeg"); 

}, 282000)
setTimeout(async()=>{ 




      return driver.findElement(By.xpath("//button[@type='submit']")).click(); 

}, 286000)
setTimeout(async()=>{ 




      return driver.findElement(By.id("title")).sendKeys(dataMaster4.header); 

}, 287000)
setTimeout(async()=>{ 




      return driver.findElement(By.id("description")).sendKeys(dataMaster4.description); 

}, 288000)
setTimeout(async()=>{ 




      return driver.findElement(By.id("category_0")).click(); 

}, 289000)
setTimeout(async()=>{ 




      return driver.findElement(By.id("category_0")).sendKeys("v"); 

}, 290000)
setTimeout(async()=>{ 




      return driver.findElement(By.tagName("body")).click(); 

}, 291000)
setTimeout(async()=>{ 




      return driver.findElement(By.id("category_1")).click(); 

}, 292000)
setTimeout(async()=>{ 




      return driver.findElement(By.id("category_1")).sendKeys("c"); 

}, 293000)
setTimeout(async()=>{ 




      return driver.findElement(By.tagName("body")).click(); 

}, 294000)
setTimeout(async()=>{ 




      return driver.findElement(By.xpath("//button[@type='submit']")).click(); 

}, 295000)
setTimeout(async()=>{ 




      return driver.findElement(By.id("metadata.vehicleType")).click(); 

}, 296000)
setTimeout(async()=>{ 




      return driver.findElement(By.id("metadata.vehicleType")).sendKeys("s"); 

}, 297000)
setTimeout(async()=>{ 




      return driver.findElement(By.tagName("body")).click(); 

}, 298000)
setTimeout(async()=>{ 




      return driver.findElement(By.id("metadata.year")).sendKeys("2012"); 

}, 299000)
setTimeout(async()=>{ 




      return driver.findElement(By.id("metadata.mileage")).sendKeys("1000"); 

}, 300000)
setTimeout(async()=>{ 




      return driver.findElement(By.id("metadata.fuel")).click(); 

}, 301000)
setTimeout(async()=>{ 




      return driver.findElement(By.id("metadata.fuel")).sendKeys("g"); 

}, 302000)
setTimeout(async()=>{ 




      return driver.findElement(By.id("metadata.fuel")).sendKeys("g"); 

}, 303000)
setTimeout(async()=>{ 




      return driver.findElement(By.id("metadata.horsePower")).sendKeys("4"); 

}, 304000)
setTimeout(async()=>{ 




      return driver.findElement(By.id("metadata.transmission")).click(); 

}, 305000)
setTimeout(async()=>{ 




      return driver.findElement(By.id("metadata.transmission")).sendKeys("a"); 

}, 306000)
setTimeout(async()=>{ 




      return driver.findElement(By.tagName("body")).click(); 

}, 307000)
setTimeout(async()=>{ 




      return driver.findElement(By.id("metadata.outsideColor")).click(); 

}, 308000)
setTimeout(async()=>{ 




      return driver.findElement(By.id("metadata.outsideColor")).sendKeys("r"); 

}, 309000)
setTimeout(async()=>{ 




      return driver.findElement(By.tagName("body")).click(); 

}, 310000)
setTimeout(async()=>{ 




      return driver.findElement(By.id("metadata.condition")).click(); 

}, 311000)
setTimeout(async()=>{ 




      return driver.findElement(By.id("metadata.condition")).sendKeys("u"); 

}, 312000)
setTimeout(async()=>{ 




      return driver.findElement(By.tagName("body")).click(); 

}, 313000)
setTimeout(async()=>{ 




      return driver.findElement(By.id("metadata.insideColor")).click(); 

}, 314000)
setTimeout(async()=>{ 




      return driver.findElement(By.id("metadata.insideColor")).sendKeys("n"); 

}, 315000)
setTimeout(async()=>{ 




      return driver.findElement(By.id("metadata.insideColor")).sendKeys("n"); 

}, 316000)
setTimeout(async()=>{ 




      return driver.findElement(By.tagName("body")).click(); 

}, 317000)
setTimeout(async()=>{ 




      return driver.findElement(By.id("metadata.make")).click(); 

}, 318000)
setTimeout(async()=>{ 




      return driver.findElement(By.id("metadata.make")).sendKeys("t"); 

}, 319000)
setTimeout(async()=>{ 




      return driver.findElement(By.id("metadata.make")).sendKeys("t"); 

}, 320000)
setTimeout(async()=>{ 




      return driver.findElement(By.tagName("body")).click(); 

}, 321000)
setTimeout(async()=>{ 




      return driver.findElement(By.id("metadata.model")).click(); 

}, 322000)
setTimeout(async()=>{ 




      return driver.findElement(By.id("metadata.model")).sendKeys("p"); 

}, 323000)
setTimeout(async()=>{ 




      return driver.findElement(By.tagName("body")).click(); 

}, 324000)
setTimeout(async()=>{ 




      return driver.findElement(By.tagName("body")).click(); 

}, 325000)
setTimeout(async()=>{ 




      return driver.findElement(By.xpath("//button[@type='submit']")).click(); 

}, 326000)
setTimeout(async()=>{ 




      return driver.findElement(By.id("price")).sendKeys(67500); 

}, 327000)
setTimeout(async()=>{ 




      return driver.findElement(By.id("region_0")).click(); 

}, 328000)
setTimeout(async()=>{ 




      return driver.findElement(By.id("region_0")).sendKeys("s"); 

}, 329000)
setTimeout(async()=>{ 




      return driver.findElement(By.id("region_0")).sendKeys("s"); 

}, 330000)
setTimeout(async()=>{ 




      return driver.findElement(By.id("region_0")).sendKeys("s"); 

}, 331000)
setTimeout(async()=>{ 




      return driver.findElement(By.id("region_0")).sendKeys("s"); 

}, 332000)
setTimeout(async()=>{ 




      return driver.findElement(By.id("region_0")).sendKeys("s"); 

}, 333000)
setTimeout(async()=>{ 




      return driver.findElement(By.id("region_0")).sendKeys("s"); 

}, 334000)
setTimeout(async()=>{ 




      return driver.findElement(By.id("region_0")).sendKeys("s"); 

}, 335000)
setTimeout(async()=>{ 




      return driver.findElement(By.id("region_0")).sendKeys("s"); 

}, 336000)
setTimeout(async()=>{ 




      return driver.findElement(By.tagName("body")).click(); 

}, 337000)
setTimeout(async()=>{ 




      return driver.findElement(By.id("region_1")).click(); 

}, 338000)
setTimeout(async()=>{ 




      return driver.findElement(By.id("region_1")).sendKeys("s"); 

}, 339000)
setTimeout(async()=>{ 




      return driver.findElement(By.xpath("//button[@type='submit']")).click(); 

}, 340000)
setTimeout(async()=>{ 




      return driver.findElement(By.xpath("//button[@type='submit']")).click(); 

}, 341000)


/***************************************************************************************
 * 
 * 
 * 
 * 
 * 
 * Chrysler Convertible 2013	
 * 
 * 
 * 
 * 
 ****************************************************************************************/

setTimeout(async()=>{ 




      return driver.get("https://www.corotos.com.do/create") 

}, 350000)
setTimeout(async()=>{ 




      return driver.findElement(By.id("_tealiumModalClose")).click(); 

}, 354000)
setTimeout(async()=>{ 




      return driver.findElement(By.xpath("//input[@type='file']")).sendKeys("c:/Users/Rey Messon/Desktop/anuncio/WhatsApp Image 2018-10-20 at 1.14.17 PM.jpeg"); 

}, 358000)
setTimeout(async()=>{ 




      return driver.findElement(By.xpath("//input[@type='file']")).sendKeys("c:/Users/Rey Messon/Desktop/anuncio/WhatsApp Image 2018-10-20 at 1.14.18 PM (1).jpeg"); 

}, 362000)
setTimeout(async()=>{ 




      return driver.findElement(By.xpath("//button[@type='submit']")).click(); 

}, 366000)
setTimeout(async()=>{ 




      return driver.findElement(By.id("title")).sendKeys(dataMaster5.header); 

}, 367000)
setTimeout(async()=>{ 




      return driver.findElement(By.id("description")).sendKeys(dataMaster5.description); 

}, 368000)
setTimeout(async()=>{ 




      return driver.findElement(By.id("category_0")).click(); 

}, 369000)
setTimeout(async()=>{ 




      return driver.findElement(By.id("category_0")).sendKeys("v"); 

}, 370000)
setTimeout(async()=>{ 




      return driver.findElement(By.tagName("body")).click(); 

}, 371000)
setTimeout(async()=>{ 




      return driver.findElement(By.id("category_1")).click(); 

}, 372000)
setTimeout(async()=>{ 




      return driver.findElement(By.id("category_1")).sendKeys("c"); 

}, 373000)
setTimeout(async()=>{ 




      return driver.findElement(By.tagName("body")).click(); 

}, 374000)
setTimeout(async()=>{ 




      return driver.findElement(By.xpath("//button[@type='submit']")).click(); 

}, 375000)
setTimeout(async()=>{ 




      return driver.findElement(By.id("metadata.vehicleType")).click(); 

}, 376000)
setTimeout(async()=>{ 




      return driver.findElement(By.id("metadata.vehicleType")).sendKeys("s"); 

}, 377000)
setTimeout(async()=>{ 




      return driver.findElement(By.tagName("body")).click(); 

}, 378000)
setTimeout(async()=>{ 




      return driver.findElement(By.id("metadata.year")).sendKeys("2012"); 

}, 379000)
setTimeout(async()=>{ 




      return driver.findElement(By.id("metadata.mileage")).sendKeys("1000"); 

}, 380000)
setTimeout(async()=>{ 




      return driver.findElement(By.id("metadata.fuel")).click(); 

}, 381000)
setTimeout(async()=>{ 




      return driver.findElement(By.id("metadata.fuel")).sendKeys("g"); 

}, 382000)
setTimeout(async()=>{ 




      return driver.findElement(By.id("metadata.fuel")).sendKeys("g"); 

}, 383000)
setTimeout(async()=>{ 




      return driver.findElement(By.id("metadata.horsePower")).sendKeys("4"); 

}, 384000)
setTimeout(async()=>{ 




      return driver.findElement(By.id("metadata.transmission")).click(); 

}, 385000)
setTimeout(async()=>{ 




      return driver.findElement(By.id("metadata.transmission")).sendKeys("a"); 

}, 386000)
setTimeout(async()=>{ 




      return driver.findElement(By.tagName("body")).click(); 

}, 387000)
setTimeout(async()=>{ 




      return driver.findElement(By.id("metadata.outsideColor")).click(); 

}, 388000)
setTimeout(async()=>{ 




      return driver.findElement(By.id("metadata.outsideColor")).sendKeys("r"); 

}, 389000)
setTimeout(async()=>{ 




      return driver.findElement(By.tagName("body")).click(); 

}, 390000)
setTimeout(async()=>{ 




      return driver.findElement(By.id("metadata.condition")).click(); 

}, 391000)
setTimeout(async()=>{ 




      return driver.findElement(By.id("metadata.condition")).sendKeys("u"); 

}, 392000)
setTimeout(async()=>{ 




      return driver.findElement(By.tagName("body")).click(); 

}, 393000)
setTimeout(async()=>{ 




      return driver.findElement(By.id("metadata.insideColor")).click(); 

}, 394000)
setTimeout(async()=>{ 




      return driver.findElement(By.id("metadata.insideColor")).sendKeys("n"); 

}, 395000)
setTimeout(async()=>{ 




      return driver.findElement(By.id("metadata.insideColor")).sendKeys("n"); 

}, 396000)
setTimeout(async()=>{ 




      return driver.findElement(By.tagName("body")).click(); 

}, 397000)
setTimeout(async()=>{ 




      return driver.findElement(By.id("metadata.make")).click(); 

}, 398000)
setTimeout(async()=>{ 




      return driver.findElement(By.id("metadata.make")).sendKeys("t"); 

}, 399000)
setTimeout(async()=>{ 




      return driver.findElement(By.id("metadata.make")).sendKeys("t"); 

}, 400000)
setTimeout(async()=>{ 




      return driver.findElement(By.tagName("body")).click(); 

}, 401000)
setTimeout(async()=>{ 




      return driver.findElement(By.id("metadata.model")).click(); 

}, 402000)
setTimeout(async()=>{ 




      return driver.findElement(By.id("metadata.model")).sendKeys("p"); 

}, 403000)
setTimeout(async()=>{ 




      return driver.findElement(By.tagName("body")).click(); 

}, 404000)
setTimeout(async()=>{ 




      return driver.findElement(By.tagName("body")).click(); 

}, 405000)
setTimeout(async()=>{ 




      return driver.findElement(By.xpath("//button[@type='submit']")).click(); 

}, 406000)
setTimeout(async()=>{ 




      return driver.findElement(By.id("price")).sendKeys(57500); 

}, 407000)
setTimeout(async()=>{ 




      return driver.findElement(By.id("region_0")).click(); 

}, 408000)
setTimeout(async()=>{ 




      return driver.findElement(By.id("region_0")).sendKeys("s"); 

}, 409000)
setTimeout(async()=>{ 




      return driver.findElement(By.id("region_0")).sendKeys("s"); 

}, 410000)
setTimeout(async()=>{ 




      return driver.findElement(By.id("region_0")).sendKeys("s"); 

}, 411000)
setTimeout(async()=>{ 




      return driver.findElement(By.id("region_0")).sendKeys("s"); 

}, 412000)
setTimeout(async()=>{ 




      return driver.findElement(By.id("region_0")).sendKeys("s"); 

}, 413000)
setTimeout(async()=>{ 




      return driver.findElement(By.id("region_0")).sendKeys("s"); 

}, 414000)
setTimeout(async()=>{ 




      return driver.findElement(By.id("region_0")).sendKeys("s"); 

}, 415000)
setTimeout(async()=>{ 




      return driver.findElement(By.id("region_0")).sendKeys("s"); 

}, 416000)
setTimeout(async()=>{ 




      return driver.findElement(By.tagName("body")).click(); 

}, 417000)
setTimeout(async()=>{ 




      return driver.findElement(By.id("region_1")).click(); 

}, 418000)
setTimeout(async()=>{ 




      return driver.findElement(By.id("region_1")).sendKeys("s"); 

}, 419000)
setTimeout(async()=>{ 




      return driver.findElement(By.xpath("//button[@type='submit']")).click(); 

}, 420000)
setTimeout(async()=>{ 




      return driver.findElement(By.xpath("//button[@type='submit']")).click(); 

}, 421000)

/**************************************************************************************
 * 
 * 
 * 
 * 
 * 
 * 
 * 
 * Ford F-150 2013	
 * 
 * 
 * 
 * 
 * 
 * 
 * 
 ***************************************************************************************/

setTimeout(async()=>{ 




      return driver.get("https://www.corotos.com.do/create") 

}, 430000)
setTimeout(async()=>{ 




      return driver.findElement(By.id("_tealiumModalClose")).click(); 

}, 434000)
setTimeout(async()=>{ 




      return driver.findElement(By.xpath("//input[@type='file']")).sendKeys("c:/Users/Rey Messon/Desktop/anuncio/WhatsApp Image 2018-10-20 at 11.26.29 AM (1).jpeg"); 

}, 438000)
setTimeout(async()=>{ 




      return driver.findElement(By.xpath("//input[@type='file']")).sendKeys("c:/Users/Rey Messon/Desktop/anuncio/WhatsApp Image 2018-10-20 at 11.26.29 AM.jpeg"); 

}, 442000)
setTimeout(async()=>{ 




      return driver.findElement(By.xpath("//button[@type='submit']")).click(); 

}, 446000)
setTimeout(async()=>{ 




      return driver.findElement(By.id("title")).sendKeys(dataMaster6.header); 

}, 447000)
setTimeout(async()=>{ 




      return driver.findElement(By.id("description")).sendKeys(dataMaster6.description); 

}, 448000)
setTimeout(async()=>{ 




      return driver.findElement(By.id("category_0")).click(); 

}, 449000)
setTimeout(async()=>{ 




      return driver.findElement(By.id("category_0")).sendKeys("v"); 

}, 450000)
setTimeout(async()=>{ 




      return driver.findElement(By.tagName("body")).click(); 

}, 451000)
setTimeout(async()=>{ 




      return driver.findElement(By.id("category_1")).click(); 

}, 452000)
setTimeout(async()=>{ 




      return driver.findElement(By.id("category_1")).sendKeys("j"); 

}, 453000)
setTimeout(async()=>{ 




      return driver.findElement(By.tagName("body")).click(); 

}, 454000)
setTimeout(async()=>{ 




      return driver.findElement(By.xpath("//button[@type='submit']")).click(); 

}, 455000)
setTimeout(async()=>{ 




      return driver.findElement(By.id("metadata.year")).sendKeys("2013"); 

}, 457000)
setTimeout(async()=>{ 




      return driver.findElement(By.id("metadata.mileage")).sendKeys("1000"); 

}, 457000)
setTimeout(async()=>{ 




      return driver.findElement(By.id("metadata.fuel")).click(); 

}, 458000)
setTimeout(async()=>{ 




      return driver.findElement(By.id("metadata.fuel")).sendKeys("g"); 

}, 459000)
setTimeout(async()=>{ 




      return driver.findElement(By.id("metadata.fuel")).sendKeys("g"); 

}, 460000)
setTimeout(async()=>{ 




      return driver.findElement(By.id("metadata.transmission")).click(); 

}, 461000)
setTimeout(async()=>{ 




      return driver.findElement(By.id("metadata.transmission")).sendKeys("a"); 

}, 462000)
setTimeout(async()=>{ 




      return driver.findElement(By.tagName("body")).click(); 

}, 463000)
setTimeout(async()=>{ 




      return driver.findElement(By.tagName("body")).click(); 

}, 464000)
setTimeout(async()=>{ 




      return driver.findElement(By.id("metadata.outsideColor")).click(); 

}, 465000)
setTimeout(async()=>{ 




      return driver.findElement(By.id("metadata.outsideColor")).sendKeys("r"); 

}, 466000)
setTimeout(async()=>{ 




      return driver.findElement(By.tagName("body")).click(); 

}, 467000)
setTimeout(async()=>{ 




      return driver.findElement(By.id("metadata.insideColor")).click(); 

}, 468000)
setTimeout(async()=>{ 




      return driver.findElement(By.id("metadata.insideColor")).sendKeys("n"); 

}, 469000)
setTimeout(async()=>{ 




      return driver.findElement(By.id("metadata.insideColor")).sendKeys("n"); 

}, 470000)
setTimeout(async()=>{ 




      return driver.findElement(By.tagName("body")).click(); 

}, 471000)
setTimeout(async()=>{ 




      return driver.findElement(By.id("metadata.horsePower")).sendKeys("4"); 

}, 472000)
setTimeout(async()=>{ 




      return driver.findElement(By.tagName("body")).click(); 

}, 473000)
setTimeout(async()=>{ 




      return driver.findElement(By.id("metadata.condition")).click(); 

}, 474000)
setTimeout(async()=>{ 




      return driver.findElement(By.id("metadata.condition")).sendKeys("u"); 

}, 475000)
setTimeout(async()=>{ 




      return driver.findElement(By.tagName("body")).click(); 

}, 476000)
setTimeout(async()=>{ 




      return driver.findElement(By.tagName("body")).click(); 

}, 477000)
setTimeout(async()=>{ 




      return driver.findElement(By.tagName("body")).click(); 

}, 478000)
setTimeout(async()=>{ 




      return driver.findElement(By.id("metadata.make")).click(); 

}, 479000)
setTimeout(async()=>{ 




      return driver.findElement(By.id("metadata.make")).sendKeys("h"); 

}, 480000)
setTimeout(async()=>{ 




      return driver.findElement(By.tagName("body")).click(); 

}, 481000)
setTimeout(async()=>{ 




      return driver.findElement(By.id("metadata.model")).click(); 

}, 482000)
setTimeout(async()=>{ 




      return driver.findElement(By.id("metadata.model")).sendKeys("f"); 

}, 483000)
setTimeout(async()=>{ 




      return driver.findElement(By.tagName("body")).click(); 

}, 484000)
setTimeout(async()=>{ 




      return driver.findElement(By.id("metadata.heavyVehicleType")).click(); 

}, 485000)
setTimeout(async()=>{ 




      return driver.findElement(By.id("metadata.heavyVehicleType")).sendKeys("j"); 

}, 486000)
setTimeout(async()=>{ 




      return driver.findElement(By.tagName("body")).click(); 

}, 487000)
setTimeout(async()=>{ 




      return driver.findElement(By.xpath("//button[@type='submit']")).click(); 

}, 488000)
setTimeout(async()=>{ 




      return driver.findElement(By.id("price")).sendKeys(3000); 

}, 489000)
setTimeout(async()=>{ 




      return driver.findElement(By.id("region_0")).click(); 

}, 490000)
setTimeout(async()=>{ 




      return driver.findElement(By.id("region_0")).sendKeys("s"); 

}, 491000)
setTimeout(async()=>{ 




      return driver.findElement(By.id("region_0")).sendKeys("s"); 

}, 492000)
setTimeout(async()=>{ 




      return driver.findElement(By.id("region_0")).sendKeys("s"); 

}, 493000)
setTimeout(async()=>{ 




      return driver.findElement(By.id("region_0")).sendKeys("s"); 

}, 494000)
setTimeout(async()=>{ 




      return driver.findElement(By.id("region_0")).sendKeys("s"); 

}, 495000)
setTimeout(async()=>{ 




      return driver.findElement(By.id("region_0")).sendKeys("s"); 

}, 496000)
setTimeout(async()=>{ 




      return driver.findElement(By.id("region_0")).sendKeys("s"); 

}, 497000)
setTimeout(async()=>{ 




      return driver.findElement(By.id("region_0")).sendKeys("s"); 

}, 498000)
setTimeout(async()=>{ 




      return driver.findElement(By.tagName("body")).click(); 

}, 499000)
setTimeout(async()=>{ 




      return driver.findElement(By.id("region_1")).click(); 

}, 500000)
setTimeout(async()=>{ 




      return driver.findElement(By.id("region_1")).sendKeys("s"); 

}, 501000)
setTimeout(async()=>{ 




      return driver.findElement(By.xpath("//button[@type='submit']")).click(); 

}, 502000)
setTimeout(async()=>{ 




      return driver.findElement(By.xpath("//button[@type='submit']")).click(); 

}, 503000)



/*******************************************************************************
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
 ********************************************************************************/



setTimeout(async()=>{ 




     return driver.get("https://www.corotos.com.do/create") 

}, 510000)
setTimeout(async()=>{ 




     return driver.findElement(By.id("_tealiumModalClose")).click(); 

}, 514000)
setTimeout(async()=>{ 




     return driver.findElement(By.xpath("//input[@type='file']")).sendKeys("c:/Users/Rey Messon/Desktop/anuncio/WhatsApp Image 2018-10-20 at 1.16.36 PM (1).jpeg"); 

}, 518000)
setTimeout(async()=>{ 




     return driver.findElement(By.xpath("//input[@type='file']")).sendKeys("c:/Users/Rey Messon/Desktop/anuncio/WhatsApp Image 2018-10-20 at 1.16.36 PM.jpeg"); 

}, 522000)
setTimeout(async()=>{ 




     return driver.findElement(By.xpath("//button[@type='submit']")).click(); 

}, 526000)
setTimeout(async()=>{ 




     return driver.findElement(By.id("title")).sendKeys(dataMaster7.header); 

}, 527000)
setTimeout(async()=>{ 




     return driver.findElement(By.id("description")).sendKeys(dataMaster7.description); 

}, 528000)
setTimeout(async()=>{ 




     return driver.findElement(By.id("category_0")).click(); 

}, 529000)
setTimeout(async()=>{ 




     return driver.findElement(By.id("category_0")).sendKeys("v"); 

}, 530000)
setTimeout(async()=>{ 




     return driver.findElement(By.tagName("body")).click(); 

}, 531000)
setTimeout(async()=>{ 




     return driver.findElement(By.id("category_1")).click(); 

}, 532000)
setTimeout(async()=>{ 




     return driver.findElement(By.id("category_1")).sendKeys("j"); 

}, 533000)
setTimeout(async()=>{ 




     return driver.findElement(By.tagName("body")).click(); 

}, 534000)
setTimeout(async()=>{ 




     return driver.findElement(By.xpath("//button[@type='submit']")).click(); 

}, 535000)
setTimeout(async()=>{ 




     return driver.findElement(By.id("metadata.year")).sendKeys("2013"); 

}, 537000)
setTimeout(async()=>{ 




     return driver.findElement(By.id("metadata.mileage")).sendKeys("1000"); 

}, 537000)
setTimeout(async()=>{ 




     return driver.findElement(By.id("metadata.fuel")).click(); 

}, 538000)
setTimeout(async()=>{ 




     return driver.findElement(By.id("metadata.fuel")).sendKeys("g"); 

}, 539000)
setTimeout(async()=>{ 




     return driver.findElement(By.id("metadata.fuel")).sendKeys("g"); 

}, 540000)
setTimeout(async()=>{ 




     return driver.findElement(By.id("metadata.transmission")).click(); 

}, 541000)
setTimeout(async()=>{ 




     return driver.findElement(By.id("metadata.transmission")).sendKeys("a"); 

}, 542000)
setTimeout(async()=>{ 




     return driver.findElement(By.tagName("body")).click(); 

}, 543000)
setTimeout(async()=>{ 




     return driver.findElement(By.tagName("body")).click(); 

}, 544000)
setTimeout(async()=>{ 




     return driver.findElement(By.id("metadata.outsideColor")).click(); 

}, 545000)
setTimeout(async()=>{ 




     return driver.findElement(By.id("metadata.outsideColor")).sendKeys("r"); 

}, 546000)
setTimeout(async()=>{ 




     return driver.findElement(By.tagName("body")).click(); 

}, 547000)
setTimeout(async()=>{ 




     return driver.findElement(By.id("metadata.insideColor")).click(); 

}, 548000)
setTimeout(async()=>{ 




     return driver.findElement(By.id("metadata.insideColor")).sendKeys("n"); 

}, 549000)
setTimeout(async()=>{ 




     return driver.findElement(By.id("metadata.insideColor")).sendKeys("n"); 

}, 550000)
setTimeout(async()=>{ 




     return driver.findElement(By.tagName("body")).click(); 

}, 551000)
setTimeout(async()=>{ 




     return driver.findElement(By.id("metadata.horsePower")).sendKeys("4"); 

}, 552000)
setTimeout(async()=>{ 




     return driver.findElement(By.tagName("body")).click(); 

}, 553000)
setTimeout(async()=>{ 




     return driver.findElement(By.id("metadata.condition")).click(); 

}, 554000)
setTimeout(async()=>{ 




     return driver.findElement(By.id("metadata.condition")).sendKeys("u"); 

}, 555000)
setTimeout(async()=>{ 




     return driver.findElement(By.tagName("body")).click(); 

}, 556000)
setTimeout(async()=>{ 




     return driver.findElement(By.tagName("body")).click(); 

}, 557000)
setTimeout(async()=>{ 




     return driver.findElement(By.tagName("body")).click(); 

}, 558000)
setTimeout(async()=>{ 




     return driver.findElement(By.id("metadata.make")).click(); 

}, 559000)
setTimeout(async()=>{ 




     return driver.findElement(By.id("metadata.make")).sendKeys("h"); 

}, 560000)
setTimeout(async()=>{ 




     return driver.findElement(By.tagName("body")).click(); 

}, 561000)
setTimeout(async()=>{ 




     return driver.findElement(By.id("metadata.model")).click(); 

}, 562000)
setTimeout(async()=>{ 




     return driver.findElement(By.id("metadata.model")).sendKeys("f"); 

}, 563000)
setTimeout(async()=>{ 




     return driver.findElement(By.tagName("body")).click(); 

}, 564000)
setTimeout(async()=>{ 




     return driver.findElement(By.id("metadata.heavyVehicleType")).click(); 

}, 565000)
setTimeout(async()=>{ 




     return driver.findElement(By.id("metadata.heavyVehicleType")).sendKeys("j"); 

}, 566000)
setTimeout(async()=>{ 




     return driver.findElement(By.tagName("body")).click(); 

}, 567000)
setTimeout(async()=>{ 




     return driver.findElement(By.xpath("//button[@type='submit']")).click(); 

}, 568000)
setTimeout(async()=>{ 




     return driver.findElement(By.id("price")).sendKeys(22500); 

}, 569000)
setTimeout(async()=>{ 




     return driver.findElement(By.id("region_0")).click(); 

}, 570000)
setTimeout(async()=>{ 




     return driver.findElement(By.id("region_0")).sendKeys("s"); 

}, 571000)
setTimeout(async()=>{ 




     return driver.findElement(By.id("region_0")).sendKeys("s"); 

}, 572000)
setTimeout(async()=>{ 




     return driver.findElement(By.id("region_0")).sendKeys("s"); 

}, 573000)
setTimeout(async()=>{ 




     return driver.findElement(By.id("region_0")).sendKeys("s"); 

}, 574000)
setTimeout(async()=>{ 




     return driver.findElement(By.id("region_0")).sendKeys("s"); 

}, 575000)
setTimeout(async()=>{ 




     return driver.findElement(By.id("region_0")).sendKeys("s"); 

}, 576000)
setTimeout(async()=>{ 




     return driver.findElement(By.id("region_0")).sendKeys("s"); 

}, 577000)
setTimeout(async()=>{ 




     return driver.findElement(By.id("region_0")).sendKeys("s"); 

}, 578000)
setTimeout(async()=>{ 




     return driver.findElement(By.tagName("body")).click(); 

}, 579000)
setTimeout(async()=>{ 




     return driver.findElement(By.id("region_1")).click(); 

}, 580000)
setTimeout(async()=>{ 




     return driver.findElement(By.id("region_1")).sendKeys("s"); 

}, 581000)
setTimeout(async()=>{ 




     return driver.findElement(By.xpath("//button[@type='submit']")).click(); 

}, 582000)
setTimeout(async()=>{ 




     return driver.findElement(By.xpath("//button[@type='submit']")).click(); 

}, 583000)


/***************************************************************************************
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

}, 590000)
setTimeout(async()=>{ 




      return driver.findElement(By.id("_tealiumModalClose")).click(); 

}, 594000)
setTimeout(async()=>{ 




      return driver.findElement(By.xpath("//input[@type='file']")).sendKeys("c:/Users/Rey Messon/Desktop/anuncio/WhatsApp Image 2018-10-20 at 11.27.54 AM (1).jpeg"); 

}, 598000)
setTimeout(async()=>{ 




      return driver.findElement(By.xpath("//input[@type='file']")).sendKeys("c:/Users/Rey Messon/Desktop/anuncio/WhatsApp Image 2018-10-20 at 11.27.54 AM.jpeg"); 

}, 602000)
setTimeout(async()=>{ 




      return driver.findElement(By.xpath("//button[@type='submit']")).click(); 

}, 606000)
setTimeout(async()=>{ 




      return driver.findElement(By.id("title")).sendKeys(dataMaster8.header); 

}, 607000)
setTimeout(async()=>{ 




      return driver.findElement(By.id("description")).sendKeys(dataMaster8.description); 

}, 608000)
setTimeout(async()=>{ 




      return driver.findElement(By.id("category_0")).click(); 

}, 609000)
setTimeout(async()=>{ 




      return driver.findElement(By.id("category_0")).sendKeys("v"); 

}, 610000)
setTimeout(async()=>{ 




      return driver.findElement(By.tagName("body")).click(); 

}, 611000)
setTimeout(async()=>{ 




      return driver.findElement(By.id("category_1")).click(); 

}, 612000)
setTimeout(async()=>{ 




      return driver.findElement(By.id("category_1")).sendKeys("c"); 

}, 613000)
setTimeout(async()=>{ 




      return driver.findElement(By.tagName("body")).click(); 

}, 614000)
setTimeout(async()=>{ 




      return driver.findElement(By.xpath("//button[@type='submit']")).click(); 

}, 615000)
setTimeout(async()=>{ 




      return driver.findElement(By.id("metadata.vehicleType")).click(); 

}, 616000)
setTimeout(async()=>{ 




      return driver.findElement(By.id("metadata.vehicleType")).sendKeys("s"); 

}, 617000)
setTimeout(async()=>{ 




      return driver.findElement(By.tagName("body")).click(); 

}, 618000)
setTimeout(async()=>{ 




      return driver.findElement(By.id("metadata.year")).sendKeys("2012"); 

}, 619000)
setTimeout(async()=>{ 




      return driver.findElement(By.id("metadata.mileage")).sendKeys("1000"); 

}, 620000)
setTimeout(async()=>{ 




      return driver.findElement(By.id("metadata.fuel")).click(); 

}, 621000)
setTimeout(async()=>{ 




      return driver.findElement(By.id("metadata.fuel")).sendKeys("g"); 

}, 622000)
setTimeout(async()=>{ 




      return driver.findElement(By.id("metadata.fuel")).sendKeys("g"); 

}, 623000)
setTimeout(async()=>{ 




      return driver.findElement(By.id("metadata.horsePower")).sendKeys("4"); 

}, 624000)
setTimeout(async()=>{ 




      return driver.findElement(By.id("metadata.transmission")).click(); 

}, 625000)
setTimeout(async()=>{ 




      return driver.findElement(By.id("metadata.transmission")).sendKeys("a"); 

}, 626000)
setTimeout(async()=>{ 




      return driver.findElement(By.tagName("body")).click(); 

}, 627000)
setTimeout(async()=>{ 




      return driver.findElement(By.id("metadata.outsideColor")).click(); 

}, 628000)
setTimeout(async()=>{ 




      return driver.findElement(By.id("metadata.outsideColor")).sendKeys("r"); 

}, 629000)
setTimeout(async()=>{ 




      return driver.findElement(By.tagName("body")).click(); 

}, 630000)
setTimeout(async()=>{ 




      return driver.findElement(By.id("metadata.condition")).click(); 

}, 631000)
setTimeout(async()=>{ 




      return driver.findElement(By.id("metadata.condition")).sendKeys("u"); 

}, 632000)
setTimeout(async()=>{ 




      return driver.findElement(By.tagName("body")).click(); 

}, 633000)
setTimeout(async()=>{ 




      return driver.findElement(By.id("metadata.insideColor")).click(); 

}, 634000)
setTimeout(async()=>{ 




      return driver.findElement(By.id("metadata.insideColor")).sendKeys("n"); 

}, 635000)
setTimeout(async()=>{ 




      return driver.findElement(By.id("metadata.insideColor")).sendKeys("n"); 

}, 636000)
setTimeout(async()=>{ 




      return driver.findElement(By.tagName("body")).click(); 

}, 637000)
setTimeout(async()=>{ 




      return driver.findElement(By.id("metadata.make")).click(); 

}, 638000)
setTimeout(async()=>{ 




      return driver.findElement(By.id("metadata.make")).sendKeys("t"); 

}, 639000)
setTimeout(async()=>{ 




      return driver.findElement(By.id("metadata.make")).sendKeys("t"); 

}, 640000)
setTimeout(async()=>{ 




      return driver.findElement(By.tagName("body")).click(); 

}, 641000)
setTimeout(async()=>{ 




      return driver.findElement(By.id("metadata.model")).click(); 

}, 642000)
setTimeout(async()=>{ 




      return driver.findElement(By.id("metadata.model")).sendKeys("p"); 

}, 643000)
setTimeout(async()=>{ 




      return driver.findElement(By.tagName("body")).click(); 

}, 644000)
setTimeout(async()=>{ 




      return driver.findElement(By.tagName("body")).click(); 

}, 645000)
setTimeout(async()=>{ 




      return driver.findElement(By.xpath("//button[@type='submit']")).click(); 

}, 646000)
setTimeout(async()=>{ 




      return driver.findElement(By.id("price")).sendKeys(61000); 

}, 647000)
setTimeout(async()=>{ 




      return driver.findElement(By.id("region_0")).click(); 

}, 648000)
setTimeout(async()=>{ 




      return driver.findElement(By.id("region_0")).sendKeys("s"); 

}, 649000)
setTimeout(async()=>{ 




      return driver.findElement(By.id("region_0")).sendKeys("s"); 

}, 650000)
setTimeout(async()=>{ 




      return driver.findElement(By.id("region_0")).sendKeys("s"); 

}, 651000)
setTimeout(async()=>{ 




      return driver.findElement(By.id("region_0")).sendKeys("s"); 

}, 652000)
setTimeout(async()=>{ 




      return driver.findElement(By.id("region_0")).sendKeys("s"); 

}, 653000)
setTimeout(async()=>{ 




      return driver.findElement(By.id("region_0")).sendKeys("s"); 

}, 654000)
setTimeout(async()=>{ 




      return driver.findElement(By.id("region_0")).sendKeys("s"); 

}, 655000)
setTimeout(async()=>{ 




      return driver.findElement(By.id("region_0")).sendKeys("s"); 

}, 656000)
setTimeout(async()=>{ 




      return driver.findElement(By.tagName("body")).click(); 

}, 657000)
setTimeout(async()=>{ 




      return driver.findElement(By.id("region_1")).click(); 

}, 658000)
setTimeout(async()=>{ 




      return driver.findElement(By.id("region_1")).sendKeys("s"); 

}, 659000)
setTimeout(async()=>{ 




      return driver.findElement(By.xpath("//button[@type='submit']")).click(); 

}, 660000)
setTimeout(async()=>{ 




      return driver.findElement(By.xpath("//button[@type='submit']")).click(); 

}, 661000)



/****************************************************************************
 * 
 * 
 * 
 * 
 * 
 * 
 * 
 * 
 * 
 ***************************************************************************/

setTimeout(async()=>{ 




      return driver.get("https://www.corotos.com.do/create") 

}, 670000)
setTimeout(async()=>{ 




      return driver.findElement(By.id("_tealiumModalClose")).click(); 

}, 674000)
setTimeout(async()=>{ 




      return driver.findElement(By.xpath("//input[@type='file']")).sendKeys("c:/Users/Rey Messon/Desktop/anuncio/WhatsApp Image 2018-10-20 at 11.29.02 AM (1).jpeg"); 

}, 678000)
setTimeout(async()=>{ 




      return driver.findElement(By.xpath("//input[@type='file']")).sendKeys("c:/Users/Rey Messon/Desktop/anuncio/WhatsApp Image 2018-10-20 at 11.29.02 AM.jpeg"); 

}, 682000)
setTimeout(async()=>{ 




      return driver.findElement(By.xpath("//button[@type='submit']")).click(); 

}, 686000)
setTimeout(async()=>{ 




      return driver.findElement(By.id("title")).sendKeys(dataMaster9.header); 

}, 687000)
setTimeout(async()=>{ 




      return driver.findElement(By.id("description")).sendKeys(dataMaster9.description); 

}, 688000)
setTimeout(async()=>{ 




      return driver.findElement(By.id("category_0")).click(); 

}, 689000)
setTimeout(async()=>{ 




      return driver.findElement(By.id("category_0")).sendKeys("v"); 

}, 690000)
setTimeout(async()=>{ 




      return driver.findElement(By.tagName("body")).click(); 

}, 691000)
setTimeout(async()=>{ 




      return driver.findElement(By.id("category_1")).click(); 

}, 692000)
setTimeout(async()=>{ 




      return driver.findElement(By.id("category_1")).sendKeys("j"); 

}, 693000)
setTimeout(async()=>{ 




      return driver.findElement(By.tagName("body")).click(); 

}, 694000)
setTimeout(async()=>{ 




      return driver.findElement(By.xpath("//button[@type='submit']")).click(); 

}, 695000)
setTimeout(async()=>{ 




      return driver.findElement(By.id("metadata.year")).sendKeys("2013"); 

}, 697000)
setTimeout(async()=>{ 




      return driver.findElement(By.id("metadata.mileage")).sendKeys("1000"); 

}, 697000)
setTimeout(async()=>{ 




      return driver.findElement(By.id("metadata.fuel")).click(); 

}, 698000)
setTimeout(async()=>{ 




      return driver.findElement(By.id("metadata.fuel")).sendKeys("g"); 

}, 699000)
setTimeout(async()=>{ 




      return driver.findElement(By.id("metadata.fuel")).sendKeys("g"); 

}, 700000)
setTimeout(async()=>{ 




      return driver.findElement(By.id("metadata.transmission")).click(); 

}, 701000)
setTimeout(async()=>{ 




      return driver.findElement(By.id("metadata.transmission")).sendKeys("a"); 

}, 702000)
setTimeout(async()=>{ 




      return driver.findElement(By.tagName("body")).click(); 

}, 703000)
setTimeout(async()=>{ 




      return driver.findElement(By.tagName("body")).click(); 

}, 704000)
setTimeout(async()=>{ 




      return driver.findElement(By.id("metadata.outsideColor")).click(); 

}, 705000)
setTimeout(async()=>{ 




      return driver.findElement(By.id("metadata.outsideColor")).sendKeys("r"); 

}, 706000)
setTimeout(async()=>{ 




      return driver.findElement(By.tagName("body")).click(); 

}, 707000)
setTimeout(async()=>{ 




      return driver.findElement(By.id("metadata.insideColor")).click(); 

}, 708000)
setTimeout(async()=>{ 




      return driver.findElement(By.id("metadata.insideColor")).sendKeys("n"); 

}, 709000)
setTimeout(async()=>{ 




      return driver.findElement(By.id("metadata.insideColor")).sendKeys("n"); 

}, 710000)
setTimeout(async()=>{ 




      return driver.findElement(By.tagName("body")).click(); 

}, 711000)
setTimeout(async()=>{ 




      return driver.findElement(By.id("metadata.horsePower")).sendKeys("4"); 

}, 712000)
setTimeout(async()=>{ 




      return driver.findElement(By.tagName("body")).click(); 

}, 713000)
setTimeout(async()=>{ 




      return driver.findElement(By.id("metadata.condition")).click(); 

}, 714000)
setTimeout(async()=>{ 




      return driver.findElement(By.id("metadata.condition")).sendKeys("u"); 

}, 715000)
setTimeout(async()=>{ 




      return driver.findElement(By.tagName("body")).click(); 

}, 716000)
setTimeout(async()=>{ 




      return driver.findElement(By.tagName("body")).click(); 

}, 717000)
setTimeout(async()=>{ 




      return driver.findElement(By.tagName("body")).click(); 

}, 718000)
setTimeout(async()=>{ 




      return driver.findElement(By.id("metadata.make")).click(); 

}, 719000)
setTimeout(async()=>{ 




      return driver.findElement(By.id("metadata.make")).sendKeys("h"); 

}, 720000)
setTimeout(async()=>{ 




      return driver.findElement(By.tagName("body")).click(); 

}, 721000)
setTimeout(async()=>{ 




      return driver.findElement(By.id("metadata.model")).click(); 

}, 722000)
setTimeout(async()=>{ 




      return driver.findElement(By.id("metadata.model")).sendKeys("f"); 

}, 723000)
setTimeout(async()=>{ 




      return driver.findElement(By.tagName("body")).click(); 

}, 724000)
setTimeout(async()=>{ 




      return driver.findElement(By.id("metadata.heavyVehicleType")).click(); 

}, 725000)
setTimeout(async()=>{ 




      return driver.findElement(By.id("metadata.heavyVehicleType")).sendKeys("j"); 

}, 726000)
setTimeout(async()=>{ 




      return driver.findElement(By.tagName("body")).click(); 

}, 727000)
setTimeout(async()=>{ 




      return driver.findElement(By.xpath("//button[@type='submit']")).click(); 

}, 728000)
setTimeout(async()=>{ 




      return driver.findElement(By.id("price")).sendKeys(73000); 

}, 729000)
setTimeout(async()=>{ 




      return driver.findElement(By.id("region_0")).click(); 

}, 730000)
setTimeout(async()=>{ 




      return driver.findElement(By.id("region_0")).sendKeys("s"); 

}, 731000)
setTimeout(async()=>{ 




      return driver.findElement(By.id("region_0")).sendKeys("s"); 

}, 732000)
setTimeout(async()=>{ 




      return driver.findElement(By.id("region_0")).sendKeys("s"); 

}, 733000)
setTimeout(async()=>{ 




      return driver.findElement(By.id("region_0")).sendKeys("s"); 

}, 734000)
setTimeout(async()=>{ 




      return driver.findElement(By.id("region_0")).sendKeys("s"); 

}, 735000)
setTimeout(async()=>{ 




      return driver.findElement(By.id("region_0")).sendKeys("s"); 

}, 736000)
setTimeout(async()=>{ 




      return driver.findElement(By.id("region_0")).sendKeys("s"); 

}, 737000)
setTimeout(async()=>{ 




      return driver.findElement(By.id("region_0")).sendKeys("s"); 

}, 738000)
setTimeout(async()=>{ 




      return driver.findElement(By.tagName("body")).click(); 

}, 739000)
setTimeout(async()=>{ 




      return driver.findElement(By.id("region_1")).click(); 

}, 740000)
setTimeout(async()=>{ 




      return driver.findElement(By.id("region_1")).sendKeys("s"); 

}, 741000)
setTimeout(async()=>{ 




      return driver.findElement(By.xpath("//button[@type='submit']")).click(); 

}, 742000)
setTimeout(async()=>{ 




      return driver.findElement(By.xpath("//button[@type='submit']")).click(); 

}, 743000)


/*******************************************************************************
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
 * 
 * 
 * 
 * 
 * 
 * 
 * 
 ********************************************************************************/


setTimeout(async()=>{ 




      return driver.get("https://www.corotos.com.do/create") 

}, 750000)
setTimeout(async()=>{ 




      return driver.findElement(By.id("_tealiumModalClose")).click(); 

}, 754000)
setTimeout(async()=>{ 




      return driver.findElement(By.xpath("//input[@type='file']")).sendKeys("c:/Users/Rey Messon/Desktop/anuncio/WhatsApp Image 2018-10-20 at 11.30.25 AM (1).jpeg"); 

}, 758000)
setTimeout(async()=>{ 




      return driver.findElement(By.xpath("//input[@type='file']")).sendKeys("c:/Users/Rey Messon/Desktop/anuncio/WhatsApp Image 2018-10-20 at 11.30.25 AM.jpeg"); 

}, 762000)
setTimeout(async()=>{ 




      return driver.findElement(By.xpath("//button[@type='submit']")).click(); 

}, 766000)
setTimeout(async()=>{ 




      return driver.findElement(By.id("title")).sendKeys(dataMaster10.header); 

}, 767000)
setTimeout(async()=>{ 




      return driver.findElement(By.id("description")).sendKeys(dataMaster10.description); 

}, 768000)
setTimeout(async()=>{ 




      return driver.findElement(By.id("category_0")).click(); 

}, 769000)
setTimeout(async()=>{ 




      return driver.findElement(By.id("category_0")).sendKeys("v"); 

}, 770000)
setTimeout(async()=>{ 




      return driver.findElement(By.tagName("body")).click(); 

}, 771000)
setTimeout(async()=>{ 




      return driver.findElement(By.id("category_1")).click(); 

}, 772000)
setTimeout(async()=>{ 




      return driver.findElement(By.id("category_1")).sendKeys("j"); 

}, 773000)
setTimeout(async()=>{ 




      return driver.findElement(By.tagName("body")).click(); 

}, 774000)
setTimeout(async()=>{ 




      return driver.findElement(By.xpath("//button[@type='submit']")).click(); 

}, 775000)
setTimeout(async()=>{ 




      return driver.findElement(By.id("metadata.year")).sendKeys("2013"); 

}, 777000)
setTimeout(async()=>{ 




      return driver.findElement(By.id("metadata.mileage")).sendKeys("1000"); 

}, 777000)
setTimeout(async()=>{ 




      return driver.findElement(By.id("metadata.fuel")).click(); 

}, 778000)
setTimeout(async()=>{ 




      return driver.findElement(By.id("metadata.fuel")).sendKeys("g"); 

}, 779000)
setTimeout(async()=>{ 




      return driver.findElement(By.id("metadata.fuel")).sendKeys("g"); 

}, 780000)
setTimeout(async()=>{ 




      return driver.findElement(By.id("metadata.transmission")).click(); 

}, 781000)
setTimeout(async()=>{ 




      return driver.findElement(By.id("metadata.transmission")).sendKeys("a"); 

}, 782000)
setTimeout(async()=>{ 




      return driver.findElement(By.tagName("body")).click(); 

}, 783000)
setTimeout(async()=>{ 




      return driver.findElement(By.tagName("body")).click(); 

}, 784000)
setTimeout(async()=>{ 




      return driver.findElement(By.id("metadata.outsideColor")).click(); 

}, 785000)
setTimeout(async()=>{ 




      return driver.findElement(By.id("metadata.outsideColor")).sendKeys("r"); 

}, 786000)
setTimeout(async()=>{ 




      return driver.findElement(By.tagName("body")).click(); 

}, 787000)
setTimeout(async()=>{ 




      return driver.findElement(By.id("metadata.insideColor")).click(); 

}, 788000)
setTimeout(async()=>{ 




      return driver.findElement(By.id("metadata.insideColor")).sendKeys("n"); 

}, 789000)
setTimeout(async()=>{ 




      return driver.findElement(By.id("metadata.insideColor")).sendKeys("n"); 

}, 790000)
setTimeout(async()=>{ 




      return driver.findElement(By.tagName("body")).click(); 

}, 791000)
setTimeout(async()=>{ 




      return driver.findElement(By.id("metadata.horsePower")).sendKeys("4"); 

}, 792000)
setTimeout(async()=>{ 




      return driver.findElement(By.tagName("body")).click(); 

}, 793000)
setTimeout(async()=>{ 




      return driver.findElement(By.id("metadata.condition")).click(); 

}, 794000)
setTimeout(async()=>{ 




      return driver.findElement(By.id("metadata.condition")).sendKeys("u"); 

}, 795000)
setTimeout(async()=>{ 




      return driver.findElement(By.tagName("body")).click(); 

}, 796000)
setTimeout(async()=>{ 




      return driver.findElement(By.tagName("body")).click(); 

}, 797000)
setTimeout(async()=>{ 




      return driver.findElement(By.tagName("body")).click(); 

}, 798000)
setTimeout(async()=>{ 




      return driver.findElement(By.id("metadata.make")).click(); 

}, 799000)
setTimeout(async()=>{ 




      return driver.findElement(By.id("metadata.make")).sendKeys("h"); 

}, 800000)
setTimeout(async()=>{ 




      return driver.findElement(By.tagName("body")).click(); 

}, 801000)
setTimeout(async()=>{ 




      return driver.findElement(By.id("metadata.model")).click(); 

}, 802000)
setTimeout(async()=>{ 




      return driver.findElement(By.id("metadata.model")).sendKeys("f"); 

}, 803000)
setTimeout(async()=>{ 




      return driver.findElement(By.tagName("body")).click(); 

}, 804000)
setTimeout(async()=>{ 




      return driver.findElement(By.id("metadata.heavyVehicleType")).click(); 

}, 805000)
setTimeout(async()=>{ 




      return driver.findElement(By.id("metadata.heavyVehicleType")).sendKeys("j"); 

}, 806000)
setTimeout(async()=>{ 




      return driver.findElement(By.tagName("body")).click(); 

}, 807000)
setTimeout(async()=>{ 




      return driver.findElement(By.xpath("//button[@type='submit']")).click(); 

}, 808000)
setTimeout(async()=>{ 




      return driver.findElement(By.id("price")).sendKeys(70500); 

}, 809000)
setTimeout(async()=>{ 




      return driver.findElement(By.id("region_0")).click(); 

}, 810000)
setTimeout(async()=>{ 




      return driver.findElement(By.id("region_0")).sendKeys("s"); 

}, 811000)
setTimeout(async()=>{ 




      return driver.findElement(By.id("region_0")).sendKeys("s"); 

}, 812000)
setTimeout(async()=>{ 




      return driver.findElement(By.id("region_0")).sendKeys("s"); 

}, 813000)
setTimeout(async()=>{ 




      return driver.findElement(By.id("region_0")).sendKeys("s"); 

}, 814000)
setTimeout(async()=>{ 




      return driver.findElement(By.id("region_0")).sendKeys("s"); 

}, 815000)
setTimeout(async()=>{ 




      return driver.findElement(By.id("region_0")).sendKeys("s"); 

}, 816000)
setTimeout(async()=>{ 




      return driver.findElement(By.id("region_0")).sendKeys("s"); 

}, 817000)
setTimeout(async()=>{ 




      return driver.findElement(By.id("region_0")).sendKeys("s"); 

}, 818000)
setTimeout(async()=>{ 




      return driver.findElement(By.tagName("body")).click(); 

}, 819000)
setTimeout(async()=>{ 




      return driver.findElement(By.id("region_1")).click(); 

}, 820000)
setTimeout(async()=>{ 




      return driver.findElement(By.id("region_1")).sendKeys("s"); 

}, 821000)
setTimeout(async()=>{ 




      return driver.findElement(By.xpath("//button[@type='submit']")).click(); 

}, 822000)
setTimeout(async()=>{ 




      return driver.findElement(By.xpath("//button[@type='submit']")).click(); 

}, 823000)


/****************************************************************************************
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
 * 
 ****************************************************************************************/


setTimeout(async()=>{ 




      return driver.get("https://www.corotos.com.do/create") 

}, 830000)
setTimeout(async()=>{ 




      return driver.findElement(By.id("_tealiumModalClose")).click(); 

}, 834000)
setTimeout(async()=>{ 




      return driver.findElement(By.xpath("//input[@type='file']")).sendKeys("c:/Users/Rey Messon/Desktop/anuncio/WhatsApp Image 2018-10-20 at 11.32.03 AM (1).jpeg"); 

}, 838000)
setTimeout(async()=>{ 




      return driver.findElement(By.xpath("//input[@type='file']")).sendKeys("c:/Users/Rey Messon/Desktop/anuncio/WhatsApp Image 2018-10-20 at 11.32.03 AM.jpeg"); 

}, 842000)
setTimeout(async()=>{ 




      return driver.findElement(By.xpath("//button[@type='submit']")).click(); 

}, 846000)
setTimeout(async()=>{ 




      return driver.findElement(By.id("title")).sendKeys(dataMaster11.header); 

}, 847000)
setTimeout(async()=>{ 




      return driver.findElement(By.id("description")).sendKeys(dataMaster11.description); 

}, 848000)
setTimeout(async()=>{ 




      return driver.findElement(By.id("category_0")).click(); 

}, 849000)
setTimeout(async()=>{ 




      return driver.findElement(By.id("category_0")).sendKeys("v"); 

}, 850000)
setTimeout(async()=>{ 




      return driver.findElement(By.tagName("body")).click(); 

}, 851000)
setTimeout(async()=>{ 




      return driver.findElement(By.id("category_1")).click(); 

}, 852000)
setTimeout(async()=>{ 




      return driver.findElement(By.id("category_1")).sendKeys("j"); 

}, 853000)
setTimeout(async()=>{ 




      return driver.findElement(By.tagName("body")).click(); 

}, 854000)
setTimeout(async()=>{ 




      return driver.findElement(By.xpath("//button[@type='submit']")).click(); 

}, 855000)
setTimeout(async()=>{ 




      return driver.findElement(By.id("metadata.year")).sendKeys("2013"); 

}, 857000)
setTimeout(async()=>{ 




      return driver.findElement(By.id("metadata.mileage")).sendKeys("1000"); 

}, 857000)
setTimeout(async()=>{ 




      return driver.findElement(By.id("metadata.fuel")).click(); 

}, 858000)
setTimeout(async()=>{ 




      return driver.findElement(By.id("metadata.fuel")).sendKeys("g"); 

}, 859000)
setTimeout(async()=>{ 




      return driver.findElement(By.id("metadata.fuel")).sendKeys("g"); 

}, 860000)
setTimeout(async()=>{ 




      return driver.findElement(By.id("metadata.transmission")).click(); 

}, 861000)
setTimeout(async()=>{ 




      return driver.findElement(By.id("metadata.transmission")).sendKeys("a"); 

}, 862000)
setTimeout(async()=>{ 




      return driver.findElement(By.tagName("body")).click(); 

}, 863000)
setTimeout(async()=>{ 




      return driver.findElement(By.tagName("body")).click(); 

}, 864000)
setTimeout(async()=>{ 




      return driver.findElement(By.id("metadata.outsideColor")).click(); 

}, 865000)
setTimeout(async()=>{ 




      return driver.findElement(By.id("metadata.outsideColor")).sendKeys("r"); 

}, 866000)
setTimeout(async()=>{ 




      return driver.findElement(By.tagName("body")).click(); 

}, 867000)
setTimeout(async()=>{ 




      return driver.findElement(By.id("metadata.insideColor")).click(); 

}, 868000)
setTimeout(async()=>{ 




      return driver.findElement(By.id("metadata.insideColor")).sendKeys("n"); 

}, 869000)
setTimeout(async()=>{ 




      return driver.findElement(By.id("metadata.insideColor")).sendKeys("n"); 

}, 870000)
setTimeout(async()=>{ 




      return driver.findElement(By.tagName("body")).click(); 

}, 871000)
setTimeout(async()=>{ 




      return driver.findElement(By.id("metadata.horsePower")).sendKeys("4"); 

}, 872000)
setTimeout(async()=>{ 




      return driver.findElement(By.tagName("body")).click(); 

}, 873000)
setTimeout(async()=>{ 




      return driver.findElement(By.id("metadata.condition")).click(); 

}, 874000)
setTimeout(async()=>{ 




      return driver.findElement(By.id("metadata.condition")).sendKeys("u"); 

}, 875000)
setTimeout(async()=>{ 




      return driver.findElement(By.tagName("body")).click(); 

}, 876000)
setTimeout(async()=>{ 




      return driver.findElement(By.tagName("body")).click(); 

}, 877000)
setTimeout(async()=>{ 




      return driver.findElement(By.tagName("body")).click(); 

}, 878000)
setTimeout(async()=>{ 




      return driver.findElement(By.id("metadata.make")).click(); 

}, 879000)
setTimeout(async()=>{ 




      return driver.findElement(By.id("metadata.make")).sendKeys("h"); 

}, 880000)
setTimeout(async()=>{ 




      return driver.findElement(By.tagName("body")).click(); 

}, 881000)
setTimeout(async()=>{ 




      return driver.findElement(By.id("metadata.model")).click(); 

}, 882000)
setTimeout(async()=>{ 




      return driver.findElement(By.id("metadata.model")).sendKeys("f"); 

}, 883000)
setTimeout(async()=>{ 




      return driver.findElement(By.tagName("body")).click(); 

}, 884000)
setTimeout(async()=>{ 




      return driver.findElement(By.id("metadata.heavyVehicleType")).click(); 

}, 885000)
setTimeout(async()=>{ 




      return driver.findElement(By.id("metadata.heavyVehicleType")).sendKeys("j"); 

}, 886000)
setTimeout(async()=>{ 




      return driver.findElement(By.tagName("body")).click(); 

}, 887000)
setTimeout(async()=>{ 




      return driver.findElement(By.xpath("//button[@type='submit']")).click(); 

}, 888000)
setTimeout(async()=>{ 




      return driver.findElement(By.id("price")).sendKeys(88000); 

}, 889000)
setTimeout(async()=>{ 




      return driver.findElement(By.id("region_0")).click(); 

}, 890000)
setTimeout(async()=>{ 




      return driver.findElement(By.id("region_0")).sendKeys("s"); 

}, 891000)
setTimeout(async()=>{ 




      return driver.findElement(By.id("region_0")).sendKeys("s"); 

}, 892000)
setTimeout(async()=>{ 




      return driver.findElement(By.id("region_0")).sendKeys("s"); 

}, 893000)
setTimeout(async()=>{ 




      return driver.findElement(By.id("region_0")).sendKeys("s"); 

}, 894000)
setTimeout(async()=>{ 




      return driver.findElement(By.id("region_0")).sendKeys("s"); 

}, 895000)
setTimeout(async()=>{ 




      return driver.findElement(By.id("region_0")).sendKeys("s"); 

}, 896000)
setTimeout(async()=>{ 




      return driver.findElement(By.id("region_0")).sendKeys("s"); 

}, 897000)
setTimeout(async()=>{ 




      return driver.findElement(By.id("region_0")).sendKeys("s"); 

}, 898000)
setTimeout(async()=>{ 




      return driver.findElement(By.tagName("body")).click(); 

}, 899000)
setTimeout(async()=>{ 




      return driver.findElement(By.id("region_1")).click(); 

}, 900000)
setTimeout(async()=>{ 




      return driver.findElement(By.id("region_1")).sendKeys("s"); 

}, 901000)
setTimeout(async()=>{ 




      return driver.findElement(By.xpath("//button[@type='submit']")).click(); 

}, 902000)
setTimeout(async()=>{ 




      return driver.findElement(By.xpath("//button[@type='submit']")).click(); 

}, 903000)




/************************************************************************************
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
 * 
 *************************************************************************************/



setTimeout(async()=>{ 




      return driver.get("https://www.corotos.com.do/create") 

}, 910000)
setTimeout(async()=>{ 




      return driver.findElement(By.id("_tealiumModalClose")).click(); 

}, 914000)
setTimeout(async()=>{ 




      return driver.findElement(By.xpath("//input[@type='file']")).sendKeys("c:/Users/Rey Messon/Desktop/anuncio/WhatsApp Image 2018-10-20 at 11.33.59 AM.jpeg"); 

}, 918000)
setTimeout(async()=>{ 




      return driver.findElement(By.xpath("//input[@type='file']")).sendKeys("c:/Users/Rey Messon/Desktop/anuncio/WhatsApp Image 2018-10-20 at 11.34.00 AM.jpeg"); 

}, 922000)
setTimeout(async()=>{ 




      return driver.findElement(By.xpath("//button[@type='submit']")).click(); 

}, 926000)
setTimeout(async()=>{ 




      return driver.findElement(By.id("title")).sendKeys(dataMaster12.header); 

}, 927000)
setTimeout(async()=>{ 




      return driver.findElement(By.id("description")).sendKeys(dataMaster12.description); 

}, 928000)
setTimeout(async()=>{ 




      return driver.findElement(By.id("category_0")).click(); 

}, 929000)
setTimeout(async()=>{ 




      return driver.findElement(By.id("category_0")).sendKeys("v"); 

}, 930000)
setTimeout(async()=>{ 




      return driver.findElement(By.tagName("body")).click(); 

}, 931000)
setTimeout(async()=>{ 




      return driver.findElement(By.id("category_1")).click(); 

}, 932000)
setTimeout(async()=>{ 




      return driver.findElement(By.id("category_1")).sendKeys("c"); 

}, 933000)
setTimeout(async()=>{ 




      return driver.findElement(By.tagName("body")).click(); 

}, 934000)
setTimeout(async()=>{ 




      return driver.findElement(By.xpath("//button[@type='submit']")).click(); 

}, 935000)
setTimeout(async()=>{ 




      return driver.findElement(By.id("metadata.vehicleType")).click(); 

}, 936000)
setTimeout(async()=>{ 




      return driver.findElement(By.id("metadata.vehicleType")).sendKeys("s"); 

}, 937000)
setTimeout(async()=>{ 




      return driver.findElement(By.tagName("body")).click(); 

}, 938000)
setTimeout(async()=>{ 




      return driver.findElement(By.id("metadata.year")).sendKeys("2012"); 

}, 939000)
setTimeout(async()=>{ 




      return driver.findElement(By.id("metadata.mileage")).sendKeys("1000"); 

}, 940000)
setTimeout(async()=>{ 




      return driver.findElement(By.id("metadata.fuel")).click(); 

}, 941000)
setTimeout(async()=>{ 




      return driver.findElement(By.id("metadata.fuel")).sendKeys("g"); 

}, 942000)
setTimeout(async()=>{ 




      return driver.findElement(By.id("metadata.fuel")).sendKeys("g"); 

}, 943000)
setTimeout(async()=>{ 




      return driver.findElement(By.id("metadata.horsePower")).sendKeys("4"); 

}, 944000)
setTimeout(async()=>{ 




      return driver.findElement(By.id("metadata.transmission")).click(); 

}, 945000)
setTimeout(async()=>{ 




      return driver.findElement(By.id("metadata.transmission")).sendKeys("a"); 

}, 946000)
setTimeout(async()=>{ 




      return driver.findElement(By.tagName("body")).click(); 

}, 947000)
setTimeout(async()=>{ 




      return driver.findElement(By.id("metadata.outsideColor")).click(); 

}, 948000)
setTimeout(async()=>{ 




      return driver.findElement(By.id("metadata.outsideColor")).sendKeys("r"); 

}, 949000)
setTimeout(async()=>{ 




      return driver.findElement(By.tagName("body")).click(); 

}, 950000)
setTimeout(async()=>{ 




      return driver.findElement(By.id("metadata.condition")).click(); 

}, 951000)
setTimeout(async()=>{ 




      return driver.findElement(By.id("metadata.condition")).sendKeys("u"); 

}, 952000)
setTimeout(async()=>{ 




      return driver.findElement(By.tagName("body")).click(); 

}, 953000)
setTimeout(async()=>{ 




      return driver.findElement(By.id("metadata.insideColor")).click(); 

}, 954000)
setTimeout(async()=>{ 




      return driver.findElement(By.id("metadata.insideColor")).sendKeys("n"); 

}, 955000)
setTimeout(async()=>{ 




      return driver.findElement(By.id("metadata.insideColor")).sendKeys("n"); 

}, 956000)
setTimeout(async()=>{ 




      return driver.findElement(By.tagName("body")).click(); 

}, 957000)
setTimeout(async()=>{ 




      return driver.findElement(By.id("metadata.make")).click(); 

}, 958000)
setTimeout(async()=>{ 




      return driver.findElement(By.id("metadata.make")).sendKeys("t"); 

}, 959000)
setTimeout(async()=>{ 




      return driver.findElement(By.id("metadata.make")).sendKeys("t"); 

}, 960000)
setTimeout(async()=>{ 




      return driver.findElement(By.tagName("body")).click(); 

}, 961000)
setTimeout(async()=>{ 




      return driver.findElement(By.id("metadata.model")).click(); 

}, 962000)
setTimeout(async()=>{ 




      return driver.findElement(By.id("metadata.model")).sendKeys("p"); 

}, 963000)
setTimeout(async()=>{ 




      return driver.findElement(By.tagName("body")).click(); 

}, 964000)
setTimeout(async()=>{ 




      return driver.findElement(By.tagName("body")).click(); 

}, 965000)
setTimeout(async()=>{ 




      return driver.findElement(By.xpath("//button[@type='submit']")).click(); 

}, 966000)
setTimeout(async()=>{ 




      return driver.findElement(By.id("price")).sendKeys(40000); 

}, 967000)
setTimeout(async()=>{ 




      return driver.findElement(By.id("region_0")).click(); 

}, 968000)
setTimeout(async()=>{ 




      return driver.findElement(By.id("region_0")).sendKeys("s"); 

}, 969000)
setTimeout(async()=>{ 




      return driver.findElement(By.id("region_0")).sendKeys("s"); 

}, 970000)
setTimeout(async()=>{ 




      return driver.findElement(By.id("region_0")).sendKeys("s"); 

}, 971000)
setTimeout(async()=>{ 




      return driver.findElement(By.id("region_0")).sendKeys("s"); 

}, 972000)
setTimeout(async()=>{ 




      return driver.findElement(By.id("region_0")).sendKeys("s"); 

}, 973000)
setTimeout(async()=>{ 




      return driver.findElement(By.id("region_0")).sendKeys("s"); 

}, 974000)
setTimeout(async()=>{ 




      return driver.findElement(By.id("region_0")).sendKeys("s"); 

}, 975000)
setTimeout(async()=>{ 




      return driver.findElement(By.id("region_0")).sendKeys("s"); 

}, 976000)
setTimeout(async()=>{ 




      return driver.findElement(By.tagName("body")).click(); 

}, 977000)
setTimeout(async()=>{ 




      return driver.findElement(By.id("region_1")).click(); 

}, 978000)
setTimeout(async()=>{ 




      return driver.findElement(By.id("region_1")).sendKeys("s"); 

}, 979000)
setTimeout(async()=>{ 




      return driver.findElement(By.xpath("//button[@type='submit']")).click(); 

}, 980000)
setTimeout(async()=>{ 




      return driver.findElement(By.xpath("//button[@type='submit']")).click(); 

}, 981000)






/***************************************************************************************
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
 * 
 ****************************************************************************************/




setTimeout(async()=>{ 




      return driver.get("https://www.corotos.com.do/create") 

}, 1000000)
setTimeout(async()=>{ 




      return driver.findElement(By.id("_tealiumModalClose")).click(); 

}, 1004000)
setTimeout(async()=>{ 




      return driver.findElement(By.xpath("//input[@type='file']")).sendKeys("c:/Users/Rey Messon/Desktop/anuncio/WhatsApp Image 2018-10-20 at 11.37.27 AM.jpeg"); 

}, 1008000)
setTimeout(async()=>{ 




      return driver.findElement(By.xpath("//input[@type='file']")).sendKeys("c:/Users/Rey Messon/Desktop/anuncio/WhatsApp Image 2018-10-20 at 11.37.28 AM.jpeg"); 

}, 1012000)
setTimeout(async()=>{ 




      return driver.findElement(By.xpath("//button[@type='submit']")).click(); 

}, 1016000)
setTimeout(async()=>{ 




      return driver.findElement(By.id("title")).sendKeys(dataMaster13.header); 

}, 1017000)
setTimeout(async()=>{ 




      return driver.findElement(By.id("description")).sendKeys(dataMaster13.description); 

}, 1018000)
setTimeout(async()=>{ 




      return driver.findElement(By.id("category_0")).click(); 

}, 1019000)
setTimeout(async()=>{ 




      return driver.findElement(By.id("category_0")).sendKeys("v"); 

}, 1020000)
setTimeout(async()=>{ 




      return driver.findElement(By.tagName("body")).click(); 

}, 1021000)
setTimeout(async()=>{ 




      return driver.findElement(By.id("category_1")).click(); 

}, 1022000)
setTimeout(async()=>{ 




      return driver.findElement(By.id("category_1")).sendKeys("j"); 

}, 1023000)
setTimeout(async()=>{ 




      return driver.findElement(By.tagName("body")).click(); 

}, 1024000)
setTimeout(async()=>{ 




      return driver.findElement(By.xpath("//button[@type='submit']")).click(); 

}, 1025000)
setTimeout(async()=>{ 




      return driver.findElement(By.id("metadata.year")).sendKeys("2013"); 

}, 1027000)
setTimeout(async()=>{ 




      return driver.findElement(By.id("metadata.mileage")).sendKeys("1000"); 

}, 1027000)
setTimeout(async()=>{ 




      return driver.findElement(By.id("metadata.fuel")).click(); 

}, 1028000)
setTimeout(async()=>{ 




      return driver.findElement(By.id("metadata.fuel")).sendKeys("g"); 

}, 1029000)
setTimeout(async()=>{ 




      return driver.findElement(By.id("metadata.fuel")).sendKeys("g"); 

}, 1030000)
setTimeout(async()=>{ 




      return driver.findElement(By.id("metadata.transmission")).click(); 

}, 1031000)
setTimeout(async()=>{ 




      return driver.findElement(By.id("metadata.transmission")).sendKeys("a"); 

}, 1032000)
setTimeout(async()=>{ 




      return driver.findElement(By.tagName("body")).click(); 

}, 1033000)
setTimeout(async()=>{ 




      return driver.findElement(By.tagName("body")).click(); 

}, 1034000)
setTimeout(async()=>{ 




      return driver.findElement(By.id("metadata.outsideColor")).click(); 

}, 1035000)
setTimeout(async()=>{ 




      return driver.findElement(By.id("metadata.outsideColor")).sendKeys("r"); 

}, 1036000)
setTimeout(async()=>{ 




      return driver.findElement(By.tagName("body")).click(); 

}, 1037000)
setTimeout(async()=>{ 




      return driver.findElement(By.id("metadata.insideColor")).click(); 

}, 1038000)
setTimeout(async()=>{ 




      return driver.findElement(By.id("metadata.insideColor")).sendKeys("n"); 

}, 1039000)
setTimeout(async()=>{ 




      return driver.findElement(By.id("metadata.insideColor")).sendKeys("n"); 

}, 1040000)
setTimeout(async()=>{ 




      return driver.findElement(By.tagName("body")).click(); 

}, 1041000)
setTimeout(async()=>{ 




      return driver.findElement(By.id("metadata.horsePower")).sendKeys("4"); 

}, 1042000)
setTimeout(async()=>{ 




      return driver.findElement(By.tagName("body")).click(); 

}, 1043000)
setTimeout(async()=>{ 




      return driver.findElement(By.id("metadata.condition")).click(); 

}, 1044000)
setTimeout(async()=>{ 




      return driver.findElement(By.id("metadata.condition")).sendKeys("u"); 

}, 1045000)
setTimeout(async()=>{ 




      return driver.findElement(By.tagName("body")).click(); 

}, 1046000)
setTimeout(async()=>{ 




      return driver.findElement(By.tagName("body")).click(); 

}, 1047000)
setTimeout(async()=>{ 




      return driver.findElement(By.tagName("body")).click(); 

}, 1048000)
setTimeout(async()=>{ 




      return driver.findElement(By.id("metadata.make")).click(); 

}, 1049000)
setTimeout(async()=>{ 




      return driver.findElement(By.id("metadata.make")).sendKeys("h"); 

}, 1050000)
setTimeout(async()=>{ 




      return driver.findElement(By.tagName("body")).click(); 

}, 1051000)
setTimeout(async()=>{ 




      return driver.findElement(By.id("metadata.model")).click(); 

}, 1052000)
setTimeout(async()=>{ 




      return driver.findElement(By.id("metadata.model")).sendKeys("f"); 

}, 1053000)
setTimeout(async()=>{ 




      return driver.findElement(By.tagName("body")).click(); 

}, 1054000)
setTimeout(async()=>{ 




      return driver.findElement(By.id("metadata.heavyVehicleType")).click(); 

}, 1055000)
setTimeout(async()=>{ 




      return driver.findElement(By.id("metadata.heavyVehicleType")).sendKeys("j"); 

}, 1056000)
setTimeout(async()=>{ 




      return driver.findElement(By.tagName("body")).click(); 

}, 1057000)
setTimeout(async()=>{ 




      return driver.findElement(By.xpath("//button[@type='submit']")).click(); 

}, 1058000)
setTimeout(async()=>{ 




      return driver.findElement(By.id("price")).sendKeys(99000); 

}, 1059000)
setTimeout(async()=>{ 




      return driver.findElement(By.id("region_0")).click(); 

}, 1060000)
setTimeout(async()=>{ 




      return driver.findElement(By.id("region_0")).sendKeys("s"); 

}, 1061000)
setTimeout(async()=>{ 




      return driver.findElement(By.id("region_0")).sendKeys("s"); 

}, 1062000)
setTimeout(async()=>{ 




      return driver.findElement(By.id("region_0")).sendKeys("s"); 

}, 1063000)
setTimeout(async()=>{ 




      return driver.findElement(By.id("region_0")).sendKeys("s"); 

}, 1064000)
setTimeout(async()=>{ 




      return driver.findElement(By.id("region_0")).sendKeys("s"); 

}, 1065000)
setTimeout(async()=>{ 




      return driver.findElement(By.id("region_0")).sendKeys("s"); 

}, 1066000)
setTimeout(async()=>{ 




      return driver.findElement(By.id("region_0")).sendKeys("s"); 

}, 1067000)
setTimeout(async()=>{ 




      return driver.findElement(By.id("region_0")).sendKeys("s"); 

}, 1068000)
setTimeout(async()=>{ 




      return driver.findElement(By.tagName("body")).click(); 

}, 1069000)
setTimeout(async()=>{ 




      return driver.findElement(By.id("region_1")).click(); 

}, 1070000)
setTimeout(async()=>{ 




      return driver.findElement(By.id("region_1")).sendKeys("s"); 

}, 1071000)
setTimeout(async()=>{ 




      return driver.findElement(By.xpath("//button[@type='submit']")).click(); 

}, 1072000)
setTimeout(async()=>{ 




      return driver.findElement(By.xpath("//button[@type='submit']")).click(); 

}, 1073000)


/*****************************************************************************************8
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

}, 1080000)
setTimeout(async()=>{ 




      return driver.findElement(By.id("_tealiumModalClose")).click(); 

}, 1084000)
setTimeout(async()=>{ 




      return driver.findElement(By.xpath("//input[@type='file']")).sendKeys("c:/Users/Rey Messon/Desktop/anuncio/WhatsApp Image 2018-10-24 at 12.46.00 PM (1).jpeg"); 

}, 1088000)
setTimeout(async()=>{ 




      return driver.findElement(By.xpath("//input[@type='file']")).sendKeys("c:/Users/Rey Messon/Desktop/anuncio/WhatsApp Image 2018-10-24 at 12.46.00 PM.jpeg"); 

}, 1092000)
setTimeout(async()=>{ 




      return driver.findElement(By.xpath("//button[@type='submit']")).click(); 

}, 1096000)
setTimeout(async()=>{ 




      return driver.findElement(By.id("title")).sendKeys(dataMaster14.header); 

}, 1097000)
setTimeout(async()=>{ 




      return driver.findElement(By.id("description")).sendKeys(dataMaster14.description); 

}, 1098000)
setTimeout(async()=>{ 




      return driver.findElement(By.id("category_0")).click(); 

}, 1099000)
setTimeout(async()=>{ 




      return driver.findElement(By.id("category_0")).sendKeys("v"); 

}, 1100000)
setTimeout(async()=>{ 




      return driver.findElement(By.tagName("body")).click(); 

}, 1101000)
setTimeout(async()=>{ 




      return driver.findElement(By.id("category_1")).click(); 

}, 1102000)
setTimeout(async()=>{ 




      return driver.findElement(By.id("category_1")).sendKeys("j"); 

}, 1103000)
setTimeout(async()=>{ 




      return driver.findElement(By.tagName("body")).click(); 

}, 1104000)
setTimeout(async()=>{ 




      return driver.findElement(By.xpath("//button[@type='submit']")).click(); 

}, 1105000)
setTimeout(async()=>{ 




      return driver.findElement(By.id("metadata.year")).sendKeys("2013"); 

}, 1107000)
setTimeout(async()=>{ 




      return driver.findElement(By.id("metadata.mileage")).sendKeys("1000"); 

}, 1107000)
setTimeout(async()=>{ 




      return driver.findElement(By.id("metadata.fuel")).click(); 

}, 1108000)
setTimeout(async()=>{ 




      return driver.findElement(By.id("metadata.fuel")).sendKeys("g"); 

}, 1109000)
setTimeout(async()=>{ 




      return driver.findElement(By.id("metadata.fuel")).sendKeys("g"); 

}, 1110000)
setTimeout(async()=>{ 




      return driver.findElement(By.id("metadata.transmission")).click(); 

}, 1111000)
setTimeout(async()=>{ 




      return driver.findElement(By.id("metadata.transmission")).sendKeys("a"); 

}, 1112000)
setTimeout(async()=>{ 




      return driver.findElement(By.tagName("body")).click(); 

}, 1113000)
setTimeout(async()=>{ 




      return driver.findElement(By.tagName("body")).click(); 

}, 1114000)
setTimeout(async()=>{ 




      return driver.findElement(By.id("metadata.outsideColor")).click(); 

}, 1115000)
setTimeout(async()=>{ 




      return driver.findElement(By.id("metadata.outsideColor")).sendKeys("r"); 

}, 1116000)
setTimeout(async()=>{ 




      return driver.findElement(By.tagName("body")).click(); 

}, 1117000)
setTimeout(async()=>{ 




      return driver.findElement(By.id("metadata.insideColor")).click(); 

}, 1118000)
setTimeout(async()=>{ 




      return driver.findElement(By.id("metadata.insideColor")).sendKeys("n"); 

}, 1119000)
setTimeout(async()=>{ 




      return driver.findElement(By.id("metadata.insideColor")).sendKeys("n"); 

}, 1120000)
setTimeout(async()=>{ 




      return driver.findElement(By.tagName("body")).click(); 

}, 1121000)
setTimeout(async()=>{ 




      return driver.findElement(By.id("metadata.horsePower")).sendKeys("4"); 

}, 1122000)
setTimeout(async()=>{ 




      return driver.findElement(By.tagName("body")).click(); 

}, 1123000)
setTimeout(async()=>{ 




      return driver.findElement(By.id("metadata.condition")).click(); 

}, 1124000)
setTimeout(async()=>{ 




      return driver.findElement(By.id("metadata.condition")).sendKeys("u"); 

}, 1125000)
setTimeout(async()=>{ 




      return driver.findElement(By.tagName("body")).click(); 

}, 1126000)
setTimeout(async()=>{ 




      return driver.findElement(By.tagName("body")).click(); 

}, 1127000)
setTimeout(async()=>{ 




      return driver.findElement(By.tagName("body")).click(); 

}, 1128000)
setTimeout(async()=>{ 




      return driver.findElement(By.id("metadata.make")).click(); 

}, 1129000)
setTimeout(async()=>{ 




      return driver.findElement(By.id("metadata.make")).sendKeys("h"); 

}, 1130000)
setTimeout(async()=>{ 




      return driver.findElement(By.tagName("body")).click(); 

}, 1131000)
setTimeout(async()=>{ 




      return driver.findElement(By.id("metadata.model")).click(); 

}, 1132000)
setTimeout(async()=>{ 




      return driver.findElement(By.id("metadata.model")).sendKeys("f"); 

}, 1133000)
setTimeout(async()=>{ 




      return driver.findElement(By.tagName("body")).click(); 

}, 1134000)
setTimeout(async()=>{ 




      return driver.findElement(By.id("metadata.heavyVehicleType")).click(); 

}, 1135000)
setTimeout(async()=>{ 




      return driver.findElement(By.id("metadata.heavyVehicleType")).sendKeys("j"); 

}, 1136000)
setTimeout(async()=>{ 




      return driver.findElement(By.tagName("body")).click(); 

}, 1137000)
setTimeout(async()=>{ 




      return driver.findElement(By.xpath("//button[@type='submit']")).click(); 

}, 1138000)
setTimeout(async()=>{ 




      return driver.findElement(By.id("price")).sendKeys(59000); 

}, 1139000)
setTimeout(async()=>{ 




      return driver.findElement(By.id("region_0")).click(); 

}, 1140000)
setTimeout(async()=>{ 




      return driver.findElement(By.id("region_0")).sendKeys("s"); 

}, 1141000)
setTimeout(async()=>{ 




      return driver.findElement(By.id("region_0")).sendKeys("s"); 

}, 1142000)
setTimeout(async()=>{ 




      return driver.findElement(By.id("region_0")).sendKeys("s"); 

}, 1143000)
setTimeout(async()=>{ 




      return driver.findElement(By.id("region_0")).sendKeys("s"); 

}, 1144000)
setTimeout(async()=>{ 




      return driver.findElement(By.id("region_0")).sendKeys("s"); 

}, 1145000)
setTimeout(async()=>{ 




      return driver.findElement(By.id("region_0")).sendKeys("s"); 

}, 1146000)
setTimeout(async()=>{ 




      return driver.findElement(By.id("region_0")).sendKeys("s"); 

}, 1147000)
setTimeout(async()=>{ 




      return driver.findElement(By.id("region_0")).sendKeys("s"); 

}, 1148000)
setTimeout(async()=>{ 




      return driver.findElement(By.tagName("body")).click(); 

}, 1149000)
setTimeout(async()=>{ 




      return driver.findElement(By.id("region_1")).click(); 

}, 1150000)
setTimeout(async()=>{ 




      return driver.findElement(By.id("region_1")).sendKeys("s"); 

}, 1151000)
setTimeout(async()=>{ 




      return driver.findElement(By.xpath("//button[@type='submit']")).click(); 

}, 1152000)
setTimeout(async()=>{ 




      return driver.findElement(By.xpath("//button[@type='submit']")).click(); 

}, 1153000)



/*************************************************************************************
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
 **************************************************************************************/


setTimeout(async()=>{ 




      return driver.get("https://www.corotos.com.do/create") 

}, 1160000)
setTimeout(async()=>{ 




      return driver.findElement(By.id("_tealiumModalClose")).click(); 

}, 1164000)
setTimeout(async()=>{ 




      return driver.findElement(By.xpath("//input[@type='file']")).sendKeys("c:/Users/Rey Messon/Desktop/anuncio/WhatsApp Image 2018-10-31 at 9.36.37 AM (1).jpeg"); 

}, 1168000)
setTimeout(async()=>{ 




      return driver.findElement(By.xpath("//input[@type='file']")).sendKeys("c:/Users/Rey Messon/Desktop/anuncio/WhatsApp Image 2018-10-31 at 9.36.37 AM.jpeg"); 

}, 1172000)
setTimeout(async()=>{ 




      return driver.findElement(By.xpath("//button[@type='submit']")).click(); 

}, 1176000)
setTimeout(async()=>{ 




      return driver.findElement(By.id("title")).sendKeys(dataMaster15.header); 

}, 1177000)
setTimeout(async()=>{ 




      return driver.findElement(By.id("description")).sendKeys(dataMaster15.description); 

}, 1178000)
setTimeout(async()=>{ 




      return driver.findElement(By.id("category_0")).click(); 

}, 1179000)
setTimeout(async()=>{ 




      return driver.findElement(By.id("category_0")).sendKeys("v"); 

}, 1180000)
setTimeout(async()=>{ 




      return driver.findElement(By.tagName("body")).click(); 

}, 1181000)
setTimeout(async()=>{ 




      return driver.findElement(By.id("category_1")).click(); 

}, 1182000)
setTimeout(async()=>{ 




      return driver.findElement(By.id("category_1")).sendKeys("j"); 

}, 1183000)
setTimeout(async()=>{ 




      return driver.findElement(By.tagName("body")).click(); 

}, 1184000)
setTimeout(async()=>{ 




      return driver.findElement(By.xpath("//button[@type='submit']")).click(); 

}, 1185000)
setTimeout(async()=>{ 




      return driver.findElement(By.id("metadata.year")).sendKeys("2013"); 

}, 1187000)
setTimeout(async()=>{ 




      return driver.findElement(By.id("metadata.mileage")).sendKeys("1000"); 

}, 1187000)
setTimeout(async()=>{ 




      return driver.findElement(By.id("metadata.fuel")).click(); 

}, 1188000)
setTimeout(async()=>{ 




      return driver.findElement(By.id("metadata.fuel")).sendKeys("g"); 

}, 1189000)
setTimeout(async()=>{ 




      return driver.findElement(By.id("metadata.fuel")).sendKeys("g"); 

}, 1190000)
setTimeout(async()=>{ 




      return driver.findElement(By.id("metadata.transmission")).click(); 

}, 1191000)
setTimeout(async()=>{ 




      return driver.findElement(By.id("metadata.transmission")).sendKeys("a"); 

}, 1192000)
setTimeout(async()=>{ 




      return driver.findElement(By.tagName("body")).click(); 

}, 1193000)
setTimeout(async()=>{ 




      return driver.findElement(By.tagName("body")).click(); 

}, 1194000)
setTimeout(async()=>{ 




      return driver.findElement(By.id("metadata.outsideColor")).click(); 

}, 1195000)
setTimeout(async()=>{ 




      return driver.findElement(By.id("metadata.outsideColor")).sendKeys("r"); 

}, 1196000)
setTimeout(async()=>{ 




      return driver.findElement(By.tagName("body")).click(); 

}, 1197000)
setTimeout(async()=>{ 




      return driver.findElement(By.id("metadata.insideColor")).click(); 

}, 1198000)
setTimeout(async()=>{ 




      return driver.findElement(By.id("metadata.insideColor")).sendKeys("n"); 

}, 1199000)
setTimeout(async()=>{ 




      return driver.findElement(By.id("metadata.insideColor")).sendKeys("n"); 

}, 1200000)
setTimeout(async()=>{ 




      return driver.findElement(By.tagName("body")).click(); 

}, 1201000)
setTimeout(async()=>{ 




      return driver.findElement(By.id("metadata.horsePower")).sendKeys("4"); 

}, 1202000)
setTimeout(async()=>{ 




      return driver.findElement(By.tagName("body")).click(); 

}, 1203000)
setTimeout(async()=>{ 




      return driver.findElement(By.id("metadata.condition")).click(); 

}, 1204000)
setTimeout(async()=>{ 




      return driver.findElement(By.id("metadata.condition")).sendKeys("u"); 

}, 1205000)
setTimeout(async()=>{ 




      return driver.findElement(By.tagName("body")).click(); 

}, 1206000)
setTimeout(async()=>{ 




      return driver.findElement(By.tagName("body")).click(); 

}, 1207000)
setTimeout(async()=>{ 




      return driver.findElement(By.tagName("body")).click(); 

}, 1208000)
setTimeout(async()=>{ 




      return driver.findElement(By.id("metadata.make")).click(); 

}, 1209000)
setTimeout(async()=>{ 




      return driver.findElement(By.id("metadata.make")).sendKeys("h"); 

}, 1210000)
setTimeout(async()=>{ 




      return driver.findElement(By.tagName("body")).click(); 

}, 1211000)
setTimeout(async()=>{ 




      return driver.findElement(By.id("metadata.model")).click(); 

}, 1212000)
setTimeout(async()=>{ 




      return driver.findElement(By.id("metadata.model")).sendKeys("f"); 

}, 1213000)
setTimeout(async()=>{ 




      return driver.findElement(By.tagName("body")).click(); 

}, 1214000)
setTimeout(async()=>{ 




      return driver.findElement(By.id("metadata.heavyVehicleType")).click(); 

}, 1215000)
setTimeout(async()=>{ 




      return driver.findElement(By.id("metadata.heavyVehicleType")).sendKeys("j"); 

}, 1216000)
setTimeout(async()=>{ 




      return driver.findElement(By.tagName("body")).click(); 

}, 1217000)
setTimeout(async()=>{ 




      return driver.findElement(By.xpath("//button[@type='submit']")).click(); 

}, 1218000)
setTimeout(async()=>{ 




      return driver.findElement(By.id("price")).sendKeys(1850); 

}, 1219000)
setTimeout(async()=>{ 




      return driver.findElement(By.id("region_0")).click(); 

}, 1220000)
setTimeout(async()=>{ 




      return driver.findElement(By.id("region_0")).sendKeys("s"); 

}, 1221000)
setTimeout(async()=>{ 




      return driver.findElement(By.id("region_0")).sendKeys("s"); 

}, 1222000)
setTimeout(async()=>{ 




      return driver.findElement(By.id("region_0")).sendKeys("s"); 

}, 1223000)
setTimeout(async()=>{ 




      return driver.findElement(By.id("region_0")).sendKeys("s"); 

}, 1224000)
setTimeout(async()=>{ 




      return driver.findElement(By.id("region_0")).sendKeys("s"); 

}, 1225000)
setTimeout(async()=>{ 




      return driver.findElement(By.id("region_0")).sendKeys("s"); 

}, 1226000)
setTimeout(async()=>{ 




      return driver.findElement(By.id("region_0")).sendKeys("s"); 

}, 1227000)
setTimeout(async()=>{ 




      return driver.findElement(By.id("region_0")).sendKeys("s"); 

}, 1228000)
setTimeout(async()=>{ 




      return driver.findElement(By.tagName("body")).click(); 

}, 1229000)
setTimeout(async()=>{ 




      return driver.findElement(By.id("region_1")).click(); 

}, 1230000)
setTimeout(async()=>{ 




      return driver.findElement(By.id("region_1")).sendKeys("s"); 

}, 1231000)
setTimeout(async()=>{ 




      return driver.findElement(By.xpath("//button[@type='submit']")).click(); 

}, 1232000)
setTimeout(async()=>{ 




      return driver.findElement(By.xpath("//button[@type='submit']")).click(); 

}, 1233000)


/************************************************************************************
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
 * 
 */

setTimeout(async()=>{ 




      return driver.get("https://www.corotos.com.do/create") 

}, 1240000)
setTimeout(async()=>{ 




      return driver.findElement(By.id("_tealiumModalClose")).click(); 

}, 1244000)
setTimeout(async()=>{ 




      return driver.findElement(By.xpath("//input[@type='file']")).sendKeys("c:/Users/Rey Messon/Desktop/anuncio/WhatsApp Image 2018-11-06 at 6.15.36 PM.jpeg"); 

}, 1248000)
setTimeout(async()=>{ 




      return driver.findElement(By.xpath("//input[@type='file']")).sendKeys("c:/Users/Rey Messon/Desktop/anuncio/WhatsApp Image 2018-11-06 at 6.15.37 PM.jpeg"); 

}, 1252000)
setTimeout(async()=>{ 




      return driver.findElement(By.xpath("//button[@type='submit']")).click(); 

}, 1256000)
setTimeout(async()=>{ 




      return driver.findElement(By.id("title")).sendKeys(dataMaster16.header); 

}, 1257000)
setTimeout(async()=>{ 




      return driver.findElement(By.id("description")).sendKeys(dataMaster16.description); 

}, 1258000)
setTimeout(async()=>{ 




      return driver.findElement(By.id("category_0")).click(); 

}, 1259000)
setTimeout(async()=>{ 




      return driver.findElement(By.id("category_0")).sendKeys("v"); 

}, 1260000)
setTimeout(async()=>{ 




      return driver.findElement(By.tagName("body")).click(); 

}, 1261000)
setTimeout(async()=>{ 




      return driver.findElement(By.id("category_1")).click(); 

}, 1262000)
setTimeout(async()=>{ 




      return driver.findElement(By.id("category_1")).sendKeys("j"); 

}, 1263000)
setTimeout(async()=>{ 




      return driver.findElement(By.tagName("body")).click(); 

}, 1264000)
setTimeout(async()=>{ 




      return driver.findElement(By.xpath("//button[@type='submit']")).click(); 

}, 1265000)
setTimeout(async()=>{ 




      return driver.findElement(By.id("metadata.year")).sendKeys("2013"); 

}, 1267000)
setTimeout(async()=>{ 




      return driver.findElement(By.id("metadata.mileage")).sendKeys("1000"); 

}, 1267000)
setTimeout(async()=>{ 




      return driver.findElement(By.id("metadata.fuel")).click(); 

}, 1268000)
setTimeout(async()=>{ 




      return driver.findElement(By.id("metadata.fuel")).sendKeys("g"); 

}, 1269000)
setTimeout(async()=>{ 




      return driver.findElement(By.id("metadata.fuel")).sendKeys("g"); 

}, 1270000)
setTimeout(async()=>{ 




      return driver.findElement(By.id("metadata.transmission")).click(); 

}, 1271000)
setTimeout(async()=>{ 




      return driver.findElement(By.id("metadata.transmission")).sendKeys("a"); 

}, 1272000)
setTimeout(async()=>{ 




      return driver.findElement(By.tagName("body")).click(); 

}, 1273000)
setTimeout(async()=>{ 




      return driver.findElement(By.tagName("body")).click(); 

}, 1274000)
setTimeout(async()=>{ 




      return driver.findElement(By.id("metadata.outsideColor")).click(); 

}, 1275000)
setTimeout(async()=>{ 




      return driver.findElement(By.id("metadata.outsideColor")).sendKeys("r"); 

}, 1276000)
setTimeout(async()=>{ 




      return driver.findElement(By.tagName("body")).click(); 

}, 1277000)
setTimeout(async()=>{ 




      return driver.findElement(By.id("metadata.insideColor")).click(); 

}, 1278000)
setTimeout(async()=>{ 




      return driver.findElement(By.id("metadata.insideColor")).sendKeys("n"); 

}, 1279000)
setTimeout(async()=>{ 




      return driver.findElement(By.id("metadata.insideColor")).sendKeys("n"); 

}, 1280000)
setTimeout(async()=>{ 




      return driver.findElement(By.tagName("body")).click(); 

}, 1281000)
setTimeout(async()=>{ 




      return driver.findElement(By.id("metadata.horsePower")).sendKeys("4"); 

}, 1282000)
setTimeout(async()=>{ 




      return driver.findElement(By.tagName("body")).click(); 

}, 1283000)
setTimeout(async()=>{ 




      return driver.findElement(By.id("metadata.condition")).click(); 

}, 1284000)
setTimeout(async()=>{ 




      return driver.findElement(By.id("metadata.condition")).sendKeys("u"); 

}, 1285000)
setTimeout(async()=>{ 




      return driver.findElement(By.tagName("body")).click(); 

}, 1286000)
setTimeout(async()=>{ 




      return driver.findElement(By.tagName("body")).click(); 

}, 1287000)
setTimeout(async()=>{ 




      return driver.findElement(By.tagName("body")).click(); 

}, 1288000)
setTimeout(async()=>{ 




      return driver.findElement(By.id("metadata.make")).click(); 

}, 1289000)
setTimeout(async()=>{ 




      return driver.findElement(By.id("metadata.make")).sendKeys("h"); 

}, 1290000)
setTimeout(async()=>{ 




      return driver.findElement(By.tagName("body")).click(); 

}, 1291000)
setTimeout(async()=>{ 




      return driver.findElement(By.id("metadata.model")).click(); 

}, 1292000)
setTimeout(async()=>{ 




      return driver.findElement(By.id("metadata.model")).sendKeys("f"); 

}, 1293000)
setTimeout(async()=>{ 




      return driver.findElement(By.tagName("body")).click(); 

}, 1294000)
setTimeout(async()=>{ 




      return driver.findElement(By.id("metadata.heavyVehicleType")).click(); 

}, 1295000)
setTimeout(async()=>{ 




      return driver.findElement(By.id("metadata.heavyVehicleType")).sendKeys("j"); 

}, 1296000)
setTimeout(async()=>{ 




      return driver.findElement(By.tagName("body")).click(); 

}, 1297000)
setTimeout(async()=>{ 




      return driver.findElement(By.xpath("//button[@type='submit']")).click(); 

}, 1298000)
setTimeout(async()=>{ 




      return driver.findElement(By.id("price")).sendKeys(85000); 

}, 1299000)
setTimeout(async()=>{ 




      return driver.findElement(By.id("region_0")).click(); 

}, 1300000)
setTimeout(async()=>{ 




      return driver.findElement(By.id("region_0")).sendKeys("s"); 

}, 1301000)
setTimeout(async()=>{ 




      return driver.findElement(By.id("region_0")).sendKeys("s"); 

}, 1302000)
setTimeout(async()=>{ 




      return driver.findElement(By.id("region_0")).sendKeys("s"); 

}, 1303000)
setTimeout(async()=>{ 




      return driver.findElement(By.id("region_0")).sendKeys("s"); 

}, 1304000)
setTimeout(async()=>{ 




      return driver.findElement(By.id("region_0")).sendKeys("s"); 

}, 1305000)
setTimeout(async()=>{ 




      return driver.findElement(By.id("region_0")).sendKeys("s"); 

}, 1306000)
setTimeout(async()=>{ 




      return driver.findElement(By.id("region_0")).sendKeys("s"); 

}, 1307000)
setTimeout(async()=>{ 




      return driver.findElement(By.id("region_0")).sendKeys("s"); 

}, 1308000)
setTimeout(async()=>{ 




      return driver.findElement(By.tagName("body")).click(); 

}, 1309000)
setTimeout(async()=>{ 




      return driver.findElement(By.id("region_1")).click(); 

}, 1310000)
setTimeout(async()=>{ 




      return driver.findElement(By.id("region_1")).sendKeys("s"); 

}, 1311000)
setTimeout(async()=>{ 




      return driver.findElement(By.xpath("//button[@type='submit']")).click(); 

}, 1312000)
setTimeout(async()=>{ 




      return driver.findElement(By.xpath("//button[@type='submit']")).click(); 

}, 1313000)

/*************************************************************************
 * 
 * 
 * 
 * 
 * 
 * 
 * 
 * 
 * 
 **************************************************************************/


setTimeout(async()=>{ 




      return driver.get("https://www.corotos.com.do/create") 

}, 1320000)
setTimeout(async()=>{ 




      return driver.findElement(By.id("_tealiumModalClose")).click(); 

}, 1324000)
setTimeout(async()=>{ 




      return driver.findElement(By.xpath("//input[@type='file']")).sendKeys("c:/Users/Rey Messon/Desktop/anuncio/WhatsApp Image 2018-11-08 at 11.09.28 AM.jpeg"); 

}, 1328000)
setTimeout(async()=>{ 




      return driver.findElement(By.xpath("//input[@type='file']")).sendKeys("c:/Users/Rey Messon/Desktop/anuncio/WhatsApp Image 2018-11-08 at 11.09.29 AM.jpeg"); 

}, 1332000)
setTimeout(async()=>{ 




      return driver.findElement(By.xpath("//button[@type='submit']")).click(); 

}, 1336000)
setTimeout(async()=>{ 




      return driver.findElement(By.id("title")).sendKeys(dataMaster17.header); 

}, 1337000)
setTimeout(async()=>{ 




      return driver.findElement(By.id("description")).sendKeys(dataMaster17.description); 

}, 1338000)
setTimeout(async()=>{ 




      return driver.findElement(By.id("category_0")).click(); 

}, 1339000)
setTimeout(async()=>{ 




      return driver.findElement(By.id("category_0")).sendKeys("v"); 

}, 1340000)
setTimeout(async()=>{ 




      return driver.findElement(By.tagName("body")).click(); 

}, 1341000)
setTimeout(async()=>{ 




      return driver.findElement(By.id("category_1")).click(); 

}, 1342000)
setTimeout(async()=>{ 




      return driver.findElement(By.id("category_1")).sendKeys("j"); 

}, 1343000)
setTimeout(async()=>{ 




      return driver.findElement(By.tagName("body")).click(); 

}, 1344000)
setTimeout(async()=>{ 




      return driver.findElement(By.xpath("//button[@type='submit']")).click(); 

}, 1345000)
setTimeout(async()=>{ 




      return driver.findElement(By.id("metadata.year")).sendKeys("2013"); 

}, 1347000)
setTimeout(async()=>{ 




      return driver.findElement(By.id("metadata.mileage")).sendKeys("1000"); 

}, 1347000)
setTimeout(async()=>{ 




      return driver.findElement(By.id("metadata.fuel")).click(); 

}, 1348000)
setTimeout(async()=>{ 




      return driver.findElement(By.id("metadata.fuel")).sendKeys("g"); 

}, 1349000)
setTimeout(async()=>{ 




      return driver.findElement(By.id("metadata.fuel")).sendKeys("g"); 

}, 1350000)
setTimeout(async()=>{ 




      return driver.findElement(By.id("metadata.transmission")).click(); 

}, 1351000)
setTimeout(async()=>{ 




      return driver.findElement(By.id("metadata.transmission")).sendKeys("a"); 

}, 1352000)
setTimeout(async()=>{ 




      return driver.findElement(By.tagName("body")).click(); 

}, 1353000)
setTimeout(async()=>{ 




      return driver.findElement(By.tagName("body")).click(); 

}, 1354000)
setTimeout(async()=>{ 




      return driver.findElement(By.id("metadata.outsideColor")).click(); 

}, 1355000)
setTimeout(async()=>{ 




      return driver.findElement(By.id("metadata.outsideColor")).sendKeys("r"); 

}, 1356000)
setTimeout(async()=>{ 




      return driver.findElement(By.tagName("body")).click(); 

}, 1357000)
setTimeout(async()=>{ 




      return driver.findElement(By.id("metadata.insideColor")).click(); 

}, 1358000)
setTimeout(async()=>{ 




      return driver.findElement(By.id("metadata.insideColor")).sendKeys("n"); 

}, 1359000)
setTimeout(async()=>{ 




      return driver.findElement(By.id("metadata.insideColor")).sendKeys("n"); 

}, 1360000)
setTimeout(async()=>{ 




      return driver.findElement(By.tagName("body")).click(); 

}, 1361000)
setTimeout(async()=>{ 




      return driver.findElement(By.id("metadata.horsePower")).sendKeys("4"); 

}, 1362000)
setTimeout(async()=>{ 




      return driver.findElement(By.tagName("body")).click(); 

}, 1363000)
setTimeout(async()=>{ 




      return driver.findElement(By.id("metadata.condition")).click(); 

}, 1364000)
setTimeout(async()=>{ 




      return driver.findElement(By.id("metadata.condition")).sendKeys("u"); 

}, 1365000)
setTimeout(async()=>{ 




      return driver.findElement(By.tagName("body")).click(); 

}, 1366000)
setTimeout(async()=>{ 




      return driver.findElement(By.tagName("body")).click(); 

}, 1367000)
setTimeout(async()=>{ 




      return driver.findElement(By.tagName("body")).click(); 

}, 1368000)
setTimeout(async()=>{ 




      return driver.findElement(By.id("metadata.make")).click(); 

}, 1369000)
setTimeout(async()=>{ 




      return driver.findElement(By.id("metadata.make")).sendKeys("h"); 

}, 1370000)
setTimeout(async()=>{ 




      return driver.findElement(By.tagName("body")).click(); 

}, 1371000)
setTimeout(async()=>{ 




      return driver.findElement(By.id("metadata.model")).click(); 

}, 1372000)
setTimeout(async()=>{ 




      return driver.findElement(By.id("metadata.model")).sendKeys("f"); 

}, 1373000)
setTimeout(async()=>{ 




      return driver.findElement(By.tagName("body")).click(); 

}, 1374000)
setTimeout(async()=>{ 




      return driver.findElement(By.id("metadata.heavyVehicleType")).click(); 

}, 1375000)
setTimeout(async()=>{ 




      return driver.findElement(By.id("metadata.heavyVehicleType")).sendKeys("j"); 

}, 1376000)
setTimeout(async()=>{ 




      return driver.findElement(By.tagName("body")).click(); 

}, 1377000)
setTimeout(async()=>{ 




      return driver.findElement(By.xpath("//button[@type='submit']")).click(); 

}, 1378000)
setTimeout(async()=>{ 




      return driver.findElement(By.id("price")).sendKeys(69000); 

}, 1379000)
setTimeout(async()=>{ 




      return driver.findElement(By.id("region_0")).click(); 

}, 1380000)
setTimeout(async()=>{ 




      return driver.findElement(By.id("region_0")).sendKeys("s"); 

}, 1381000)
setTimeout(async()=>{ 




      return driver.findElement(By.id("region_0")).sendKeys("s"); 

}, 1382000)
setTimeout(async()=>{ 




      return driver.findElement(By.id("region_0")).sendKeys("s"); 

}, 1383000)
setTimeout(async()=>{ 




      return driver.findElement(By.id("region_0")).sendKeys("s"); 

}, 1384000)
setTimeout(async()=>{ 




      return driver.findElement(By.id("region_0")).sendKeys("s"); 

}, 1385000)
setTimeout(async()=>{ 




      return driver.findElement(By.id("region_0")).sendKeys("s"); 

}, 1386000)
setTimeout(async()=>{ 




      return driver.findElement(By.id("region_0")).sendKeys("s"); 

}, 1387000)
setTimeout(async()=>{ 




      return driver.findElement(By.id("region_0")).sendKeys("s"); 

}, 1388000)
setTimeout(async()=>{ 




      return driver.findElement(By.tagName("body")).click(); 

}, 1389000)
setTimeout(async()=>{ 




      return driver.findElement(By.id("region_1")).click(); 

}, 1390000)
setTimeout(async()=>{ 




      return driver.findElement(By.id("region_1")).sendKeys("s"); 

}, 1391000)
setTimeout(async()=>{ 




      return driver.findElement(By.xpath("//button[@type='submit']")).click(); 

}, 1392000)
setTimeout(async()=>{ 




      return driver.findElement(By.xpath("//button[@type='submit']")).click(); 

}, 1393000)


/**************************************************************************************
 * 
 * 
 * 
 * 
 * 
 * 
 * 
 * 
 * 
 ***************************************************************************************/

setTimeout(async()=>{ 




      return driver.get("https://www.corotos.com.do/create") 

}, 1400000)
setTimeout(async()=>{ 




      return driver.findElement(By.id("_tealiumModalClose")).click(); 

}, 1404000)
setTimeout(async()=>{ 




      return driver.findElement(By.xpath("//input[@type='file']")).sendKeys("c:/Users/Rey Messon/Desktop/anuncio/WhatsApp Image 2018-11-12 at 4.40.00 PM (1).jpeg"); 

}, 1408000)
setTimeout(async()=>{ 




      return driver.findElement(By.xpath("//input[@type='file']")).sendKeys("c:/Users/Rey Messon/Desktop/anuncio/WhatsApp Image 2018-11-12 at 4.40.01 PM.jpeg"); 

}, 1412000)
setTimeout(async()=>{ 




      return driver.findElement(By.xpath("//button[@type='submit']")).click(); 

}, 1416000)
setTimeout(async()=>{ 




      return driver.findElement(By.id("title")).sendKeys(dataMaster18.header); 

}, 1417000)
setTimeout(async()=>{ 




      return driver.findElement(By.id("description")).sendKeys(dataMaster18.description); 

}, 1418000)
setTimeout(async()=>{ 




      return driver.findElement(By.id("category_0")).click(); 

}, 1419000)
setTimeout(async()=>{ 




      return driver.findElement(By.id("category_0")).sendKeys("v"); 

}, 1420000)
setTimeout(async()=>{ 




      return driver.findElement(By.tagName("body")).click(); 

}, 1421000)
setTimeout(async()=>{ 




      return driver.findElement(By.id("category_1")).click(); 

}, 1422000)
setTimeout(async()=>{ 




      return driver.findElement(By.id("category_1")).sendKeys("j"); 

}, 1423000)
setTimeout(async()=>{ 




      return driver.findElement(By.tagName("body")).click(); 

}, 1424000)
setTimeout(async()=>{ 




      return driver.findElement(By.xpath("//button[@type='submit']")).click(); 

}, 1425000)
setTimeout(async()=>{ 




      return driver.findElement(By.id("metadata.year")).sendKeys("2013"); 

}, 1427000)
setTimeout(async()=>{ 




      return driver.findElement(By.id("metadata.mileage")).sendKeys("1000"); 

}, 1427000)
setTimeout(async()=>{ 




      return driver.findElement(By.id("metadata.fuel")).click(); 

}, 1428000)
setTimeout(async()=>{ 




      return driver.findElement(By.id("metadata.fuel")).sendKeys("g"); 

}, 1429000)
setTimeout(async()=>{ 




      return driver.findElement(By.id("metadata.fuel")).sendKeys("g"); 

}, 1430000)
setTimeout(async()=>{ 




      return driver.findElement(By.id("metadata.transmission")).click(); 

}, 1431000)
setTimeout(async()=>{ 




      return driver.findElement(By.id("metadata.transmission")).sendKeys("a"); 

}, 1432000)
setTimeout(async()=>{ 




      return driver.findElement(By.tagName("body")).click(); 

}, 1433000)
setTimeout(async()=>{ 




      return driver.findElement(By.tagName("body")).click(); 

}, 1434000)
setTimeout(async()=>{ 




      return driver.findElement(By.id("metadata.outsideColor")).click(); 

}, 1435000)
setTimeout(async()=>{ 




      return driver.findElement(By.id("metadata.outsideColor")).sendKeys("r"); 

}, 1436000)
setTimeout(async()=>{ 




      return driver.findElement(By.tagName("body")).click(); 

}, 1437000)
setTimeout(async()=>{ 




      return driver.findElement(By.id("metadata.insideColor")).click(); 

}, 1438000)
setTimeout(async()=>{ 




      return driver.findElement(By.id("metadata.insideColor")).sendKeys("n"); 

}, 1439000)
setTimeout(async()=>{ 




      return driver.findElement(By.id("metadata.insideColor")).sendKeys("n"); 

}, 1440000)
setTimeout(async()=>{ 




      return driver.findElement(By.tagName("body")).click(); 

}, 1441000)
setTimeout(async()=>{ 




      return driver.findElement(By.id("metadata.horsePower")).sendKeys("4"); 

}, 1442000)
setTimeout(async()=>{ 




      return driver.findElement(By.tagName("body")).click(); 

}, 1443000)
setTimeout(async()=>{ 




      return driver.findElement(By.id("metadata.condition")).click(); 

}, 1444000)
setTimeout(async()=>{ 




      return driver.findElement(By.id("metadata.condition")).sendKeys("u"); 

}, 1445000)
setTimeout(async()=>{ 




      return driver.findElement(By.tagName("body")).click(); 

}, 1446000)
setTimeout(async()=>{ 




      return driver.findElement(By.tagName("body")).click(); 

}, 1447000)
setTimeout(async()=>{ 




      return driver.findElement(By.tagName("body")).click(); 

}, 1448000)
setTimeout(async()=>{ 




      return driver.findElement(By.id("metadata.make")).click(); 

}, 1449000)
setTimeout(async()=>{ 




      return driver.findElement(By.id("metadata.make")).sendKeys("h"); 

}, 1450000)
setTimeout(async()=>{ 




      return driver.findElement(By.tagName("body")).click(); 

}, 1451000)
setTimeout(async()=>{ 




      return driver.findElement(By.id("metadata.model")).click(); 

}, 1452000)
setTimeout(async()=>{ 




      return driver.findElement(By.id("metadata.model")).sendKeys("f"); 

}, 1453000)
setTimeout(async()=>{ 




      return driver.findElement(By.tagName("body")).click(); 

}, 1454000)
setTimeout(async()=>{ 




      return driver.findElement(By.id("metadata.heavyVehicleType")).click(); 

}, 1455000)
setTimeout(async()=>{ 




      return driver.findElement(By.id("metadata.heavyVehicleType")).sendKeys("j"); 

}, 1456000)
setTimeout(async()=>{ 




      return driver.findElement(By.tagName("body")).click(); 

}, 1457000)
setTimeout(async()=>{ 




      return driver.findElement(By.xpath("//button[@type='submit']")).click(); 

}, 1458000)
setTimeout(async()=>{ 




      return driver.findElement(By.id("price")).sendKeys(2250); 

}, 1459000)
setTimeout(async()=>{ 




      return driver.findElement(By.id("region_0")).click(); 

}, 1460000)
setTimeout(async()=>{ 




      return driver.findElement(By.id("region_0")).sendKeys("s"); 

}, 1461000)
setTimeout(async()=>{ 




      return driver.findElement(By.id("region_0")).sendKeys("s"); 

}, 1462000)
setTimeout(async()=>{ 




      return driver.findElement(By.id("region_0")).sendKeys("s"); 

}, 1463000)
setTimeout(async()=>{ 




      return driver.findElement(By.id("region_0")).sendKeys("s"); 

}, 1464000)
setTimeout(async()=>{ 




      return driver.findElement(By.id("region_0")).sendKeys("s"); 

}, 1465000)
setTimeout(async()=>{ 




      return driver.findElement(By.id("region_0")).sendKeys("s"); 

}, 1466000)
setTimeout(async()=>{ 




      return driver.findElement(By.id("region_0")).sendKeys("s"); 

}, 1467000)
setTimeout(async()=>{ 




      return driver.findElement(By.id("region_0")).sendKeys("s"); 

}, 1468000)
setTimeout(async()=>{ 




      return driver.findElement(By.tagName("body")).click(); 

}, 1469000)
setTimeout(async()=>{ 




      return driver.findElement(By.id("region_1")).click(); 

}, 1470000)
setTimeout(async()=>{ 




      return driver.findElement(By.id("region_1")).sendKeys("s"); 

}, 1471000)
setTimeout(async()=>{ 




      return driver.findElement(By.xpath("//button[@type='submit']")).click(); 

}, 1472000)
setTimeout(async()=>{ 




      return driver.findElement(By.xpath("//button[@type='submit']")).click(); 

}, 1473000)

/*************************************************************************************
 * 
 * 
 * 
 * 
 * 
 * 
 * 
 * 
 * 
 **************************************************************************************/

setTimeout(async()=>{ 




      return driver.get("https://www.corotos.com.do/create") 

}, 1480000)
setTimeout(async()=>{ 




      return driver.findElement(By.id("_tealiumModalClose")).click(); 

}, 1484000)
setTimeout(async()=>{ 




      return driver.findElement(By.xpath("//input[@type='file']")).sendKeys("c:/Users/Rey Messon/Desktop/anuncio/WhatsApp Image 2018-11-12 at 5.14.15 PM.jpeg"); 

}, 1488000)
setTimeout(async()=>{ 




      return driver.findElement(By.xpath("//input[@type='file']")).sendKeys("c:/Users/Rey Messon/Desktop/anuncio/WhatsApp Image 2018-11-12 at 5.14.41 PM.jpeg"); 

}, 1492000)
setTimeout(async()=>{ 




      return driver.findElement(By.xpath("//button[@type='submit']")).click(); 

}, 1496000)
setTimeout(async()=>{ 




      return driver.findElement(By.id("title")).sendKeys(dataMaster19.header); 

}, 1497000)
setTimeout(async()=>{ 




      return driver.findElement(By.id("description")).sendKeys(dataMaster19.description); 

}, 1498000)
setTimeout(async()=>{ 




      return driver.findElement(By.id("category_0")).click(); 

}, 1499000)
setTimeout(async()=>{ 




      return driver.findElement(By.id("category_0")).sendKeys("v"); 

}, 1500000)
setTimeout(async()=>{ 




      return driver.findElement(By.tagName("body")).click(); 

}, 1501000)
setTimeout(async()=>{ 




      return driver.findElement(By.id("category_1")).click(); 

}, 1502000)
setTimeout(async()=>{ 




      return driver.findElement(By.id("category_1")).sendKeys("j"); 

}, 1503000)
setTimeout(async()=>{ 




      return driver.findElement(By.tagName("body")).click(); 

}, 1504000)
setTimeout(async()=>{ 




      return driver.findElement(By.xpath("//button[@type='submit']")).click(); 

}, 1505000)
setTimeout(async()=>{ 




      return driver.findElement(By.id("metadata.year")).sendKeys("2013"); 

}, 1507000)
setTimeout(async()=>{ 




      return driver.findElement(By.id("metadata.mileage")).sendKeys("1000"); 

}, 1507000)
setTimeout(async()=>{ 




      return driver.findElement(By.id("metadata.fuel")).click(); 

}, 1508000)
setTimeout(async()=>{ 




      return driver.findElement(By.id("metadata.fuel")).sendKeys("g"); 

}, 1509000)
setTimeout(async()=>{ 




      return driver.findElement(By.id("metadata.fuel")).sendKeys("g"); 

}, 1510000)
setTimeout(async()=>{ 




      return driver.findElement(By.id("metadata.transmission")).click(); 

}, 1511000)
setTimeout(async()=>{ 




      return driver.findElement(By.id("metadata.transmission")).sendKeys("a"); 

}, 1512000)
setTimeout(async()=>{ 




      return driver.findElement(By.tagName("body")).click(); 

}, 1513000)
setTimeout(async()=>{ 




      return driver.findElement(By.tagName("body")).click(); 

}, 1514000)
setTimeout(async()=>{ 




      return driver.findElement(By.id("metadata.outsideColor")).click(); 

}, 1515000)
setTimeout(async()=>{ 




      return driver.findElement(By.id("metadata.outsideColor")).sendKeys("r"); 

}, 1516000)
setTimeout(async()=>{ 




      return driver.findElement(By.tagName("body")).click(); 

}, 1517000)
setTimeout(async()=>{ 




      return driver.findElement(By.id("metadata.insideColor")).click(); 

}, 1518000)
setTimeout(async()=>{ 




      return driver.findElement(By.id("metadata.insideColor")).sendKeys("n"); 

}, 1519000)
setTimeout(async()=>{ 




      return driver.findElement(By.id("metadata.insideColor")).sendKeys("n"); 

}, 1520000)
setTimeout(async()=>{ 




      return driver.findElement(By.tagName("body")).click(); 

}, 1521000)
setTimeout(async()=>{ 




      return driver.findElement(By.id("metadata.horsePower")).sendKeys("4"); 

}, 1522000)
setTimeout(async()=>{ 




      return driver.findElement(By.tagName("body")).click(); 

}, 1523000)
setTimeout(async()=>{ 




      return driver.findElement(By.id("metadata.condition")).click(); 

}, 1524000)
setTimeout(async()=>{ 




      return driver.findElement(By.id("metadata.condition")).sendKeys("u"); 

}, 1525000)
setTimeout(async()=>{ 




      return driver.findElement(By.tagName("body")).click(); 

}, 1526000)
setTimeout(async()=>{ 




      return driver.findElement(By.tagName("body")).click(); 

}, 1527000)
setTimeout(async()=>{ 




      return driver.findElement(By.tagName("body")).click(); 

}, 1528000)
setTimeout(async()=>{ 




      return driver.findElement(By.id("metadata.make")).click(); 

}, 1529000)
setTimeout(async()=>{ 




      return driver.findElement(By.id("metadata.make")).sendKeys("h"); 

}, 1530000)
setTimeout(async()=>{ 




      return driver.findElement(By.tagName("body")).click(); 

}, 1531000)
setTimeout(async()=>{ 




      return driver.findElement(By.id("metadata.model")).click(); 

}, 1532000)
setTimeout(async()=>{ 




      return driver.findElement(By.id("metadata.model")).sendKeys("f"); 

}, 1533000)
setTimeout(async()=>{ 




      return driver.findElement(By.tagName("body")).click(); 

}, 1534000)
setTimeout(async()=>{ 




      return driver.findElement(By.id("metadata.heavyVehicleType")).click(); 

}, 1535000)
setTimeout(async()=>{ 




      return driver.findElement(By.id("metadata.heavyVehicleType")).sendKeys("j"); 

}, 1536000)
setTimeout(async()=>{ 




      return driver.findElement(By.tagName("body")).click(); 

}, 1537000)
setTimeout(async()=>{ 




      return driver.findElement(By.xpath("//button[@type='submit']")).click(); 

}, 1538000)
setTimeout(async()=>{ 




      return driver.findElement(By.id("price")).sendKeys(86000); 

}, 1539000)
setTimeout(async()=>{ 




      return driver.findElement(By.id("region_0")).click(); 

}, 1540000)
setTimeout(async()=>{ 




      return driver.findElement(By.id("region_0")).sendKeys("s"); 

}, 1541000)
setTimeout(async()=>{ 




      return driver.findElement(By.id("region_0")).sendKeys("s"); 

}, 1542000)
setTimeout(async()=>{ 




      return driver.findElement(By.id("region_0")).sendKeys("s"); 

}, 1543000)
setTimeout(async()=>{ 




      return driver.findElement(By.id("region_0")).sendKeys("s"); 

}, 1544000)
setTimeout(async()=>{ 




      return driver.findElement(By.id("region_0")).sendKeys("s"); 

}, 1545000)
setTimeout(async()=>{ 




      return driver.findElement(By.id("region_0")).sendKeys("s"); 

}, 1546000)
setTimeout(async()=>{ 




      return driver.findElement(By.id("region_0")).sendKeys("s"); 

}, 1547000)
setTimeout(async()=>{ 




      return driver.findElement(By.id("region_0")).sendKeys("s"); 

}, 1548000)
setTimeout(async()=>{ 




      return driver.findElement(By.tagName("body")).click(); 

}, 1549000)
setTimeout(async()=>{ 




      return driver.findElement(By.id("region_1")).click(); 

}, 1550000)
setTimeout(async()=>{ 




      return driver.findElement(By.id("region_1")).sendKeys("s"); 

}, 1551000)
setTimeout(async()=>{ 




      return driver.findElement(By.xpath("//button[@type='submit']")).click(); 

}, 1552000)
setTimeout(async()=>{ 




      return driver.findElement(By.xpath("//button[@type='submit']")).click(); 

}, 1553000)


/*************************************************************************************
 * 
 * 
 * 
 * 
 * 
 * 
 * 
 * 
 * 
 **************************************************************************************/

setTimeout(async()=>{ 




      return driver.get("https://www.corotos.com.do/create") 

}, 1560000)
setTimeout(async()=>{ 




      return driver.findElement(By.id("_tealiumModalClose")).click(); 

}, 1564000)
setTimeout(async()=>{ 




      return driver.findElement(By.xpath("//input[@type='file']")).sendKeys("c:/Users/Rey Messon/Desktop/anuncio/WhatsApp Image 2018-11-20 at 1.21.07 PM.jpeg"); 

}, 1568000)
setTimeout(async()=>{ 




      return driver.findElement(By.xpath("//input[@type='file']")).sendKeys("c:/Users/Rey Messon/Desktop/anuncio/WhatsApp Image 2018-11-20 at 1.21.06 PM (1).jpeg"); 

}, 1572000)
setTimeout(async()=>{ 




      return driver.findElement(By.xpath("//button[@type='submit']")).click(); 

}, 1576000)
setTimeout(async()=>{ 




      return driver.findElement(By.id("title")).sendKeys(dataMaster20.header); 

}, 1577000)
setTimeout(async()=>{ 




      return driver.findElement(By.id("description")).sendKeys(dataMaster20.description); 

}, 1578000)
setTimeout(async()=>{ 




      return driver.findElement(By.id("category_0")).click(); 

}, 1579000)
setTimeout(async()=>{ 




      return driver.findElement(By.id("category_0")).sendKeys("v"); 

}, 1580000)
setTimeout(async()=>{ 




      return driver.findElement(By.tagName("body")).click(); 

}, 1581000)
setTimeout(async()=>{ 




      return driver.findElement(By.id("category_1")).click(); 

}, 1582000)
setTimeout(async()=>{ 




      return driver.findElement(By.id("category_1")).sendKeys("j"); 

}, 1583000)
setTimeout(async()=>{ 




      return driver.findElement(By.tagName("body")).click(); 

}, 1584000)
setTimeout(async()=>{ 




      return driver.findElement(By.xpath("//button[@type='submit']")).click(); 

}, 1585000)
setTimeout(async()=>{ 




      return driver.findElement(By.id("metadata.year")).sendKeys("2013"); 

}, 1587000)
setTimeout(async()=>{ 




      return driver.findElement(By.id("metadata.mileage")).sendKeys("1000"); 

}, 1587000)
setTimeout(async()=>{ 




      return driver.findElement(By.id("metadata.fuel")).click(); 

}, 1588000)
setTimeout(async()=>{ 




      return driver.findElement(By.id("metadata.fuel")).sendKeys("g"); 

}, 1589000)
setTimeout(async()=>{ 




      return driver.findElement(By.id("metadata.fuel")).sendKeys("g"); 

}, 1590000)
setTimeout(async()=>{ 




      return driver.findElement(By.id("metadata.transmission")).click(); 

}, 1591000)
setTimeout(async()=>{ 




      return driver.findElement(By.id("metadata.transmission")).sendKeys("a"); 

}, 1592000)
setTimeout(async()=>{ 




      return driver.findElement(By.tagName("body")).click(); 

}, 1593000)
setTimeout(async()=>{ 




      return driver.findElement(By.tagName("body")).click(); 

}, 1594000)
setTimeout(async()=>{ 




      return driver.findElement(By.id("metadata.outsideColor")).click(); 

}, 1595000)
setTimeout(async()=>{ 




      return driver.findElement(By.id("metadata.outsideColor")).sendKeys("r"); 

}, 1596000)
setTimeout(async()=>{ 




      return driver.findElement(By.tagName("body")).click(); 

}, 1597000)
setTimeout(async()=>{ 




      return driver.findElement(By.id("metadata.insideColor")).click(); 

}, 1598000)
setTimeout(async()=>{ 




      return driver.findElement(By.id("metadata.insideColor")).sendKeys("n"); 

}, 1599000)
setTimeout(async()=>{ 




      return driver.findElement(By.id("metadata.insideColor")).sendKeys("n"); 

}, 1600000)
setTimeout(async()=>{ 




      return driver.findElement(By.tagName("body")).click(); 

}, 1601000)
setTimeout(async()=>{ 




      return driver.findElement(By.id("metadata.horsePower")).sendKeys("4"); 

}, 1602000)
setTimeout(async()=>{ 




      return driver.findElement(By.tagName("body")).click(); 

}, 1603000)
setTimeout(async()=>{ 




      return driver.findElement(By.id("metadata.condition")).click(); 

}, 1604000)
setTimeout(async()=>{ 




      return driver.findElement(By.id("metadata.condition")).sendKeys("u"); 

}, 1605000)
setTimeout(async()=>{ 




      return driver.findElement(By.tagName("body")).click(); 

}, 1606000)
setTimeout(async()=>{ 




      return driver.findElement(By.tagName("body")).click(); 

}, 1607000)
setTimeout(async()=>{ 




      return driver.findElement(By.tagName("body")).click(); 

}, 1608000)
setTimeout(async()=>{ 




      return driver.findElement(By.id("metadata.make")).click(); 

}, 1609000)
setTimeout(async()=>{ 




      return driver.findElement(By.id("metadata.make")).sendKeys("h"); 

}, 1610000)
setTimeout(async()=>{ 




      return driver.findElement(By.tagName("body")).click(); 

}, 1611000)
setTimeout(async()=>{ 




      return driver.findElement(By.id("metadata.model")).click(); 

}, 1612000)
setTimeout(async()=>{ 




      return driver.findElement(By.id("metadata.model")).sendKeys("f"); 

}, 1613000)
setTimeout(async()=>{ 




      return driver.findElement(By.tagName("body")).click(); 

}, 1614000)
setTimeout(async()=>{ 




      return driver.findElement(By.id("metadata.heavyVehicleType")).click(); 

}, 1615000)
setTimeout(async()=>{ 




      return driver.findElement(By.id("metadata.heavyVehicleType")).sendKeys("j"); 

}, 1616000)
setTimeout(async()=>{ 




      return driver.findElement(By.tagName("body")).click(); 

}, 1617000)
setTimeout(async()=>{ 




      return driver.findElement(By.xpath("//button[@type='submit']")).click(); 

}, 1618000)
setTimeout(async()=>{ 




      return driver.findElement(By.id("price")).sendKeys(66000); 

}, 1619000)
setTimeout(async()=>{ 




      return driver.findElement(By.id("region_0")).click(); 

}, 1620000)
setTimeout(async()=>{ 




      return driver.findElement(By.id("region_0")).sendKeys("s"); 

}, 1621000)
setTimeout(async()=>{ 




      return driver.findElement(By.id("region_0")).sendKeys("s"); 

}, 1622000)
setTimeout(async()=>{ 




      return driver.findElement(By.id("region_0")).sendKeys("s"); 

}, 1623000)
setTimeout(async()=>{ 




      return driver.findElement(By.id("region_0")).sendKeys("s"); 

}, 1624000)
setTimeout(async()=>{ 




      return driver.findElement(By.id("region_0")).sendKeys("s"); 

}, 1625000)
setTimeout(async()=>{ 




      return driver.findElement(By.id("region_0")).sendKeys("s"); 

}, 1626000)
setTimeout(async()=>{ 




      return driver.findElement(By.id("region_0")).sendKeys("s"); 

}, 1627000)
setTimeout(async()=>{ 




      return driver.findElement(By.id("region_0")).sendKeys("s"); 

}, 1628000)
setTimeout(async()=>{ 




      return driver.findElement(By.tagName("body")).click(); 

}, 1629000)
setTimeout(async()=>{ 




      return driver.findElement(By.id("region_1")).click(); 

}, 1630000)
setTimeout(async()=>{ 




      return driver.findElement(By.id("region_1")).sendKeys("s"); 

}, 1631000)
setTimeout(async()=>{ 




      return driver.findElement(By.xpath("//button[@type='submit']")).click(); 

}, 1632000)
setTimeout(async()=>{ 




      return driver.findElement(By.xpath("//button[@type='submit']")).click(); 

}, 1633000)

/*************************************************************************************
 * 
 * 
 * 
 * 
 * 
 * 
 * 
 * 
 * 
 **************************************************************************************/




setTimeout(async()=>{ 




      return driver.get("https://www.corotos.com.do/create") 

}, 1640000)
setTimeout(async()=>{ 




      return driver.findElement(By.id("_tealiumModalClose")).click(); 

}, 1644000)
setTimeout(async()=>{ 




      return driver.findElement(By.xpath("//input[@type='file']")).sendKeys("c:/Users/Rey Messon/Desktop/anuncio/WhatsApp Image 2018-11-20 at 1.22.14 PM.jpeg"); 

}, 1648000)
setTimeout(async()=>{ 




      return driver.findElement(By.xpath("//input[@type='file']")).sendKeys("c:/Users/Rey Messon/Desktop/anuncio/WhatsApp Image 2018-11-20 at 1.22.13 PM.jpeg"); 

}, 1652000)
setTimeout(async()=>{ 




      return driver.findElement(By.xpath("//button[@type='submit']")).click(); 

}, 1656000)
setTimeout(async()=>{ 




      return driver.findElement(By.id("title")).sendKeys(dataMaster21.header); 

}, 1657000)
setTimeout(async()=>{ 




      return driver.findElement(By.id("description")).sendKeys(dataMaster21.description); 

}, 1658000)
setTimeout(async()=>{ 




      return driver.findElement(By.id("category_0")).click(); 

}, 1659000)
setTimeout(async()=>{ 




      return driver.findElement(By.id("category_0")).sendKeys("v"); 

}, 1660000)
setTimeout(async()=>{ 




      return driver.findElement(By.tagName("body")).click(); 

}, 1661000)
setTimeout(async()=>{ 




      return driver.findElement(By.id("category_1")).click(); 

}, 1662000)
setTimeout(async()=>{ 




      return driver.findElement(By.id("category_1")).sendKeys("c"); 

}, 1663000)
setTimeout(async()=>{ 




      return driver.findElement(By.tagName("body")).click(); 

}, 1664000)
setTimeout(async()=>{ 




      return driver.findElement(By.xpath("//button[@type='submit']")).click(); 

}, 1665000)
setTimeout(async()=>{ 




      return driver.findElement(By.id("metadata.vehicleType")).click(); 

}, 1666000)
setTimeout(async()=>{ 




      return driver.findElement(By.id("metadata.vehicleType")).sendKeys("s"); 

}, 1667000)
setTimeout(async()=>{ 




      return driver.findElement(By.tagName("body")).click(); 

}, 1668000)
setTimeout(async()=>{ 




      return driver.findElement(By.id("metadata.year")).sendKeys("2012"); 

}, 1669000)
setTimeout(async()=>{ 




      return driver.findElement(By.id("metadata.mileage")).sendKeys("1000"); 

}, 1670000)
setTimeout(async()=>{ 




      return driver.findElement(By.id("metadata.fuel")).click(); 

}, 1671000)
setTimeout(async()=>{ 




      return driver.findElement(By.id("metadata.fuel")).sendKeys("g"); 

}, 1672000)
setTimeout(async()=>{ 




      return driver.findElement(By.id("metadata.fuel")).sendKeys("g"); 

}, 1673000)
setTimeout(async()=>{ 




      return driver.findElement(By.id("metadata.horsePower")).sendKeys("4"); 

}, 1674000)
setTimeout(async()=>{ 




      return driver.findElement(By.id("metadata.transmission")).click(); 

}, 1675000)
setTimeout(async()=>{ 




      return driver.findElement(By.id("metadata.transmission")).sendKeys("a"); 

}, 1676000)
setTimeout(async()=>{ 




      return driver.findElement(By.tagName("body")).click(); 

}, 1677000)
setTimeout(async()=>{ 




      return driver.findElement(By.id("metadata.outsideColor")).click(); 

}, 1678000)
setTimeout(async()=>{ 




      return driver.findElement(By.id("metadata.outsideColor")).sendKeys("r"); 

}, 1679000)
setTimeout(async()=>{ 




      return driver.findElement(By.tagName("body")).click(); 

}, 1680000)
setTimeout(async()=>{ 




      return driver.findElement(By.id("metadata.condition")).click(); 

}, 1681000)
setTimeout(async()=>{ 




      return driver.findElement(By.id("metadata.condition")).sendKeys("u"); 

}, 1682000)
setTimeout(async()=>{ 




      return driver.findElement(By.tagName("body")).click(); 

}, 1683000)
setTimeout(async()=>{ 




      return driver.findElement(By.id("metadata.insideColor")).click(); 

}, 1684000)
setTimeout(async()=>{ 




      return driver.findElement(By.id("metadata.insideColor")).sendKeys("n"); 

}, 1685000)
setTimeout(async()=>{ 




      return driver.findElement(By.id("metadata.insideColor")).sendKeys("n"); 

}, 1686000)
setTimeout(async()=>{ 




      return driver.findElement(By.tagName("body")).click(); 

}, 1687000)
setTimeout(async()=>{ 




      return driver.findElement(By.id("metadata.make")).click(); 

}, 1688000)
setTimeout(async()=>{ 




      return driver.findElement(By.id("metadata.make")).sendKeys("t"); 

}, 1689000)
setTimeout(async()=>{ 




      return driver.findElement(By.id("metadata.make")).sendKeys("t"); 

}, 1690000)
setTimeout(async()=>{ 




      return driver.findElement(By.tagName("body")).click(); 

}, 1691000)
setTimeout(async()=>{ 




      return driver.findElement(By.id("metadata.model")).click(); 

}, 1692000)
setTimeout(async()=>{ 




      return driver.findElement(By.id("metadata.model")).sendKeys("p"); 

}, 1693000)
setTimeout(async()=>{ 




      return driver.findElement(By.tagName("body")).click(); 

}, 1694000)
setTimeout(async()=>{ 




      return driver.findElement(By.tagName("body")).click(); 

}, 1695000)
setTimeout(async()=>{ 




      return driver.findElement(By.xpath("//button[@type='submit']")).click(); 

}, 1696000)
setTimeout(async()=>{ 




      return driver.findElement(By.id("price")).sendKeys(34500); 

}, 1697000)
setTimeout(async()=>{ 




      return driver.findElement(By.id("region_0")).click(); 

}, 1698000)
setTimeout(async()=>{ 




      return driver.findElement(By.id("region_0")).sendKeys("s"); 

}, 1699000)
setTimeout(async()=>{ 




      return driver.findElement(By.id("region_0")).sendKeys("s"); 

}, 1700000)
setTimeout(async()=>{ 




      return driver.findElement(By.id("region_0")).sendKeys("s"); 

}, 1701000)
setTimeout(async()=>{ 




      return driver.findElement(By.id("region_0")).sendKeys("s"); 

}, 1702000)
setTimeout(async()=>{ 




      return driver.findElement(By.id("region_0")).sendKeys("s"); 

}, 1703000)
setTimeout(async()=>{ 




      return driver.findElement(By.id("region_0")).sendKeys("s"); 

}, 1704000)
setTimeout(async()=>{ 




      return driver.findElement(By.id("region_0")).sendKeys("s"); 

}, 1705000)
setTimeout(async()=>{ 




      return driver.findElement(By.id("region_0")).sendKeys("s"); 

}, 1706000)
setTimeout(async()=>{ 




      return driver.findElement(By.tagName("body")).click(); 

}, 1707000)
setTimeout(async()=>{ 




      return driver.findElement(By.id("region_1")).click(); 

}, 1708000)
setTimeout(async()=>{ 




      return driver.findElement(By.id("region_1")).sendKeys("s"); 

}, 1709000)
setTimeout(async()=>{ 




      return driver.findElement(By.xpath("//button[@type='submit']")).click(); 

}, 1710000)
setTimeout(async()=>{ 




      return driver.findElement(By.xpath("//button[@type='submit']")).click(); 

}, 1711000)





/*************************************************************************************
 * 
 * 
 * 
 * 
 * 
 * 
 * 
 * 
 * 
 **************************************************************************************/



setTimeout(async()=>{ 




      return driver.get("https://www.corotos.com.do/create") 

}, 1720000)
setTimeout(async()=>{ 




      return driver.findElement(By.id("_tealiumModalClose")).click(); 

}, 1724000)
setTimeout(async()=>{ 




      return driver.findElement(By.xpath("//input[@type='file']")).sendKeys("c:/Users/Rey Messon/Desktop/anuncio/WhatsApp Image 2018-11-20 at 1.16.13 PM.jpeg"); 

}, 1728000)
setTimeout(async()=>{ 




      return driver.findElement(By.xpath("//input[@type='file']")).sendKeys("c:/Users/Rey Messon/Desktop/anuncio/WhatsApp Image 2018-11-20 at 1.16.14 PM.jpeg"); 

}, 1732000)
setTimeout(async()=>{ 




      return driver.findElement(By.xpath("//button[@type='submit']")).click(); 

}, 1736000)
setTimeout(async()=>{ 




      return driver.findElement(By.id("title")).sendKeys(dataMaster22.header); 

}, 1737000)
setTimeout(async()=>{ 




      return driver.findElement(By.id("description")).sendKeys(dataMaster22.description); 

}, 1738000)
setTimeout(async()=>{ 




      return driver.findElement(By.id("category_0")).click(); 

}, 1739000)
setTimeout(async()=>{ 




      return driver.findElement(By.id("category_0")).sendKeys("v"); 

}, 1740000)
setTimeout(async()=>{ 




      return driver.findElement(By.tagName("body")).click(); 

}, 1741000)
setTimeout(async()=>{ 




      return driver.findElement(By.id("category_1")).click(); 

}, 1742000)
setTimeout(async()=>{ 




      return driver.findElement(By.id("category_1")).sendKeys("j"); 

}, 1743000)
setTimeout(async()=>{ 




      return driver.findElement(By.tagName("body")).click(); 

}, 1744000)
setTimeout(async()=>{ 




      return driver.findElement(By.xpath("//button[@type='submit']")).click(); 

}, 1745000)
setTimeout(async()=>{ 




      return driver.findElement(By.id("metadata.year")).sendKeys("2013"); 

}, 1747000)
setTimeout(async()=>{ 




      return driver.findElement(By.id("metadata.mileage")).sendKeys("1000"); 

}, 1747000)
setTimeout(async()=>{ 




      return driver.findElement(By.id("metadata.fuel")).click(); 

}, 1748000)
setTimeout(async()=>{ 




      return driver.findElement(By.id("metadata.fuel")).sendKeys("g"); 

}, 1749000)
setTimeout(async()=>{ 




      return driver.findElement(By.id("metadata.fuel")).sendKeys("g"); 

}, 1750000)
setTimeout(async()=>{ 




      return driver.findElement(By.id("metadata.transmission")).click(); 

}, 1751000)
setTimeout(async()=>{ 




      return driver.findElement(By.id("metadata.transmission")).sendKeys("a"); 

}, 1752000)
setTimeout(async()=>{ 




      return driver.findElement(By.tagName("body")).click(); 

}, 1753000)
setTimeout(async()=>{ 




      return driver.findElement(By.tagName("body")).click(); 

}, 1754000)
setTimeout(async()=>{ 




      return driver.findElement(By.id("metadata.outsideColor")).click(); 

}, 1755000)
setTimeout(async()=>{ 




      return driver.findElement(By.id("metadata.outsideColor")).sendKeys("r"); 

}, 1756000)
setTimeout(async()=>{ 




      return driver.findElement(By.tagName("body")).click(); 

}, 1757000)
setTimeout(async()=>{ 




      return driver.findElement(By.id("metadata.insideColor")).click(); 

}, 1758000)
setTimeout(async()=>{ 




      return driver.findElement(By.id("metadata.insideColor")).sendKeys("n"); 

}, 1759000)
setTimeout(async()=>{ 




      return driver.findElement(By.id("metadata.insideColor")).sendKeys("n"); 

}, 1760000)
setTimeout(async()=>{ 




      return driver.findElement(By.tagName("body")).click(); 

}, 1761000)
setTimeout(async()=>{ 




      return driver.findElement(By.id("metadata.horsePower")).sendKeys("4"); 

}, 1762000)
setTimeout(async()=>{ 




      return driver.findElement(By.tagName("body")).click(); 

}, 1763000)
setTimeout(async()=>{ 




      return driver.findElement(By.id("metadata.condition")).click(); 

}, 1764000)
setTimeout(async()=>{ 




      return driver.findElement(By.id("metadata.condition")).sendKeys("u"); 

}, 1765000)
setTimeout(async()=>{ 




      return driver.findElement(By.tagName("body")).click(); 

}, 1766000)
setTimeout(async()=>{ 




      return driver.findElement(By.tagName("body")).click(); 

}, 1767000)
setTimeout(async()=>{ 




      return driver.findElement(By.tagName("body")).click(); 

}, 1768000)
setTimeout(async()=>{ 




      return driver.findElement(By.id("metadata.make")).click(); 

}, 1769000)
setTimeout(async()=>{ 




      return driver.findElement(By.id("metadata.make")).sendKeys("h"); 

}, 1770000)
setTimeout(async()=>{ 




      return driver.findElement(By.tagName("body")).click(); 

}, 1771000)
setTimeout(async()=>{ 




      return driver.findElement(By.id("metadata.model")).click(); 

}, 1772000)
setTimeout(async()=>{ 




      return driver.findElement(By.id("metadata.model")).sendKeys("f"); 

}, 1773000)
setTimeout(async()=>{ 




      return driver.findElement(By.tagName("body")).click(); 

}, 1774000)
setTimeout(async()=>{ 




      return driver.findElement(By.id("metadata.heavyVehicleType")).click(); 

}, 1775000)
setTimeout(async()=>{ 




      return driver.findElement(By.id("metadata.heavyVehicleType")).sendKeys("j"); 

}, 1776000)
setTimeout(async()=>{ 




      return driver.findElement(By.tagName("body")).click(); 

}, 1777000)
setTimeout(async()=>{ 




      return driver.findElement(By.xpath("//button[@type='submit']")).click(); 

}, 1778000)
setTimeout(async()=>{ 




      return driver.findElement(By.id("price")).sendKeys(76000); 

}, 1779000)
setTimeout(async()=>{ 




      return driver.findElement(By.id("region_0")).click(); 

}, 1780000)
setTimeout(async()=>{ 




      return driver.findElement(By.id("region_0")).sendKeys("s"); 

}, 1781000)
setTimeout(async()=>{ 




      return driver.findElement(By.id("region_0")).sendKeys("s"); 

}, 1782000)
setTimeout(async()=>{ 




      return driver.findElement(By.id("region_0")).sendKeys("s"); 

}, 1783000)
setTimeout(async()=>{ 




      return driver.findElement(By.id("region_0")).sendKeys("s"); 

}, 1784000)
setTimeout(async()=>{ 




      return driver.findElement(By.id("region_0")).sendKeys("s"); 

}, 1785000)
setTimeout(async()=>{ 




      return driver.findElement(By.id("region_0")).sendKeys("s"); 

}, 1786000)
setTimeout(async()=>{ 




      return driver.findElement(By.id("region_0")).sendKeys("s"); 

}, 1787000)
setTimeout(async()=>{ 




      return driver.findElement(By.id("region_0")).sendKeys("s"); 

}, 1788000)
setTimeout(async()=>{ 




      return driver.findElement(By.tagName("body")).click(); 

}, 1789000)
setTimeout(async()=>{ 




      return driver.findElement(By.id("region_1")).click(); 

}, 1790000)
setTimeout(async()=>{ 




      return driver.findElement(By.id("region_1")).sendKeys("s"); 

}, 1791000)
setTimeout(async()=>{ 




      return driver.findElement(By.xpath("//button[@type='submit']")).click(); 

}, 1792000)
setTimeout(async()=>{ 




      return driver.findElement(By.xpath("//button[@type='submit']")).click(); 

}, 1793000)





/*************************************************************************************
 * 
 * 
 * 
 * 
 * 
 * 
 * 
 * 
 * 
 **************************************************************************************/




setTimeout(async()=>{ 




      return driver.get("https://www.corotos.com.do/create") 

}, 1800000)
setTimeout(async()=>{ 




      return driver.findElement(By.id("_tealiumModalClose")).click(); 

}, 1804000)
setTimeout(async()=>{ 




      return driver.findElement(By.xpath("//input[@type='file']")).sendKeys("c:/Users/Rey Messon/Desktop/anuncio/WhatsApp Image 2018-11-20 at 12.32.16 PM.jpeg"); 

}, 1808000)
setTimeout(async()=>{ 




      return driver.findElement(By.xpath("//input[@type='file']")).sendKeys("c:/Users/Rey Messon/Desktop/anuncio/WhatsApp Image 2018-11-20 at 12.32.15 PM.jpeg"); 

}, 1812000)
setTimeout(async()=>{ 




      return driver.findElement(By.xpath("//button[@type='submit']")).click(); 

}, 1816000)
setTimeout(async()=>{ 




      return driver.findElement(By.id("title")).sendKeys(dataMaster23.header); 

}, 1817000)
setTimeout(async()=>{ 




      return driver.findElement(By.id("description")).sendKeys(dataMaster23.description); 

}, 1818000)
setTimeout(async()=>{ 




      return driver.findElement(By.id("category_0")).click(); 

}, 1819000)
setTimeout(async()=>{ 




      return driver.findElement(By.id("category_0")).sendKeys("v"); 

}, 1820000)
setTimeout(async()=>{ 




      return driver.findElement(By.tagName("body")).click(); 

}, 1821000)
setTimeout(async()=>{ 




      return driver.findElement(By.id("category_1")).click(); 

}, 1822000)
setTimeout(async()=>{ 




      return driver.findElement(By.id("category_1")).sendKeys("c"); 

}, 1823000)
setTimeout(async()=>{ 




      return driver.findElement(By.tagName("body")).click(); 

}, 1824000)
setTimeout(async()=>{ 




      return driver.findElement(By.xpath("//button[@type='submit']")).click(); 

}, 1825000)
setTimeout(async()=>{ 




      return driver.findElement(By.id("metadata.vehicleType")).click(); 

}, 1826000)
setTimeout(async()=>{ 




      return driver.findElement(By.id("metadata.vehicleType")).sendKeys("s"); 

}, 1827000)
setTimeout(async()=>{ 




      return driver.findElement(By.tagName("body")).click(); 

}, 1828000)
setTimeout(async()=>{ 




      return driver.findElement(By.id("metadata.year")).sendKeys("2012"); 

}, 1829000)
setTimeout(async()=>{ 




      return driver.findElement(By.id("metadata.mileage")).sendKeys("1000"); 

}, 1830000)
setTimeout(async()=>{ 




      return driver.findElement(By.id("metadata.fuel")).click(); 

}, 1831000)
setTimeout(async()=>{ 




      return driver.findElement(By.id("metadata.fuel")).sendKeys("g"); 

}, 1832000)
setTimeout(async()=>{ 




      return driver.findElement(By.id("metadata.fuel")).sendKeys("g"); 

}, 1833000)
setTimeout(async()=>{ 




      return driver.findElement(By.id("metadata.horsePower")).sendKeys("4"); 

}, 1834000)
setTimeout(async()=>{ 




      return driver.findElement(By.id("metadata.transmission")).click(); 

}, 1835000)
setTimeout(async()=>{ 




      return driver.findElement(By.id("metadata.transmission")).sendKeys("a"); 

}, 1836000)
setTimeout(async()=>{ 




      return driver.findElement(By.tagName("body")).click(); 

}, 1837000)
setTimeout(async()=>{ 




      return driver.findElement(By.id("metadata.outsideColor")).click(); 

}, 1838000)
setTimeout(async()=>{ 




      return driver.findElement(By.id("metadata.outsideColor")).sendKeys("r"); 

}, 1839000)
setTimeout(async()=>{ 




      return driver.findElement(By.tagName("body")).click(); 

}, 1840000)
setTimeout(async()=>{ 




      return driver.findElement(By.id("metadata.condition")).click(); 

}, 1841000)
setTimeout(async()=>{ 




      return driver.findElement(By.id("metadata.condition")).sendKeys("u"); 

}, 1842000)
setTimeout(async()=>{ 




      return driver.findElement(By.tagName("body")).click(); 

}, 1843000)
setTimeout(async()=>{ 




      return driver.findElement(By.id("metadata.insideColor")).click(); 

}, 1844000)
setTimeout(async()=>{ 




      return driver.findElement(By.id("metadata.insideColor")).sendKeys("n"); 

}, 1845000)
setTimeout(async()=>{ 




      return driver.findElement(By.id("metadata.insideColor")).sendKeys("n"); 

}, 1846000)
setTimeout(async()=>{ 




      return driver.findElement(By.tagName("body")).click(); 

}, 1847000)
setTimeout(async()=>{ 




      return driver.findElement(By.id("metadata.make")).click(); 

}, 1848000)
setTimeout(async()=>{ 




      return driver.findElement(By.id("metadata.make")).sendKeys("t"); 

}, 1849000)
setTimeout(async()=>{ 




      return driver.findElement(By.id("metadata.make")).sendKeys("t"); 

}, 1850000)
setTimeout(async()=>{ 




      return driver.findElement(By.tagName("body")).click(); 

}, 1851000)
setTimeout(async()=>{ 




      return driver.findElement(By.id("metadata.model")).click(); 

}, 1852000)
setTimeout(async()=>{ 




      return driver.findElement(By.id("metadata.model")).sendKeys("p"); 

}, 1853000)
setTimeout(async()=>{ 




      return driver.findElement(By.tagName("body")).click(); 

}, 1854000)
setTimeout(async()=>{ 




      return driver.findElement(By.tagName("body")).click(); 

}, 1855000)
setTimeout(async()=>{ 




      return driver.findElement(By.xpath("//button[@type='submit']")).click(); 

}, 1856000)
setTimeout(async()=>{ 




      return driver.findElement(By.id("price")).sendKeys(36000); 

}, 1857000)
setTimeout(async()=>{ 




      return driver.findElement(By.id("region_0")).click(); 

}, 1858000)
setTimeout(async()=>{ 




      return driver.findElement(By.id("region_0")).sendKeys("s"); 

}, 1859000)
setTimeout(async()=>{ 




      return driver.findElement(By.id("region_0")).sendKeys("s"); 

}, 1860000)
setTimeout(async()=>{ 




      return driver.findElement(By.id("region_0")).sendKeys("s"); 

}, 1861000)
setTimeout(async()=>{ 




      return driver.findElement(By.id("region_0")).sendKeys("s"); 

}, 1862000)
setTimeout(async()=>{ 




      return driver.findElement(By.id("region_0")).sendKeys("s"); 

}, 1863000)
setTimeout(async()=>{ 




      return driver.findElement(By.id("region_0")).sendKeys("s"); 

}, 1864000)
setTimeout(async()=>{ 




      return driver.findElement(By.id("region_0")).sendKeys("s"); 

}, 1865000)
setTimeout(async()=>{ 




      return driver.findElement(By.id("region_0")).sendKeys("s"); 

}, 1866000)
setTimeout(async()=>{ 




      return driver.findElement(By.tagName("body")).click(); 

}, 1867000)
setTimeout(async()=>{ 




      return driver.findElement(By.id("region_1")).click(); 

}, 1868000)
setTimeout(async()=>{ 




      return driver.findElement(By.id("region_1")).sendKeys("s"); 

}, 1869000)
setTimeout(async()=>{ 




      return driver.findElement(By.xpath("//button[@type='submit']")).click(); 

}, 1870000)
setTimeout(async()=>{ 




      return driver.findElement(By.xpath("//button[@type='submit']")).click(); 

}, 1871000)





/*************************************************************************************
 * 
 * 
 * 
 * 
 * 
 * 
 * 
 * 
 * 
 **************************************************************************************/

setTimeout(async()=>{ 




      return driver.get("https://www.corotos.com.do/create") 

}, 1890000)
setTimeout(async()=>{ 




      return driver.findElement(By.id("_tealiumModalClose")).click(); 

}, 1894000)
setTimeout(async()=>{ 




      return driver.findElement(By.xpath("//input[@type='file']")).sendKeys("c:/Users/Rey Messon/Desktop/anuncio/WhatsApp Image 2018-11-20 at 10.16.46 AM (2).jpeg"); 

}, 1898000)
setTimeout(async()=>{ 




      return driver.findElement(By.xpath("//input[@type='file']")).sendKeys("c:/Users/Rey Messon/Desktop/anuncio/WhatsApp Image 2018-11-20 at 10.16.46 AM.jpeg"); 

}, 1902000)
setTimeout(async()=>{ 




      return driver.findElement(By.xpath("//button[@type='submit']")).click(); 

}, 1906000)
setTimeout(async()=>{ 




      return driver.findElement(By.id("title")).sendKeys(dataMaster24.header); 

}, 1907000)
setTimeout(async()=>{ 




      return driver.findElement(By.id("description")).sendKeys(dataMaster24.description); 

}, 1908000)
setTimeout(async()=>{ 




      return driver.findElement(By.id("category_0")).click(); 

}, 1909000)
setTimeout(async()=>{ 




      return driver.findElement(By.id("category_0")).sendKeys("v"); 

}, 1910000)
setTimeout(async()=>{ 




      return driver.findElement(By.tagName("body")).click(); 

}, 1911000)
setTimeout(async()=>{ 




      return driver.findElement(By.id("category_1")).click(); 

}, 1912000)
setTimeout(async()=>{ 




      return driver.findElement(By.id("category_1")).sendKeys("j"); 

}, 1913000)
setTimeout(async()=>{ 




      return driver.findElement(By.tagName("body")).click(); 

}, 1914000)
setTimeout(async()=>{ 




      return driver.findElement(By.xpath("//button[@type='submit']")).click(); 

}, 1915000)
setTimeout(async()=>{ 




      return driver.findElement(By.id("metadata.year")).sendKeys("2013"); 

}, 1917000)
setTimeout(async()=>{ 




      return driver.findElement(By.id("metadata.mileage")).sendKeys("1000"); 

}, 1917000)
setTimeout(async()=>{ 




      return driver.findElement(By.id("metadata.fuel")).click(); 

}, 1918000)
setTimeout(async()=>{ 




      return driver.findElement(By.id("metadata.fuel")).sendKeys("g"); 

}, 1919000)
setTimeout(async()=>{ 




      return driver.findElement(By.id("metadata.fuel")).sendKeys("g"); 

}, 1920000)
setTimeout(async()=>{ 




      return driver.findElement(By.id("metadata.transmission")).click(); 

}, 1921000)
setTimeout(async()=>{ 




      return driver.findElement(By.id("metadata.transmission")).sendKeys("a"); 

}, 1922000)
setTimeout(async()=>{ 




      return driver.findElement(By.tagName("body")).click(); 

}, 1923000)
setTimeout(async()=>{ 




      return driver.findElement(By.tagName("body")).click(); 

}, 1924000)
setTimeout(async()=>{ 




      return driver.findElement(By.id("metadata.outsideColor")).click(); 

}, 1925000)
setTimeout(async()=>{ 




      return driver.findElement(By.id("metadata.outsideColor")).sendKeys("r"); 

}, 1926000)
setTimeout(async()=>{ 




      return driver.findElement(By.tagName("body")).click(); 

}, 1927000)
setTimeout(async()=>{ 




      return driver.findElement(By.id("metadata.insideColor")).click(); 

}, 1928000)
setTimeout(async()=>{ 




      return driver.findElement(By.id("metadata.insideColor")).sendKeys("n"); 

}, 1929000)
setTimeout(async()=>{ 




      return driver.findElement(By.id("metadata.insideColor")).sendKeys("n"); 

}, 1930000)
setTimeout(async()=>{ 




      return driver.findElement(By.tagName("body")).click(); 

}, 1931000)
setTimeout(async()=>{ 




      return driver.findElement(By.id("metadata.horsePower")).sendKeys("4"); 

}, 1932000)
setTimeout(async()=>{ 




      return driver.findElement(By.tagName("body")).click(); 

}, 1933000)
setTimeout(async()=>{ 




      return driver.findElement(By.id("metadata.condition")).click(); 

}, 1934000)
setTimeout(async()=>{ 




      return driver.findElement(By.id("metadata.condition")).sendKeys("u"); 

}, 1935000)
setTimeout(async()=>{ 




      return driver.findElement(By.tagName("body")).click(); 

}, 1936000)
setTimeout(async()=>{ 




      return driver.findElement(By.tagName("body")).click(); 

}, 1937000)
setTimeout(async()=>{ 




      return driver.findElement(By.tagName("body")).click(); 

}, 1938000)
setTimeout(async()=>{ 




      return driver.findElement(By.id("metadata.make")).click(); 

}, 1939000)
setTimeout(async()=>{ 




      return driver.findElement(By.id("metadata.make")).sendKeys("h"); 

}, 1940000)
setTimeout(async()=>{ 




      return driver.findElement(By.tagName("body")).click(); 

}, 1941000)
setTimeout(async()=>{ 




      return driver.findElement(By.id("metadata.model")).click(); 

}, 1942000)
setTimeout(async()=>{ 




      return driver.findElement(By.id("metadata.model")).sendKeys("f"); 

}, 1943000)
setTimeout(async()=>{ 




      return driver.findElement(By.tagName("body")).click(); 

}, 1944000)
setTimeout(async()=>{ 




      return driver.findElement(By.id("metadata.heavyVehicleType")).click(); 

}, 1945000)
setTimeout(async()=>{ 




      return driver.findElement(By.id("metadata.heavyVehicleType")).sendKeys("j"); 

}, 1946000)
setTimeout(async()=>{ 




      return driver.findElement(By.tagName("body")).click(); 

}, 1947000)
setTimeout(async()=>{ 




      return driver.findElement(By.xpath("//button[@type='submit']")).click(); 

}, 1948000)
setTimeout(async()=>{ 




      return driver.findElement(By.id("price")).sendKeys(41500); 

}, 1949000)
setTimeout(async()=>{ 




      return driver.findElement(By.id("region_0")).click(); 

}, 1950000)
setTimeout(async()=>{ 




      return driver.findElement(By.id("region_0")).sendKeys("s"); 

}, 1951000)
setTimeout(async()=>{ 




      return driver.findElement(By.id("region_0")).sendKeys("s"); 

}, 1952000)
setTimeout(async()=>{ 




      return driver.findElement(By.id("region_0")).sendKeys("s"); 

}, 1953000)
setTimeout(async()=>{ 




      return driver.findElement(By.id("region_0")).sendKeys("s"); 

}, 1954000)
setTimeout(async()=>{ 




      return driver.findElement(By.id("region_0")).sendKeys("s"); 

}, 1955000)
setTimeout(async()=>{ 




      return driver.findElement(By.id("region_0")).sendKeys("s"); 

}, 1956000)
setTimeout(async()=>{ 




      return driver.findElement(By.id("region_0")).sendKeys("s"); 

}, 1957000)
setTimeout(async()=>{ 




      return driver.findElement(By.id("region_0")).sendKeys("s"); 

}, 1958000)
setTimeout(async()=>{ 




      return driver.findElement(By.tagName("body")).click(); 

}, 1959000)
setTimeout(async()=>{ 




      return driver.findElement(By.id("region_1")).click(); 

}, 1960000)
setTimeout(async()=>{ 




      return driver.findElement(By.id("region_1")).sendKeys("s"); 

}, 1961000)
setTimeout(async()=>{ 




      return driver.findElement(By.xpath("//button[@type='submit']")).click(); 

}, 1962000)
setTimeout(async()=>{ 




      return driver.findElement(By.xpath("//button[@type='submit']")).click(); 

}, 1963000)






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
