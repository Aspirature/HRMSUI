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

  constructor(private rtc:Router, public userS:UserService,public loginService:LoginService) { }

  ngOnInit(): void {
    this.openNav();
    this.closeNav();
    this.logout();
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
    this.loginService.logout();
  }

}
