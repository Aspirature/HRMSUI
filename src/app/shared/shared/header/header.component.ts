import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from 'src/app/services/login.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  isInputVisible: boolean = false;
  usersDetails:any[]=[];

  constructor(private rtc:Router, public profile:UserService,public loginService:LoginService) { }

  ngOnInit(): void {
    this.userData();
    this.openNav();
    this.closeNav();
    this.logout();
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

  toggleInputVisibility(): void {
    this.isInputVisible = !this.isInputVisible;
  }
  
   openNav() {
    let x:any = document.getElementById("mySidenav");
    x.style.width = "33%";
    let a:any = document.getElementById("main");
    a.style.marginLeft = "250px";
    let b:any = document.body.style.backgroundColor = "rgba(0,0,0,0.4)";
  }
  
   closeNav() {
    let y:any = document.getElementById("mySidenav");
    y.style.width = "0";
    let c:any = document.getElementById("main");
    c.style.marginLeft = "0";
    let d:any = document.body.style.backgroundColor = "white";
  }

  logout(){
    localStorage.removeItem('loginSessId');
    this.loginService.logout();
  }

}
