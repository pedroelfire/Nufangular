import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CheckboxModule } from 'primeng/checkbox';
import { DropdownModule } from 'primeng/dropdown';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FoodItemComponent } from './food-item.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { DataViewModule } from 'primeng/dataview';
import { DialogModule } from 'primeng/dialog';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { ChartModule } from 'primeng/chart';
import { InputNumberModule } from 'primeng/inputnumber';
import { CalendarModule } from 'primeng/calendar';




@NgModule({
  declarations: [FoodItemComponent],
  imports: [
    CommonModule,
    CheckboxModule,
    DropdownModule,
    FormsModule,
    FontAwesomeModule,
    DataViewModule,
    DialogModule,
    ButtonModule,
    InputTextModule,
    ChartModule,
    InputNumberModule,
    CalendarModule, 
    ReactiveFormsModule
  ],
  exports: [FoodItemComponent],
})
export class FoodItemModule {}
