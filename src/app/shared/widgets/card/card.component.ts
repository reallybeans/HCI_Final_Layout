import { Component, Input, OnInit } from '@angular/core';
import * as Highcharts from 'highcharts';
import HC_exporting from 'highcharts/modules/exporting';

HC_exporting(Highcharts);
@Component({
  selector: 'app-widget-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss'],
})
export class CardComponent implements OnInit {
  @Input() label: string | undefined;
  @Input() total: string | undefined;
  @Input() icon: string | undefined;
  @Input() data: any;
  chartOptions!: {};
  Highcharts = Highcharts;
  constructor() {}

  ngOnInit(): void {
    this.chartOptions = {
      chart: {
        type: 'area',
        backgroundColor: null,
        borderwidth: 0,
        margin: [2, 2, 2, 3],
        height: 60,
      },
      title: {
        text: null,
      },
      subtitle: {
        text: null,
      },
      credits: {
        enabled: false,
      },
      tooltip: {
        split: true,
        outside: true,
      },
      legend: {
        enabled: false,
      },
      exporting: {
        enabled: false,
      },
      xAxis: {
        labels: {
          enabled: false,
        },
        title: {
          text: null,
        },
        startOnTick:false,
        endOnTick:false, 
        TickOptions: []
      },
      yAxis: {
        labels: {
          enabled: false,
        },
        title: {
          text: null,
        },
        startOnTick:false,
        endOnTick:false, 
        TickOptions: []
      },
      series: [
        {
          data: this.data,
        },
      ],
    };
    HC_exporting(Highcharts);

    setTimeout(() => {
      window.dispatchEvent(new Event('resize'));
    }, 300);
  }
}
