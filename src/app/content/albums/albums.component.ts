import { Component, OnInit } from '@angular/core';
import { ContentServiceService } from '../content-service/content-service.service';

@Component({
  selector: 'app-albums',
  templateUrl: './albums.component.html',
  styleUrls: ['./albums.component.css']
})
export class AlbumsComponent implements OnInit {

  colDefsAlbums: Array<any> = [
    {
      headerName: 'Identifier for albums', children: [
        { field: 'userId', filter: 'agNumberColumnFilter', width: 95, sortable: true },]
    },
    {
      headerName: 'Id for a particular album', children: [
        { field: 'id', sortable: false, resizable: true },]
    },
    {
      headerName: 'album title', children: [
        { field: 'title', width: 1210, sortable: false, resizable: true }]
    }
  ];

  rowDataAlbums: Array<any> = []

  constructor(private contentService:ContentServiceService) { }

  ngOnInit(): void {
    this.contentService.getAlbums().subscribe(
      (response) => {
        this.rowDataAlbums = response;
        console.log(this.rowDataAlbums.length)
      },
      (errors) => {
        console.log(errors)
      }
    );
  }

}
