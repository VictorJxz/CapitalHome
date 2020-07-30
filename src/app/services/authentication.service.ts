import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';
import { UserModel } from '../models/user.model';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  
  private url = 'https://identitytoolkit.googleapis.com/v1';
  private apikey = 'AIzaSyB_cCZdMM4zB-79U0ZYwbekT7dnqtcYfbA';
  userToken: string;


  // Create new user
  // https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=[API_KEY]

  // Login
  // https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=[API_KEY]

  constructor(private http: HttpClient) { }

  logout() {
    localStorage.removeItem('token');
  }

  login( user: UserModel) {

    const authData = {
      ...user,
      returnSecureToken: true
    };

    return this.http.post(
      `${ this.url }/accounts:signInWithPassword?key=${ this.apikey }`,authData
    ).pipe(
      map( resp => {
        this.guadarToken( resp['idToken']);
        return resp;
      })
    );
  }

  register( user: UserModel) {

    const authData = {
      ...user,
      returnSecureToken: true
    };

    return this.http.post(
      `${ this.url }/accounts:signUp?key=${ this.apikey }`,authData
    ).pipe(
      map( resp => {
        this.guadarToken( resp['idToken']);
        return resp;
      })
    );
  }

  private guadarToken( idToken: string) {

    this.userToken = idToken;
    localStorage.setItem('token',idToken);

  }

  leerToken() {

    if ( localStorage.getItem('token')) {
      this.userToken = localStorage.getItem('token');
    } else {
      this.userToken = '';
    }
    return this.userToken;

  }

  authentication() :boolean {

    this.userToken = this.leerToken();
    return this.userToken.length > 2;

  }

  

}
