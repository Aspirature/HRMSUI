import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user.service';
import { viewAssignService } from 'src/app/services/viewAssign.service';

@Component({
  selector: 'app-profiledetails',
  templateUrl: './profiledetails.component.html',
  styleUrls: ['./profiledetails.component.css']
})
export class ProfiledetailsComponent implements OnInit {

  personalDetails:any[]=[];
  locationDetailsTemp:any[]=[];
  usersDetails:any[]=[];
  currentTab: string = 'tab1';
  currentSubTab1:string = 'tab5';
  currentSubTab2:string='tab10';
  currentSubTab4:string = 'tab13';
  currentSubTab: string = '';
  nationalIdDetails:any[]=[];
  experienceDetails:any[]=[];
  educationDetails:any[]=[];

  constructor(private profile:UserService,private viewAssign:viewAssignService) { }

  ngOnInit(): void {
    this.personalData();
    this.nationalIdData();
    this.experienceData();
    this.locationData();
    this.userData();
    this.educationData();
  }

  // userData

  userData(){
    let empId = 1;
    this.profile.getEmployeeDetailsData(empId).subscribe((data:any)=>{
      this.usersDetails = data;
    },(error) => {
      console.error('Error fetching users details:', error);
    });
  }

  changeTab(tabName: string) {
    this.currentTab = tabName;
  }

  changeSubTab(subTab: string): void {
    this.currentSubTab = subTab;
}

  // personalDetails

  personalData(){
    let empId=1;
    this.profile.getProfileData(empId).subscribe((data:any)=>{
      this.personalDetails=data;
    },(error) => {
      console.error('Error fetching Personal details:', error);
    });
  }

  // locationData 

  locationData(){
    let empId = 1;
    this.profile.getLocationData(empId).subscribe((data:any)=>{
      this.locationDetailsTemp=data;
    },(error) => {
      console.error('Error fetching Personal details:', error);
    });
  }

  // nationalId

  nationalIdData(){
    let empId = 1;
    this.profile.getNationalData(empId).subscribe((data:any)=>{
      this.nationalIdDetails=data;
    },(error) => {
      console.error('Error fetching NationalId details:', error);
    });
  }

  // experienceData

  experienceData(){
    let empID = 1;
    this.profile.getExperienceData(empID).subscribe((data:any)=>{
      this.experienceDetails=data;
    },(error) => {
      console.error('Error fetching Experience details:', error);
    });
  }

  // educationData

  educationData(){
    let empID = 1;
    this.profile.getEducationData(empID).subscribe((data:any)=>{
      this.educationDetails = data;
    },(error) => {
      console.error('Error fetching education details:', error);
    });
  }

}
