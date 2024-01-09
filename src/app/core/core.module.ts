import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NavigationMenuComponent } from './components/side-nav/navigation-menu.component';
import { RouterModule } from '@angular/router';
import { AppComponent } from '../app.component';
import { NgxUiLoaderModule } from 'ngx-ui-loader';
import { PageNotFoundComponent } from './container/page-not-found/page-not-found.component';
import { EquityBankSharedModule } from '../../@equity-bank/equity-bank-shared.module';
import { MaterialModule } from '../../@equity-bank/shared/material-components.module';

@NgModule({
  declarations: [
    AppComponent,
    PageNotFoundComponent,
    NavigationMenuComponent,
  ],
  exports: [NavigationMenuComponent],
  imports: [CommonModule, MaterialModule, EquityBankSharedModule, RouterModule, NgxUiLoaderModule],
})
export class CoreModule {
}
