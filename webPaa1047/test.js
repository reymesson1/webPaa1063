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

    
  }, 6000);

var By = webdriver.By;

var driver = new webdriver.Builder().withCapabilities(webdriver.Capabilities.chrome()).build();

var promise = require('selenium-webdriver').promise;

driver.get('https://www.corotos.com.do/create');

driver.findElement(By.id('pid_email')).sendKeys('santiagosantosauto@gmail.com')
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
      console.log('esperar5....')
      return driver.findElement(By.id("_tealiumModalClose")).click();
    }, 27000);
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
      return driver.findElement(By.id("title")).sendKeys(dataMaster.header);
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
      return driver.findElement(By.id("metadata.make")).sendKeys("t");
    }, 59000);
    setTimeout(async() => {      
      console.log('esperar5....')
      return driver.findElement(By.id("metadata.make")).sendKeys("t");
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
      return driver.findElement(By.id("metadata.model")).sendKeys("p");
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
      console.log('successfully....')
      return driver.findElement(By.id("price")).sendKeys(36500);
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
    }, 81000);

    setTimeout(async() => {      
      console.log('esperar5....')
      return driver.findElement(By.xpath("//button[@type='submit']")).click();
    }, 90000);
    setTimeout(async() => {      
      console.log('esperar5....')
      return driver.findElement(By.xpath("//button[@type='submit']")).click();
    }, 95000);

    /*************************************************************************************
    **********************************************************
    Second ads
    **********************************************************
    *************************************************************************************/
 
   setTimeout(async() => {      
    console.log('esperar3....')
    var posts = Post.remove({},function(err){
      if(!err){console.log('removed!')}
    })

    return driver.get('https://www.corotos.com.do/create')      
  }, 100000);

    setTimeout(async() => {      
      console.log('esperar5....')
      return driver.findElement(By.id("_tealiumModalClose")).click();
    }, 101000);
    setTimeout(async() => {      
      console.log('esperar4....')
      return driver.findElement(By.xpath("//input[@type='file']")).sendKeys("C:/Users/PUBLICADOR_COROTOS1/Desktop/honda_fit_rojo_0-2.jpeg");
    }, 102000);

    setTimeout(async() => {      
      console.log('esperar5....')
      return driver.findElement(By.xpath("//button[@type='submit']")).click();
    }, 110000);
    setTimeout(async() => {      
      console.log('esperar5....')
      return driver.findElement(By.id("title")).sendKeys(dataMaster2.header);
    }, 111000);
    setTimeout(async() => {      
      console.log('esperar5....')
      return driver.findElement(By.id("description")).sendKeys(dataMaster2.description);
    }, 112000);

    setTimeout(async() => {      
      console.log('esperar5....')
      return driver.findElement(By.id("category_0")).click();
    }, 112000);
    setTimeout(async() => {      
      console.log('esperar5....')
      return driver.findElement(By.id("category_0")).sendKeys("v");
    }, 112000);
    setTimeout(async() => {      
      console.log('esperar5....')
      return driver.findElement(By.tagName("body")).click();
    }, 112000);  
    setTimeout(async() => {      
      console.log('esperar5....')
      return driver.findElement(By.id("category_1")).click();
    }, 114000);  
    setTimeout(async() => {      
      console.log('esperar5....')
      return driver.findElement(By.id("category_1")).sendKeys("c");
    }, 115000);
    setTimeout(async() => {      
      console.log('esperar5....')
      return driver.findElement(By.tagName("body")).click();
    }, 116000);    
    setTimeout(async() => {      
      console.log('esperar5....')
      return driver.findElement(By.xpath("//button[@type='submit']")).click();
    }, 117000);

    setTimeout(async() => {      
      console.log('esperar5....')
      return driver.findElement(By.id("metadata.vehicleType")).click();
    }, 118000);  
    setTimeout(async() => {      
      console.log('esperar5....')
      return driver.findElement(By.id("metadata.vehicleType")).sendKeys("s");
    }, 119000);  
    setTimeout(async() => {      
      console.log('esperar5....')
      return driver.findElement(By.tagName("body")).click();
    }, 120000);    
    setTimeout(async() => {      
      console.log('esperar5....')
      return driver.findElement(By.id("metadata.year")).sendKeys("2012");
    }, 121000);
    setTimeout(async() => {      
      console.log('esperar5....')
      return driver.findElement(By.id("metadata.mileage")).sendKeys("1000");
    }, 122000);
    setTimeout(async() => {      
      console.log('esperar5....')
      return driver.findElement(By.id("metadata.fuel")).click();
    }, 123000);
    setTimeout(async() => {      
      console.log('esperar5....')
      return driver.findElement(By.id("metadata.fuel")).sendKeys("g");
    }, 124000);
    setTimeout(async() => {      
      console.log('esperar5....')
      return driver.findElement(By.id("metadata.fuel")).sendKeys("g");
    }, 125000);
    setTimeout(async() => {      
      console.log('esperar5....')
      return driver.findElement(By.id("metadata.horsePower")).sendKeys("4");
    }, 126000);
    setTimeout(async() => {      
      console.log('esperar5....')
      return driver.findElement(By.id("metadata.transmission")).click();
    }, 127000);
    setTimeout(async() => {      
      console.log('esperar5....')
      return driver.findElement(By.id("metadata.transmission")).sendKeys("a");
    }, 128000);
    setTimeout(async() => {      
      console.log('esperar5....')
      return driver.findElement(By.tagName("body")).click();
    }, 129000);    
    setTimeout(async() => {      
      console.log('esperar5....')
      return driver.findElement(By.id("metadata.outsideColor")).click();
    }, 130000);
    setTimeout(async() => {      
      console.log('esperar5....')
      return driver.findElement(By.id("metadata.outsideColor")).sendKeys("r");
    }, 131000);
    setTimeout(async() => {      
      console.log('esperar5....')
      return driver.findElement(By.tagName("body")).click();
    }, 132000);    
    setTimeout(async() => {      
      console.log('esperar5....')
      return driver.findElement(By.id("metadata.condition")).click();
    }, 133000);
    setTimeout(async() => {      
      console.log('esperar5....')
      return driver.findElement(By.id("metadata.condition")).sendKeys("u");
    }, 134000);
    setTimeout(async() => {      
      console.log('esperar5....')
      return driver.findElement(By.tagName("body")).click();
    }, 135000);    
    setTimeout(async() => {      
      console.log('esperar5....')
      return driver.findElement(By.id("metadata.insideColor")).click();
    }, 136000);
    setTimeout(async() => {      
      console.log('esperar5....')
      return driver.findElement(By.id("metadata.insideColor")).sendKeys("n");
    }, 137000);
    setTimeout(async() => {      
      console.log('esperar5....')
      return driver.findElement(By.id("metadata.insideColor")).sendKeys("n");
    }, 138000);
    setTimeout(async() => {      
      console.log('esperar5....')
      return driver.findElement(By.tagName("body")).click();
    }, 139000);    
    setTimeout(async() => {      
      console.log('esperar5....')
      return driver.findElement(By.id("metadata.make")).click();
    }, 140000);
    setTimeout(async() => {      
      console.log('esperar5....')
      return driver.findElement(By.id("metadata.make")).sendKeys("n");
    }, 141000);
    setTimeout(async() => {      
      console.log('esperar5....')
      return driver.findElement(By.tagName("body")).click();
    }, 143000);    
    setTimeout(async() => {      
      console.log('esperar5....')
      return driver.findElement(By.id("metadata.model")).click();
    }, 144000);
    setTimeout(async() => {      
      console.log('esperar5....')
      return driver.findElement(By.id("metadata.model")).sendKeys("t");
    }, 145300);
    setTimeout(async() => {      
      console.log('esperar5....')
      return driver.findElement(By.id("metadata.model")).sendKeys("t");
    }, 145600);
    setTimeout(async() => {      
      console.log('esperar5....')
      return driver.findElement(By.id("metadata.model")).sendKeys("t");
    }, 145900);
    setTimeout(async() => {      
      console.log('esperar5....')
      return driver.findElement(By.tagName("body")).click();
    }, 146000);    
    setTimeout(async() => {      
      console.log('esperar5....')
      return driver.findElement(By.tagName("body")).click();
    }, 147000);    
    setTimeout(async() => {      
      console.log('esperar5....')
      return driver.findElement(By.xpath("//button[@type='submit']")).click();
    }, 148000);
    setTimeout(async() => {      
      console.log('successfully....')
      return driver.findElement(By.id("price")).sendKeys(41500);
    }, 149000);
    setTimeout(async() => {      
      console.log('esperar5....')
      return driver.findElement(By.id("region_0")).click();
    }, 150000);
    setTimeout(async() => {      
      console.log('esperar5....')
      return driver.findElement(By.id("region_0")).sendKeys("s");
    }, 151000);
    setTimeout(async() => {      
      console.log('esperar5....')
      return driver.findElement(By.id("region_0")).sendKeys("s");
    }, 152000);
    setTimeout(async() => {      
      console.log('esperar5....')
      return driver.findElement(By.id("region_0")).sendKeys("s");
    }, 153000);
    setTimeout(async() => {      
      console.log('esperar5....')
      return driver.findElement(By.id("region_0")).sendKeys("s");
    }, 154000);
    setTimeout(async() => {      
      console.log('esperar5....')
      return driver.findElement(By.id("region_0")).sendKeys("s");
    }, 155000);
    setTimeout(async() => {      
      console.log('esperar5....')
      return driver.findElement(By.id("region_0")).sendKeys("s");
    }, 156000);
    setTimeout(async() => {      
      console.log('esperar5....')
      return driver.findElement(By.id("region_0")).sendKeys("s");
    }, 157000);
    setTimeout(async() => {      
      console.log('esperar5....')
      return driver.findElement(By.id("region_0")).sendKeys("s");
    }, 158000);
    setTimeout(async() => {      
      console.log('esperar5....')
      return driver.findElement(By.tagName("body")).click();
    }, 159000);    
    setTimeout(async() => {      
      console.log('esperar5....')
      return driver.findElement(By.id("region_1")).click();
    }, 160000);
    setTimeout(async() => {      
      console.log('esperar5....')
      return driver.findElement(By.id("region_1")).sendKeys("s");
    }, 161000);

    setTimeout(async() => {      
      console.log('esperar5....')
      return driver.findElement(By.xpath("//button[@type='submit']")).click();
    }, 162000);
    setTimeout(async() => {      
      console.log('esperar5....')
      return driver.findElement(By.xpath("//button[@type='submit']")).click();
    }, 163000);

  //   /*************************************************************************************
  //   **********************************************************
  //   Third ads
  //   **********************************************************
  //   *************************************************************************************/
 
   setTimeout(async() => {      
    console.log('esperar3....')
    var posts = Post.remove({},function(err){
      if(!err){console.log('removed!')}
    })

    return driver.get('https://www.corotos.com.do/create')      
  }, 170000);

    setTimeout(async() => {      
      console.log('esperar5....')
      return driver.findElement(By.id("_tealiumModalClose")).click();
    }, 171000);
    setTimeout(async() => {      
      console.log('esperar4....')
      return driver.findElement(By.xpath("//input[@type='file']")).sendKeys("C:/Users/PUBLICADOR_COROTOS1/Desktop/honda_fit_rojo_0-3.jpeg");
    }, 172000);

    setTimeout(async() => {      
      console.log('esperar5....')
      return driver.findElement(By.xpath("//button[@type='submit']")).click();
    }, 173000);
    setTimeout(async() => {      
      console.log('esperar5....')
      return driver.findElement(By.id("title")).sendKeys(dataMaster3.header);
    }, 174000);
    setTimeout(async() => {      
      console.log('esperar5....')
      return driver.findElement(By.id("description")).sendKeys(dataMaster3.description);
    }, 175000);
    setTimeout(async() => {      
      console.log('esperar5....')
      return driver.findElement(By.id("category_0")).click();
    }, 176000);
    setTimeout(async() => {      
      console.log('esperar5....')
      return driver.findElement(By.id("category_0")).sendKeys("e");
    }, 177000);
    setTimeout(async() => {      
      console.log('esperar5....')
      return driver.findElement(By.tagName("body")).click();
    }, 178000);  
    setTimeout(async() => {      
      console.log('esperar5....')
      return driver.findElement(By.id("category_1")).click();
    }, 179000);  
    setTimeout(async() => {      
      console.log('esperar5....')
      return driver.findElement(By.id("category_1")).sendKeys("c");
    }, 180000);
    setTimeout(async() => {      
      console.log('esperar5....')
      return driver.findElement(By.tagName("body")).click();
    }, 181000);    
    setTimeout(async() => {      
      console.log('esperar5....')
      return driver.findElement(By.xpath("//button[@type='submit']")).click();
    }, 182000);

    setTimeout(async() => {      
      console.log('esperar5....')
      return driver.findElement(By.id("metadata.condicion")).click();
    }, 184000);  
    setTimeout(async() => {      
      console.log('esperar5....')
      return driver.findElement(By.id("metadata.condition")).sendKeys("n");
    }, 184000);  
    setTimeout(async() => {      
      console.log('esperar5....')
      return driver.findElement(By.xpath("//button[@type='submit']")).click();
    }, 185000);
    setTimeout(async() => {      
      console.log('esperar5....')
      return driver.findElement(By.id("price")).sendKeys("5350");
    }, 187000);
    setTimeout(async() => {      
      console.log('esperar5....')
      return driver.findElement(By.tagName("body")).click();
    }, 188000);    
    setTimeout(async() => {      
      console.log('esperar5....')
      return driver.findElement(By.id("region_0")).click();
    }, 189000);
    setTimeout(async() => {      
      console.log('esperar5....')
      return driver.findElement(By.id("region_0")).sendKeys("s");
    }, 190000);
    setTimeout(async() => {      
      console.log('esperar5....')
      return driver.findElement(By.id("region_0")).sendKeys("s");
    }, 191000);
    setTimeout(async() => {      
      console.log('esperar5....')
      return driver.findElement(By.id("region_0")).sendKeys("s");
    }, 192000);
    setTimeout(async() => {      
      console.log('esperar5....')
      return driver.findElement(By.id("region_0")).sendKeys("s");
    }, 193000);
    setTimeout(async() => {      
      console.log('esperar5....')
      return driver.findElement(By.id("region_0")).sendKeys("s");
    }, 194000);
    setTimeout(async() => {      
      console.log('esperar5....')
      return driver.findElement(By.id("region_0")).sendKeys("s");
    }, 195000);
    setTimeout(async() => {      
      console.log('esperar5....')
      return driver.findElement(By.id("region_0")).sendKeys("s");
    }, 196000);
    setTimeout(async() => {      
      console.log('esperar5....')
      return driver.findElement(By.id("region_0")).sendKeys("s");
    }, 197000);
    setTimeout(async() => {      
      console.log('esperar5....')
      return driver.findElement(By.tagName("body")).click();
    }, 198000);    
    setTimeout(async() => {      
      console.log('esperar5....')
      return driver.findElement(By.id("region_1")).click();
    }, 199000);
    setTimeout(async() => {      
      console.log('esperar5....')
      return driver.findElement(By.id("region_1")).sendKeys("s");
    }, 200000);

    setTimeout(async() => {      
      console.log('esperar5....')
      return driver.findElement(By.xpath("//button[@type='submit']")).click();
    }, 201000);
    setTimeout(async() => {      
      console.log('esperar5....')
      return driver.findElement(By.xpath("//button[@type='submit']")).click();
    }, 202000);




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