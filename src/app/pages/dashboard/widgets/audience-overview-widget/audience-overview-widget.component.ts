import { Component, ElementRef, Input, ViewChild } from '@angular/core';
import { UntypedFormControl } from '@angular/forms';
import { Chart, ChartData, ChartOptions } from 'chart.js';
import defaultsDeep from 'lodash-es/defaultsDeep';
import { BehaviorSubject } from 'rxjs';
import { AudienceOverviewWidgetOptions } from './audience-overview-widget-options.interface';
import { defaultChartOptions } from '../../../../../@equity-bank/shared/chart-widget/chart-widget-defaults';

@Component({
  selector: 'equity-bank-audience-overview-widget',
  templateUrl: './audience-overview-widget.component.html',
  styleUrls: ['./audience-overview-widget.component.scss'],
})
export class AudienceOverviewWidgetComponent {
  data!: ChartData;
  @ViewChild('canvas', { read: ElementRef, static: true }) canvas!: ElementRef;
  @Input() chartOptions: ChartOptions = defaultsDeep(
    {
      scales: {
        x: {
          display: true,
          gridLines: {
            display: false,
            drawBorder: false,
          },
          ticks: {
            fontColor: '#9e9e9e',
            padding: 12,
          },
        },
        y: {
          display: true,
          position: 'right',
          gridLines: {
            drawBorder: false,
            offsetGridLines: true,
          },
          ticks: {
            fontColor: '#9e9e9e',
            maxTicksLimit: 5,
          },
        },
      },
      layout: {
        padding: {
          left: 5,
          right: 5,
          top: 5,
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
  chart!: Chart;
  isLoading!: boolean;
  timeframe = new UntypedFormControl('last7');

  constructor() {}

  private _options!: AudienceOverviewWidgetOptions[];

  get options() {
    return this._options;
  }

  @Input() set options(options: AudienceOverviewWidgetOptions[]) {
    if (options) {
      this._options = options;

      options.forEach((option) => {
        if (!option.sum) {
          // @ts-ignore
          const data = option.data.datasets[0].data as number[];
          option.sum = data.reduce((sum: number, x: number) => sum + x);
        }

        // @ts-ignore
        if (
          !option.gain &&
          option.data.datasets &&
          option.data.datasets.length > 1
        ) {
          // @ts-ignore
          const data1 = option.data.datasets[0].data as number[];
          // @ts-ignore
          const data2 = option.data.datasets[1].data as number[];
          const sum1 = data1.reduce((sum: number, x: number) => sum + x);
          const sum2 = data2.reduce((sum: number, x: number) => sum + x);

          option.gain = Math.round(((sum1 - sum2) / sum2) * 100 * 100) / 100;
        }
      });

      this.setActiveOptions(options[0]);
    }
  }

  private _activeOptions = new BehaviorSubject<AudienceOverviewWidgetOptions>({
    label: '',
  });

  get activeOptions() {
    return this._activeOptions.getValue();
  }

  set activeOptions(options) {
    this._activeOptions.next(options);
  }

  setActiveOptions(options: AudienceOverviewWidgetOptions) {
    this.activeOptions = options;
  }

  isActive(options: AudienceOverviewWidgetOptions) {
    return this.activeOptions === options;
  }

  reload() {
    this.isLoading = true;

    setTimeout(() => {
      this.isLoading = false;
    }, 2000);
  }
}
