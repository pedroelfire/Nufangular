import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DialogModule } from 'primeng/dialog';
import { MealItineraryComponent } from './meal-itinerary.component';
import { AddMealFormModule } from '../add-meal-form/add-meal-form.module';

@NgModule({
  declarations: [MealItineraryComponent],
  imports: [CommonModule, DialogModule, AddMealFormModule],
  exports: [MealItineraryComponent],
})
export class MealItineraryModule {}
