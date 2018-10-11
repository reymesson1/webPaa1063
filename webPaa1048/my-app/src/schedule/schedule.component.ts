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
  displayedColumns: string[] = ['position', 'date','name','actions'];
  dataSource
  navbarData = {}    
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

}

@Component({
    selector: 'dialog-overview-example-dialog',
    templateUrl: 'addschedule.component.html',
    styleUrls: ['addschedule.component.scss'],
  })
  export class DialogOverviewExampleDialogScheduleEdit {
    fieldData = {} 
    navbarData = {}    
      
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
    }
  
    onClick(){     
      this.data.setSchedules(this.fieldData);
    }
  
  }