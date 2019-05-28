/**
 * Copyright Rinzin Chopel Negi
 */
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { FB_APPID, SERVER_URI, FB_API_VERSION } from '../variables';
declare const FB: any;

@Injectable({
  providedIn: 'root'
})

export class UserService {

  constructor(private http: HttpClient) {
    FB.init({
      appId      : FB_APPID,
      cookie     : true,
      xfbml      : true,
      version    : FB_API_VERSION
    });
  }

  setToken(userId: string, token: string) {
    localStorage.setItem('userId', userId);
    localStorage.setItem('auth', token);
  }

  removeToken() {
    localStorage.removeItem('userId');
    localStorage.removeItem('auth');
  }

  getToken() {
    const token: string = localStorage.getItem('auth');
    return token;
  }

  getUserId() {
    const userId: string = localStorage.getItem('userId');
    return userId;
  }

  fbLogin(){
    return new Promise((resolve, reject) => {
      FB.login(res => {
        if(res.authResponse){
          this.http.post<any>(SERVER_URI + 'Oauth/', {access_token: res.authResponse.accessToken}, {observe: 'response'})
          .toPromise().then(response => {
            this.setToken(response.body.UserId, response.headers.get('x-auth-token'));
            resolve(res);
          }).catch((err) => {
            console.log(err);
            reject(res);
          });
        }
        else{
          reject(res);
        }
      })
    });
  }

  logout(){
    return new Promise((resolve, reject) => {
      FB.logout(response => {
        if(response) {
          this.removeToken();
          resolve(true);
        }
        else {
          reject(false);
        }
      });
    });
  }

  isLoggedinFB(){
    return new Promise((resolve, reject) => {
      FB.getLoginStatus(response => {
        if(response.status === 'connected'){
          resolve(true);
        }
        else{
          reject(false);
        }
      });
    });
  }

  isLoggedin(){
    return new Promise((resolve, reject) => {
      if(!this.getToken()){
        reject(false);
      } else {
        this.http.post<any>(SERVER_URI + 'auth/', {check: true}, {observe: 'response'})
        .toPromise().then(response => {
          if (response.status == 200) {
            resolve(true);
          }
            reject(false);
        }).catch(() => reject(false));
      }
    });
  }
}


