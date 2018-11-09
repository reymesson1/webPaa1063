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
    }, 185000);  
    setTimeout(async() => {      
      console.log('esperar5....')
      return driver.findElement(By.xpath("//button[@type='submit']")).click();
    }, 186000);
    setTimeout(async() => {      
      console.log('esperar5....')
      return driver.findElement(By.id("price")).sendKeys("5350");
    }, 188000);
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


    /**********************************
     * 
     * 
     * 
     * Fifth ads
     */

    setTimeout(async()=>{ 




      return driver.get("https://www.corotos.com.do/create") 

}, 210000)
setTimeout(async()=>{ 




      return driver.findElement(By.id("_tealiumModalClose")).click(); 

}, 214000)
setTimeout(async()=>{ 

    return driver.findElement(By.xpath("//input[@type='file']")).sendKeys("C:/Users/PUBLICADOR_COROTOS1/Desktop/honda_fit_rojo_0-4.jpg"); 

 }, 220000)

setTimeout(async()=>{ 




      return driver.findElement(By.xpath("//button[@type='submit']")).click(); 

}, 222000)
setTimeout(async()=>{ 




      return driver.findElement(By.id("title")).sendKeys(dataMaster4.header); 

}, 226000)
setTimeout(async()=>{ 




      return driver.findElement(By.id("description")).sendKeys(dataMaster4.description); 

}, 227000)
setTimeout(async()=>{ 




      return driver.findElement(By.id("category_0")).click(); 

}, 228000)
setTimeout(async()=>{ 




      return driver.findElement(By.id("category_0")).sendKeys("v"); 

}, 229000)
setTimeout(async()=>{ 




      return driver.findElement(By.tagName("body")).click(); 

}, 230000)
setTimeout(async()=>{ 




      return driver.findElement(By.id("category_1")).click(); 

}, 231000)
setTimeout(async()=>{ 




      return driver.findElement(By.id("category_1")).sendKeys("c"); 

}, 232000)
setTimeout(async()=>{ 




      return driver.findElement(By.tagName("body")).click(); 

}, 233000)
setTimeout(async()=>{ 




      return driver.findElement(By.xpath("//button[@type='submit']")).click(); 

}, 234000)
setTimeout(async()=>{ 




      return driver.findElement(By.id("metadata.vehicleType")).click(); 

}, 235000)
setTimeout(async()=>{ 




      return driver.findElement(By.id("metadata.vehicleType")).sendKeys("s"); 

}, 236000)
setTimeout(async()=>{ 




      return driver.findElement(By.tagName("body")).click(); 

}, 237000)
setTimeout(async()=>{ 




      return driver.findElement(By.id("metadata.year")).sendKeys("2012"); 

}, 238000)
setTimeout(async()=>{ 




      return driver.findElement(By.id("metadata.mileage")).sendKeys("1000"); 

}, 239000)
setTimeout(async()=>{ 




      return driver.findElement(By.id("metadata.fuel")).click(); 

}, 240000)
setTimeout(async()=>{ 




      return driver.findElement(By.id("metadata.fuel")).sendKeys("g"); 

}, 241000)
setTimeout(async()=>{ 




      return driver.findElement(By.id("metadata.fuel")).sendKeys("g"); 

}, 242000)
setTimeout(async()=>{ 




      return driver.findElement(By.id("metadata.horsePower")).sendKeys("4"); 

}, 243000)
setTimeout(async()=>{ 




      return driver.findElement(By.id("metadata.transmission")).click(); 

}, 244000)
setTimeout(async()=>{ 




      return driver.findElement(By.id("metadata.transmission")).sendKeys("a"); 

}, 245000)
setTimeout(async()=>{ 




      return driver.findElement(By.tagName("body")).click(); 

}, 246000)
setTimeout(async()=>{ 




      return driver.findElement(By.id("metadata.outsideColor")).click(); 

}, 247000)
setTimeout(async()=>{ 




      return driver.findElement(By.id("metadata.outsideColor")).sendKeys("r"); 

}, 248000)
setTimeout(async()=>{ 




      return driver.findElement(By.tagName("body")).click(); 

}, 249000)
setTimeout(async()=>{ 




      return driver.findElement(By.id("metadata.condition")).click(); 

}, 250000)
setTimeout(async()=>{ 




      return driver.findElement(By.id("metadata.condition")).sendKeys("u"); 

}, 251000)
setTimeout(async()=>{ 




      return driver.findElement(By.tagName("body")).click(); 

}, 252000)
setTimeout(async()=>{ 




      return driver.findElement(By.id("metadata.insideColor")).click(); 

}, 253000)
setTimeout(async()=>{ 




      return driver.findElement(By.id("metadata.insideColor")).sendKeys("n"); 

}, 254000)
setTimeout(async()=>{ 




      return driver.findElement(By.id("metadata.insideColor")).sendKeys("n"); 

}, 255000)
setTimeout(async()=>{ 




      return driver.findElement(By.tagName("body")).click(); 

}, 256000)
setTimeout(async()=>{ 




      return driver.findElement(By.id("metadata.make")).click(); 

}, 257000)
setTimeout(async()=>{ 




      return driver.findElement(By.id("metadata.make")).sendKeys("t"); 

}, 258000)
setTimeout(async()=>{ 




      return driver.findElement(By.id("metadata.make")).sendKeys("t"); 

}, 259000)
setTimeout(async()=>{ 




      return driver.findElement(By.tagName("body")).click(); 

}, 260000)
setTimeout(async()=>{ 




      return driver.findElement(By.id("metadata.model")).click(); 

}, 261000)
setTimeout(async()=>{ 




      return driver.findElement(By.id("metadata.model")).sendKeys("p"); 

}, 262000)
setTimeout(async()=>{ 




      return driver.findElement(By.tagName("body")).click(); 

}, 263000)
setTimeout(async()=>{ 




      return driver.findElement(By.tagName("body")).click(); 

}, 264000)
setTimeout(async()=>{ 




      return driver.findElement(By.xpath("//button[@type='submit']")).click(); 

}, 265000)
setTimeout(async()=>{ 




      return driver.findElement(By.id("price")).sendKeys(41500); 

}, 266000)
setTimeout(async()=>{ 




      return driver.findElement(By.id("region_0")).click(); 

}, 267000)
setTimeout(async()=>{ 




      return driver.findElement(By.id("region_0")).sendKeys("s"); 

}, 268000)
setTimeout(async()=>{ 




      return driver.findElement(By.id("region_0")).sendKeys("s"); 

}, 269000)
setTimeout(async()=>{ 




      return driver.findElement(By.id("region_0")).sendKeys("s"); 

}, 270000)
setTimeout(async()=>{ 




      return driver.findElement(By.id("region_0")).sendKeys("s"); 

}, 271000)
setTimeout(async()=>{ 




      return driver.findElement(By.id("region_0")).sendKeys("s"); 

}, 272000)
setTimeout(async()=>{ 




      return driver.findElement(By.id("region_0")).sendKeys("s"); 

}, 273000)
setTimeout(async()=>{ 




      return driver.findElement(By.id("region_0")).sendKeys("s"); 

}, 274000)
setTimeout(async()=>{ 




      return driver.findElement(By.id("region_0")).sendKeys("s"); 

}, 275000)
setTimeout(async()=>{ 




      return driver.findElement(By.tagName("body")).click(); 

}, 276000)
setTimeout(async()=>{ 




      return driver.findElement(By.id("region_1")).click(); 

}, 277000)
setTimeout(async()=>{ 




      return driver.findElement(By.id("region_1")).sendKeys("s"); 

}, 278000)
setTimeout(async()=>{ 




      return driver.findElement(By.xpath("//button[@type='submit']")).click(); 

}, 279000)
setTimeout(async()=>{ 




      return driver.findElement(By.xpath("//button[@type='submit']")).click(); 

}, 280000)

