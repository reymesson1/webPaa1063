import {Component, Inject, OnInit, ViewChild} from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';
import { RestSourceData } from 'src/model/rest.datasource';
import {MatSort, MatPaginator, MatTableDataSource} from '@angular/material';
import {Sort} from '@angular/material';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import { Master } from "../model/master";
let global

@Component({
  selector: 'schedule',
  templateUrl: './schedule.component.html',
  styleUrls: ['./schedule.component.scss']
})
export class ScheduleComponent {

  global
  displayedColumns: string[] = ['position', 'date','name','alias','actions'];
  dataSource
  navbarData : any = {}    
  searchfield  
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  
  constructor(public dialog: MatDialog,public data: RestSourceData){}

  ngOnInit(){ 
    this.data.getSchedules();
    setTimeout(() => {
        this.dataSource = new MatTableDataSource<any>(this.data.schedules);      
        this.dataSource.sort = this.sort;  
        this.dataSource.paginator = this.paginator;
      },2000)  
  }

  applyFilter(filterValue: string) {
    filterValue = filterValue.trim(); // Remove whitespace
    filterValue = filterValue.toLowerCase(); // Datasource defaults to lowercasematches
    this.dataSource.filter = filterValue;
  }

  Delete(i){
    let data = this.data.schedules.filter((master)=>{
      return master._id.indexOf(i) !== -1
    })    
    this.data.removeSchedules(data);
  }

  Edit(i){

    global=i
    let data = this.data.schedules.filter((master)=>{
      return master._id.indexOf(i) !== -1
    })  
    const dialogRef = this.dialog.open(DialogOverviewExampleDialogScheduleEdit, {
      width: '550px'      
    });
    dialogRef.afterClosed().subscribe(result => {
      
    });
      
  }

  Add(){

    const dialogRef = this.dialog.open(DialogOverviewExampleDialogScheduleAdd, {
      width: '550px'      
    });
    dialogRef.afterClosed().subscribe(result => {
      
    });
      
  }

  resetAll(){
    this.data.resetAll();
    console.log('reset all');
  }

  resetAllWithValue(){
    this.data.resetAllWithValue();
    console.log('reset all');
  }


  toggle(i){
    let newindex;
    let temp = this.data.schedules.filter((master,index)=>{
        if(master._id==i){
          newindex=index
        }
    })
    this.data.schedules[newindex].status = !this.data.schedules[newindex].status    
  }

  Play(i){
    let newindex;
    let temp = this.data.schedules.filter((master,index)=>{
        if(master._id==i){
          newindex=index
        }
    })    
    this.data.resetNowAll({"name":this.data.schedules[newindex].name})
    window.location.reload();
  }

  Pause(){}

  onNoClick(){}

}

@Component({
    selector: 'dialog-overview-example-dialog',
    templateUrl: 'addschedule.component.html',
    styleUrls: ['addschedule.component.scss'],
  })
  export class DialogOverviewExampleDialogScheduleAdd {
    fieldData : any = {} 
    navbarData : any = {}    
      
    constructor(
      public dialogRef: MatDialogRef<DialogOverviewExampleDialogScheduleAdd>,
      public data: RestSourceData,
      private _formBuilder: FormBuilder
    ) {} 
  
    onClick(){     
      this.data.addSchedules(this.fieldData);
    }

    onNoClick(){}
  
  }
@Component({
    selector: 'dialog-overview-example-dialog',
    templateUrl: 'addschedule.component.html',
    styleUrls: ['addschedule.component.scss'],
  })
  export class DialogOverviewExampleDialogScheduleEdit {
    fieldData : any = {} 
    navbarData : any = {}    
      
    constructor(
      public dialogRef: MatDialogRef<DialogOverviewExampleDialogScheduleEdit>,
      public data: RestSourceData,
      private _formBuilder: FormBuilder
    ) {} 
    ngOnInit(){
        let filtered = this.data.schedules.filter((master)=>{
            return master._id.indexOf(global) !== -1
          })[0]
          this.fieldData["_id"] = filtered._id
          this.fieldData["name"] = filtered.name
          this.fieldData["start"] = filtered.start 
          this.fieldData["alias"] = filtered.alias 
    }
  
    onClick(){     
      this.data.setSchedules(this.fieldData);
    }

    onNoClick(){}
  
  }