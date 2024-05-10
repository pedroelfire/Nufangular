import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DiaryMainComponent } from './diary-main.component';
import { MealItemModule } from 'src/app/shared/meal-item/meal-item.module';
import { WeekBarModule } from 'src/app/shared/week-bar/week-bar.module';
import { MealSummaryModule } from '../meal-summary/meal-summary.module';
import { DiaryJackModule } from '../diary-jack/diary-jack.module';

@NgModule({
  declarations: [DiaryMainComponent],
  imports: [
    CommonModule,
    MealItemModule,
    WeekBarModule,
    MealSummaryModule,
    DiaryJackModule,
  ],
  exports: [DiaryMainComponent],
})
export class DiaryMainModule {}
