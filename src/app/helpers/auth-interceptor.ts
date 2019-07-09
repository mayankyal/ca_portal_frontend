import { HttpInterceptor, HttpRequest, HttpHandler, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { UserService } from '../services/user.service';
import {catchError} from 'rxjs/internal/operators';
import { of, Observable } from 'rxjs';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {

    constructor(private user: UserService) {}

    intercept(req: HttpRequest<any>, next: HttpHandler) {
        console.log('wewe');
        const token = this.user.getToken();
        if (token) {
            const authRequest = req.clone({
                headers: req.headers.set('x-auth-token', token)
            });
            return next.handle(authRequest);
        } else {
            return next.handle(req).pipe(catchError((err: any, caught: any) => {
                console.log(err);
                return of(err);
            }));
        }
    }
}
