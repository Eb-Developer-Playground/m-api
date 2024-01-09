import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { DonutChartWidgetComponent } from './donut-chart-widget.component';
import { NgChartsModule } from 'ng2-charts';
import { MaterialModule } from '../../../../../@equity-bank/shared/material-components.module';
import { EquityBankCardModule } from '../../../../../@equity-bank/shared/card/card.module';
import { LoadingOverlayModule } from '../../../../../@equity-bank/shared/loading-overlay/loading-overlay.module';

@NgModule({
  imports: [
    CommonModule,
    MaterialModule,

    // Core
    EquityBankCardModule,
    LoadingOverlayModule,
    NgChartsModule,
  ],
  declarations: [DonutChartWidgetComponent],
  exports: [DonutChartWidgetComponent],
})
export class DonutChartWidgetModule {}
