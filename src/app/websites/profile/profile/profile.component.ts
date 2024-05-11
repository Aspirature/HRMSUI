import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  usersDetails: any[] = [];
  travelDetails: any[] = [];
  personalDetails: any[] = [];
  locationDetailsTemp: any[] = [];
  nationalIdDetails: any[] = [];
  experienceDetails: any[] = [];
  contactDetails: any;
  educationDetails: any[] = [];


  constructor(private profile: UserService) {
  }


  ngOnInit(): void {
    this.userData();
  }

  // userData

  userData() {
    const userName = localStorage.getItem('loginSessId');
    if (userName) {
      this.profile.getEmployeeDetailsData(userName).subscribe((data: any) => {
        const empId: any = data[0].employeeid;
        this.personalData(empId);
        this.travelData(empId);
        this.locationData(empId);
        this.nationalIdData(empId);
        this.experienceData(empId);
        this.educationData(empId);
        this.usersDetails = data;
      }, (error) => {
        console.error('Error fetching users details:', error);
      });
    } else {
      alert('Username not found in localStorage');
    }
  }

  // personalDetails

  personalData(empId: any) {
    this.profile.getProfileData(empId).subscribe((data: any) => {
      this.personalDetails = data;
    }, (error) => {
      console.error('Error fetching Personal details:', error);
    });
  }

  // locationData 

  locationData(empId: any) {
    this.profile.getLocationData(empId).subscribe((data: any) => {
      this.locationDetailsTemp = data;
    }, (error) => {
      console.error('Error fetching Personal details:', error);
    });
  }

  // nationalId

  nationalIdData(empId: any) {
    this.profile.getNationalData(empId).subscribe((data: any) => {
      this.nationalIdDetails = data;
    }, (error) => {
      console.error('Error fetching NationalId details:', error);
    });
  }

  // experienceData

  experienceData(empId: any) {
    this.profile.getExperienceData(empId).subscribe((data: any) => {
      this.experienceDetails = data;
    }, (error) => {
      console.error('Error fetching Experience details:', error);
    });
  }

  // educationData

  educationData(empId: any) {
    this.profile.getEducationData(empId).subscribe((data: any) => {
      this.educationDetails = data;
    }, (error) => {
      console.error('Error fetching education details:', error);
    });
  }


  // TravelData

  travelData(empId: any) {
    this.profile.getTravelData(empId).subscribe((data: any) => {
      this.travelDetails = data;
    }, (error) => {
      console.error('Error fetching travel details:', error);
    });
  }

}
