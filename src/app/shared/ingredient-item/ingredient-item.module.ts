import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IngredientItemComponent } from './ingredient-item.component';

@NgModule({
  declarations: [IngredientItemComponent],
  imports: [CommonModule],
  exports: [IngredientItemComponent],
})
export class IngredientItemModule {}