/******************************
 * 
 * 
 * 
 * fourth ads
 */

setTimeout(async()=>{ 




  return driver.get("https://www.corotos.com.do/create") 

}, 290000)
setTimeout(async()=>{ 




  return driver.findElement(By.id("_tealiumModalClose")).click(); 

}, 294000)
setTimeout(async()=>{ 




  return driver.findElement(By.xpath("//input[@type='file']")).sendKeys("C:/Users/PUBLICADOR_COROTOS1/Desktop/honda_fit_rojo_3.jpg"); 

}, 298000)
setTimeout(async()=>{ 




  return driver.findElement(By.xpath("//button[@type='submit']")).click(); 

}, 302000)
setTimeout(async()=>{ 




  return driver.findElement(By.id("title")).sendKeys(dataMaster5.header); 

}, 306000)
setTimeout(async()=>{ 




  return driver.findElement(By.id("description")).sendKeys(dataMaster5.description); 

}, 307000)
setTimeout(async()=>{ 




  return driver.findElement(By.id("category_0")).click(); 

}, 308000)
setTimeout(async()=>{ 




  return driver.findElement(By.id("category_0")).sendKeys("v"); 

}, 309000)
setTimeout(async()=>{ 




  return driver.findElement(By.tagName("body")).click(); 

}, 310000)
setTimeout(async()=>{ 




  return driver.findElement(By.id("category_1")).click(); 

}, 311000)
setTimeout(async()=>{ 




  return driver.findElement(By.id("category_1")).sendKeys("c"); 

}, 312000)
setTimeout(async()=>{ 




  return driver.findElement(By.tagName("body")).click(); 

}, 313000)
setTimeout(async()=>{ 




  return driver.findElement(By.xpath("//button[@type='submit']")).click(); 

}, 314000)
setTimeout(async()=>{ 




  return driver.findElement(By.id("metadata.vehicleType")).click(); 

}, 315000)
setTimeout(async()=>{ 




  return driver.findElement(By.id("metadata.vehicleType")).sendKeys("s"); 

}, 316000)
setTimeout(async()=>{ 




  return driver.findElement(By.tagName("body")).click(); 

}, 317000)
setTimeout(async()=>{ 




  return driver.findElement(By.id("metadata.year")).sendKeys("2012"); 

}, 318000)
setTimeout(async()=>{ 




  return driver.findElement(By.id("metadata.mileage")).sendKeys("1000"); 

}, 319000)
setTimeout(async()=>{ 




  return driver.findElement(By.id("metadata.fuel")).click(); 

}, 320000)
setTimeout(async()=>{ 




  return driver.findElement(By.id("metadata.fuel")).sendKeys("g"); 

}, 321000)
setTimeout(async()=>{ 




  return driver.findElement(By.id("metadata.fuel")).sendKeys("g"); 

}, 322000)
setTimeout(async()=>{ 




  return driver.findElement(By.id("metadata.horsePower")).sendKeys("4"); 

}, 323000)
setTimeout(async()=>{ 




  return driver.findElement(By.id("metadata.transmission")).click(); 

}, 324000)
setTimeout(async()=>{ 




  return driver.findElement(By.id("metadata.transmission")).sendKeys("a"); 

}, 325000)
setTimeout(async()=>{ 




  return driver.findElement(By.tagName("body")).click(); 

}, 326000)
setTimeout(async()=>{ 




  return driver.findElement(By.id("metadata.outsideColor")).click(); 

}, 327000)
setTimeout(async()=>{ 




  return driver.findElement(By.id("metadata.outsideColor")).sendKeys("r"); 

}, 328000)
setTimeout(async()=>{ 




  return driver.findElement(By.tagName("body")).click(); 

}, 329000)
setTimeout(async()=>{ 




  return driver.findElement(By.id("metadata.condition")).click(); 

}, 330000)
setTimeout(async()=>{ 




  return driver.findElement(By.id("metadata.condition")).sendKeys("u"); 

}, 331000)
setTimeout(async()=>{ 




  return driver.findElement(By.tagName("body")).click(); 

}, 332000)
setTimeout(async()=>{ 




  return driver.findElement(By.id("metadata.insideColor")).click(); 

}, 333000)
setTimeout(async()=>{ 




  return driver.findElement(By.id("metadata.insideColor")).sendKeys("n"); 

}, 334000)
setTimeout(async()=>{ 




  return driver.findElement(By.id("metadata.insideColor")).sendKeys("n"); 

}, 335000)
setTimeout(async()=>{ 




  return driver.findElement(By.tagName("body")).click(); 

}, 336000)
setTimeout(async()=>{ 




  return driver.findElement(By.id("metadata.make")).click(); 

}, 337000)
setTimeout(async()=>{ 




  return driver.findElement(By.id("metadata.make")).sendKeys("t"); 

}, 338000)
setTimeout(async()=>{ 




  return driver.findElement(By.id("metadata.make")).sendKeys("t"); 

}, 339000)
setTimeout(async()=>{ 




  return driver.findElement(By.tagName("body")).click(); 

}, 340000)
setTimeout(async()=>{ 




  return driver.findElement(By.id("metadata.model")).click(); 

}, 341000)
setTimeout(async()=>{ 




  return driver.findElement(By.id("metadata.model")).sendKeys("p"); 

}, 342000)
setTimeout(async()=>{ 




  return driver.findElement(By.tagName("body")).click(); 

}, 343000)
setTimeout(async()=>{ 




  return driver.findElement(By.tagName("body")).click(); 

}, 344000)
setTimeout(async()=>{ 




  return driver.findElement(By.xpath("//button[@type='submit']")).click(); 

}, 345000)
setTimeout(async()=>{ 




  return driver.findElement(By.id("price")).sendKeys(67500); 

}, 346000)
setTimeout(async()=>{ 




  return driver.findElement(By.id("region_0")).click(); 

}, 347000)
setTimeout(async()=>{ 




  return driver.findElement(By.id("region_0")).sendKeys("s"); 

}, 348000)
setTimeout(async()=>{ 




  return driver.findElement(By.id("region_0")).sendKeys("s"); 

}, 349000)
setTimeout(async()=>{ 




  return driver.findElement(By.id("region_0")).sendKeys("s"); 

}, 350000)
setTimeout(async()=>{ 




  return driver.findElement(By.id("region_0")).sendKeys("s"); 

}, 351000)
setTimeout(async()=>{ 




  return driver.findElement(By.id("region_0")).sendKeys("s"); 

}, 352000)
setTimeout(async()=>{ 




  return driver.findElement(By.id("region_0")).sendKeys("s"); 

}, 353000)
setTimeout(async()=>{ 




  return driver.findElement(By.id("region_0")).sendKeys("s"); 

}, 354000)
setTimeout(async()=>{ 




  return driver.findElement(By.id("region_0")).sendKeys("s"); 

}, 355000)
setTimeout(async()=>{ 




  return driver.findElement(By.tagName("body")).click(); 

}, 356000)
setTimeout(async()=>{ 




  return driver.findElement(By.id("region_1")).click(); 

}, 357000)
setTimeout(async()=>{ 




  return driver.findElement(By.id("region_1")).sendKeys("s"); 

}, 358000)
setTimeout(async()=>{ 




  return driver.findElement(By.xpath("//button[@type='submit']")).click(); 

}, 359000)
setTimeout(async()=>{ 




  return driver.findElement(By.xpath("//button[@type='submit']")).click(); 

}, 360000)


