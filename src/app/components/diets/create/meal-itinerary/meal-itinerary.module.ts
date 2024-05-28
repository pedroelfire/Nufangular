import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DialogModule } from 'primeng/dialog';
import { MealItineraryComponent } from './meal-itinerary.component';
import { MealItemModule } from 'src/app/shared/meal-item/meal-item.module';
import { AddMealFormModule } from '../add-meal-form/add-meal-form.module';
import { FoodItemsService } from 'src/app/services/food-items.service';

@NgModule({
  declarations: [MealItineraryComponent],
  imports: [CommonModule, DialogModule, AddMealFormModule, MealItemModule],
  exports: [MealItineraryComponent],
})
export class MealItineraryModule {}
