import { AfterViewInit, Component, Input, OnInit, Output, ViewChild } from '@angular/core';
import { FeatureDevelopComponent } from './content/feature-develop/feature-develop.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, AfterViewInit {

  /**
   * To change something in child component accessed we implement AfterViewInit interface
   * @Override method ngAfterViewInIt()
   */
  ngAfterViewInit(): void {
    //this.featureDevelopComponent.myName="Hi from parent app";
    console.log(this.featureDevelopComponent.myName)
  }
  ngOnInit(): void {
    console.log(this.receiveMessage)
  }
  title = 'angular-console';
  receiveMessage: Object = {};
  /**
   * Accesing child component
   */
  @ViewChild(FeatureDevelopComponent) featureDevelopComponent!: FeatureDevelopComponent;

  listOfAnims: Array<string> = ['cat', 'dog', 'donkey', 'tiger', 'lion'];
  yourReferenceTitle: string = "feature"


}
