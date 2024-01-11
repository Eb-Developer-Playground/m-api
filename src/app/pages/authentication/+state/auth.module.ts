import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {LogoutConfirmationDialogComponent} from './components/logout-confirmation-dialog.component';
import {ReactiveFormsModule} from '@angular/forms';
import {StoreModule} from '@ngrx/store';
import {EffectsModule} from '@ngrx/effects';
import {AuthEffects} from './effects/auth.effects';
import {FlexLayoutModule} from '@angular/flex-layout';
import {NgxUiLoaderModule} from 'ngx-ui-loader';
import * as fromAuth from '../+state/reducers/index';

import {UserProfilePageEffects} from './effects/user-profile-page.effects';
import {EquityBankSharedModule} from '../../../../@equity-bank/equity-bank-shared.module';
import {MaterialModule} from '../../../../@equity-bank/shared/material-components.module';
import {EquityBankCardModule} from '../../../../@equity-bank/shared/card/card.module';
import {ForgotPasswordModule} from './components/forgot-password/forgot-password.module';

export const COMPONENTS = [LogoutConfirmationDialogComponent];

@NgModule({
  imports: [
    CommonModule,
    MaterialModule,
    ForgotPasswordModule,
    EquityBankSharedModule,
    ReactiveFormsModule,
    FlexLayoutModule,
    StoreModule.forFeature({
      name: fromAuth.authFeatureKey,
      reducer: fromAuth.reducers,
    }),
    EffectsModule.forFeature([AuthEffects, UserProfilePageEffects]),
    NgxUiLoaderModule,
    EquityBankCardModule,
  ],
  declarations: COMPONENTS,
})
export class AuthModule {}
