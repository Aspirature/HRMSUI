import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from './user.service';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  // private readonly AUTH_FLAG_KEY = 'isLoggedIn';

  private isAuthenticated: boolean = false;
  employeeUserName:any;

  constructor(private router:Router,private http:HttpClient,private profile: UserService) { }

  loginUrl:any = 'https://localhost:7003/api/User/getUserAsync?userName=';
  
  login(userName: string, password: string): boolean {
    if(this.http.get(this.loginUrl + userName + '&password=' + password )){
      this.employeeUserName=userName;
      localStorage.setItem('loginSessId', this.employeeUserName);
      this.isAuthenticated = true;
      this.userData();
      return true;
    }
    return false;
  }

  userData() {
    const userName = localStorage.getItem('loginSessId');
    if (userName) {
      this.profile.getEmployeeDetailsData(userName).subscribe((data: any) => {
        const empId: any = data[0].employeeid;
        localStorage.setItem('employeeId', empId);
      }, (error) => {
        console.error('Error fetching users details:', error);
      });
    } else {
      alert('Username not found in localStorage');
    }
  }

  logout(): void {
    this.isAuthenticated = false;
    this.router.navigate(['/']);
  }

  isLoggedIn(): boolean {
    return this.isAuthenticated;
  }
}
