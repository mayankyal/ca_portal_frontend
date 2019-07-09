import {
  HttpInterceptor,
  HttpRequest,
  HttpHandler,
  HttpErrorResponse
} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError } from 'rxjs/internal/operators';
import { of, Observable } from 'rxjs';

@Injectable()
export class AdminAuthInterceptor implements HttpInterceptor {
  constructor() {}

  intercept(req: HttpRequest<any>, next: HttpHandler) {
    console.log('hellllo');
    const authRequest = req.clone({
      headers: req.headers.set('x-ad-auth-token', 'sssdd')
    });
    return next.handle(authRequest);
  }
}
