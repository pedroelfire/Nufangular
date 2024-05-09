import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DiaryMainComponent } from './diary-main.component';
import { MealItemModule } from '../meal-item/meal-item.module';

@NgModule({
  declarations: [DiaryMainComponent],
  imports: [CommonModule, MealItemModule],
  exports: [DiaryMainComponent],
  // schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class DiaryMainModule {}
