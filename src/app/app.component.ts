import { Component, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  ngOnInit(): void {
  }
  title = 'angular-console';
  
  listOfAnims:Array<string>=['cat','dog','donkey','tiger','lion'];
  yourReferenceTitle:string="feature"
}
