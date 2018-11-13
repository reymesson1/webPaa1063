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
  selector: 'masterview',
  templateUrl: './masterview.component.html',
  styleUrls: ['./masterview.component.scss']
})
export class MasterViewComponent {
  i
  value=""
  constructor(private route:ActivatedRoute,private data: RestSourceData){}    
  ngOnInit(){
      this.i = this.route.snapshot.params['id'];
      let newindex;
      let temp = this.data.master.filter((master,index)=>{
          if(master._id==this.i){
            newindex=index
          }
      })

      var complement = [
        '      return driver.get("https://www.corotos.com.do/create")',
        '      return driver.findElement(By.id("_tealiumModalClose")).click();',
        '      return driver.findElement(By.xpath("//input[@type="file"]")).sendKeys("C:/Users/PUBLICADOR_COROTOS1/Desktop/honda_fit_rojo.jpg");',
        '      return driver.findElement(By.xpath("//button[@type="submit"]")).click();',
        '      return driver.findElement(By.id("title")).sendKeys(dataMaster.header);',
        '      return driver.findElement(By.id("description")).sendKeys(dataMaster.description);',
        '      return driver.findElement(By.id("category_0")).click();',
        '      return driver.findElement(By.id("category_0")).sendKeys("v");',
        '      return driver.findElement(By.tagName("body")).click();',
        '      return driver.findElement(By.id("category_1")).click();',
        '      return driver.findElement(By.id("category_1")).sendKeys("c");',
        '      return driver.findElement(By.tagName("body")).click();',
        '      return driver.findElement(By.xpath("//button[@type="submit"]")).click();',
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
        '      return driver.findElement(By.xpath("//button[@type="submit"]")).click();',
        '      return driver.findElement(By.id("price")).sendKeys(36500);',
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
        '      return driver.findElement(By.xpath("//button[@type="submit"]")).click();',
        '      return driver.findElement(By.xpath("//button[@type="submit"]")).click();',
        
      ]  
       var generated = ""    
       var num = 0  
      // for(var i=1000,j=0;j<4;i+=4000,j++){
      //   generated += " setTimeout(async()=>{ \n\n\n\n\n \t return " + complement[j] + " \n\n  }, " + i + ")\n";
      //   num=i
      // }
      // for(var i=num+4000,j=4;j<complement.length;i+=1000,j++){
      //   generated += " setTimeout(async()=>{ \n\n\n\n\n \t return " + complement[j] + " \n\n  }, " + i + ")\n";
      // } 

      //this.value = generated
      this.value = this.data.master[newindex].generated;
      
  }
}