import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { AdvancedPieChartWidgetComponent } from './advanced-pie-chart-widget.component';
import { NgChartsModule } from 'ng2-charts';
import { EquityBankSharedModule } from '../../../../../@equity-bank/equity-bank-shared.module';
import { EquityBankCardModule } from '../../../../../@equity-bank/shared/card/card.module';
import { LoadingOverlayModule } from '../../../../../@equity-bank/shared/loading-overlay/loading-overlay.module';
import { ScrollbarModule } from '../../../../../@equity-bank/shared/scrollbar/scrollbar.module';

@NgModule({
  imports: [
    CommonModule,
    EquityBankSharedModule,

    // Core
    EquityBankCardModule,
    LoadingOverlayModule,
    ScrollbarModule,
    NgChartsModule,
    EquityBankCardModule,
  ],
  declarations: [AdvancedPieChartWidgetComponent],
  exports: [AdvancedPieChartWidgetComponent],
})
export class AdvancedPieChartWidgetModule {}
