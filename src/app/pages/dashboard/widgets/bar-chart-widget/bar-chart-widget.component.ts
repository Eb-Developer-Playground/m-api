import { Component, ElementRef, Input, ViewChild } from '@angular/core';
import { Chart, ChartData, ChartOptions } from 'chart.js';
import defaultsDeep from 'lodash-es/defaultsDeep';
import { BarChartWidgetOptions } from './bar-chart-widget-options.interface';
import { defaultChartOptions } from '../../../../../@equity-bank/shared/chart-widget/chart-widget-defaults';

@Component({
  selector: 'equity-bank-bar-chart-widget',
  templateUrl: './bar-chart-widget.component.html',
  styleUrls: ['./bar-chart-widget.component.scss'],
})
export class BarChartWidgetComponent {
  @Input() data!: ChartData;
  // @ts-ignore
  @Input() options: BarChartWidgetOptions;
  @Input() chartOptions: ChartOptions = defaultsDeep(
    {
      layout: {
        padding: {
          left: 24,
          right: 24,
          top: 16,
          bottom: 24,
        },
      },
      plugins: {
        tooltip: {
          mode: 'index',
          intersect: false,
        },
      },
      hover: {
        intersect: true,
      },
    },
    defaultChartOptions,
  );

  @ViewChild('canvas', { read: ElementRef, static: true }) canvas!: ElementRef;

  chart!: Chart;

  isLoading!: boolean;

  constructor() {}

  reload() {
    this.isLoading = true;

    setTimeout(() => {
      this.isLoading = false;
    }, 2000);
  }
}
