import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PosturlsService {

  saveUser:any = 'https://localhost:7003/api/Employee/addEmployeeAsync';
  addUserData:any='https://localhost:7003/api/Employee/addUserAsync';
  addressDetailsData:any = 'https://localhost:7003/api/Employee/addEmployeeAddressAsync';
  nationalDetailsData:any = 'https://localhost:7003/api/Employee/addEmployeeNationalAsync';
  educationDetailsData:any = 'https://localhost:7003/api/Employee/addEmployeeEducationAsync';
  experienceDetailsData:any = 'https://localhost:7003/api/Employee/addEmployeeExperienceAsync';
  travelDetailsData:any = 'https://localhost:7003/api/Employee/addEmployeeNationalAsync';
  emergencyDetailsData:any = 'https://localhost:7003/api/Employee/addEmployeePersonalAsync';

  constructor(private http: HttpClient) { }

  addUser(empForm:any){
    return this.http.post(this.addUserData, empForm);
  }

  submitUser(empformdata: any) {
    return this.http.post(this.saveUser, empformdata);
  }

  addressDetails(addressDetails:any){
    return this.http.post(this.addressDetailsData, addressDetails);
  }

  nationalDetails(nationalDetails:any){
    return this.http.post(this.nationalDetailsData, nationalDetails);
  }

  educationalDetails(educationalDetails:any){
    return this.http.post(this.educationDetailsData, educationalDetails);
  }

  experienceDetails(experienceDetails:any){
    return this.http.post(this.experienceDetailsData, experienceDetails);
  }

  travelDetails(travelDetails:any){
    return this.http.post(this.travelDetailsData, travelDetails);
  }

  emergencyDetails(emergencyDetails:any){
    return this.http.post(this.emergencyDetailsData, emergencyDetails);
  }

}
