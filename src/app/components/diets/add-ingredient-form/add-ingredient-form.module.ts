import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { ChartModule } from 'primeng/chart';
import { DropdownModule } from 'primeng/dropdown';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

import { AddIngredientFormComponent } from './add-ingredient-form.component';

@NgModule({
  declarations: [AddIngredientFormComponent],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    ChartModule,
    DropdownModule,
  ],
  exports: [AddIngredientFormComponent],
})
export class AddIngredientFormModule {}
