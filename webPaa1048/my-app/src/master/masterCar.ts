import { Injectable } from "@angular/core";

@Injectable()
export class MasterCar{ 
  fromImport 
  priceImport 
  imageImport 
  image2Import 
  constructor(public from: string, public price: number, public image: string, public image2: string ){
    this.fromImport = from
    this.priceImport = price
    this.imageImport = image
    this.image2Import = image2
  }
  generate(){

    var complement = [
      '      return driver.get("https://www.corotos.com.do/create")',
      '      return driver.findElement(By.id("_tealiumModalClose")).click();',
      '      return driver.findElement(By.xpath("//input[@type=\'file\']")).sendKeys("C:/Users/PUBLICADOR_COROTOS1/Desktop/'+this.imageImport+'");',
      '      return driver.findElement(By.xpath("//input[@type=\'file\']")).sendKeys("C:/Users/PUBLICADOR_COROTOS1/Desktop/'+this.image2Import+'");',
      '      return driver.findElement(By.xpath("//button[@type=\'submit\']")).click();',
      '      return driver.findElement(By.id("title")).sendKeys(dataMaster.header);',
      '      return driver.findElement(By.id("description")).sendKeys(dataMaster.description);',
      '      return driver.findElement(By.id("category_0")).click();',
      '      return driver.findElement(By.id("category_0")).sendKeys("v");',
      '      return driver.findElement(By.tagName("body")).click();',
      '      return driver.findElement(By.id("category_1")).click();',
      '      return driver.findElement(By.id("category_1")).sendKeys("c");',
      '      return driver.findElement(By.tagName("body")).click();',
      '      return driver.findElement(By.xpath("//button[@type=\'submit\']")).click();',
      '      return driver.findElement(By.id("metadata.vehicleType")).click();',
      '      return driver.findElement(By.id("metadata.vehicleType")).sendKeys("s");',
      '      return driver.findElement(By.tagName("body")).click();',
      '      return driver.findElement(By.id("metadata.year")).sendKeys("2012");',
      '      return driver.findElement(By.id("metadata.mileage")).sendKeys("1000");',
      '      return driver.findElement(By.id("metadata.fuel")).click();',
      '      return driver.findElement(By.id("metadata.fuel")).sendKeys("g");',
      '      return driver.findElement(By.id("metadata.fuel")).sendKeys("g");',
      '      return driver.findElement(By.id("metadata.horsePower")).sendKeys("4");',
      '      return driver.findElement(By.id("metadata.transmission")).click();',
      '      return driver.findElement(By.id("metadata.transmission")).sendKeys("a");',
      '      return driver.findElement(By.tagName("body")).click();',
      '      return driver.findElement(By.id("metadata.outsideColor")).click();',
      '      return driver.findElement(By.id("metadata.outsideColor")).sendKeys("r");',
      '      return driver.findElement(By.tagName("body")).click();',
      '      return driver.findElement(By.id("metadata.condition")).click();',
      '      return driver.findElement(By.id("metadata.condition")).sendKeys("u");',
      '      return driver.findElement(By.tagName("body")).click();',
      '      return driver.findElement(By.id("metadata.insideColor")).click();',
      '      return driver.findElement(By.id("metadata.insideColor")).sendKeys("n");',
      '      return driver.findElement(By.id("metadata.insideColor")).sendKeys("n");',
      '      return driver.findElement(By.tagName("body")).click();',
      '      return driver.findElement(By.id("metadata.make")).click();',
      '      return driver.findElement(By.id("metadata.make")).sendKeys("t");',
      '      return driver.findElement(By.id("metadata.make")).sendKeys("t");',
      '      return driver.findElement(By.tagName("body")).click();',
      '      return driver.findElement(By.id("metadata.model")).click();',
      '      return driver.findElement(By.id("metadata.model")).sendKeys("p");',
      '      return driver.findElement(By.tagName("body")).click();',
      '      return driver.findElement(By.tagName("body")).click();',
      '      return driver.findElement(By.xpath("//button[@type=\'submit\']")).click();',
      '      return driver.findElement(By.id("price")).sendKeys('+this.price+');',
      '      return driver.findElement(By.id("region_0")).click();',
      '      return driver.findElement(By.id("region_0")).sendKeys("s");',
      '      return driver.findElement(By.id("region_0")).sendKeys("s");',
      '      return driver.findElement(By.id("region_0")).sendKeys("s");',
      '      return driver.findElement(By.id("region_0")).sendKeys("s");',
      '      return driver.findElement(By.id("region_0")).sendKeys("s");',
      '      return driver.findElement(By.id("region_0")).sendKeys("s");',
      '      return driver.findElement(By.id("region_0")).sendKeys("s");',
      '      return driver.findElement(By.id("region_0")).sendKeys("s");',
      '      return driver.findElement(By.tagName("body")).click();',
      '      return driver.findElement(By.id("region_1")).click();',
      '      return driver.findElement(By.id("region_1")).sendKeys("s");',
      '      return driver.findElement(By.xpath("//button[@type=\'submit\']")).click();',
      '      return driver.findElement(By.xpath("//button[@type=\'submit\']")).click();',
      
    ]                
    var generated = ""    
    var num = 0  
    for(var i=parseInt(this.fromImport),j=0;j<4;i+=4000,j++){
      generated += " setTimeout(async()=>{ \n\n\n\n\n \t " + complement[j] + " \n\n  }, " + i + ")\n";
      num=i
    }
    for(var i=num+4000,j=4;j<complement.length;i+=1000,j++){
      generated += " setTimeout(async()=>{ \n\n\n\n\n \t " + complement[j] + " \n\n  }, " + i + ")\n";
    }

    return generated

  }
}