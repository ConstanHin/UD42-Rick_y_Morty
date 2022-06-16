import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { LoginService } from './login.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuardService implements CanActivate {

  constructor(private router: Router, private loginService:LoginService) { }

  canActivate() {

    const username = window.sessionStorage.getItem("auth-username");
    const role = window.sessionStorage.getItem("auth-role");


    if (!username) {
      console.log("user logged out");
      this.router.navigate(['/login'])
      return false;

    }
    return true;
  }

}
