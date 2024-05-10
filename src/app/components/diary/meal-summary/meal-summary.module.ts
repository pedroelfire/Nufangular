import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MealSummaryComponent } from './meal-summary.component';

@NgModule({
  declarations: [MealSummaryComponent],
  imports: [CommonModule],
  exports: [MealSummaryComponent],
})
export class MealSummaryModule {}
