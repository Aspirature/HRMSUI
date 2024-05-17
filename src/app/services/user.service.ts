import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})

export class UserService {

  private isLoggedIn: boolean = false;

  loginUrl:any = 'https://localhost:7003/api/User/getUserAsync?userName=';
  employeeDetailsUrl:any = 'https://localhost:7003/api/Employee/getEmployeeDetailsAsync?userName=';
  profileUrl:any = 'https://localhost:7003/api/Employee/getEmployeePersonalDetailsAsync?empId=';
  locationUrl:any = 'https://localhost:7003/api/Employee/getEmployeeAddressDetailsAsync?empID=';
  educationUrl:any = 'https://localhost:7003/api/Employee/getEmployeeEduDetailsAsync?empID=';
  experienceUrl:any = 'https://localhost:7003/api/Employee/getEmployeeExpDetailsAsync?empID=';
  travelUrl:any = 'https://localhost:7003/api/Employee/getEmployeeNationalDetailsAsync?empID=';
  nationalUrl:any = 'https://localhost:7003/api/Employee/getEmployeeNationalDetailsAsync?empID=';
  employeeLeaveUrl:any = 'https://localhost:7003/api/Employee/GetEmployeeLeaveDetailsAsync?empId=';

  constructor(private http:HttpClient) { }

  getUserData() {
    return this.http.get<any>(this.loginUrl);
  }

  getEmployeeDetailsData(userName:any) {
    return this.http.get<any>(this.employeeDetailsUrl + userName);
  }

  getProfileData(empId:any) {
    return this.http.get<any>(this.profileUrl + empId);
  }

  getLocationData(empId:any) {
    return this.http.get<any>(this.locationUrl + empId);
  }

  getEducationData(empId:number) {
    return this.http.get<any>(this.educationUrl + empId);
  }

  getExperienceData(empId:number) {
    return this.http.get<any>(this.experienceUrl + empId);
  }

  getTravelData(empId:number) {
    return this.http.get<any>(this.travelUrl + empId);
  }

  getNationalData(empID:number) {
    return this.http.get<any>(this.nationalUrl + empID);
  }

  getEmployeeLeaveData(empID:number) {
    return this.http.get<any>(this.employeeLeaveUrl + empID);
  }

  getEmployeeLeaveDataById(id: number) {
    return this.http.get<any>(`${this.employeeLeaveUrl}/${id}`);
  }

}
