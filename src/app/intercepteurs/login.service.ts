import { Injectable } from '@angular/core';
import {HTTP_INTERCEPTORS, HttpEvent, HttpHandler, HttpHeaders, HttpInterceptor, HttpRequest} from '@angular/common/http';
import {Observable} from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class LoginService implements HttpInterceptor {

  constructor() { }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const token = localStorage.getItem('token');
    if (!token) {
     return next.handle(req);
    } else {
     const clonereq = req.clone(
      {
         headers: new HttpHeaders().set('Authorization', token)
       });
     return next.handle(clonereq) ;
    }
  }


}
export const AuthenticationInterceptorProvider = {
  provide: HTTP_INTERCEPTORS,
  useClass: LoginService,
  multi: true

};
