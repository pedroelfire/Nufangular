import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NutritionistDashboardComponent } from './nutritionist-dashboard.component';
import { FullCalendarModule } from '@fullcalendar/angular';

@NgModule({
  declarations: [NutritionistDashboardComponent],
  imports: [CommonModule, FullCalendarModule],
})
export class NutritionistDashboardModule {}
