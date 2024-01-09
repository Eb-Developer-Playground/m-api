import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthRoutingModule } from './auth-routing.module';
import { LoginPageComponent } from './containers/login-page/login-page.component';
import { LogoutConfirmationDialogComponent } from './components/logout-confirmation-dialog.component';
import { ReactiveFormsModule } from '@angular/forms';
import { StoreModule } from '@ngrx/store';
import * as fromAuth from '../auth/reducers/index';
import { EffectsModule } from '@ngrx/effects';
import { AuthEffects } from './effects/auth.effects';
import { LoginFormComponent } from './components/login-form.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { UserProfilePageComponent } from './containers/user-profile-page/user-profile-page.component';
import { FormlyModule } from '@ngx-formly/core';
import { NgxUiLoaderModule } from 'ngx-ui-loader';
import { UserProfilePageEffects } from './effects/user-profile-page.effects';
import { EquityBankSharedModule } from '../../@equity-bank/equity-bank-shared.module';
import { EquityBankCardModule } from '../../@equity-bank/shared/card/card.module';
import { MaterialModule } from '../../@equity-bank/shared/material-components.module';

export const COMPONENTS = [
  LoginFormComponent,
  LoginPageComponent,
  LogoutConfirmationDialogComponent,
  UserProfilePageComponent,
];

@NgModule({
  imports: [
    CommonModule,
    AuthRoutingModule,
    MaterialModule,
    EquityBankSharedModule,
    ReactiveFormsModule,
    FlexLayoutModule,
    StoreModule.forFeature({
      name: fromAuth.authFeatureKey,
      reducer: fromAuth.reducers,
    }),
    EffectsModule.forFeature([AuthEffects, UserProfilePageEffects]),
    FormlyModule.forChild(),
    NgxUiLoaderModule,
    EquityBankCardModule,
  ],
  declarations: COMPONENTS,
})
export class AuthModule {}
