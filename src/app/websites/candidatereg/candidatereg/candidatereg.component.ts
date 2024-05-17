import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { PosturlsService } from 'src/app/services/posturls.service';
import { EmployeeDetails } from '../../employee-reg/employee-reg/emp-re.model';
import { LocationsService } from 'src/app/services/locations.service';


interface EmployeeUserDetails {
  userid: number;
  username: string;
  password: string;
  isactive: boolean;
}

@Component({
  selector: 'app-candidatereg',
  templateUrl: './candidatereg.component.html',
  styleUrls: ['./candidatereg.component.css']
})
export class CandidateregComponent implements OnInit {

  departments: any[] = [];
  designations: any[] = [];
  roles: any[] = [];
  empDetails!: EmployeeUserDetails;
  userId: any;
  countryid: any;
  stateid: any;
  districtid: any;
  employeeid: number = 0;
  homeManagerId: number = 0;
  departmentId: number = 0;
  designationId: number = 0;
  roleId:  number = 0;
  percentage:number=0;


  myFormEmployeeDetails!: FormGroup<any>;
  
  constructor(private locationService: LocationsService,private postUrl: PosturlsService) { }

  ngOnInit(): void {

    this.getRolesData();
    this.getDepartmentsData();
    this.getDesignationsData();

     // EmployeeDetails

     this.myFormEmployeeDetails = new FormGroup({
      // employeeid: new FormControl('', Validators.required),
      userName: new FormControl('', Validators.required),
      firstName: new FormControl('', Validators.required),
      lastName: new FormControl('', Validators.required),
      age: new FormControl('', Validators.required),
      dateofbirth: new FormControl('', Validators.required),
      // mobile: new FormControl('', Validators.required),
      gender: new FormControl('', Validators.required),
      materialStatus: new FormControl('', Validators.required),
      personalEmail: new FormControl('', Validators.required),
      officialEmail: new FormControl('', Validators.required),
      // userId:this.userId,
      // roleId:this.roleId,
      department: new FormControl('', Validators.required),
      designation: new FormControl('', Validators.required),
      homeManagerId: new FormControl('', Validators.required),
      managerName: new FormControl('', Validators.required),
      // departmentId: new FormControl('', Validators.required),
      // designationId: new FormControl('', Validators.required),
      roles: new FormControl('', Validators.required),
    });
  }

  changeRole(data: any) {
    this.roleId = data;
  }

  changeDepartment(data: any) {
    this.departmentId = data;
  }

  changeDesignation(data: any) {
    this.designationId = data;
  }

  addUserData() {
    const username = this.myFormEmployeeDetails.controls['userName']?.value;

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

    this.postUrl.addUser(this.empDetails).subscribe((data: any) => {
      this.userId = data;
      console.log(this.userId, 'userId');
    }, error => {
      console.error('Error:', error);
    });
  }

  // EmployeeDetails

  submitForm() {
    console.log(this.myFormEmployeeDetails.valid, ' this.myFormEmployeeDetails.valid1');
    if (this.myFormEmployeeDetails.valid) {
      this.addUserData();
      // this.myFormEmployeeDetails.setValue({userId:this.userId});

      const empDetails: EmployeeDetails = {
        employeeid: 0,
        username: this.myFormEmployeeDetails.controls['userName']?.value,
        firstname: this.myFormEmployeeDetails.controls['firstName']?.value,
        lastname: this.myFormEmployeeDetails.controls['lastName']?.value,
        age: this.myFormEmployeeDetails.controls['age']?.value,
        dateofbirth: this.myFormEmployeeDetails.controls['dateofbirth']?.value,
        gender: this.myFormEmployeeDetails.controls['gender']?.value,
        materialstatus: this.myFormEmployeeDetails.controls['materialStatus']?.value,
        personalEmail: this.myFormEmployeeDetails.controls['personalEmail']?.value,
        officialEmail: this.myFormEmployeeDetails.controls['officialEmail']?.value,
        userid: this.userId,
        roleId: Number(this.roleId),
        designation: this.myFormEmployeeDetails.controls['designation']?.value,
        department: this.myFormEmployeeDetails.controls['department']?.value,
        homeManagerId: this.myFormEmployeeDetails.controls['homeManagerId']?.value,
        departmentId: Number(this.departmentId),
        designationId: Number(this.designationId)
      }

      console.log(empDetails, ' this.myFormEmployeeDetails.value');
      // this.postUrl.submitUser(empDetails)
      //   .subscribe(
      //     response => {
      //       console.log('Form submitted successfully!', response);
      //       this.myFormEmployeeDetails.reset();
      //     },
      //     error => {
      //       console.error('Error submitting form:', error);
      //     }
      //   );
    } else {
      console.log('Form is invalid. Please fill in all required fields.');
    }
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

}
