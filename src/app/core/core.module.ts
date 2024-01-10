import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RouterModule } from '@angular/router';
import { AppComponent } from '../app.component';
import { NgxUiLoaderModule } from 'ngx-ui-loader';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { EquityBankSharedModule } from '../../@equity-bank/equity-bank-shared.module';
import { MaterialModule } from '../../@equity-bank/shared/material-components.module';
import { AuthModule } from '../pages/authentication/+state';

@NgModule({
  declarations: [AppComponent, PageNotFoundComponent],
  exports: [PageNotFoundComponent],
  imports: [
    CommonModule,
    MaterialModule,
    EquityBankSharedModule,
    RouterModule,
    NgxUiLoaderModule,
    AuthModule,
  ],
})
export class CoreModule {}
