import { Injectable } from '@angular/core';
import {ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot} from '@angular/router';
import {AuthentificationService} from './authentification.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuardService  implements  CanActivate {
  constructor(
    private router: Router,
    private authentificationService: AuthentificationService
  ) {}

  canActivate() {
    const currentUser = this.authentificationService.currentUserValue;
    if (currentUser) {
      // authorised so return true
      return true;
    }
    return  this.router.navigate(['/login']);
  }
}
