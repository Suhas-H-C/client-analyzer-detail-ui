import { Component, OnInit } from '@angular/core';
import * as XLSX from 'xlsx';
import { ngxCsv } from 'ngx-csv/ngx-csv';
import { ContentServiceService } from '../content-service/content-service.service';

@Component({
  selector: 'app-file-parse-upload',
  templateUrl: './file-parse-upload.component.html',
  styleUrls: ['./file-parse-upload.component.css']
})
export class FileParseUploadComponent implements OnInit {

  data!: [][];
  file!: File;

  isExcelFileAttached:boolean=true;
  isCsvAttached:boolean = true;

  constructor(public contentService:ContentServiceService) { }
  ngOnInit(): void {

  }

  onExcelFileChange(event: any) {
    const target: DataTransfer = <DataTransfer>(event.target);
    const reader: FileReader = new FileReader();
    this.isExcelFileAttached = false;

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

  downloadCsvFromJson(event: any) {
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
    const NgxCsv: ngxCsv = new ngxCsv(this.data, "poc", options)
    const someString: string = NgxCsv.getCsv();
    console.log(someString)
  }

  retreiveCSVFile(event:any){
    this.file = event.target.files[0];
    this.isCsvAttached = false;
  }

  sendCsvToParse() {
    this.contentService.parseCsvSend(this.file).subscribe(
      (reponse)=>{
        console.log(reponse);
      },
      (error)=>{
        console.log(error);
      }
    )
  }

}
