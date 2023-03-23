import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { AppServiceService } from '../../service/app-service.service';

@Injectable({
  providedIn: 'root'
})
export class ContentServiceService {

  constructor(private appService: AppServiceService) { }

  getUserRecords(): Observable<any> {
    return this.appService.getPlaceHolderData(environment.userPlaceHolderUrl);
  }
  getEmployeeRecords(): Observable<any> {
    return this.appService.getEmployeeRecords(environment.localCsvRead);
  }
  parseCsvSend(file: File): Observable<any> {
    return this.appService.parseCsvSend(file, environment.localCsvUpload);
  }

  getAlbums(): Observable<any> {
    return this.appService.getPlaceHolderData(environment.albumPlaceHolderUrl);
  }
}
