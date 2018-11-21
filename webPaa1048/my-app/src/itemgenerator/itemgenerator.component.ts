import {Component, Inject, OnInit, ViewChild} from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';
import { RestSourceData } from 'src/model/rest.datasource';
import {MatSort, MatPaginator, MatTableDataSource} from '@angular/material';
import {Sort} from '@angular/material';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import { Master } from "../model/master";
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
let global
@Component({
  selector: 'itemgenerator',
  templateUrl: './itemgenerator.component.html',
  styleUrls: ['./itemgenerator.component.scss']
})
export class ItemGeneratorComponent {

  fieldData : any = {}  

  constructor(public data: RestSourceData){}

  ngOnInit(){
    this.data.getMaster();
  }

  generate(){
    var from = 25000
    var generated = ""
    
    for(var x=0,a=1;x<this.data.master.length;x++,a++){
    //  console.log(this.data.master[x].nameImage[0]);

    generated += " \n"
    generated += "/******************************************************************************************************************************************************************************************************************************************************** \n"
    generated += "* \n"
    generated += "* \n"
    generated += "* "+this.data.master[x].header+" \n" 
    generated += "* \n"
    generated += "* \n"
    generated += "*********************************************************************************************************************************************************************************************************************************************************/"
    generated += " \n"
    


    if(this.data.master[x].category2=="Carro"){  var complement = [
        '      return driver.get("https://www.corotos.com.do/create")',
        '      return driver.findElement(By.id("_tealiumModalClose")).click();',
        '      return driver.findElement(By.xpath("//input[@type=\'file\']")).sendKeys("C:/Users/PUBLICADOR_COROTOS1/Desktop/anuncio/'+this.data.master[x].nameImage[0]+'");',
        '      return driver.findElement(By.xpath("//input[@type=\'file\']")).sendKeys("C:/Users/PUBLICADOR_COROTOS1/Desktop/anuncio/'+this.data.master[x].nameImage[1]+'");',
        '      return driver.findElement(By.xpath("//button[@type=\'submit\']")).click();',
        '      return driver.findElement(By.id("title")).sendKeys(dataMaster'+a+'.header);',
        '      return driver.findElement(By.id("description")).sendKeys(dataMaster'+a+'.description);',
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
        '      return driver.findElement(By.id("price")).sendKeys('+this.data.master[x].price+');',
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
        
      ] }else if(this.data.master[x].category2=="Jeepeta"){
        var complement = [
          '      return driver.get("https://www.corotos.com.do/create")',
          '      return driver.findElement(By.id("_tealiumModalClose")).click();',
          '      return driver.findElement(By.xpath("//input[@type=\'file\']")).sendKeys("C:/Users/PUBLICADOR_COROTOS1/Desktop/anuncio/'+this.data.master[x].nameImage[0]+'");',
          '      return driver.findElement(By.xpath("//input[@type=\'file\']")).sendKeys("C:/Users/PUBLICADOR_COROTOS1/Desktop/anuncio/'+this.data.master[x].nameImage[1]+'");',
          '      return driver.findElement(By.xpath("//button[@type=\'submit\']")).click();',
          '      return driver.findElement(By.id("title")).sendKeys(dataMaster'+a+'.header);',
          '      return driver.findElement(By.id("description")).sendKeys(dataMaster'+a+'.description);',
          '      return driver.findElement(By.id("category_0")).click();',
          '      return driver.findElement(By.id("category_0")).sendKeys("v");',
          '      return driver.findElement(By.tagName("body")).click();',
          '      return driver.findElement(By.id("category_1")).click();',
          '      return driver.findElement(By.id("category_1")).sendKeys("j");',
          '      return driver.findElement(By.tagName("body")).click();',
          '      return driver.findElement(By.xpath("//button[@type=\'submit\']")).click();',
          '      return driver.findElement(By.id("metadata.year")).sendKeys("2013");',
          '      return driver.findElement(By.id("metadata.mileage")).sendKeys("1000");',
          '      return driver.findElement(By.id("metadata.fuel")).click();',
          '      return driver.findElement(By.id("metadata.fuel")).sendKeys("g");',
          '      return driver.findElement(By.id("metadata.fuel")).sendKeys("g");',
          '      return driver.findElement(By.id("metadata.transmission")).click();',
          '      return driver.findElement(By.id("metadata.transmission")).sendKeys("a");',
          '      return driver.findElement(By.tagName("body")).click();',
          '      return driver.findElement(By.tagName("body")).click();',
          '      return driver.findElement(By.id("metadata.outsideColor")).click();',
          '      return driver.findElement(By.id("metadata.outsideColor")).sendKeys("r");',
          '      return driver.findElement(By.tagName("body")).click();',
          '      return driver.findElement(By.id("metadata.insideColor")).click();',
          '      return driver.findElement(By.id("metadata.insideColor")).sendKeys("n");',
          '      return driver.findElement(By.id("metadata.insideColor")).sendKeys("n");',
          '      return driver.findElement(By.tagName("body")).click();',
          '      return driver.findElement(By.id("metadata.horsePower")).sendKeys("4");',
          '      return driver.findElement(By.tagName("body")).click();',
          '      return driver.findElement(By.id("metadata.condition")).click();',
          '      return driver.findElement(By.id("metadata.condition")).sendKeys("u");',
          '      return driver.findElement(By.tagName("body")).click();',
          '      return driver.findElement(By.tagName("body")).click();',
          '      return driver.findElement(By.tagName("body")).click();',
          '      return driver.findElement(By.id("metadata.make")).click();',
          '      return driver.findElement(By.id("metadata.make")).sendKeys("h");',
          '      return driver.findElement(By.tagName("body")).click();',
          '      return driver.findElement(By.id("metadata.model")).click();',
          '      return driver.findElement(By.id("metadata.model")).sendKeys("f");',
          '      return driver.findElement(By.tagName("body")).click();',
          '      return driver.findElement(By.id("metadata.heavyVehicleType")).click();',
          '      return driver.findElement(By.id("metadata.heavyVehicleType")).sendKeys("j");',
          '      return driver.findElement(By.tagName("body")).click();',
          '      return driver.findElement(By.xpath("//button[@type=\'submit\']")).click();',
          '      return driver.findElement(By.id("price")).sendKeys('+this.data.master[x].price+');',
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
      }

    for(var y=0,i=from;y<6;y++,i+=4000){      
        generated += " setTimeout(async()=>{ \n\n \t " + complement[y] + " \n\n  }, " + i + ")\n";
        from=i
    }
    
    for(var z=6,i=from;z<complement.length;z++,i+=1000){      
        generated += " setTimeout(async()=>{ \n\n \t " + complement[z] + " \n\n  }, " + i + ")\n";
        from = i
    }


    
    from +=4000
    
    }
    // for(var x=0;x<parseInt(this.fieldData.num);x++){
    //   for(var i=parseInt(from),j=0;j<4;i+=4000,j++){
    //     generated += " setTimeout(async()=>{ \n\n \t " + complement[j] + " \n\n  }, " + i + ")\n";
    //   }
    //   from = i.toString()
    // }

    this.fieldData["generated"] = generated
  
  }

}