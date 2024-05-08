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

  ingredientFormIsVisible: boolean = false;
  isChecked = false;

  // Como verificar si un ingredient ya forma parte de selectedIngredients para que isChecked se inicialice como true?
  // ngOnInit() {
  //   this.isChecked =
  //     this.selectedIngredients.length > 0
  //       ? this.selectedIngredients
  //           .map((i) => i.food_id)
  //           .includes(this.food_item.food_id)
  //       : false;
  // }

  onIngredientChange = (event: any) => {
    this.isChecked = event.target.checked;
    if (this.isChecked) {
      this.ingredientFormIsVisible = true;
    } else if (!this.isChecked) {
      this.ingredientFormIsVisible = false;
      this.removeIngredientEvent.emit(this.food_item.food_id);
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
