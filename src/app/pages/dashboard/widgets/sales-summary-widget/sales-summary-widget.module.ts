import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { SalesSummaryWidgetComponent } from './sales-summary-widget.component';
import { NgChartsModule } from 'ng2-charts';
import { MaterialModule } from '../../../../../@equity-bank/shared/material-components.module';
import { LoadingOverlayModule } from '../../../../../@equity-bank/shared/loading-overlay/loading-overlay.module';
import { EquityBankSharedModule } from '../../../../../@equity-bank/equity-bank-shared.module';
import { EquityBankCardModule } from '../../../../../@equity-bank/shared/card/card.module';

@NgModule({
  imports: [
    CommonModule,
    MaterialModule,

    // Core
    LoadingOverlayModule,
    EquityBankSharedModule,
    NgChartsModule,
    EquityBankCardModule,
  ],
  declarations: [SalesSummaryWidgetComponent],
  exports: [SalesSummaryWidgetComponent],
})
export class SalesSummaryWidgetModule {}
