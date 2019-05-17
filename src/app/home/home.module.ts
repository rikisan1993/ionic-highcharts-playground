import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';

import { SuperTabsModule } from '@ionic-super-tabs/angular';

import { HomePage } from './home.page';
import { TrendPageModule } from '../trend/trend.module';
import { DistributionPageModule } from '../distribution/distribution.module';
import { SummaryPageModule } from '../summary/summary.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SuperTabsModule,
    TrendPageModule,
    DistributionPageModule,
    SummaryPageModule,
    RouterModule.forChild([
      {
        path: '',
        component: HomePage
      }
    ])
  ],
  declarations: [HomePage]
})
export class HomePageModule {}
