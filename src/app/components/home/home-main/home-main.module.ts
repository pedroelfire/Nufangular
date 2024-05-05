import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeMainComponent } from './home-main.component';
import { QuestModule } from '../quest/quest.module';
import { JackCardModule } from '../jack-card/jack-card.module';
import { NgOptimizedImage } from '@angular/common';
import { ProgressBarModule } from 'primeng/progressbar';

@NgModule({
  declarations: [HomeMainComponent],
  imports: [
    CommonModule,
    QuestModule,
    JackCardModule,
    NgOptimizedImage,
    ProgressBarModule,
  ],
  exports: [HomeMainComponent],
})
export class HomeMainModule {}
