import {Component, Inject, OnInit, ViewChild} from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';
import { RestSourceData } from 'src/model/rest.datasource';
import {MatSort, MatPaginator, MatTableDataSource} from '@angular/material';
import {Sort} from '@angular/material';
let global
@Component({
selector: 'wordlist',
templateUrl: './wordlist.component.html',
styleUrls: ['./wordlist.component.scss']
})
export class WordlistComponent {

fieldData : any = {}
displayedColumns: string[] = ['position', 'name', 'weight', 'symbol', 'actions'];
dataSource
navbarData : any = {}
searchfield
@ViewChild(MatPaginator) paginator: MatPaginator;
@ViewChild(MatSort) sort: MatSort;
constructor(public dialog: MatDialog, public data: RestSourceData) {}
applyFilter(filterValue: string) {
filterValue = filterValue.trim(); // Remove whitespace
filterValue = filterValue.toLowerCase(); // Datasource defaults to lowercasematches
this.dataSource.filter = filterValue;
}
ngOnInit(){
this.data.getWord();
setTimeout(() => {
this.dataSource = this.data.words;
this.dataSource = new MatTableDataSource(this.data.words);
this.dataSource.sort = this.sort;
this.dataSource.paginator = this.paginator;
}, 2000);
}
openDialog(): void {
const dialogRef = this.dialog.open(DialogOverviewExampleDialogWord, {
width: '350px'
});
dialogRef.afterClosed().subscribe(result => {

});
}
Edit(i){
console.log(i);
}
Delete(i){
this.data.removeWord(i);
}
onNoClick(){}
}

@Component({
    selector: 'dialog-overview-example-dialog',
    templateUrl: 'addwordlist.component.html',
    styleUrls: ['addwordlist.component.scss'],
})
export class DialogOverviewExampleDialogWord {
    fieldData : any = {}
    navbarData : any = {}
    
    constructor(
        public dialogRef: MatDialogRef<any>,
        public data: RestSourceData,
    ) {}
    
    onClick(){
        
        this.fieldData["order"] = 0;
        this.fieldData["used"] = false;    
        this.data.addWordList(this.fieldData);
    }   
    onNoClick(){}
}