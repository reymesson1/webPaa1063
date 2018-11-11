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
  selector: 'generator',
  templateUrl: './generator.component.html',
  styleUrls: ['./generator.component.scss']
})
export class GeneratorComponent {

  fieldData : any = {}  

  generate(){
    var from = "100000"
    var generated = ""        

    var complement = [
      '      return driver.findElement(By.className("_2mkTO")).click()',
      '      return driver.findElement(By.className("cOriw _1jhdI btn-default")).click()',
      '      return driver.findElement(By.xpath(\'//div[@id="delete-ad-modal"]/div/div[3]/button\')).click()',
      '      return driver.navigate().refresh();'
      
    ]
    for(var x=0;x<parseInt(this.fieldData.num);x++){
      for(var i=parseInt(from),j=0;j<4;i+=4000,j++){
        generated += " setTimeout(async()=>{ \n\n \t " + complement[j] + " \n\n  }, " + i + ")\n";
      }
      from = i.toString()
    }

    this.fieldData["generated"] = generated
  
  }

}