import { Injectable } from "@angular/core";
import { generate } from "rxjs/internal/observable/generate";

@Injectable()
export class MasterApart{ 
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
      '      return driver.get("https://www.corotos.com.do/create")      ',
      '      return driver.findElement(By.id("_tealiumModalClose")).click();',
      '      return driver.findElement(By.xpath("//input[@type=\'file\']")).sendKeys("C:/Users/PUBLICADOR_COROTOS1/Desktop/'+this.imageImport+'");',
      '      return driver.findElement(By.xpath("//input[@type=\'file\']")).sendKeys("C:/Users/PUBLICADOR_COROTOS1/Desktop/'+this.image2Import+'");',
      '      return driver.findElement(By.xpath("//button[@type=\'submit\']")).click();',
      '      return driver.findElement(By.id("title")).sendKeys(dataMaster.header);',
      '      return driver.findElement(By.id("description")).sendKeys(dataMaster.description);',
      '      return driver.findElement(By.id("category_0")).click();',
      '      return driver.findElement(By.id("category_0")).sendKeys("i");',
      '      return driver.findElement(By.id("category_0")).sendKeys("i");',
      '      return driver.findElement(By.tagName("body")).click();',
      '      return driver.findElement(By.id("category_1")).click();',
      '      return driver.findElement(By.id("category_1")).sendKeys("a");',
      '      return driver.findElement(By.tagName("body")).click();',
      '      return driver.findElement(By.xpath("//button[@type=\'submit\']")).click();',
      '      return driver.findElement(By.id("metadata.rooms")).sendKeys("3");',
      '      return driver.findElement(By.id("metadata.bathrooms")).sendKeys("2");',
      '      return driver.findElement(By.id("metadata.constructionArea")).sendKeys("110");',
      '      return driver.findElement(By.id("metadata.buildingCondition")).click();',
      '      return driver.findElement(By.id("metadata.buildingCondition")).sendKeys("n");',
      '      return driver.findElement(By.id("metadata.furnishedType")).click();',
      '      return driver.findElement(By.id("metadata.furnishedType")).sendKeys("s");',
      '      return driver.findElement(By.xpath("//button[@type=\'submit\']")).click();',
      '      return driver.findElement(By.id("price")).sendKeys('+this.priceImport+');',
      '      return driver.findElement(By.id("region_0")).sendKeys("s");',
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
      '      return driver.findElement(By.tagName("body")).click();',
      '      return driver.findElement(By.xpath("//button[@type=\'submit\']")).click();',
      
    ]        
    var generated = ""    
    var num = 0  
    for(var i=parseInt(this.fromImport),j=0;j<4;i+=4000,j++){
      generated += " setTimeout(async()=>{ \n\n\n\n\n \t " + complement[j] + " \n\n  }, " + i + ")\n";
      num=i
    }
    for(var i=num+4000,j=4;j<complement.length;i+=1000,j++){
      generated += " setTimeout(async()=>{ \n\n\n\n\n \t  " + complement[j] + " \n\n  }, " + i + ")\n";
    }

    return generated

  }

}