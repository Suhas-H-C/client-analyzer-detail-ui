import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, retry, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AppServiceService {

  constructor(private httpClient: HttpClient) { }

  getUserRecords(): Observable<any> {
    return this.httpClient.get("https://jsonplaceholder.typicode.com/users")
  }
  getEmployeeRecords(): Observable<any> {
    return this.httpClient.get("http://localhost:8081/csv/read/dependency")
      .pipe(
        retry(0), // Retries once
        catchError(this.errorHandler) //catches error in custom method
      );
  }
  parseCsvSend(file:File):Observable<any>{
    const formData:FormData = new FormData();
    formData.append("file",file,file.name);
    return this.httpClient.post("http://localhost:8080/api/v1/csv/upload",formData)
    .pipe(
      retry(0),
      catchError(this.handleFileParseError)
    );
  }
  private handleFileParseError(error: any){
    return throwError(()=>error.message);
  }

  private errorHandler(error: { message: any; }) {
    return throwError(() => error.message);
  }
}
