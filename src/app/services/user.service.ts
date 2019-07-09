/**
 * Copyright Rinzin Chopel Negi
 */
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import {
  FB_APPID,
  FB_API_VERSION,
  SERVER_DOMAIN,
  SERVER_AUTH_URI,
  SERVER_OAUTH_URI,
  SESSION_UPDATE_INTERVAL
} from '../variables';
import { Router } from '@angular/router';
declare const FB: any;

@Injectable({
  providedIn: 'root'
})
export class UserService {
  constructor(private http: HttpClient, private router: Router) {
    FB.init({
      appId: FB_APPID,
      cookie: true,
      xfbml: true,
      version: FB_API_VERSION
    });
  }

  updateSession() {
    const date = new Date();
    localStorage.setItem('sessionStart', String(date.getTime()));
  }

  getSession() {
    const time = localStorage.getItem('sessionStart');
    if (!time) {
      return 0;
    }
    return Number(time);
  }

  needSessionUpdate() {
    if (!this.getSession()) {
      return true;
    }
    const date = new Date();
    if (this.getSession() + SESSION_UPDATE_INTERVAL * 1000 > date.getTime()) {
      return false;
    }
    return true;
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

  authfb() {
    return new Promise((resolve, reject) => {
      FB.login(
        res => {
          if (!res.authResponse) {
            resolve('error');
          }
          resolve(res.authResponse);
        },
        {
          scope: 'email',
          return_scopes: true
        }
      );
    });
  }

  async fbLogin() {
    const response: any = await this.authfb();
    if (!response || response === 'error') {
      return -1;
    }
    try {
      const httpRes = await this.http
        .post<any>(
          SERVER_DOMAIN + SERVER_OAUTH_URI,
          { access_token: response.accessToken },
          { observe: 'response' }
        )
        .toPromise();
      this.setToken(httpRes.body.UserId, httpRes.headers.get('x-auth-token'));
      return 1;
    } catch (error) {
      return -3;
    }
    // // v1 Promise based
    // return new Promise((resolve, reject) => {
    //   FB.login(
    //     res => {
    //       console.log(res);
    //       if (res.authResponse) {
    //         this.http
    //           .post<any>(
    //             SERVER_DOMAIN + SERVER_OAUTH_URI,
    //             { access_token: res.authResponse.accessToken },
    //             { observe: 'response' }
    //           )
    //           .toPromise()
    //           .then(response => {
    //             this.setToken(
    //               response.body.UserId,
    //               response.headers.get('x-auth-token')
    //             );
    //             resolve(res);
    //           })
    //           .catch(err => {
    //             console.log(err);
    //             reject(res);
    //           });
    //       } else {
    //         reject(res);
    //       }
    //     },
    //     {
    //       scope: 'email',
    //       return_scopes: true
    //     }
    //   );
    // });
  }

  async logout() {
    try {
      await this.removeToken();
      this.router.navigate(['/', 'login']);
      return true;
    } catch (error) {
      return false;
    }
    // // v1 Promise based
    // return new Promise((resolve, reject) => {
    //   this.removeToken();
    //   this.router.navigate(['/', 'login']);
    //   resolve(true);
    // });
  }
  checkFB() {
    return new Promise((resolve, reject) => {
      FB.getLoginStatus(response => {
        if (response.status === 'connected') {
          resolve(true);
        } else {
          reject(false);
        }
      });
    });
  }

  // Checks Login with FB, may be token expired or the user may logged out from facebook settings
  // In our case, only needed for FbPosts section to detect if the user has really shared a post
  async isLoggedinFB() {
    const res = await this.checkFB();
    if (res === true) {
      return true;
    }
    return false;
  }

  // Checks if the user is logged in with our backend server
  async isLoggedin() {
    if (!this.getToken()) {
      return false;
    }
    try {
      const res = await this.http
        .post<any>(
          SERVER_DOMAIN + SERVER_AUTH_URI,
          { check: true },
          { observe: 'response' }
        )
        .toPromise();
      if (res.status === 200) {
        return true;
      }
      return false;
    } catch (error) {
      return false;
    }
    // // v1 Promise based
    // return new Promise((resolve, reject) => {
    //   if (!this.getToken()) {
    //     reject(false);
    //   } else {
    //     this.http
    //       .post<any>(
    //         SERVER_DOMAIN + SERVER_AUTH_URI,
    //         { check: true },
    //         { observe: "response" }
    //       )
    //       .toPromise()
    //       .then(response => {
    //         if (response.status == 200) {
    //           resolve(true);
    //         }
    //         reject(false);
    //       })
    //       .catch(() => reject(false));
    //   }
    // });
  }
}
