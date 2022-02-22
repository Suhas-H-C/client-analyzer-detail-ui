import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  title: string = "header-component"

  rowData: Array<any> = []

  colDefs: Array<any> = [
    { field: 'id', sortable: true },
    { field: 'name', sortable: true },
    { field: 'username', sortable: true },
    { field: 'email', sortable: false },
    { field: 'address.street', sortable: false, resizable: true },
    { field: 'address.suite', sortable: false, resizable: true },
    { field: 'address.city', sortable: false, resizable: true },
    { field: 'address.zipcode', sortable: false, resizable: true },
    { field: 'address.geo.lat', sortable: false, resizable: true },
    { field: 'address.geo.lng', sortable: false, resizable: true },
    { field: 'phone', sortable: false },
    { field: 'website', sortable: false },
    { field: 'company.name', sortable: false, resizable: true },
    { field: 'company.catchPhrase', sortable: false, resizable: true },
    { field: 'company.bs', sortable: false },
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
