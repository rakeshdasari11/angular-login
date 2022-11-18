import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AccountService } from '../services/account.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(
    private router: Router,
    private authenticationService: AccountService
) {}

canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
  const user = this.authenticationService.currentUserValue;
  if (user) {
      if (route.data.roles && route.data.roles.indexOf(user.role) === -1) {
          this.router.navigate(['/']);
          return false;
      }

      return true;
  }

  this.router.navigate(['/login'], { queryParams: { returnUrl: state.url } });
  return false;
}
}
