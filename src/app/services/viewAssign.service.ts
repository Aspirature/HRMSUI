import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})

export class viewAssignService {

    viewAssignUrl:any = 'https://localhost:7003/api/Employee/getEmployeeProjectDetailsAsync?empID=';

    constructor(private http:HttpClient) { }

    getViewwAssignData(empId:number) {
        return this.http.get<any>(this.viewAssignUrl + empId);
      }
    
}