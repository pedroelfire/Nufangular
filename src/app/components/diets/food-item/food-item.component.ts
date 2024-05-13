import { Component, Input, Output, EventEmitter } from '@angular/core';
import { FoodSearchResult, MealFormIngredient } from 'src/types';

@Component({
  selector: 'app-food-item',
  templateUrl: './food-item.component.html',
  styleUrls: ['./food-item.component.scss'],
})
export class FoodItemComponent {
  @Input() food_item!: FoodSearchResult;
  @Input() selectedIngredients: MealFormIngredient[] = [];
  @Output() addIngredientEvent = new EventEmitter<MealFormIngredient>();
  @Output() removeIngredientEvent = new EventEmitter<number>();

  food_id!: number;
  ingredientFormIsVisible: boolean = false;
  isChecked = false;

  ngOnInit() {
    this.food_id = parseInt(this.food_item.food_id);

    this.isChecked = this.selectedIngredients.some(
      (i) => i.food_id === this.food_id
    );
  }

  ngOnChanges(changes: any): void {
    if (changes['selectedIngredients']) {
      this.onSelectedIngredientsChange(
        changes['selectedIngredients'].currentValue
      );
    }
  }

  onSelectedIngredientsChange = (selectedIngredients: MealFormIngredient[]) => {
    this.isChecked = selectedIngredients.some(
      (i) => i.food_id === this.food_id
    );
  };

  onIngredientChange = (event: any) => {
    this.isChecked = event.target.checked;
    if (this.isChecked) {
      this.ingredientFormIsVisible = true;
    } else if (!this.isChecked) {
      this.ingredientFormIsVisible = false;
      this.removeIngredientEvent.emit(this.food_id);
    }
  };

  closeIngredientForm = () => {
    this.ingredientFormIsVisible = false;
  };

  cancelAddIngredient = () => {
    this.closeIngredientForm();
    this.isChecked = false;
  };
}
