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
  personalDetails:any;
  locationDetailsTemp:any;
  nationalIdDetails:any;
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
    // this.profile.getProfileData().subscribe((data:any)=>{
    //   console.log(data,'daaata');
    //   this.usersDetails = data;
    //   this.usersDetails=data['usersDetails'][0];
    // },(error) => {
    //   console.error('Error fetching users details:', error);
    // });
  }

  // personalDetails

  personalData(){
    // this.profile.getUserData().subscribe((data:any)=>{
    //   this.personalDetails=data['personalDetails'][1];
    // },(error) => {
    //   console.error('Error fetching Personal details:', error);
    // });
  }

  // locationData 

  locationData(){
    // this.profile.getUserData().subscribe((data:any)=>{
    //   this.locationDetailsTemp=data['locationDetailsTemp'][0];
    // },(error) => {
    //   console.error('Error fetching Personal details:', error);
    // });
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
