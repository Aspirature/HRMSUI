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

  empIdLatest: string = "";

  constructor(private profile:UserService) { }

  ngOnInit(): void {
    this.userData();
  }

  // userData

  userData(){
    const userName = localStorage.getItem('loginSessId');
    if (userName) {
      this.profile.getEmployeeDetailsData(userName).subscribe((data: any) => {
        const empId: any = data[0].employeeid;
        this.personalData(empId);
        this.nationalIdData(empId);
        this.experienceData(empId);
        this.locationData(empId);
        this.educationData(empId);
        this.usersDetails = data;
      }, (error) => {
        console.error('Error fetching users details:', error);
      });
    } else {
      alert('Username not found in localStorage');
    }
  }

  changeTab(tabName: string) {
    this.currentTab = tabName;
  }

  changeSubTab(subTab: string) {
    this.currentSubTab1 = subTab;
}

changeSubTab1(subTab: string) {
  this.currentSubTab2 = subTab;
}

changeSubTab2(subTab: string) {
  this.currentSubTab4 = subTab;
}

  // personalDetails

  personalData(empId:any){
    this.profile.getProfileData(empId).subscribe((data:any)=>{
      this.personalDetails=data;
    },(error) => {
      console.error('Error fetching Personal details:', error);
    });
  }

  // locationData 

  locationData(empId:any){
    this.profile.getLocationData(empId).subscribe((data:any)=>{
      this.locationDetailsTemp=data;
    },(error) => {
      console.error('Error fetching Personal details:', error);
    });
  }

  // nationalId

  nationalIdData(empId:any){
    this.profile.getNationalData(empId).subscribe((data:any)=>{
      this.nationalIdDetails=data;
    },(error) => {
      console.error('Error fetching NationalId details:', error);
    });
  }

  // experienceData

  experienceData(empId:any){
    this.profile.getExperienceData(empId).subscribe((data:any)=>{
      this.experienceDetails=data;
    },(error) => {
      console.error('Error fetching Experience details:', error);
    });
  }

  // educationData

  educationData(empId:any){
    this.profile.getEducationData(empId).subscribe((data:any)=>{
      this.educationDetails = data;
    },(error) => {
      console.error('Error fetching education details:', error);
    });
  }

}
