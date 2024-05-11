import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  currentTime: Date = new Date();
  greetingMessage: string | null | undefined;
  usersDetails:any[]=[];

  constructor(private profile:UserService) { }

  ngOnInit(): void {
    this.userData();
    this.currentTime = new Date();
    this.setGreetingMessage();
  }

   // userData

   userData() {
    const userName = localStorage.getItem('loginSessId');
    if (userName) {
      this.profile.getEmployeeDetailsData(userName).subscribe((data: any) => {
        this.usersDetails = data;
      }, (error) => {
        console.error('Error fetching users details:', error);
      });
    } else {
      alert('Username not found in localStorage');
    }
  }

  setGreetingMessage() {
    const currentHour = this.currentTime.getHours();

    if (currentHour >= 5 && currentHour < 12) {
      this.greetingMessage = 'Good morning';
    } else if (currentHour >= 12 && currentHour < 17) {
      this.greetingMessage = 'Good afternoon';
    } else {
      this.greetingMessage = 'Good evening';
    }
  }


  //  downloadPDF() {
  //   const doc = new jsPDF();
  //   doc.text('Hello, this is a PDF!', 10, 10);
  //   doc.save('example.pdf');
  // }

  // let x= document.getElementById('downloadBtn');
  //     x.addEventListener('click', downloadPDF);

}
