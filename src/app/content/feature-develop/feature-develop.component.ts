import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  /**
   * selector is the tag name that is supposed to be used
   */
  selector: 'app-feature-develop',
  /**
   * html reference
   */
  templateUrl: './feature-develop.component.html',
  /**
   * css reference
   */
  styleUrls: ['./feature-develop.component.css']
})
export class FeatureDevelopComponent implements OnInit {

  /**
  * Interpolation in angular
  * data-flow from class(.ts) to Template(UI)
  */
  title: string = 'feature/develop'
  currentUrl: string = window.location.href;

  myName:string="Suhas"
  /**
  * property binding for [class] attribute of input tag
  * data-flow from class(.ts) to Template(UI)
  */
  propertyBindingString: string = ""
  propertyBindingBoolean: boolean = false;

  /**
   * style property binding for [class] attribute of input tag
   * data-flow from class(.ts) to Template(UI)
   */
  textSuccess = "text-success"

  /**
  * adding multiple classes using ngClass directive
  * data-flow from class(.ts) to Template(UI)
  */
  combinedClasses = {
    "text-success": true,
    "text-italic": true
  }
  @Output('messageEmitted')
  childEmitter = new EventEmitter();

  @Output('simpleMessage')
  messenger= new EventEmitter();

  someText:string='this is child component'
  someObject:object={
    "firstName":"John",
    "lastName":"Doe"
  }
  employee={
    id:'12',
    name:'A'
  }
  /**
   * constructor of the class that loads at start
   */
  constructor(public router: Router) { }

  /**
   * inherited method that loads at start
   */
  ngOnInit(): void {
  }

  /**
   * other components using this should provide input with name dataTitle and value
   * dataTitle is now the property of tag <app-feature-develop>
   * data-flow from Template(UI) of other component who used it to class(.ts)
   */
  @Input()
  dataTitle!: Array<string>;

  /**
   * other components using this should provide input with name giveMeTitle and value
   * giveMeTitle is now the property of tag <app-feature-develop>
   * data-flow from Template(UI) of other component who used it to class(.ts)
   */
  @Input('giveMeTitle')
  referenceTitle!: string;

  /**
   * event handling on button click
   * data-flow from Template(UI) to class(.ts)
   * event flow from child component to parent component
   */
  buttonClicked(event: any) {
    console.log(event)
    console.log(event.type)
    this.childEmitter.emit("Cliked from root component");
  }

  routeOnButtonClick(){
    this.messenger.emit(this.employee)
    this.router.navigate(['/develop-ftt',this.employee.id])
  }
}
