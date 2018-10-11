import {Component, Inject, OnInit, ViewChild} from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';
import { RestSourceData } from 'src/model/rest.datasource';
import {MatSort, MatPaginator, MatTableDataSource} from '@angular/material';
import {Sort} from '@angular/material';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import { Master } from "../model/master";
let global

@Component({
  selector: 'detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.scss']
})
export class DetailComponent {
  title = 'my-app';

  constructor(public data:RestSourceData){}

  global
  displayedColumns: string[] = ['position', 'date','name','error', 'actions'];
  dataSource
  navbarData = {}    
  searchfield  
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  ngOnInit(){
    this.data.getActivities();
    setTimeout(() => {
      this.dataSource = new MatTableDataSource<any>(this.data.activities);      
      this.dataSource.sort = this.sort;  
      this.dataSource.paginator = this.paginator;
    },2000)
  }
  
  applyFilter(filterValue: string) {
    filterValue = filterValue.trim(); // Remove whitespace
    filterValue = filterValue.toLowerCase(); // Datasource defaults to lowercasematches
    this.dataSource.filter = filterValue;
  }

}
