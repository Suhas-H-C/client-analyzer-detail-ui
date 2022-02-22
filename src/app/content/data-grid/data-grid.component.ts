import { Component, Input, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { SampleFormComponent } from '../sample-form/sample-form.component';

@Component({
  selector: 'app-data-grid',
  templateUrl: './data-grid.component.html',
  styleUrls: ['./data-grid.component.css']
})
export class DataGridComponent implements OnInit {

  title: string = 'data-grid'

  showGrid: boolean = true;
  @Input('rowUser')
  rowDataUser: Array<any> = []
  @Input('rowDump')
  rowDataDump: Array<any> = []
  panelOpenState: boolean = true;

  @Input('columnDump')
  colDefsDump!: Array<any>;
  
  @Input('columnEmployee')
  colDefsEmployee!: Array<any>; 

  constructor(private matDialogOpener: MatDialog) {  }

  ngOnInit(): void {
  }

  showLogs() {
    const dialogOperner = this.matDialogOpener.open(SampleFormComponent);

    dialogOperner.afterOpened().subscribe(
      () => {
        console.log("Dialog Opened");
      },
      (error) => {
        console.log(error)
      }
    );
    dialogOperner.afterClosed().subscribe(
      () => {
        console.log("Dialog Closed");
      },
      (error) => {
        console.log(error);
      }
    );
  }

}
