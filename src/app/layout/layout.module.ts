import { AsyncPipe, CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FooterModule } from './footer/footer.module';
import { LayoutComponent } from './layout.component';
import { QuickpanelModule } from './quickpanel/quickpanel.module';
import { SidenavModule } from './sidenav/sidenav.module';
import { ToolbarModule } from './toolbar/toolbar.module';
import { ConfigPanelModule } from './config-panel/config-panel.module';
import { NavigationModule } from './navigation/navigation.module';
import { LoadingIndicatorModule } from '../../@equity-bank/shared/loading-indicator/loading-indicator.module';
import { EquityBankSharedModule } from '../../@equity-bank/equity-bank-shared.module';
import { BackdropModule } from '../../@equity-bank/shared/backdrop/backdrop.module';
import { MaterialModule } from '../../@equity-bank/shared/material-components.module';

@NgModule({
  imports: [
    CommonModule,
    MaterialModule,
    RouterModule,
    LoadingIndicatorModule,
    EquityBankSharedModule,
    AsyncPipe,

    // Core
    ToolbarModule,
    QuickpanelModule,
    SidenavModule,
    FooterModule,
    BackdropModule,
    ConfigPanelModule,
    NavigationModule,
  ],
  declarations: [LayoutComponent],
})
export class LayoutModule {}
