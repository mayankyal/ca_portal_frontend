import { Injectable } from '@angular/core';
import {
    CanActivate, Router,
    ActivatedRouteSnapshot,
    RouterStateSnapshot,
} from '@angular/router';
import { UserService } from '../services/user.service';

@Injectable()
export class AnonymusGuard implements CanActivate {

    constructor(private userService: UserService, private router: Router) {}

    async canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
        return await this.checkLogout();
    }

    async checkLogout(): Promise<boolean> {
      const res = await this.userService.isLoggedin();
      if (!res) {
        return true;
      } else {
        this.router.navigate(['/Dashboard']);
        return false;
      }
      //   return new Promise((resolve, reject) => {
      //       this.userService.isLoggedin().then(() => {
      //           this.router.navigate(['/Dashboard']);
      //           reject(false);
      //       }).catch(() => {
      //           resolve(true);
      //       });
      //   });
    }
}
