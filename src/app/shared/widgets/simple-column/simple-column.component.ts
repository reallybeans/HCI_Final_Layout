import { Component, Input, OnInit } from '@angular/core';
import * as Highcharts from 'highcharts';
import HC_exporting from 'highcharts/modules/exporting';
HC_exporting(Highcharts);
@Component({
  selector: 'app-simple-column',
  templateUrl: './simple-column.component.html',
  styleUrls: ['./simple-column.component.scss']
})
export class SimpleColumnComponent implements OnInit {
  chartOptions!: {};
  Highcharts = Highcharts;
  @Input() data: any;
  constructor() { }

  ngOnInit(): void {
    this.chartOptions = {
      chart: {
          type: 'column'
      },
      title: {
          text: 'Doanh thu hàng tháng'
      },
      subtitle: {
          text: '2020 - 2021'
      },
      xAxis: {
          categories: [
              'Jan',
              'Feb',
              'Mar',
              'Apr',
              'May',
              'Jun',
              'Jul',
              'Aug',
              'Sep',
              'Oct',
              'Nov',
              'Dec'
          ],
          crosshair: true
      },
      yAxis: {
          min: 0,
          title: {
              text: 'VND (triệu)'
          }
      },
      tooltip: {
          headerFormat: '<span style="font-size:10px">{point.key}</span><table>',
          pointFormat: '<tr><td style="color:{series.color};padding:0">{series.name}: </td>' +
              '<td style="padding:0"><b>{point.y:.1f} triệu VND</b></td></tr>',
          footerFormat: '</table>',
          shared: true,
          useHTML: true
      },
      plotOptions: {
          column: {
              pointPadding: 0.2,
              borderWidth: 0
          }
      },
      series: [{
          name: 'Doanh Thu',
          data: [49.9, 71.5, 106.4, 129.2, 144.0, 176.0, 135.6, 148.5, 216.4, 87, 0 ,0 ]
  
      }, 
    //   {
    //       name: 'Hà Nội',
    //       data: [83.6, 78.8, 98.5, 93.4, 106.0, 84.5, 105.0, 104.3, 91.2, 83.5,0,0 ]
  
    //   }, {
    //       name: 'Đà Nẵng',
    //       data: [48.9, 38.8, 39.3, 41.4, 47.0, 48.3, 59.0, 59.6, 52.4, 65.2, 0,0]
  
    //   },
    ]
  };
  
  HC_exporting(Highcharts);

  setTimeout(() => {
    window.dispatchEvent(new Event('resize'));
  }, 300);
  }

}
