import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, retry, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AppServiceService {

  constructor(private httpClient: HttpClient) { }

  getEmployeeRecords(url:string): Observable<any> {
    return this.httpClient.get(url)
      .pipe(
        retry(0), // Retries once
        catchError(this.errorHandler) //catches error in custom method
      );
  }

  getPlaceHolderData(url: string): Observable<any> {
    return this.httpClient.get(url)
      .pipe(
        retry(1),
        catchError(error => {
          return throwError(new Error(error));
        })
      );
  }

  parseCsvSend(file: File,url:string): Observable<any> {
    const formData: FormData = new FormData();
    formData.append("file", file, file.name);
    return this.httpClient.post(url, formData)
      .pipe(
        retry(0),
        catchError(this.handleFileParseError)
      );
  }
  private handleFileParseError(error: any) {
    return throwError(() => error.message);
  }

  private errorHandler(error: { message: any; }) {
    return throwError(() => error.message);
  }
}
