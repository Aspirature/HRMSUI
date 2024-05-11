import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})

export class viewAssignService {

    viewAssignUrl:any = 'https://localhost:7003/api/Employee/getEmployeeProjectDetailsAsync?empID=';
    applyLeaveURL:any = 'https://localhost:7003/api/Master/getMasterLeavesTypesAsync';
    employeeLeavesMasterURL:any='https://localhost:7003/api/Employee/getEmployeeLeavesMasterAsync?empId='
    applyLeavePostUrl:any='https://localhost:7003/api/Employee/addEmployeeLeaveDetailsAsync';

    constructor(private http:HttpClient) { }

    getViewwAssignData(empId:number) {
        return this.http.get<any>(this.viewAssignUrl + empId);
      }

      getApplyLeavesData() {
        return this.http.get<any>(this.applyLeaveURL);
      }

      getEmployeeLeavesMasterData(empId:number) {
        return this.http.get<any>(this.employeeLeavesMasterURL + empId);
      }

      postApplyLeavesData(leaveDetails: any) {
        return this.http.post<any>(this.applyLeavePostUrl, leaveDetails);
      }
    
}