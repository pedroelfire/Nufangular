import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { DialogModule } from 'primeng/dialog';
import { ChartModule } from 'primeng/chart';
import { ButtonModule } from 'primeng/button';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

import { AddIngredientFormComponent } from './add-ingredient-form.component';

@NgModule({
  declarations: [AddIngredientFormComponent],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    DialogModule,
    ChartModule,
    ButtonModule,
  ],
  exports: [AddIngredientFormComponent],
})
export class AddIngredientFormModule {}
