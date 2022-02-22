import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ContentServiceService } from '../content-service.service';
import { SampleFormComponent } from '../sample-form/sample-form.component';

@Component({
  selector: 'app-data-grid',
  templateUrl: './data-grid.component.html',
  styleUrls: ['./data-grid.component.css']
})
export class DataGridComponent implements OnInit {

  title:string='data-grid'

  showGrid:boolean=false;
  rowDataUser: Array<any> = []
  rowDataDump: Array<any> = []
  panelOpenState:boolean = true;
  colDefsDump:Array<any> = [
    {headerName: 'basic details', children: [
      {field:'title',filter: 'agTextColumnFilter',sortable: true},
      {field:'name',filter: 'agTextColumnFilter',sortable: true}
    ]},
    {headerName: 'personal details', children:[
      {field:'family',sortable:true },
      {field:'gender',sortable:true },
      {field:'city',sortable:true }
    ]},
    {headerName: 'advanced details', children:[
      {field:'code',filter:'agNumberColumnFilter',sortable:true },
      {field:'pnumonic',sortable:true },
      {field:'address',sortable:true }
    ]}
  ]
  colDefsEmployee: Array<any> = [
    {
      headerName: 'Basic details of the employee', children: [
        { field: 'id', filter: 'agNumberColumnFilter',width: 95, sortable: true },
        { field: 'name',filter: 'agTextColumnFilter', width: 150, sortable: true },
        { field: 'username', width: 90, sortable: true },
        { field: 'email', width: 150, sortable: false }]
    },
    {
      headerName: 'Contact deatils and personal website', children: [
        { field: 'address.street', sortable: false, resizable: true },
        { field: 'address.suite', sortable: false, resizable: true },
        { field: 'address.city', sortable: false, resizable: true },
        { field: 'address.zipcode', sortable: false, resizable: true },
        { field: 'address.geo.lat', sortable: false, resizable: true },
        { field: 'address.geo.lng', sortable: false, resizable: true },
        { field: 'phone', sortable: false },
        { field: 'website', sortable: false },
      ]
    },
    {
      headerName: 'Company details of the employee', children: [
        { field: 'company.name', width: 200, sortable: false, resizable: true },
        { field: 'company.catchPhrase', width: 200, sortable: false, resizable: true },
        { field: 'company.bs', width: 200, sortable: false },
      ]
    }
  ];

  constructor(public contentService: ContentServiceService,private matDialogOpener:MatDialog) {
    /**
     * Dependenc injection from service class
     */
    this.contentService.getUserRecords().subscribe(
      (response) => {
        this.rowDataUser = response;
        console.log(this.rowDataUser.length)
      },
      (errors) => {
        console.log(errors)
      }
    );
    this.contentService.getEmployeeRecords().subscribe(
      (response) => {
        this.rowDataDump = response;
      },
      (errors) => {
        console.log("Got this in the response",errors)
      }
    )
  }

  ngOnInit(): void {
  }

  showLogs(){
    const dialogOperner = this.matDialogOpener.open(SampleFormComponent);
  
    dialogOperner.afterOpened().subscribe(
      ()=>{
        console.log("Dialog Opened");
      },
      (error)=>{
        console.log(error)
      }
    );
    dialogOperner.afterClosed().subscribe(
      ()=>{
        console.log("Dialog Closed");
      },
      (error)=>{
        console.log(error);
      }
    );
  }

}