/**************************************************************************
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

}, 370000)
setTimeout(async()=>{ 




  return driver.findElement(By.id("_tealiumModalClose")).click(); 

}, 374000)
setTimeout(async()=>{ 




  return driver.findElement(By.xpath("//input[@type='file']")).sendKeys("C:/Users/PUBLICADOR_COROTOS1/Desktop/honda_fit_rojo_3-1.jpeg"); 

}, 378000)
setTimeout(async()=>{ 




  return driver.findElement(By.xpath("//button[@type='submit']")).click(); 

}, 382000)
setTimeout(async()=>{ 




  return driver.findElement(By.id("title")).sendKeys(dataMaster5.header); 

}, 386000)
setTimeout(async()=>{ 




  return driver.findElement(By.id("description")).sendKeys(dataMaster5.description); 

}, 387000)
setTimeout(async()=>{ 




  return driver.findElement(By.id("category_0")).click(); 

}, 388000)
setTimeout(async()=>{ 




  return driver.findElement(By.id("category_0")).sendKeys("v"); 

}, 389000)
setTimeout(async()=>{ 




  return driver.findElement(By.tagName("body")).click(); 

}, 390000)
setTimeout(async()=>{ 




  return driver.findElement(By.id("category_1")).click(); 

}, 391000)
setTimeout(async()=>{ 




  return driver.findElement(By.id("category_1")).sendKeys("c"); 

}, 392000)
setTimeout(async()=>{ 




  return driver.findElement(By.tagName("body")).click(); 

}, 393000)
setTimeout(async()=>{ 




  return driver.findElement(By.xpath("//button[@type='submit']")).click(); 

}, 394000)
setTimeout(async()=>{ 




  return driver.findElement(By.id("metadata.vehicleType")).click(); 

}, 395000)
setTimeout(async()=>{ 




  return driver.findElement(By.id("metadata.vehicleType")).sendKeys("s"); 

}, 396000)
setTimeout(async()=>{ 




  return driver.findElement(By.tagName("body")).click(); 

}, 397000)
setTimeout(async()=>{ 




  return driver.findElement(By.id("metadata.year")).sendKeys("2012"); 

}, 398000)
setTimeout(async()=>{ 




  return driver.findElement(By.id("metadata.mileage")).sendKeys("1000"); 

}, 399000)
setTimeout(async()=>{ 




  return driver.findElement(By.id("metadata.fuel")).click(); 

}, 400000)
setTimeout(async()=>{ 




  return driver.findElement(By.id("metadata.fuel")).sendKeys("g"); 

}, 401000)
setTimeout(async()=>{ 




  return driver.findElement(By.id("metadata.fuel")).sendKeys("g"); 

}, 402000)
setTimeout(async()=>{ 




  return driver.findElement(By.id("metadata.horsePower")).sendKeys("4"); 

}, 403000)
setTimeout(async()=>{ 




  return driver.findElement(By.id("metadata.transmission")).click(); 

}, 404000)
setTimeout(async()=>{ 




  return driver.findElement(By.id("metadata.transmission")).sendKeys("a"); 

}, 405000)
setTimeout(async()=>{ 




  return driver.findElement(By.tagName("body")).click(); 

}, 406000)
setTimeout(async()=>{ 




  return driver.findElement(By.id("metadata.outsideColor")).click(); 

}, 407000)
setTimeout(async()=>{ 




  return driver.findElement(By.id("metadata.outsideColor")).sendKeys("r"); 

}, 408000)
setTimeout(async()=>{ 




  return driver.findElement(By.tagName("body")).click(); 

}, 409000)
setTimeout(async()=>{ 




  return driver.findElement(By.id("metadata.condition")).click(); 

}, 410000)
setTimeout(async()=>{ 




  return driver.findElement(By.id("metadata.condition")).sendKeys("u"); 

}, 411000)
setTimeout(async()=>{ 




  return driver.findElement(By.tagName("body")).click(); 

}, 412000)
setTimeout(async()=>{ 




  return driver.findElement(By.id("metadata.insideColor")).click(); 

}, 413000)
setTimeout(async()=>{ 




  return driver.findElement(By.id("metadata.insideColor")).sendKeys("n"); 

}, 414000)
setTimeout(async()=>{ 




  return driver.findElement(By.id("metadata.insideColor")).sendKeys("n"); 

}, 415000)
setTimeout(async()=>{ 




  return driver.findElement(By.tagName("body")).click(); 

}, 416000)
setTimeout(async()=>{ 




  return driver.findElement(By.id("metadata.make")).click(); 

}, 417000)
setTimeout(async()=>{ 




  return driver.findElement(By.id("metadata.make")).sendKeys("t"); 

}, 418000)
setTimeout(async()=>{ 




  return driver.findElement(By.id("metadata.make")).sendKeys("t"); 

}, 419000)
setTimeout(async()=>{ 




  return driver.findElement(By.tagName("body")).click(); 

}, 420000)
setTimeout(async()=>{ 




  return driver.findElement(By.id("metadata.model")).click(); 

}, 421000)
setTimeout(async()=>{ 




  return driver.findElement(By.id("metadata.model")).sendKeys("p"); 

}, 422000)
setTimeout(async()=>{ 




  return driver.findElement(By.tagName("body")).click(); 

}, 423000)
setTimeout(async()=>{ 




  return driver.findElement(By.tagName("body")).click(); 

}, 424000)
setTimeout(async()=>{ 




  return driver.findElement(By.xpath("//button[@type='submit']")).click(); 

}, 425000)
setTimeout(async()=>{ 




  return driver.findElement(By.id("price")).sendKeys(61000); 

}, 426000)
setTimeout(async()=>{ 




  return driver.findElement(By.id("region_0")).click(); 

}, 427000)
setTimeout(async()=>{ 




  return driver.findElement(By.id("region_0")).sendKeys("s"); 

}, 428000)
setTimeout(async()=>{ 




  return driver.findElement(By.id("region_0")).sendKeys("s"); 

}, 429000)
setTimeout(async()=>{ 




  return driver.findElement(By.id("region_0")).sendKeys("s"); 

}, 430000)
setTimeout(async()=>{ 




  return driver.findElement(By.id("region_0")).sendKeys("s"); 

}, 431000)
setTimeout(async()=>{ 




  return driver.findElement(By.id("region_0")).sendKeys("s"); 

}, 432000)
setTimeout(async()=>{ 




  return driver.findElement(By.id("region_0")).sendKeys("s"); 

}, 433000)
setTimeout(async()=>{ 




  return driver.findElement(By.id("region_0")).sendKeys("s"); 

}, 434000)
setTimeout(async()=>{ 




  return driver.findElement(By.id("region_0")).sendKeys("s"); 

}, 435000)
setTimeout(async()=>{ 




  return driver.findElement(By.tagName("body")).click(); 

}, 436000)
setTimeout(async()=>{ 




  return driver.findElement(By.id("region_1")).click(); 

}, 437000)
setTimeout(async()=>{ 




  return driver.findElement(By.id("region_1")).sendKeys("s"); 

}, 438000)
setTimeout(async()=>{ 




  return driver.findElement(By.xpath("//button[@type='submit']")).click(); 

}, 439000)
setTimeout(async()=>{ 




  return driver.findElement(By.xpath("//button[@type='submit']")).click(); 

}, 440000)





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