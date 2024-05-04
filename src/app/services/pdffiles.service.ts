import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PdffilesService {
  baseApiUrl = 'assets/pdfdownload/Holiday_Calendar.docx';

  constructor(private http: HttpClient) {}

  downloadExcelFile(): Observable<HttpResponse<Blob>> {
    const headers = new HttpHeaders({
      'Content-Type': 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet'
    });

    return this.http.get(this.baseApiUrl, {
      responseType: 'blob',
      headers: headers,
      observe: 'response'
    });
  }
}
