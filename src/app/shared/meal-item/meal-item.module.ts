import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MealItemComponent } from './meal-item.component';
import { IngredientItemModule } from '../ingredient-item/ingredient-item.module';

@NgModule({
  declarations: [MealItemComponent],
  imports: [CommonModule, IngredientItemModule],
  exports: [MealItemComponent],
})
export class MealItemModule {}
