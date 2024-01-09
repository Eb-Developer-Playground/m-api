import { Component, Inject, Renderer2 } from '@angular/core';
import { MediaObserver } from '@angular/flex-layout';
import { routeAnimations } from 'src/shared/animations/route.animations';
import { Store } from '@ngrx/store';
import * as fromAuth from './auth/reducers';
import { Observable } from 'rxjs';
import { AuthActions } from './auth/actions';
import { SidenavService } from './layout/sidenav/sidenav.service';
import { MatIconRegistry } from '@angular/material/icon';
import { ThemeService } from '../@equity-bank/services/theme.service';
import { DOCUMENT } from '@angular/common';
import { Platform } from '@angular/cdk/platform';
import { ActivatedRoute } from '@angular/router';
import { SplashScreenService } from '../@equity-bank/services/splash-screen.service';
import { filter } from 'rxjs/operators';

// TODO:

/*
Functional Requirements:
* User Registration and Login:
The app should have a user registration feature where users can create an account by providing necessary details such as name, email, and password.
Users should be able to log in securely using their registered email and password.
The app should provide appropriate error handling for incorrect login credentials and display relevant messages to the user.
Note: No API is required here for login or registration. Just allow the user through if validation is successful
Enable users to view and update their account information including contact details, billing preferences and API keys.

* API discovery and documentation
API catalogue: Provide a searchable catalogue of browsable APIs with descriptions and usage guides
API filtering and sorting: Allow users to sort APIs based on categories, features, pricing plans or any relevant criteria

* API usage monitoring and analytics
Display API usage metrics, including request volume, error rates, response times etc. Use charts and dummy data
Display Historical usage trends: provide historic usage data for analytics and reporting, allowing users to track API usage over time

* API key management:
API Key generation: Allow users to generate and manage API keys
Key revocation: Provide the user the ability to revoke API keys that had already been generated.

*Persona:
As a user, I’d like to be able to:
Browse some of the functionality your API could provide
Login to view API documentation and browse some of the different APIs you offer; Allow for searching, sorting and filtering.
Review the pricing list for the APIs
For a paying user,
allow them to generate API keys they can utilise.
Allow them to revoke API keys they’d previously generated
Allow them to review their billing details
Review their API utilisation and history

 */

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  animations: [routeAnimations],
})
export class AppComponent {
  loggedIn$: Observable<boolean>;

  constructor(
    public media: MediaObserver,
    private store: Store,
    private sidenavService: SidenavService,
    private iconRegistry: MatIconRegistry,
    private renderer: Renderer2,
    private themeService: ThemeService,
    @Inject(DOCUMENT) private document: Document,
    private platform: Platform,
    private route: ActivatedRoute,
    private splashScreenService: SplashScreenService,
  ) {
    this.loggedIn$ = this.store.select(fromAuth.selectLoggedIn);

    this.route.queryParamMap
      .pipe(filter((queryParamMap) => queryParamMap.has('style')))
      .subscribe((queryParamMap) =>
        this.themeService.setStyle(queryParamMap.get('style')),
      );

    this.themeService.theme$.subscribe((theme) => {
      if (theme[0]) {
        this.renderer.removeClass(this.document.body, theme[0]);
      }

      this.renderer.addClass(this.document.body, theme[1]);
    });

    if (this.platform.BLINK) {
      this.renderer.addClass(this.document.body, 'is-blink');
    }

    this.sidenavService.addItems([
      {
        name: 'APIs',
        position: 5,
        type: 'subheading',
        customClass: 'first-subheading',
      },
      {
        name: 'Dashboard',
        routeOrFunction: '/',
        icon: 'dashboard',
        position: 10,
        pathMatchExact: true,
      },
    ]);
  }

  logout() {
    this.store.dispatch(AuthActions.logoutConfirmation());
  }
}
