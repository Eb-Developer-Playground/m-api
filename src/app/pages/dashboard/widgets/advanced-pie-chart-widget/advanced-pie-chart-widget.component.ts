import { Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';
import { Chart, ChartData, ChartOptions } from 'chart.js';
import defaultsDeep from 'lodash-es/defaultsDeep';
import { AdvancedPieChartWidgetOptions } from './advanced-pie-chart-widget-options.interface';
import { defaultChartOptions } from '../../../../../@equity-bank/shared/chart-widget/chart-widget-defaults';

@Component({
  selector: 'equity-bank-advanced-pie-chart-widget',
  templateUrl: './advanced-pie-chart-widget.component.html',
  styleUrls: ['./advanced-pie-chart-widget.component.scss'],
})
export class AdvancedPieChartWidgetComponent implements OnInit {
  @Input() options!: AdvancedPieChartWidgetOptions;
  @Input() chartOptions: ChartOptions = defaultsDeep(
    {
      cutoutPercentage: 70,
      legend: {
        display: false,
      },
    },
    defaultChartOptions,
  );
  @ViewChild('canvas', { read: ElementRef, static: true }) canvas!: ElementRef;
  chart!: Chart;
  total!: number;

  isLoading!: boolean;

  constructor() {}

  private _data!: ChartData;

  get data() {
    return this._data;
  }

  @Input() set data(data: any) {
    let total = 0;
    data.datasets.forEach((dataset: any) => {
      total += dataset.data.reduce((pv: any, cv: any) => pv + cv, 0);
    });

    this._data = data;
    this.total = total;
  }

  get legendData() {
    return this._data.datasets[0].data;
  }

  getLegendLabel(index: number) {
    // @ts-ignore
    return this._data && this._data.labels.length > 0
      ? this._data.labels[index]
      : null;
  }

  getLegendBackground(index: number) {
    return this._data &&
      this._data.datasets &&
      this._data.datasets[0] &&
      this._data.datasets[0].backgroundColor
      ? // @ts-ignore
        this._data.datasets[0].backgroundColor[index]
      : null;
  }

  ngOnInit() {}

  getPercentageValue(value: number) {
    return `${Math.round((value / this.total) * 100)}%`;
  }

  reload() {
    this.isLoading = true;

    setTimeout(() => {
      this.isLoading = false;
    }, 2000);
  }
}
