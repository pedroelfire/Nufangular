import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { InputTextModule } from 'primeng/inputtext';
import { CheckboxModule } from 'primeng/checkbox';
import { DropdownModule } from 'primeng/dropdown';
import { AddMealFormComponent } from './add-meal-form.component';

@NgModule({
  declarations: [AddMealFormComponent],
  imports: [
    CommonModule,
    FormsModule,
    InputTextModule,
    CheckboxModule,
    DropdownModule,
  ],
  exports: [AddMealFormComponent],
})
export class AddMealFormModule {}
