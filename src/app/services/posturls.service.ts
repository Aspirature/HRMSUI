import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PosturlsService {

  constructor(private http: HttpClient) { }

  addUser(empForm:any){
    return this.http.post("https://localhost:7003/api/Employee/addUserAsync", empForm);
  }

  submitUser(empformdata: any) {
    return this.http.post("https://localhost:7003/api/Employee/addEmployeeAsync", empformdata);
  }
}
