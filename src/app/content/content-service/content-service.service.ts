import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AppServiceService } from '../../service/app-service.service';

@Injectable({
  providedIn: 'root'
})
export class ContentServiceService {

  constructor(private appService: AppServiceService) { }

  getUserRecords(): Observable<any> {
    return this.appService.getUserRecords();
  }
  getEmployeeRecords(): Observable<any> {
    return this.appService.getEmployeeRecords();
  }

}
