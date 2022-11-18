import { Injectable } from '@angular/core';
import decode from 'jwt-decode';
//import { CookieService } from 'ngx-cookie-service';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(
   // private cookieService: CookieService
    
  ) { }
  public isAuthenticated(): boolean {
    const token = ('token');
    if (!token) {
      console.log("Token does not exists");
      return false;
    }
    else {
      console.log("Token exists");
      return true;
    }
  }
  objectIsEmpty(obj) {
    for(var key in obj) {
      if(obj.hasOwnProperty(key)){
        return false;
      }

    }
    return true;
  }
//  get loggedInUserDetails() {
   // var _token = this.cookieService.get('token');
    // if(this.cookieService.check('token')) {
    //   var token = decode(_token);
    //   return {
    //       userId: token['UserId'],
    //       roles: token['http://schemas.microsoft.com/ws/2008/06/identity/claims/role'].split(','),
    //       name: token['http://schemas.xmlsoap.org/ws/2005/05/identity/claims/name'],
    //       isValid: true
    //   } as LoggedInUser;
    // } else {
    //   return {
    //     userId: 0,
    //     roles: [],
    //     name: '',
    //     isValid: false
    //   } as LoggedInUser;
    // }
  }

//}
export class LoggedInUser {
  userId: number;
  roles: any;
  name: string;
  isValid: boolean
}
//
