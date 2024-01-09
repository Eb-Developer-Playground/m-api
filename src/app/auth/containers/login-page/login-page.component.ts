import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { LoginPageActions } from '../../actions';
import { of } from 'rxjs';

@Component({
  selector: 'app-login-page',
  template: `
      <app-login-form
              [pending]="(pending$ | async)!"
              [errorMessage]="(error$ | async)!"
      >
      </app-login-form>`,
  styles: [],
})
export class LoginPageComponent {
  // pending$ = this.store.select(fromAuth.selectLoginPagePending);
  // error$ = this.store.select(fromAuth.selectLoginPageError);
  pending$ = of(true);
  error$ = of(null);

  constructor(private store: Store) {
  }

  onSubmit(credentials: any) {
    this.store.dispatch(LoginPageActions.login());
  }

  InitLogin(event: any) {
    this.store.dispatch(LoginPageActions.login());
  }
}
