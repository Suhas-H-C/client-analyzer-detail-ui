import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import * as XLSX from 'xlsx';
import { ngxCsv } from 'ngx-csv/ngx-csv';

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

  myName: string = "Suhas"
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

  @Output('simpleMessage')
  messenger = new EventEmitter();

  someText: string = 'this is child component'
  someObject: object = {
    "firstName": "John",
    "lastName": "Doe"
  }
  employee = {
    id: '12',
    name: 'A'
  }
  data!: [][];
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
  }
  /**
   * routing to provided route on button click
   */
  routeOnButtonClick() {
    this.messenger.emit(this.employee)
    this.router.navigate(['/develop-ftt', this.employee.id])
  }

  onExcelFileChange(event: any) {
    const target: DataTransfer = <DataTransfer>(event.target);
    const reader: FileReader = new FileReader();

    reader.onload = (e: any) => {
      const dataRead: string = e.target.result;

      /**
       * Gives binary data
       */
      //console.log(dataRead);

      const wb: XLSX.WorkBook = XLSX.read(dataRead, { type: 'binary' });

      /**
       * 0 indicates the sheet to be considered
       */
      const wsName: string = wb.SheetNames[0];

      const ws: XLSX.WorkSheet = wb.Sheets[wsName];

      /**
       * Gives data in text format vertically
       */
      //console.log(ws)

      /**
       * Converts data to json and favourable format
       */
      this.data = XLSX.utils.sheet_to_json(ws, { header: 1 });

      console.log(this.data);

    }
    reader.readAsBinaryString(target.files[0]);
  }

  downloadCsvFromJson(event : any){
    var options = { 
      fieldSeparator: ',',
      quoteStrings: '"',
      decimalseparator: '.',
      showLabels: false, 
      showTitle: false,
     // title: 'Your title',
      useBom: true,
      noDownload: false,
     // headers: ['poc_id', 'poc_ssn_code', 'poc_location', 'poc_long', 'poc_name', 'poc_ip_address','poc_type']
    };
    const NgxCsv:ngxCsv =  new ngxCsv(this.data,"test",options)
    const someString:string =  NgxCsv.getCsv();
    console.log(someString)
  }
}
