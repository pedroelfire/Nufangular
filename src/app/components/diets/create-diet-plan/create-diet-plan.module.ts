import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CalendarModule, DateAdapter } from 'angular-calendar';
import { adapterFactory } from 'angular-calendar/date-adapters/date-fns';
import { CreateDietPlanComponent } from './create-diet-plan.component';
import { MealItineraryComponent } from '../meal-itinerary/meal-itinerary.component';
import { CalendarComponent } from '../calendar/calendar.component';

@NgModule({
  declarations: [
    CreateDietPlanComponent,
    MealItineraryComponent,
    CalendarComponent,
  ],
  imports: [
    CommonModule,
    BrowserAnimationsModule,
    CalendarModule.forRoot({
      provide: DateAdapter,
      useFactory: adapterFactory,
    }),
  ],
})
export class CreateDietPlanModule {}
