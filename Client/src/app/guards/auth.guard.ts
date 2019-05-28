import { Injectable } from '@angular/core';
import {
    CanActivate, Router,
    ActivatedRouteSnapshot,
    RouterStateSnapshot,
    Route
} from '@angular/router';
import { UserService } from '../services/user.service'

@Injectable()
export class AuthGuard implements CanActivate {

    constructor(private userService: UserService, private router: Router) {}

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
        return this.checkLogin();
    }

    checkLogin(): Promise<boolean> {
        return new Promise((resolve, reject) => {
            this.userService.isLoggedin().then((response) => {
                console.log(response);
                resolve(true);
            }).catch((response) => {
                this.router.navigate(['/Login']);
                reject(false);
            });
        });
    }
}
