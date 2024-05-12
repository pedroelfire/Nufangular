import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeMainComponent } from './home-main.component';
import { QuestModule } from '../quest/quest.module';
import { StatsModule } from '../stats/stats.module';
import { NgOptimizedImage } from '@angular/common';
import { ProgressBarModule } from 'primeng/progressbar';

@NgModule({
  declarations: [HomeMainComponent],
  imports: [
    CommonModule,
    QuestModule,
    NgOptimizedImage,
    ProgressBarModule,
    StatsModule,
  ],
  exports: [HomeMainComponent],
})
export class HomeMainModule {}
