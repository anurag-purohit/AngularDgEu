import { Injectable } from '@angular/core';
import { Observable} from 'rxjs';
import { of } from 'rxjs';

import { AppUserAuth } from "./app-user-auth";
import { AppUser } from "./app-user";
import { LOGIN_MOCKS } from './login-mocks';

@Injectable({
  providedIn: 'root'
})
export class SecurityService {
  securityObject: AppUserAuth = new AppUserAuth();
  constructor() { }

  resetSecurityObject() : void {
    this.securityObject.userName="";
    this.securityObject.isAuthenticated= false;
    this.securityObject.bearerToken=  "";
  }

  login(entity: AppUser) : Observable<AppUserAuth> {
        this.resetSecurityObject();

        Object.assign(this.securityObject,
          LOGIN_MOCKS.find(user => (user.userName.toLowerCase() === entity.userName.toLowerCase()
          && (user.userPass.toLowerCase() === entity.password.toLowerCase()))));

        return of<AppUserAuth>(this.securityObject);
  }

  logout(): void {
    this.resetSecurityObject();
  }
}
