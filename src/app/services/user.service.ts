import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})

export class UserService {

  private isLoggedIn: boolean = false;

  loginUrl:any = 'https://localhost:7003/api/User/getUserAsync?userName=';
  employeeDetailsUrl:any = 'https://localhost:7003/api/Employee/getEmployeeDetailsAsync?userId=';
  profileUrl:any = 'https://localhost:7003/api/Employee/getEmployeePersonalDetailsAsync?empId=';
  locationUrl:any = 'https://localhost:7003/api/Employee/getEmployeeAddressDetailsAsync?empID=';
  educationUrl:any = 'https://localhost:7003/api/Employee/getEmployeeEduDetailsAsync?empID=';
  experienceUrl:any = 'https://localhost:7003/api/Employee/getEmployeeExpDetailsAsync?empID=';
  travelUrl:any = 'https://localhost:7003/api/Employee/getEmployeeNationalDetailsAsync?empID=';
  contactUrl:any = '';
  nationalUrl:any = 'https://localhost:7003/api/Employee/getEmployeeNationalDetailsAsync?empID=';

  constructor(private http:HttpClient, private router:Router) { }

  getUserData() {
    return this.http.get<any>(this.loginUrl);
  }

  getEmployeeDetailsData(empId:any) {
    return this.http.get<any>(this.employeeDetailsUrl + empId);
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

  getContactData() {
    return this.http.get<any>(this.contactUrl);
  }

  getNationalData(empID:number) {
    return this.http.get<any>(this.nationalUrl + empID);
  }

}
