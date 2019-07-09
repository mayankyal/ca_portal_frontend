import { Injectable } from '@angular/core';
import {
    CanActivate, Router,
    ActivatedRouteSnapshot,
    RouterStateSnapshot
} from '@angular/router';
import { UserService } from '../services/user.service';

@Injectable()
export class AuthGuard implements CanActivate {

    constructor(private userService: UserService, private router: Router) {}

    async canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
        return await this.checkLogin();
    }

    async checkLogin(): Promise<boolean> {
      const res = await this.userService.isLoggedin();
      if (res === true) {
        return true;
      } else {
        this.router.navigate(['/Login']);
        return false;
      }
        // return new Promise((resolve, reject) => {
        //     this.userService.isLoggedin().then((response) => {
        //         console.log(response);
        //         resolve(true);
        //     }).catch((response) => {
        //         this.router.navigate(['/Login']);
        //         reject(false);
        //     });
        // });
    }
}
