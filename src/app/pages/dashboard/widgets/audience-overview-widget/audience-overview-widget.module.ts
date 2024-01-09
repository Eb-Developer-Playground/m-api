import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';

import { AudienceOverviewWidgetComponent } from './audience-overview-widget.component';
import { NgChartsModule } from 'ng2-charts';
import { MaterialModule } from '../../../../../@equity-bank/shared/material-components.module';
import { LoadingOverlayModule } from '../../../../../@equity-bank/shared/loading-overlay/loading-overlay.module';
import { EquityBankCardModule } from '../../../../../@equity-bank/shared/card/card.module';

@NgModule({
  imports: [
    CommonModule,
    MaterialModule,
    ReactiveFormsModule,

    // Core
    LoadingOverlayModule,
    EquityBankCardModule,
    NgChartsModule,
  ],
  declarations: [AudienceOverviewWidgetComponent],
  exports: [AudienceOverviewWidgetComponent],
})
export class AudienceOverviewWidgetModule {}
