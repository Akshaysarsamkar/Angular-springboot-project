import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { LoginData, SignupData } from '../../models/auth';
import { APIENDPOINTS } from '../../core/enums/apiEndPoints';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  apiendpoints = APIENDPOINTS
  constructor(private http: HttpClient) { }

  userSignup(signupData: SignupData) {
    const Url = this.apiendpoints.SIGNUP
    return this.http.post(Url, signupData);
  }

  userLogin(logindata: LoginData) {
    const Url = this.apiendpoints.LOGIN
    return this.http.post(Url, logindata);
  }

  setUserdata(userdata: any) {
    localStorage.setItem('userdata', JSON.stringify(userdata));
  }

  getUserdata() {
    const userdata = localStorage.getItem('userdata');
    if (userdata) {return JSON.parse(userdata);}
    return null;
  }

  clearUserdata() {
    localStorage.removeItem('userdata');
  }

  static userRole(){
    const userdata = localStorage.getItem('userdata');
    if (userdata) {
      const parsedData = JSON.parse(userdata);
      return parsedData.role;
    }
    return null;
  }

  static isAdminLoggedIn() {
    const userdata = localStorage.getItem('userdata');
    if (userdata) {
      const parsedData = JSON.parse(userdata);
      return parsedData.role === 'ADMIN';
    }
    return false;
  }

  static isUserLoggedIn() {
    const userdata = localStorage.getItem('userdata');
    if (userdata) {
      const parsedData = JSON.parse(userdata);
      return parsedData.role === 'CUSTOMER';
    }
    return false;
  }



}
