import { Component, Input, OnInit } from '@angular/core';
import * as Highcharts from 'highcharts';
import HC_exporting from 'highcharts/modules/exporting';
HC_exporting(Highcharts);
@Component({
  selector: 'app-widgets-area',
  templateUrl: './area.component.html',
  styleUrls: ['./area.component.scss'],
})
export class AreaComponent implements OnInit {
  chartOptions!: {};
  Highcharts = Highcharts;
  @Input() data: any;
  constructor() {}

  ngOnInit(): void {
    this.chartOptions = {
      chart: {
        type: 'area',
      },
      title: {
        text: 'Doanh thu Năm',
      },
      subtitle: {
        text: '2020-2021',
      },
      credits: {
        enabled: true,
      },
      tooltip: {
        split: true,
        valueSuffix: 'VND',
      },
      exporting: {
        enabled: true,
      },
      plotOptions: {
        area: {
          stacking: 'normal',
          lineColor: '#666666',
          lineWidth: 1,
          marker: {
            lineWidth: 1,
            lineColor: '#666666',
          },
        },
      },
      series: this.data
      ,
    };
    HC_exporting(Highcharts);

    setTimeout(() => {
      window.dispatchEvent(new Event('resize'));
    }, 300);
  }
}
