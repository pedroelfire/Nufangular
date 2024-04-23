import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CreateDietPlanComponent } from './create-diet-plan.component';
import { MealItineraryComponent } from '../meal-itinerary/meal-itinerary.component';

@NgModule({
  declarations: [CreateDietPlanComponent, MealItineraryComponent],
  imports: [CommonModule],
})
export class CreateDietPlanModule {}
