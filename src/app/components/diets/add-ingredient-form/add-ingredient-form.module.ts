import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

import { AddIngredientFormComponent } from './add-ingredient-form.component';

@NgModule({
  declarations: [AddIngredientFormComponent],
  imports: [CommonModule, NgModule, HttpClientModule, FormsModule],
})
export class AddIngredientFormModule {}
