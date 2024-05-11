import { Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';
import { DynamicAddressRow, DynamicArrayElement, DynamicEducationalRow, DynamicEmergencyRow, DynamicLocationRow, DynamicNationalRow, DynamicTravelRow } from './emp-re';
import { LocationsService } from 'src/app/services/locations.service';
import { UserService } from 'src/app/services/user.service';
import { PosturlsService } from 'src/app/services/posturls.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';


interface EmployeeUserDetails {
  userid: number;
  username: string;
  password: string;
  isactive: boolean;
}

@Component({
  selector: 'app-employee-reg',
  templateUrl: './employee-reg.component.html',
  styleUrls: ['./employee-reg.component.css']
})

export class EmployeeRegComponent implements OnInit {

  
  myForm!: FormGroup;
  empDetails!: EmployeeUserDetails;
  
  countries: any[]=[];
  states:any[]=[];
  districts:any[]=[];
  roles:any[]=[];
  departments:any[]=[];
  designations:any[]=[];
  selectedCountry: any;
  selectedState:any;
  usersDetails:any[]=[];

  dynamicArray: DynamicArrayElement[] = [];
  dynamicAddressRow: DynamicAddressRow[] = [];
  dynamicLocationRow: DynamicLocationRow[] = [];
  dynamicNationalRow: DynamicNationalRow[] = [];
  dynamicEducationalRow: DynamicEducationalRow[] = [];
  dynamicTravelRow: DynamicTravelRow[] = [];
  dynamicEmergencyRow: DynamicEmergencyRow[] = [];
  userId: any;
  employeeid:number = 0;
  homeManagerId:number = 0;
  departmentId:number = 0;
  designationId:number = 0;
  roleId: any;

  constructor(private locationService: LocationsService, private profile: UserService, private postUrl:PosturlsService) { }

  ngOnInit(): void {
    this.userData();
    this.getCountriesData();
    this.getRolesData();
    this.getDepartmentsData();
    this.getDesignationsData();

    this.myForm = new FormGroup({
      employeeid:new FormControl('', Validators.required),
      userName: new FormControl('', Validators.required),
      firstName: new FormControl('', Validators.required),
      lastName: new FormControl('', Validators.required),
      age: new FormControl('', Validators.required),
      dOB: new FormControl('', Validators.required),
      gender: new FormControl('', Validators.required),
      marritualStatus: new FormControl('', Validators.required),
      personalEmail: new FormControl('', Validators.required),
      officialEmail: new FormControl('', Validators.required),
      userId:this.userId,
      roleId:this.roleId,
      designation: new FormControl('', Validators.required),
      department: new FormControl('', Validators.required),
      homeManagerId:new FormControl('', Validators.required),
      departmentId:new FormControl('', Validators.required),
      designationId:new FormControl('', Validators.required),
      managerName: new FormControl('', Validators.required),
      roles: new FormControl('', Validators.required),
    });
  }

  addUserData(){
    const username = this.myForm.get('userName')?.value;

  if (!username) {
    console.error("Username is empty");
    return;
  }

    this.empDetails = {
      userid: 0,
      username: username,
      password: username,
      isactive: true
    };

    console.log(this.empDetails,'this.empDeta');
    

    this.postUrl.addUser(this.empDetails).subscribe((data:any)=>{
      console.log(data,'dataaa');
      this.userId = data;
    }, error => {
      console.error('Error:', error);
    });
  }

  async submitForm(){
    if (this.myForm.valid) {
     
      
     await this.addUserData();
     console.log(this.myForm.valid,' this.myForm.valid');
     await this.postUrl.submitUser(this.myForm.value)
        .subscribe(
          response => {
            console.log('Form submitted successfully!', response);
            this.myForm.reset();
          },
          error => {
            console.error('Error submitting form:', error);
          }
        );
    } else {
      console.log('Form is invalid. Please fill in all required fields.');
     }
  }

  // userData

  userData() {
    // const userName = localStorage.getItem('loginSessId');
    // if (userName) {
    //   this.profile.getEmployeeDetailsData(userName).subscribe((data: any) => {
    //     const empId: any = data[0].employeeid;
    //     this.usersDetails = data;
    //   }, (error) => {
    //     console.error('Error fetching users details:', error);
    //   });
    // } else {
    //   alert('Username not found in localStorage');
    // }
  }

  // GetRoles

  getRolesData(): void {
    this.locationService.getRoles().subscribe((data: any[]) => {
      this.roles = data;
    });
  }

  // GetDeapartments

  getDepartmentsData(): void {
    this.locationService.getDepartment().subscribe((data: any[]) => {
      this.departments = data;
    });
  }

  // GetDesignations

  getDesignationsData(): void {
    this.locationService.getDesignation().subscribe((data: any[]) => {
      this.designations = data;
    });
  }

  // GetCountriesDetails

  getCountriesData(): void {
    this.locationService.getCountries().subscribe((data: any[]) => {
      this.countries = data;
    });
  }

  // GetStateDetails

  getStateData(): void {
    if (this.selectedCountry) {
      this.locationService.getStates(this.selectedCountry).subscribe((states: any[]) => {
        this.states = states;
      });
    }
  }

  // GetDistrictDetails

  getDistrictData(selectedState: any): void {
    this.locationService.getDistricts(selectedState).subscribe((districts: any[]) => {
      this.districts = districts;
    });
  }
  
  // AddressRow

  addAddressRow() {
    this.dynamicAddressRow.push({ title: 'Employee Address Details', dateOfBirth:'', placeOfBirth:'', bloodGroup:'', gender:'', maritualStatus:''});
  }

  deleteAddressRow(index: number): void {
    this.dynamicAddressRow.splice(index, 1);
  }

  // LocationRow

  addLocationRow() {
    this.dynamicLocationRow.push({ title: 'Employee Location Details', addressLine1:'', addressLine2:'', country:'', district:'', state:'',pinCode:''});
  }

  deleteLocationRow(index: number): void {
    this.dynamicLocationRow.splice(index, 1);
  }


  // NationalRow

  addNationalRow() {
    this.dynamicNationalRow.push({ title: 'Employee National Details', panNumber:'', aadharNumber:'', voter:'', passport:'', passportStartDate:'', passportExpiryDate:'', passportIssueDate:''});
  }

  deleteNationalRow(index: number): void {
    this.dynamicNationalRow.splice(index, 1);
  }

  // EducationalRow

  addEducationalRow() {
    this.dynamicEducationalRow.push({ title: 'Employee Education Details', institution:'', specialization:'', yearOfJoining:'', yearOfPassout:'', percentage:''});
  }

  deleteEducationalRow(index: number): void {
    this.dynamicEducationalRow.splice(index, 1);
  }

  // TravelRow

  addTravelRow() {
    this.dynamicTravelRow.push({ title: 'Employee Travel Details', country:'', passportNumber:'', issueDate:'', expiryDate:''});
  }

  deleteTravelRow(index: number): void {
    this.dynamicTravelRow.splice(index, 1);
  }

  // EmergencyRow

  addEmergencyRow() {
    this.dynamicEmergencyRow.push({ title: 'Employee Emergency Details', emergencyContactNo:'', emergencyContactName:'', primaryContactNo:'', secondaryContactNo:''});
  }

  deleteEmergencyRow(index: number): void {
    this.dynamicEmergencyRow.splice(index, 1);
  }

  // ExperienceRow

  addRow() {
    this.dynamicArray.push({ title: 'Employee Experience Details', companyName: '', designation: '', startDate: '', endDate: '', lastDrawnCTC:'', payrollCompanyName:'', roles:'' });
  }

  deleteRow(index: number): void {
    this.dynamicArray.splice(index, 1);
  }

}
