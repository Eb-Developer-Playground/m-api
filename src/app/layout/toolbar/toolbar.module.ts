import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { ToolbarNotificationsComponent } from './toolbar-notifications/toolbar-notifications.component';
import { ToolbarSidenavMobileToggleComponent } from './toolbar-sidenav-mobile-toggle/toolbar-sidenav-mobile-toggle.component';
import { ToolbarUserComponent } from './toolbar-user/toolbar-user.component';
import { ToolbarComponent } from './toolbar.component';

import { MaterialModule } from '../../../@equity-bank/shared/material-components.module';
import { ScrollbarModule } from '../../../@equity-bank/shared/scrollbar/scrollbar.module';
import { ClickOutsideModule } from '../../../@equity-bank/shared/click-outside/click-outside.module';
import { EquityBankCardModule } from '../../../@equity-bank/shared/card/card.module';

@NgModule({
  imports: [
    CommonModule,
    MaterialModule,
    RouterModule,
    ScrollbarModule,
    FormsModule,
    ClickOutsideModule,
    EquityBankCardModule,
  ],
  declarations: [
    ToolbarComponent,
    ToolbarUserComponent,
    ToolbarNotificationsComponent,
    ToolbarSidenavMobileToggleComponent,
  ],
  exports: [ToolbarComponent],
})
export class ToolbarModule {}
