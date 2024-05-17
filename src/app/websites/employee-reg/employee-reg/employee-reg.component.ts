import { Component, OnInit } from '@angular/core';
import { DynamicEducationalRow, DynamicEmergencyRow, DynamicNationalRow, DynamicTravelRow } from './emp-re.model';
import { LocationsService } from 'src/app/services/locations.service';
import { PosturlsService } from 'src/app/services/posturls.service';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { EmployeeDetails, DynamicAddressRow, DynamicExperienceElement } from './emp-re.model';

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


  myFormEmployeeDetails!: FormGroup<any>;
  myFormAddressDetails!: FormGroup<any>;
  myFormNationalDetails!: FormGroup<any>;
  myFormEducationDetails!: FormGroup<any>;
  myFormExperienceDetails!: FormGroup<any>;
  myFormTravelDetails!: FormGroup<any>;
  myFormEmergencyDetails!: FormGroup<any>;


  empDetails!: EmployeeUserDetails;

  countries: any[] = [];
  states: any[] = [];
  districts: any[] = [];
  roles: any[] = [];
  departments: any[] = [];
  designations: any[] = [];
  selectedCountry: any;
  selectedState: any;
  usersDetails: any[] = [];

  dynamicArray: DynamicExperienceElement[] = [];
  dynamicAddressRow: DynamicAddressRow[] = [];
  dynamicNationalRow: DynamicNationalRow[] = [];
  dynamicEducationalRow: DynamicEducationalRow[] = [];
  dynamicTravelRow: DynamicTravelRow[] = [];
  dynamicEmergencyRow: DynamicEmergencyRow[] = [];
  userId: number = 0;
  countryid: number=0;
  stateid: number=0;
  districtid: number=0;
  homeManagerId: number = 0;
  departmentId: number = 0;
  designationId: number = 0;
  roleId:  number = 0;
  percentage:number=0;
  newlyAddedEmployeeId:number | undefined ;
  totalyearsexp:number = 0;
  lastdrawncts:number = 0;


  constructor(private locationService: LocationsService, private postUrl: PosturlsService, private fb: FormBuilder) { 

  }

  ngOnInit(): void {
    // this.myFormAddressDetails = this.fb.group({
    //   countries: [null],
    //   states: [null],
    //   districts: [null]
    // });

    
    this.getRolesData();
    this.getDepartmentsData();
    this.getDesignationsData();
    this.loadCountries();

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

    // AddressDeatils

    this.myFormAddressDetails = new FormGroup({
      addresstype: new FormControl('', Validators.required),
      address: new FormControl('', Validators.required),
      addresslinE1: new FormControl('', Validators.required),
      addresslinE2: new FormControl('', Validators.required),
      pincode: new FormControl('', Validators.required),
      countryid: new FormControl('', Validators.required),
      stateid: new FormControl('', Validators.required),
      districtid: new FormControl('', Validators.required),
      country: new FormControl('', Validators.required),
      state: new FormControl('', Validators.required),
      districtname: new FormControl('', Validators.required),
      
    });

    // NationalDetails

    this.myFormNationalDetails = new FormGroup({
      pannumber: new FormControl('', Validators.required),
      addharnumber: new FormControl('', Validators.required),
      voternumber: new FormControl('', Validators.required),
      passportnumber: new FormControl('', Validators.required),
      passportexpdate: new FormControl('', Validators.required),
      passportstartdate: new FormControl('', Validators.required),
      passportissueoffice: new FormControl('', Validators.required),
    })

    // TravelDetails

    this.myFormTravelDetails = new FormGroup({
      // employeenationalid: new FormControl('', Validators.required),
      pannumber: new FormControl('', Validators.required),
      addharnumber: new FormControl('', Validators.required),
      voternumber: new FormControl('', Validators.required),
      passportnumber: new FormControl('', Validators.required),
      passportexpdate: new FormControl('', Validators.required),
      passportstartdate: new FormControl('', Validators.required),
      passportissueoffice: new FormControl('', Validators.required),
    });


    // EmergencyDetails

    this.myFormEmergencyDetails = new FormGroup({
      // employeePersonalId: new FormControl('', Validators.required),
      dateOfBirth: new FormControl('', Validators.required),
      placeOfBirth: new FormControl('', Validators.required),
      bloodGroup: new FormControl('', Validators.required),
      primaryPhNo: new FormControl('', Validators.required),
      secondaryPhNo: new FormControl('', Validators.required),
      emergencyContactName: new FormControl('', Validators.required),
      emergencyPhNo: new FormControl('', Validators.required),
      emergencyContactRelation: new FormControl('', Validators.required)
    });

  }

  // GetCountriesDetails

  loadCountries(): void {
    this.locationService.getCountries().subscribe(data => {
      this.countries = data;
    });
  }

  onCountryChange(): void {
    const countryId = this.myFormAddressDetails.get('country')?.value;
    this.countryid = countryId;
    if (countryId) {
      this.locationService.getStates(countryId).subscribe(data => {
        this.states = data;
        this.districts = [];
      });
    } else {
      this.states = [];
      this.districts = [];
    }
  }

  getDistrictData(): void {
    const stateId = this.myFormAddressDetails.get('state')?.value;
    this.stateid = stateId;
    if (stateId) {
      this.locationService.getDistricts(stateId).subscribe(data => {
        this.districts = data;
      });
    } else {
      this.districts = [];
    }
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
      if(this.userId != 0){
        const empDetails: EmployeeDetails = {
          employeeid: 0,
          username: this.myFormEmployeeDetails.controls['userName']?.value,
          firstname: this.myFormEmployeeDetails.controls['firstName']?.value,
          lastname: this.myFormEmployeeDetails.controls['lastName']?.value,
          age: Number(this.myFormEmployeeDetails.controls['age']?.value),
          dateofbirth: this.myFormEmployeeDetails.controls['dateofbirth']?.value,
          gender: this.myFormEmployeeDetails.controls['gender']?.value,
          materialstatus: this.myFormEmployeeDetails.controls['materialStatus']?.value,
          personalEmail: this.myFormEmployeeDetails.controls['personalEmail']?.value,
          officialEmail: this.myFormEmployeeDetails.controls['officialEmail']?.value,
          userid: this.userId,
          roleId: Number(this.roleId),
          designation: this.designations.filter(x=>x.designationId == this.designationId)[0]['designatioName'],
          department: this.departments.filter(x=>x.departmentId == this.departmentId)[0]['departmentName'],
          homeManagerId:  Number(this.myFormEmployeeDetails.controls['homeManagerId']?.value),
          departmentId: Number(this.departmentId),
          designationId: Number(this.designationId)
        }
  
        console.log(empDetails, ' this.myFormEmployeeDetails.value');
        this.postUrl.submitUser(empDetails)
          .subscribe(
            response => {
              console.log('Form submitted successfully!', response);
              console.log(this.newlyAddedEmployeeId);
              this.newlyAddedEmployeeId=Number(response);
              this.myFormEmployeeDetails.reset();
            },
            error => {
              console.error('Error submitting form:', error);
            }
          );
      }
    }, error => {
      console.error('Error:', error);
    });
  }

  // EmployeeDetails

  submitForm() {
    console.log(this.myFormEmployeeDetails.valid, ' this.myFormEmployeeDetails.valid1');
    if (this.myFormEmployeeDetails.valid) {
      this.addUserData();
      
    } else {
      console.log('Form is invalid. Please fill in all required fields.');
    }
  }

  // AddressRow

  addAddressRow() {
    this.dynamicAddressRow.push({
       addresstype: '', address: '', addresslinE1: '', addresslinE2: '', pincode: '', country: '', state: '', districtname: '',
      employeeaddressid: 0,
      employeeid: 0,
      countryid: 0,
      stateid: 0,
      districtid: 0
    });
  }

  submitAddressRow() {
    console.log(this.myFormAddressDetails.valid, 'this.myFormAddressDetails.valid');

    if (this.myFormAddressDetails.valid) {

      const addressDetails: DynamicAddressRow = {
        employeeaddressid: 0,
        addresstype: this.myFormAddressDetails.controls['addresstype']?.value,
        address: this.myFormAddressDetails.controls['address']?.value,
        addresslinE1: this.myFormAddressDetails.controls['addresslinE1']?.value,
        addresslinE2: this.myFormAddressDetails.controls['addresslinE2']?.value,
        pincode: this.myFormAddressDetails.controls['pincode']?.value,
         employeeid: Number(this.newlyAddedEmployeeId),
        // employeeid: 16,
        countryid: this.countryid,
        stateid: this.stateid,
        districtid: this.districtid,
        country: this.countries.find(x => x.countryid == this.countryid)?.country,
        state: this.states.find(x => x.stateid == this.stateid)?.state,
        districtname: this.districts.find(x => x.districtid == this.districtid)?.districtname
      }

      console.log(addressDetails, 'addressDetails');

      this.postUrl.addressDetails(addressDetails)
        .subscribe(
          response => {
            console.log('Form submitted successfully!', response);
            this.myFormAddressDetails.reset();
          },
          error => {
            console.error('Error submitting form:', error);
          }
        );

    } else {
      console.log('Form is invalid. Please fill in all required fields.');
    }

  }

  deleteAddressRow(index: number): void {
    this.dynamicAddressRow.splice(index, 1);
  }


  // NationalRow

  addNationalRow() {
    this.dynamicNationalRow.push({
      pannumber: '', addharnumber: '',
      voternumber: '', passportnumber: '', passportexpdate: '', passportstartdate: '',
      passportissueoffice: '', employeeid: 0,
      employeenationalid: 0
    });
  }

  submitNationalRow() {
    console.log(this.myFormNationalDetails.valid, 'this.myFormNationalDetails.valid');

    if (this.myFormNationalDetails.valid) {

      const nationalDetails: DynamicNationalRow = {
        employeenationalid: 0,
        pannumber: this.myFormNationalDetails.controls['pannumber']?.value,
        addharnumber: this.myFormNationalDetails.controls['addharnumber']?.value,
        voternumber: this.myFormNationalDetails.controls['voternumber']?.value,
        passportnumber: this.myFormNationalDetails.controls['passportnumber']?.value,
        passportexpdate: this.myFormNationalDetails.controls['passportexpdate']?.value,
        passportstartdate: this.myFormNationalDetails.controls['passportstartdate']?.value,
        passportissueoffice: this.myFormNationalDetails.controls['passportissueoffice']?.value,
        employeeid: Number(this.newlyAddedEmployeeId)
      }

      console.log(nationalDetails, 'nationalDetails');

      this.postUrl.nationalDetails(nationalDetails)
        .subscribe(
          response => {
            console.log('Form National Details successfully!', response);
            this.myFormNationalDetails.reset();
          },
          error => {
            console.error('Error submitting form:', error);
          }
        );

    } else {
      console.log('Form is invalid. Please fill in all required fields.');
    }
  }

  deleteNationalRow(index: number): void {
    this.dynamicNationalRow.splice(index, 1);
  }

  // EducationalRow

  addEducationalRow() {
    this.dynamicEducationalRow.push({
      coursename: '', institutionname: '',
      dateofjoined: '', dateofpassedout: '', percentage: 0,
      employeeeducationalid: 0,
      institutionaddress: '',
      employeeid: 0
    });
  }

  submitEductaionalRow() {
    console.log(this.myFormEducationDetails.valid, 'this.myFormEducationDetails.valid');

    if (this.myFormEducationDetails.valid) {

      const eductaionalDetails: DynamicEducationalRow = {
        employeeeducationalid: 0,
        coursename: this.myFormEducationDetails.controls['coursename']?.value,
        institutionname: this.myFormEducationDetails.controls['institutionname']?.value,
        dateofjoined: this.myFormEducationDetails.controls['dateofjoined']?.value,
        dateofpassedout: this.myFormEducationDetails.controls['dateofpassedout']?.value,
        percentage: this.percentage,
        institutionaddress: this.myFormEducationDetails.controls['institutionaddress']?.value,
        employeeid: Number(this.newlyAddedEmployeeId)
      }

      console.log(eductaionalDetails, 'eductaionalDetails');

      this.postUrl.educationalDetails(eductaionalDetails)
        .subscribe(
          response => {
            console.log('Form EductaionalDetails successfully!', response);
            this.myFormNationalDetails.reset();
          },
          error => {
            console.error('Error submitting form:', error);
          }
        );

    } else {
      console.log('Form is invalid. Please fill in all required fields.');
    }
  }

  deleteEducationalRow(index: number): void {
    this.dynamicEducationalRow.splice(index, 1);
  }

  // ExperienceRow

  addRow() {
    this.dynamicArray.push({
       companyname: '', designation: '',
      startdate: '', enddate: '', totalyearsexp: 0, employeeexperienceid: 0, employeeid: 0,
      lastdrawncts: 0
    });
  }

  deleteRow(index: number): void {
    this.dynamicArray.splice(index, 1);
  }

  submitExperienceRow() {
    console.log(this.myFormExperienceDetails.valid, 'this.myFormExperienceDetails.valid');

    if (this.myFormExperienceDetails.valid) {

      const experienceDetails: DynamicExperienceElement = {
        employeeexperienceid: 0,
        companyname: this.myFormExperienceDetails.controls['companyname']?.value,
        designation: this.myFormExperienceDetails.controls['designation']?.value,
        startdate: this.myFormExperienceDetails.controls['startdate']?.value,
        enddate: this.myFormExperienceDetails.controls['enddate']?.value,
        totalyearsexp: this.totalyearsexp,
        lastdrawncts: this.lastdrawncts,
        employeeid: Number(this.newlyAddedEmployeeId),
      }

      console.log(experienceDetails, 'experienceDetails');

      this.postUrl.experienceDetails(experienceDetails)
        .subscribe(
          response => {
            console.log('Form ExperienceDetails successfully!', response);
            this.myFormExperienceDetails.reset();
          },
          error => {
            console.error('Error submitting form:', error);
          }
        );

    } else {
      console.log('Form is invalid. Please fill in all required fields.');
    }
  }

  // TravelRow

  addTravelRow() {
    this.dynamicTravelRow.push({
      pannumber: '', addharnumber: '',
      voternumber: '', passportnumber: '', passportstartdate: '', passportexpdate: '', passportissueoffice: '',
      employeenationalid: 0,
      employeeid: 0
    });
  }

  deleteTravelRow(index: number): void {
    this.dynamicTravelRow.splice(index, 1);
  }

  submitTravelRow() {
    console.log(this.myFormTravelDetails.valid, 'this.myFormTravelDetails.valid');

    if (this.myFormTravelDetails.valid) {

      const travelDetails: DynamicTravelRow = {
        employeenationalid: 0,
        pannumber: this.myFormTravelDetails.controls['pannumber']?.value,
        addharnumber: this.myFormTravelDetails.controls['addharnumber']?.value,
        voternumber: this.myFormTravelDetails.controls['voternumber']?.value,
        passportnumber: this.myFormTravelDetails.controls['passportnumber']?.value,
        passportstartdate: this.myFormTravelDetails.controls['passportstartdate']?.value,
        passportexpdate: this.myFormTravelDetails.controls['passportexpdate']?.value,
        passportissueoffice: this.myFormTravelDetails.controls['passportissueoffice']?.value,
        employeeid: Number(this.newlyAddedEmployeeId)
      }

      console.log(travelDetails, 'travelDetails');

      this.postUrl.travelDetails(travelDetails)
        .subscribe(
          response => {
            console.log('Form TravelDetails successfully!', response);
            this.myFormTravelDetails.reset();
          },
          error => {
            console.error('Error submitting form:', error);
          }
        );

    } else {
      console.log('Form is invalid. Please fill in all required fields.');
    }
  }


  // EmergencyRow

  addEmergencyRow() {
    this.dynamicEmergencyRow.push({
      dateOfBirth: '', placeOfBirth: '', bloodGroup: '', primaryPhNo: '', secondaryPhNo: '', emergencyContactName: '', emergencyPhNo: '', emergencyContactRelation: '',
      employeePersonalId: 0,
      employeeId: 0
    });
  }

  deleteEmergencyRow(index: number): void {
    this.dynamicEmergencyRow.splice(index, 1);
  }


  submitEmergencyRow() {
    console.log(this.myFormEmergencyDetails.valid, 'this.myFormEmergencyDetails.valid');

    if (this.myFormEmergencyDetails.valid) {

      const emergencyDetails: DynamicEmergencyRow = {
        employeePersonalId: this.myFormEmergencyDetails.controls['employeePersonalId']?.value,
        dateOfBirth: this.myFormEmergencyDetails.controls['dateOfBirth']?.value,
        placeOfBirth: this.myFormEmergencyDetails.controls['placeOfBirth']?.value,
        employeeId: Number(this.newlyAddedEmployeeId),
        bloodGroup: this.myFormEmergencyDetails.controls['bloodGroup']?.value,
        primaryPhNo: this.myFormEmergencyDetails.controls['primaryPhNo']?.value,
        secondaryPhNo: this.myFormEmergencyDetails.controls['secondaryPhNo']?.value,
        emergencyContactName: this.myFormEmergencyDetails.controls['emergencyContactName']?.value,
        emergencyPhNo: this.myFormEmergencyDetails.controls['emergencyPhNo']?.value,
        emergencyContactRelation: this.myFormEmergencyDetails.controls['emergencyContactRelation']?.value
      }

      console.log(emergencyDetails, 'emergencyDetails');

      this.postUrl.emergencyDetails(emergencyDetails)
        .subscribe(
          response => {
            console.log('Form EmergencyDetails successfully!', response);
            this.myFormEmergencyDetails.reset();
          },
          error => {
            console.error('Error submitting form:', error);
          }
        );

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
