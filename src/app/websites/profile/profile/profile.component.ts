import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  usersDetails:any[]=[];
  travelDetails:any[]=[];
  personalDetails:any[]=[];
  locationDetailsTemp:any[]=[];
  nationalIdDetails:any[]=[];
  experienceDetails:any[]=[];
  contactDetails:any;
  educationDetails:any[]=[];

  constructor(private profile:UserService) { }

  ngOnInit(): void {
    this.travelData();
    this.personalData();
    this.locationData();
    this.nationalIdData();
    this.experienceData();
    this.contactData();
    this.educationData();
    this.userData();
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

  // contactData

  contactData(){
    // this.profile.getUserData().subscribe((data:any)=>{
    //   this.contactDetails=data['contactDetails'][0];
    // },(error) => {
    //   console.error('Error fetching contact details:', error);
    // });
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


  // TravelData

  travelData(){
    let empID = 1;
     this.profile.getTravelData(empID).subscribe((data:any)=>{
      this.travelDetails=data;
    },(error) => {
      console.error('Error fetching travel details:', error);
    });
  }

}
