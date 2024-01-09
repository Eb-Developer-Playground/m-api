import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { RecentSalesWidgetTableComponent } from './recent-sales-widget-table/recent-sales-widget-table.component';
import { RecentSalesWidgetComponent } from './recent-sales-widget.component';
import { NgChartsModule } from 'ng2-charts';
import { MaterialModule } from '../../../../../@equity-bank/shared/material-components.module';
import { LoadingOverlayModule } from '../../../../../@equity-bank/shared/loading-overlay/loading-overlay.module';
import { EquityBankCardModule } from '../../../../../@equity-bank/shared/card/card.module';
import { ListModule } from '../../../../../@equity-bank/shared/list/list.module';

@NgModule({
  imports: [
    CommonModule,
    MaterialModule,

    // Core
    LoadingOverlayModule,
    EquityBankCardModule,
    ListModule,
    NgChartsModule,
    ListModule,
  ],
  declarations: [RecentSalesWidgetComponent, RecentSalesWidgetTableComponent],
  exports: [RecentSalesWidgetComponent],
})
export class RecentSalesWidgetModule {}
