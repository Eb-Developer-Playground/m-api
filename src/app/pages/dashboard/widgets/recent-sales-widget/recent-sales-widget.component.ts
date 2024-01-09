import { Component, Input } from '@angular/core';
import { ChartData, ChartOptions } from 'chart.js';
import defaultsDeep from 'lodash-es/defaultsDeep';
import { RecentSalesWidgetOptions } from './recent-sales-widget-options.interface';
import { ListColumn } from '../../../../../shared/list/list-column.model';
import { defaultChartOptions } from '../../../../../@equity-bank/shared/chart-widget/chart-widget-defaults';

@Component({
  selector: 'equity-bank-recent-sales-widget',
  templateUrl: './recent-sales-widget.component.html',
  styleUrls: ['./recent-sales-widget.component.scss'],
})
export class RecentSalesWidgetComponent {
  @Input() tableOptions!: {
    pageSize: number;
    columns: ListColumn[];
  };
  @Input() tableData!: any[];
  @Input() chartData!: ChartData;
  @Input() options!: RecentSalesWidgetOptions;
  @Input() chartOptions: ChartOptions = defaultsDeep(
    {
      plugins: {
        tooltip: {
          mode: 'index',
          intersect: false,
        },
      },
      elements: {
        point: {
          radius: 0,
        },
      },
      layout: {
        autoPadding: false,
      },
    },
    defaultChartOptions,
  );

  isLoading!: boolean;

  constructor() {}

  reload() {
    this.isLoading = true;

    setTimeout(() => {
      this.isLoading = false;
    }, 2000);
  }
}
