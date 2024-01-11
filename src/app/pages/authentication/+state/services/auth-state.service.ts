import {Inject, Injectable} from '@angular/core';
import {Observable, of} from 'rxjs';
import {DOCUMENT} from '@angular/common';
import {usersData} from '../../../user/models/user';

@Injectable({
  providedIn: 'root',
})
export class AuthStateService {
  constructor(@Inject(DOCUMENT) public document: Document) {}

  login(): Observable<any> {
    return of(true);
  }

  logout() {
    // return this.auth0.logout({
    //   returnTo: environment.appUri + '/login',
    // });
  }

  getUserProfile(username: string) {
    const user = usersData.find(({ email }) => email === username);
    return of(user);
    // return this.auth0.user$;
  }

  getUserToken() {
    // return this.auth0.idTokenClaims$;
  }

  isUserAuthenticated() {
    // return this.auth0.isAuthenticated$;
  }

  isAuth0Loading() {
    // return this.auth0.isLoading$;
  }

  Auth0Errors() {
    // return this.auth0.error$;
  }
}