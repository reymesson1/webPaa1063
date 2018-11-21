import {Component, Inject, OnInit, ViewChild} from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';
import { RestSourceData } from 'src/model/rest.datasource';
import {MatSort, MatPaginator, MatTableDataSource} from '@angular/material';
import {Sort} from '@angular/material';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import { Master } from "../model/master";
import { Router } from '@angular/router';
import { generate } from 'rxjs/internal/observable/generate';
let global
@Component({
  selector: 'master',
  templateUrl: './master.component.html',
  styleUrls: ['./master.component.scss']
})
export class MasterComponent {
  global
  displayedColumns: string[] = ['position', 'date','title','name', 'weight', 'symbol', 'field', 'actions'];
  dataSource
  navbarData : any = {}    
  searchfield  
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  constructor(public dialog: MatDialog, public data: RestSourceData, public route : Router) {}
  Edit(i){  
    global=i
    let data = this.data.master.filter((master)=>{
      return master._id.indexOf(i) !== -1
    })  
    const dialogRef = this.dialog.open(DialogOverviewExampleDialogMasterEdit, {
      width: '550px'      
    });
    dialogRef.afterClosed().subscribe(result => {
      
    });
  }
  Delete(i){    
    let masterData = {"_id":i}
    this.data.setMasterRemove(masterData);    
  }
  View(i){
    let newindex;
    let temp = this.data.master.filter((master,index)=>{
        if(master._id==i){
          newindex=index
        }
    })
    
    this.route.navigateByUrl('/masterview/'+i);
    // this.data.master[newindex].status = !this.data.master[newindex].status    
  }
  Play(i){
    let newindex;
    let temp = this.data.master.filter((master,index)=>{
        if(master._id==i){
          newindex=index
        }
    })    
    let updateData = {"_id":i,"status":this.data.master[newindex].status}
    this.data.setMasterStatus(updateData);        
  }
  Pause(i){
    let newindex;
    let temp = this.data.master.filter((master,index)=>{
        if(master._id==i){
          newindex=index
        }
    })    
    let updateData = {"_id":i,"status":this.data.master[newindex].status}
    this.data.setMasterStatus(updateData);
  }
  applyFilter(filterValue: string) {
    filterValue = filterValue.trim(); // Remove whitespace
    filterValue = filterValue.toLowerCase(); // Datasource defaults to lowercasematches
    this.dataSource.filter = filterValue;
  }    
  ngOnInit(){
    this.data.getFields(); 
    this.data.getMaster(); 
    setTimeout(() => {            
      this.dataSource = this.data.master;
      this.dataSource = new MatTableDataSource<any>(this.data.master);      
      this.dataSource.sort = this.sort;  
      this.dataSource.paginator = this.paginator;
    }, 2000);
    setTimeout(() => {
      for(let x=0;x<this.data.fields.length;x++){
        if(this.data.fields[x].category==this.data.userData.language){
          this.navbarData[this.data.fields[x].field] = this.data.fields[x].value                    
        }
      }
    }, 2000);
  }
  openDialog(): void {    
    const dialogRef = this.dialog.open(DialogOverviewExampleDialogMaster, {
      width: '550px'      
    });
    dialogRef.afterClosed().subscribe(result => {
      
    });
  }
}
@Component({
  selector: 'dialog-overview-example-dialog',
  templateUrl: 'addfield.component.html',
  styleUrls: ['addfield.component.scss'],
})
export class DialogOverviewExampleDialogMaster {
  nextDay : Date;
  fieldData : Master = {}
  navbarData : any = {}    
  isLinear : boolean = false;
  firstFormGroup: FormGroup;
  secondFormGroup: FormGroup;
  isUploaded : boolean = false;
  url = [];
  reader : FileReader = new FileReader();
  nameImage = [];  
  files = [];
  constructor(
    public dialogRef: MatDialogRef<DialogOverviewExampleDialogMaster>,
    public data: RestSourceData,
    private _formBuilder: FormBuilder
  ) {
    this.nextDay = new Date();
  }   
  ngOnInit(){
    if(this.data.fields.length==0){
      setTimeout(() => {
        for(let x=0;x<this.data.fields.length;x++){
          if(this.data.fields[x].category==this.data.userData.language){
            this.navbarData[this.data.fields[x].field] = this.data.fields[x].value                    
          }
        }
      }, 1000);
    }else{
      for(let x=0;x<this.data.fields.length;x++){
        if(this.data.fields[x].category==this.data.userData.language){
          this.navbarData[this.data.fields[x].field] = this.data.fields[x].value                    
        }
      }      
    }
    this.firstFormGroup = this._formBuilder.group({
      firstCtrl: ['', Validators.required]
    });
    this.secondFormGroup = this._formBuilder.group({
      secondCtrl: ['', Validators.required]
    });
  }
  onNoClick(): void {
    this.dialogRef.close();
  }

