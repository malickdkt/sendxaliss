import { Injectable } from '@angular/core';
import {AuthentificationService} from './authentification.service';
import { HttpRequest, HttpHandler, HttpEvent, HttpInterceptor } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ErrorInterceptorService implements HttpInterceptor {

  constructor(private authentificationService: AuthentificationService) { }

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    return next.handle(request).pipe(catchError(err => {
     /* if (err.status === 401) {
        // auto logout if 401 response returned from api
        this.authService.logout();
        location.reload(true);
      }
      if (err.status === 403) {
        // auto logout if 401 response returned from api
        this.authService.logout();
        location.reload(true);
      }*/
      const error = err.error.message || err.statusText;
      return throwError(error);
    }));
  }
}
