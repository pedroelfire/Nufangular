import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CalendarModule, DateAdapter } from 'angular-calendar';
import { adapterFactory } from 'angular-calendar/date-adapters/date-fns';
import { CreateDietPlanComponent } from './create-diet-plan.component';
import { CalendarComponent } from '../calendar/calendar.component'; // Use primeng inline calendar. What form is submitted when adding new meal?
import { MealItineraryModule } from '../meal-itinerary/meal-itinerary.module';

@NgModule({
  declarations: [CreateDietPlanComponent, CalendarComponent],
  imports: [
    CommonModule,
    BrowserAnimationsModule,
    CalendarModule.forRoot({
      provide: DateAdapter,
      useFactory: adapterFactory,
    }),
    MealItineraryModule,
  ],
  exports: [],
})
export class CreateDietPlanModule {}