  onClick(){      
    console.log(this.nextDay.toLocaleDateString());
    console.log(this.files[0].name)
    this.fieldData["date"] = this.nextDay.toLocaleDateString() + " " + this.nextDay.toLocaleTimeString();
    this.fieldData["url"] = [];
    this.fieldData["file"] = [];
    this.fieldData["nameImage"] = [];
    this.fieldData["pathImage"] = [];
    this.fieldData["status"] = false;         
    this.fieldData["order"] = 0;   
    this.fieldData["category"] = this.fieldData.category;   
    this.fieldData["category2"] = this.fieldData.category2;   
    var generated = ""    
    var from = this.fieldData.from;
    console.log(this.fieldData.category)
    console.log(this.fieldData.category2)
    if(this.fieldData.category=="Vehiculo"&&this.fieldData.category2=="Carro"){
    
        var complement = [
          '      return driver.get("https://www.corotos.com.do/create")',
          '      return driver.findElement(By.id("_tealiumModalClose")).click();',
          '      return driver.findElement(By.xpath("//input[@type=\'file\']")).sendKeys("C:/Users/PUBLICADOR_COROTOS1/Desktop/'+this.files[0].name+'");',
          '      return driver.findElement(By.xpath("//input[@type=\'file\']")).sendKeys("C:/Users/PUBLICADOR_COROTOS1/Desktop/'+this.files[1].name+'");',
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
          '      return driver.findElement(By.id("price")).sendKeys('+this.fieldData.price+');',
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
        for(var i=parseInt(from),j=0;j<4;i+=4000,j++){
          generated += " setTimeout(async()=>{ \n\n\n\n\n \t " + complement[j] + " \n\n  }, " + i + ")\n";
          num=i
        }
        for(var i=num+4000,j=4;j<complement.length;i+=1000,j++){
          generated += " setTimeout(async()=>{ \n\n\n\n\n \t " + complement[j] + " \n\n  }, " + i + ")\n";
        }
        this.fieldData["generated"] = generated;         
      
      
        
      this.data.addMaster(this.fieldData);    
    
         
    }else if(this.fieldData.category=="Vehiculo"&&this.fieldData.category2=="Jeepeta"){
      
        var complement = [
          '      return driver.get("https://www.corotos.com.do/create")',
          '      return driver.findElement(By.id("_tealiumModalClose")).click();',
          '      return driver.findElement(By.xpath("//input[@type=\'file\']")).sendKeys("C:/Users/PUBLICADOR_COROTOS1/Desktop/'+this.files[0].name+'");',
          '      return driver.findElement(By.xpath("//input[@type=\'file\']")).sendKeys("C:/Users/PUBLICADOR_COROTOS1/Desktop/'+this.files[1].name+'");',
          '      return driver.findElement(By.xpath("//button[@type=\'submit\']")).click();',
          '      return driver.findElement(By.id("title")).sendKeys(dataMaster8.header);',
          '      return driver.findElement(By.id("description")).sendKeys(dataMaster8.description);',
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
          '      return driver.findElement(By.id("price")).sendKeys('+this.fieldData.price+');',
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
        for(var i=parseInt(from),j=0;j<4;i+=4000,j++){
          generated += " setTimeout(async()=>{ \n\n\n\n\n \t " + complement[j] + " \n\n  }, " + i + ")\n";
          num=i
        }
        for(var i=num+4000,j=4;j<complement.length;i+=1000,j++){
          generated += " setTimeout(async()=>{ \n\n\n\n\n \t " + complement[j] + " \n\n  }, " + i + ")\n";
        }
        this.fieldData["generated"] = generated;        

        this.data.addMaster(this.fieldData);    


    }else if(this.fieldData.category=="Inmuebles en venta"&&this.fieldData.category2=="Apartamentos"){

      
        var complement = [
          '      return driver.get("https://www.corotos.com.do/create")      ',
          '      return driver.findElement(By.id("_tealiumModalClose")).click();',
          '      return driver.findElement(By.xpath("//input[@type=\'file\']")).sendKeys("C:/Users/PUBLICADOR_COROTOS1/Desktop/'+this.files[0].name+'");',
          '      return driver.findElement(By.xpath("//input[@type=\'file\']")).sendKeys("C:/Users/PUBLICADOR_COROTOS1/Desktop/'+this.files[1].name+'");',
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
          '      return driver.findElement(By.id("price")).sendKeys('+this.fieldData.price+');',
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
        for(var i=parseInt(from),j=0;j<4;i+=4000,j++){
          generated += " setTimeout(async()=>{ \n\n\n\n\n \t " + complement[j] + " \n\n  }, " + i + ")\n";
          num=i
        }
        for(var i=num+4000,j=4;j<complement.length;i+=1000,j++){
          generated += " setTimeout(async()=>{ \n\n\n\n\n \t  " + complement[j] + " \n\n  }, " + i + ")\n";
        }
        this.fieldData["generated"] = generated;      

        this.data.addMaster(this.fieldData);    


    }else if(this.fieldData.category=="Inmuebles en venta"&&this.fieldData.category2=="Casa"){

      
      var complement = [
        '      return driver.get("https://www.corotos.com.do/create")      ',
        '      return driver.findElement(By.id("_tealiumModalClose")).click();',
        '      return driver.findElement(By.xpath("//input[@type=\'file\']")).sendKeys("C:/Users/PUBLICADOR_COROTOS1/Desktop/'+this.files[0].name+'");',
        '      return driver.findElement(By.xpath("//input[@type=\'file\']")).sendKeys("C:/Users/PUBLICADOR_COROTOS1/Desktop/'+this.files[1].name+'");',
        '      return driver.findElement(By.xpath("//button[@type=\'submit\']")).click();',
        '      return driver.findElement(By.id("title")).sendKeys(dataMaster.header);',
        '      return driver.findElement(By.id("description")).sendKeys(dataMaster.description);',
        '      return driver.findElement(By.id("category_0")).click();',
        '      return driver.findElement(By.id("category_0")).sendKeys("i");',
        '      return driver.findElement(By.id("category_0")).sendKeys("i");',
        '      return driver.findElement(By.tagName("body")).click();',
        '      return driver.findElement(By.id("category_1")).click();',
        '      return driver.findElement(By.id("category_1")).sendKeys("c");',
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
        '      return driver.findElement(By.id("price")).sendKeys('+this.fieldData.price+');',
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
        for(var i=parseInt(from),j=0;j<4;i+=4000,j++){
          generated += " setTimeout(async()=>{ \n\n\n\n\n \t " + complement[j] + " \n\n  }, " + i + ")\n";
          num=i
        }
        for(var i=num+4000,j=4;j<complement.length;i+=1000,j++){
          generated += " setTimeout(async()=>{ \n\n\n\n\n \t " + complement[j] + " \n\n  }, " + i + ")\n";
        }
        this.fieldData["generated"] = generated;        
    
        this.data.addMaster(this.fieldData);    


    }else{
      
      
        var complement = [
          '      return driver.get("https://www.corotos.com.do/create")      ',
          '      return driver.findElement(By.id("_tealiumModalClose")).click();',
          '      return driver.findElement(By.xpath("//input[@type=\'file\']")).sendKeys("C:/Users/PUBLICADOR_COROTOS1/Desktop/'+this.files[0].name+'");',
          '      return driver.findElement(By.xpath("//input[@type=\'file\']")).sendKeys("C:/Users/PUBLICADOR_COROTOS1/Desktop/'+this.files[1].name+'");',
          '      return driver.findElement(By.xpath("//button[@type=\'submit\']")).click();',
          '      return driver.findElement(By.id("title")).sendKeys(dataMaster3.header);',
          '      return driver.findElement(By.id("description")).sendKeys(dataMaster3.description);',
          '      return driver.findElement(By.id("category_0")).click();',
          '      return driver.findElement(By.id("category_0")).sendKeys("e");',
          '      return driver.findElement(By.tagName("body")).click();',
          '      return driver.findElement(By.id("category_1")).click();',
          '      return driver.findElement(By.id("category_1")).sendKeys("c");',
          '      return driver.findElement(By.tagName("body")).click();',
          '      return driver.findElement(By.xpath("//button[@type=\'submit\']")).click();',
          '      return driver.findElement(By.id("metadata.condicion")).click();',
          '      return driver.findElement(By.id("metadata.condition")).sendKeys("n");',
          '      return driver.findElement(By.xpath("//button[@type=\'submit\']")).click();',
          '      return driver.findElement(By.id("price")).sendKeys('+this.fieldData.price+');',
          '      return driver.findElement(By.tagName("body")).click();',
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
          '      return driver.findElement(By.xpath("//button[@type=\'submit\']")).click();'          
        ]  

      var generated = ""    
      var num = 0  
      for(var i=parseInt(from),j=0;j<4;i+=4000,j++){
        generated += " setTimeout(async()=>{ \n\n\n\n\n \t  " + complement[j] + " \n\n  }, " + i + ")\n";
        num=i
      }
      for(var i=num+4000,j=4;j<complement.length;i+=1000,j++){
        generated += " setTimeout(async()=>{ \n\n\n\n\n \t " + complement[j] + " \n\n  }, " + i + ")\n";
      }
      this.fieldData["generated"] = generated; 

      this.data.addMaster(this.fieldData);    


      
    }
    for(let x=0,num=1000;x<this.files.length;x++,num+=3000){     
      setTimeout(() => {        
          this.fieldData["url"] = this.url[x];      
          this.fieldData["file"] = this.reader;                    
          this.fieldData["nameImage"] = this.nameImage[x];
          this.fieldData["pathImage"] = "./src/assets/upload/"+this.nameImage[x];
          this.data.addMasterPicture(this.fieldData);        
      }, num);      
    }    
    this.fieldData = {}    
  }

  onSelectFile(event) {        
    this.files = event.target.files
    console.log(event.target.files)
    for(let x=0,num=1000;x<this.files.length;x++,num+=3000){      
      setTimeout(() => {         
        if (this.files && this.files[x]) {
            this.nameImage.push(this.files[x].name);          
            this.reader.readAsDataURL(this.files[x]);
            this.reader.onload = (event) => {           
                let target: any = event.target;
                let content: string = target.result;          
                this.url.push(content); 
              }
        }                
      }, num);
    }    
  }

}
@Component({
  selector: 'dialog-overview-example-dialog',
  templateUrl: 'addfield.component.html',
  styleUrls: ['addfield.component.scss'],
})
export class DialogOverviewExampleDialogMasterEdit {
  isLinear : boolean = false;
  firstFormGroup: FormGroup;
  secondFormGroup: FormGroup;
  fieldData : any = {
    fullname: "",
    description: "",
    value:"",
    category:"English",
    field: ""
  } 
  navbarData : any = {}    
    
  constructor(
    public dialogRef: MatDialogRef<DialogOverviewExampleDialogMasterEdit>,
    public data: RestSourceData,
    private _formBuilder: FormBuilder
  ) {} 
  ngOnInit(){
    let filtered = this.data.master.filter((master)=>{
      return master._id.indexOf(global) !== -1
    })[0]
    this.fieldData["_id"] = filtered._id
    this.fieldData["fullname"] = filtered.fullname
    this.fieldData["title"] = filtered.title
    this.fieldData["description"] = filtered.description
    this.fieldData["value"] = filtered.value
    this.fieldData["category"] = filtered.category
    this.fieldData["field"] = filtered.field
    this.fieldData["order"] = filtered.order
    this.fieldData["sequence"] = filtered.sequence
    this.fieldData["header"] = filtered.header
    this.fieldData["price"] = filtered.price
  }

  onClick(){     
    this.data.setMasterEdit(this.fieldData);     
  }

  onSelectFile(str){}

}