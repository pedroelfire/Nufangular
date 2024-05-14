import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { InputTextModule } from 'primeng/inputtext';
import { CheckboxModule } from 'primeng/checkbox';
import { DropdownModule } from 'primeng/dropdown';
import { CalendarModule } from 'primeng/calendar';
import { AddMealFormComponent } from './add-meal-form.component';
import { FoodItemModule } from '../food-item/food-item.module';
import { ChartModule } from 'primeng/chart';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [AddMealFormComponent],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    InputTextModule,
    CheckboxModule,
    DropdownModule,
    ChartModule,
    FoodItemModule,
    HttpClientModule,
    CalendarModule,
  ],
  exports: [AddMealFormComponent],
})
export class AddMealFormModule {}
