import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CalendarModule } from 'primeng/calendar';
import { CreateDietPlanComponent } from './create-diet-plan.component';
import { MealItineraryModule } from '../meal-itinerary/meal-itinerary.module';
import { DietSlidesModule } from '../diet-slides/diet-slides.module';
import { ClientInfoCardModule } from '../client-info-card/client-info-card.module';

@NgModule({
  declarations: [CreateDietPlanComponent],
  imports: [
    CommonModule,
    BrowserAnimationsModule,
    CalendarModule,
    MealItineraryModule,
    DietSlidesModule,
    ClientInfoCardModule,
    FormsModule,
  ],
  exports: [],
})
export class CreateDietPlanModule {}
