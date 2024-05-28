import { Component, Input } from '@angular/core';
import { MealIngredient } from 'src/types';

@Component({
  selector: 'app-ingredient-item',
  templateUrl: './ingredient-item.component.html',
  styleUrls: ['./ingredient-item.component.scss'],
})
export class IngredientItemComponent {
  @Input() ingredient!: MealIngredient;
}
