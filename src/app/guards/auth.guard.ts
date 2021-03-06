import { Injectable } from '@angular/core';
import { CanActivate, Router} from '@angular/router';
import { AuthenticationService } from '../services/authentication.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate{

  constructor( private auth: AuthenticationService,private router: Router) {}

  canActivate():  boolean{
    console.log('Guard');

    if ( this.auth.authentication()) {
      return true;
    }else {
      this.router.navigateByUrl('login');
    }
  }
  
}
