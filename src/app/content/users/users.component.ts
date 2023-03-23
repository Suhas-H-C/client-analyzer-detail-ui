import { Component, OnInit } from '@angular/core';
import { ContentServiceService } from '../content-service/content-service.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

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

  rowDataUser:Array<any>=[]

  constructor(private contentService:ContentServiceService) { }

  ngOnInit(): void {
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

}
