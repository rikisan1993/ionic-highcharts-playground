import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SummaryPage } from './summary.page';
import { HighchartsChartModule } from 'highcharts-angular';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HighchartsChartModule,
  ],
  declarations: [SummaryPage],
  entryComponents: [SummaryPage],
  exports: [SummaryPage]
})
export class SummaryPageModule {}
