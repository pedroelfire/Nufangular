import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CalendarModule, DateAdapter } from 'angular-calendar';
import { adapterFactory } from 'angular-calendar/date-adapters/date-fns';
import { CreateDietPlanComponent } from './create-diet-plan.component';
import { MealItineraryComponent } from '../meal-itinerary/meal-itinerary.component';
import { AddMealFormComponent } from '../add-meal-form/add-meal-form.component';
import { CalendarComponent } from '../calendar/calendar.component';
import { DialogModule } from 'primeng/dialog';

@NgModule({
  declarations: [
    CreateDietPlanComponent,
    MealItineraryComponent,
    CalendarComponent,
    AddMealFormComponent,
  ],
  imports: [
    CommonModule,
    BrowserAnimationsModule,
    CalendarModule.forRoot({
      provide: DateAdapter,
      useFactory: adapterFactory,
    }),
    DialogModule,
  ],
  exports: [AddMealFormComponent],
})
export class CreateDietPlanModule {}
