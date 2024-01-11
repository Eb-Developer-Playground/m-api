import {Injectable} from '@angular/core';
import {Actions, createEffect, ofType} from '@ngrx/effects';
import {catchError, concatMap, exhaustMap, map, tap} from 'rxjs/operators';
import {of} from 'rxjs';
import * as AuthActions from '../actions/auth.actions';
import {LoginApiActions} from '../actions';
import {MatDialog} from '@angular/material/dialog';
import {LogoutConfirmationDialogComponent} from '../components/logout-confirmation-dialog.component';
import {AuthStateService} from '../services';
import {Router} from '@angular/router';

@Injectable()
export class AuthEffects {
  login$ = createEffect(() =>
    this.actions$.pipe(
      ofType(LoginApiActions.loginUser),
      exhaustMap((action) =>
        this.authService.login().pipe(
          map(() => LoginApiActions.loginSuccess()),
          tap(() => this.router.navigate(['/'])),
          catchError((error) => of(LoginApiActions.loginFailure({ error }))),
        ),
      ),
    ),
  );
  checkLoginStatus$ = createEffect(() =>
    this.actions$.pipe(
      ofType(LoginApiActions.checkLoginStatus),
      concatMap((action) => {
        return this.authService
          .getUserProfile(action.user)
          .pipe(map((user) => LoginApiActions.loginUser({ user })));
      }),
    ),
  );
  logoutConfirmation$ = createEffect(() =>
    this.actions$.pipe(
      ofType(AuthActions.logoutConfirmation),
      exhaustMap(() => {
        const dialogRef = this.dialog.open(LogoutConfirmationDialogComponent, {
          hasBackdrop: true,
          disableClose: true,
        });

        return dialogRef.afterClosed();
      }),
      map((result) =>
        result ? AuthActions.logout() : AuthActions.logoutConfirmationDismiss(),
      ),
      tap(() => this.router.navigate(['/login'])),
    ),
  );

  constructor(
    private actions$: Actions,
    private authService: AuthStateService,
    private router: Router,
    private dialog: MatDialog,
  ) {}
}
