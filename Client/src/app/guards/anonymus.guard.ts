import { Injectable } from '@angular/core';
import {
    CanActivate, Router,
    ActivatedRouteSnapshot,
    RouterStateSnapshot,
    Route
} from '@angular/router';
import { UserService } from '../services/user.service'

@Injectable()
export class AnonymusGuard implements CanActivate {

    constructor(private userService: UserService, private router: Router) {}

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
        return this.checkLogout();
    }

    checkLogout(): Promise<boolean> {
        return new Promise((resolve, reject) => {
            this.userService.isLoggedin().then(() => {
                this.router.navigate(['/Dashboard']);
                reject(false);
            }).catch(() => {
                resolve(true);
            });
        });
    }
}
