import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';
import { throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ReportService {

  constructor(private http: HttpClient) { }
  getReports(): Observable<any[]> {
    return this.http.get<any[]>('assets/Reports/reports.json').pipe(
      tap(reports => console.log('Fetched reports:', reports)), // Log the fetched reports.
      catchError(error => {
        console.error('Error fetching reports:', error); // Log the error if fetching fails.
        return throwError(error);
      })
    );
  }
}
