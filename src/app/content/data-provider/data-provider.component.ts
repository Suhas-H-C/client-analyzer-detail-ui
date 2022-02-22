import { Component, OnInit } from '@angular/core';
import { ContentServiceService } from '../content-service.service';

@Component({
  selector: 'app-data-provider',
  templateUrl: './data-provider.component.html',
  styleUrls: ['./data-provider.component.css']
})
export class DataProviderComponent implements OnInit {
  rowDataDump: Array<any> = []
  rowDataUser: Array<any> = []
  colDefsDump: Array<any> = [
    {
      headerName: 'basic details', children: [
        { field: 'title', filter: 'agTextColumnFilter', sortable: true },
        { field: 'name', filter: 'agTextColumnFilter', sortable: true }
      ]
    },
    {
      headerName: 'personal details', children: [
        { field: 'family', sortable: true },
        { field: 'gender', sortable: true },
        { field: 'city', sortable: true }
      ]
    },
    {
      headerName: 'advanced details', children: [
        { field: 'code', filter: 'agNumberColumnFilter', sortable: true },
        { field: 'pnumonic', sortable: true },
        { field: 'address', sortable: true }
      ]
    }
  ]
  colDefsEmployee: Array<any> = [
    {
      headerName: 'Basic details of the employee', children: [
        { field: 'id', filter: 'agNumberColumnFilter', width: 95, sortable: true },
        { field: 'name', filter: 'agTextColumnFilter', width: 150, sortable: true },
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
  constructor(public contentService: ContentServiceService) {
    this.contentService.getEmployeeRecords().subscribe(
      (response) => {
        this.rowDataDump = response;
      },
      (errors) => {
        console.log("Got this in the response", errors)
      }
    )
    this.contentService.getUserRecords().subscribe(
      (response) => {
        this.rowDataUser = response;
        console.log(this.rowDataUser.length)
      },
      (errors) => {
        console.log(errors)
      }
    );
   }

  ngOnInit(): void {
  }

}
