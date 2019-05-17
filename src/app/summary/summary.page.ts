import { Component, OnInit, HostListener } from '@angular/core';
import * as Highcharts from 'highcharts';
import { Platform } from '@ionic/angular';

@Component({
  selector: 'app-summary',
  templateUrl: './summary.page.html',
  styleUrls: ['./summary.page.scss'],
})
export class SummaryPage implements OnInit {
  Highcharts = Highcharts;
  barChartOptions;
  barChartInstance;

  areaChartOptions;
  areaChartInstance;

  lineChartOptions;
  lineChartInstance;

  chartResult;
  weeklyDays = ['SUN', 'MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT'];
  weeklyDaysLong = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

  constructor(private platform: Platform) { }

  logBarChart(event) {
    this.barChartInstance = event;
  }

  logAreaChart(event) {
    this.areaChartInstance = event;
  }

  logLineChart(event) {
    this.lineChartInstance = event;
  }

  private _refreshBarChart(options: {}) {
    this.barChartOptions = null;
    this.barChartOptions = options;
  }

  private _refreshAreaChart(options: {}) {
    this.areaChartOptions = null;
    this.areaChartOptions = options;
  }

  private _refreshLineChart(options: {}) {
    this.lineChartOptions = null;
    this.lineChartOptions = options;
  }

  private _calculateChartHeight(screenHeight: number, screenWidth: number): number {
    const padding = 16;
    if (screenHeight > 1000) {
      return 400;
    }

    // replace with screen orientation check
    if (screenWidth > 500) {
      return screenHeight - padding * 2;
    }

    return screenHeight / 2 - padding * 2;
  }

  private _calculateChartWidth(screenWidth: number): number {
    if (+screenWidth > 990) {
      const padding = 16;
      return +screenWidth / 3 - padding * 2;
    }
    return +screenWidth;
  }

  private _getSampleSeries(): number[] {
    const result = [];
    for (let i = 0; i < 7; i++) {
      result.push(Math.round(Math.random() * 100));
    }
    this.chartResult = result;
    return result;
  }

  private _getGradient(light: boolean): any {
    const gradient = {
      linearGradient: {
        x1: 0,
        x2: 0,
        y1: 0,
        y2: 1
      },
      stops: []
    };
    if (light) {
      gradient.stops = [
        [0, 'rgba(247, 142, 87, .5)'],
        [1, 'rgba(203, 49, 73, .5)']
      ];
    } else {
      gradient.stops = [
        [0, 'rgba(46, 33, 42, .5)'],
        [1, 'rgba(91, 32, 52, .5)']
      ];
    }
    return gradient;
  }

  private _getChartOptions(type: string, light: boolean) {
    return {
      title: {
        text: null
      },
      chart: {
        width: this._calculateChartWidth(this.platform.width()),
        height: this._calculateChartHeight(this.platform.height(), this.platform.width()),
        alignTicks: false,
        type: type,
        margin: [20, 35, 20, 40],
        backgroundColor: 'rgba(0,0,0,0)',
        style: {
          fontFamily: '\"Roboto\", \"Lucida Grande\", \"Lucida Sans Unicode\", Verdana, Arial, Helvetica, sans-serif',
          fontSize: '10px'
        },
        spacing: [0, 0, 0, 0]
      },
      legend: {
        enabled: false
      },
      credits: {
        enabled: false
      },
      yAxis: {
        title:{
          text:null
        },
        
      },
      xAxis: {
        categories: this.weeklyDays
      },
      plotOptions: {
        series: {
          pointPadding: 0.1,
          groupPadding: 0,
          borderWidth: 0,
          shadow: false
        }
      },
      series: [{
        data: this._getSampleSeries(),
        color: this._getGradient(light)
      }]
    };
  }

  @HostListener('window:resize', ['$event'])
  onResize(event) {
    const width = event.target.innerWidth;
    const height = event.target.innerHeight;
    if (!this.barChartInstance) { return; }
    const options = {
      chart: {
        width: this._calculateChartWidth(width),
        height: this._calculateChartHeight(height, width)
      }
    };
    this._refreshBarChart(options);
    this._refreshAreaChart(options);
    this._refreshLineChart(options);
  }

  ngOnInit() {
    this.platform.ready().then(() => {
      let options = this._getChartOptions('column', true);
      this._refreshBarChart(options);

      options = this._getChartOptions('area', false);
      options.plotOptions.series['pointPlacement'] = 'on';
      this._refreshAreaChart(options);

      options = this._getChartOptions('line', true);
      options.plotOptions.series['pointPlacement'] = 'on';
      this._refreshLineChart(options);
    });
  }


}
