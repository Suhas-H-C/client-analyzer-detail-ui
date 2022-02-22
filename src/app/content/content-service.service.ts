import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { retry, catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ContentServiceService {

  constructor(private httpClient:HttpClient) { }

  getUserRecords():Observable<any>{
    return this.httpClient.get("https://jsonplaceholder.typicode.com/users")
  }
  getEmployeeRecords():Observable<any>{
    return this.httpClient.get("http://localhost:8080/csv/read/dependency")
    .pipe(
      retry(0), // Retries once
      catchError(this.errorHandler)
    );
  }

  private errorHandler(error: { message: any; }){
    return throwError(()=>error.message);
  }
}
