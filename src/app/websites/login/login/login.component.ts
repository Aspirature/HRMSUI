import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user.service';
import { FormGroup, FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginService } from 'src/app/services/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  username: string = '';
  password: string = '';

  usersDetails:any;

  constructor(private loginService: LoginService, private router: Router, private userService:UserService) { }

  ngOnInit(): void {
  }

  // userData

  userData(): void {
    if (this.loginService.login(this.username, this.password)) {
      this.router.navigate(['/home']);
    } else {
      alert("Invalid username or password");
    }
  }


}
