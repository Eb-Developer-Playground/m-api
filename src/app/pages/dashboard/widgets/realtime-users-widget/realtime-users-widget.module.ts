import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { RealtimeUsersWidgetComponent } from './realtime-users-widget.component';
import { MaterialModule } from '../../../../../@equity-bank/shared/material-components.module';
import { EquityBankCardModule } from '../../../../../@equity-bank/shared/card/card.module';
import { ScrollbarModule } from '../../../../../@equity-bank/shared/scrollbar/scrollbar.module';

@NgModule({
  imports: [
    CommonModule,
    MaterialModule,

    // Core
    EquityBankCardModule,
    ScrollbarModule,
  ],
  declarations: [RealtimeUsersWidgetComponent],
  exports: [RealtimeUsersWidgetComponent],
})
export class RealtimeUsersWidgetModule {}
