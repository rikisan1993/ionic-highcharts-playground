import { Component, HostListener, ViewChild } from '@angular/core';
import * as Highcharts from 'highcharts';
import { Platform } from '@ionic/angular';
import { SuperTabs } from '@ionic-super-tabs/angular';
import { TrendPage } from '../trend/trend.page';
import { DistributionPage } from '../distribution/distribution.page';
import { SummaryPage } from '../summary/summary.page';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  @ViewChild(SuperTabs) superTabs: SuperTabs;
  trendPage = TrendPage;
  distributionPage = DistributionPage;
  summaryPage = SummaryPage;


}
