import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  // private readonly AUTH_FLAG_KEY = 'isLoggedIn';

  private isAuthenticated: boolean = false;

  constructor(private router:Router,private http:HttpClient) { }

  loginUrl:any = 'https://localhost:7003/api/User/getUserAsync?userName=';

  // getUserData() {
  //   let url = 'https://localhost:7003/api/User/getUserAsync?userName=pradeep&password=pradeep'
  //   return this.http.get(url);
  // }

  getUser(userName: string, password: string) {
    return this.http.get(this.loginUrl + userName + '&password=' + password );
  }

  login(userName: string, password: string): boolean {
    if(this.http.get(this.loginUrl + userName + '&password=' + password )){
      // localStorage.setItem(this.AUTH_FLAG_KEY, 'true');
      this.isAuthenticated = true;
      return true;
    }
    return false;
  }

  logout(): void {
    this.isAuthenticated = false;
    this.router.navigate(['/']);
  }

  isLoggedIn(): boolean {
    return this.isAuthenticated;
  }
}
