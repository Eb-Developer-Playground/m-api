import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { AdvancedPieChartWidgetModule } from './widgets/advanced-pie-chart-widget/advanced-pie-chart-widget.module';
import { AudienceOverviewWidgetModule } from './widgets/audience-overview-widget/audience-overview-widget.module';
import { BarChartWidgetModule } from './widgets/bar-chart-widget/bar-chart-widget.module';
import { DonutChartWidgetModule } from './widgets/donut-chart-widget/donut-chart-widget.module';
import { LineChartWidgetModule } from './widgets/line-chart-widget/line-chart-widget.module';
import { MarketWidgetModule } from './widgets/market-widget/market-widget.module';
import { QuickInfoWidgetModule } from './widgets/quick-info-widget/quick-info-widget.module';
import { RealtimeUsersWidgetModule } from './widgets/realtime-users-widget/realtime-users-widget.module';
import { RecentSalesWidgetModule } from './widgets/recent-sales-widget/recent-sales-widget.module';
import { SalesSummaryWidgetModule } from './widgets/sales-summary-widget/sales-summary-widget.module';
import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardComponent } from './dashboard.component';
import { DashboardService } from './dashboard.service';
import { EquityBankSharedModule } from '../../../@equity-bank/equity-bank-shared.module';
import { MaterialModule } from '../../../@equity-bank/shared/material-components.module';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  imports: [
    CommonModule,
    HttpClientModule,
    DashboardRoutingModule,
    MaterialModule,
    EquityBankSharedModule,

    // Widgets
    BarChartWidgetModule,
    LineChartWidgetModule,
    DonutChartWidgetModule,
    SalesSummaryWidgetModule,
    AudienceOverviewWidgetModule,
    RealtimeUsersWidgetModule,
    QuickInfoWidgetModule,
    RecentSalesWidgetModule,
    AdvancedPieChartWidgetModule,
    MarketWidgetModule,
  ],
  declarations: [DashboardComponent],
  providers: [DashboardService],
})
export class DashboardModule {}
