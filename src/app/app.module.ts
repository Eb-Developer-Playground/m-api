import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ReactiveFormsModule } from '@angular/forms';
import { FormlyMaterialModule } from '@ngx-formly/material';
import {
  NgxUiLoaderConfig,
  NgxUiLoaderModule,
  NgxUiLoaderRouterModule,
  POSITION,
  SPINNER,
} from 'ngx-ui-loader';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { StoreRouterConnectingModule } from '@ngrx/router-store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from '../environments/environment';
import { metaReducers, ROOT_REDUCERS } from './+state';
import { RouterEffects } from './core/effects';
import { AppComponent } from './app.component';
import { CoreModule } from './core/core.module';
import { EquityBankSharedModule } from '../@equity-bank/equity-bank-shared.module';
import { EquityBankCardModule } from '../@equity-bank/shared/card/card.module';
import { NgChartsModule } from 'ng2-charts';
import {
  MAT_FORM_FIELD_DEFAULT_OPTIONS,
  MatFormFieldDefaultOptions,
} from '@angular/material/form-field';
import {
  MAT_SNACK_BAR_DEFAULT_OPTIONS,
  MatSnackBarConfig,
} from '@angular/material/snack-bar';
import { LayoutModule } from './layout/layout.module';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { UserProfileComponent } from './pages/user/user-profile/user-profile.component';
import { ApiListComponent } from './pages/api-list/api-list.component';
import { UserUpdateDetailsComponent } from './pages/user/user-profile/user-update-details/user-update-details.component';
import { ApiDetailsComponent } from './pages/api-list/api-details/api-details.component';

const primaryColour = '#A32A29';

const ngxUiLoaderConfig: NgxUiLoaderConfig = {
  fgsColor: primaryColour,
  bgsColor: primaryColour,
  bgsOpacity: 5,
  overlayColor: 'rgba(74, 74, 74, 0.2)',
  overlayBorderRadius: '50',
  fgsPosition: POSITION.centerCenter,
  bgsPosition: POSITION.bottomCenter,
  blur: 8,
  fgsSize: 144,
  bgsSize: 50,
  bgsType: SPINNER.squareJellyBox, // background spinner type
  fgsType: SPINNER.threeStrings, // foreground spinner type - Http
  hasProgressBar: true,
  pbColor: primaryColour,
  pbThickness: 2,
};

@NgModule({
  declarations: [
    UserProfileComponent,
    ApiListComponent,
    UserUpdateDetailsComponent,
    ApiDetailsComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    LayoutModule,
    CoreModule,
    AppRoutingModule,
    FontAwesomeModule,
    EquityBankSharedModule,
    ReactiveFormsModule,
    FormlyMaterialModule,
    NgxUiLoaderModule.forRoot(ngxUiLoaderConfig),
    NgxUiLoaderRouterModule.forRoot({
      showForeground: true,
      exclude: ['http://localhost:4200/'],
    }),
    StoreModule.forRoot(ROOT_REDUCERS, {
      metaReducers,
      runtimeChecks: {
        // strictStateImmutability and strictActionImmutability are enabled by default
        // strictStateSerializability: true, disable to play with local JSON
        // strictActionSerializability: true, disable to dispatch JSON as action
        strictActionWithinNgZone: true,
        strictActionTypeUniqueness: true,
      },
    }),
    EffectsModule.forRoot([RouterEffects]),
    StoreRouterConnectingModule.forRoot(),
    StoreDevtoolsModule.instrument({
      name: 'EB-Api-monetization',
      logOnly: environment.ngrx_logs,
    }),
    EquityBankCardModule,
    NgChartsModule,
  ],
  providers: [
    {
      provide: MAT_FORM_FIELD_DEFAULT_OPTIONS,
      useValue: {
        appearance: 'fill',
      } as MatFormFieldDefaultOptions,
    },
    {
      provide: MAT_SNACK_BAR_DEFAULT_OPTIONS,
      useValue: {
        duration: 5000,
        horizontalPosition: 'center',
        verticalPosition: 'bottom',
      } as MatSnackBarConfig,
    },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
