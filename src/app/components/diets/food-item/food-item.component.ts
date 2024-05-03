import { Component, Input, Output, EventEmitter } from '@angular/core';
import { FoodSearchResult } from 'src/types';
import { faUtensils } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-food-item',
  templateUrl: './food-item.component.html',
  styleUrls: ['./food-item.component.scss'],
})
export class FoodItemComponent {
  // Font Awesome Icon
  faUtensils = faUtensils;

  @Input() food_item!: FoodSearchResult;
  @Output() addIngredient = new EventEmitter();
  @Output() removeIngredient = new EventEmitter();

  // ingredient: any = {};

  // ngOnInit() {
  //   this.ingredient = {
  //     food_id: this.food_item.food_id,
  //     food_name: this.food_item.food_name,
  //     serving: this.food_item.serving,
  //     nutrients: this.food_item.nutrients,
  //   };
  // }
  // units = ['gr', 'ml', 'tablespoon', 'teaspoon', 'cup', 'piece'];
  // isChecked = false;

  // handleChange() {
  //   if (this.isChecked) {
  //     this.addIngredient.emit(this.ingredient);
  //   } else {
  //     this.removeIngredient.emit(this.ingredient.food_id);
  //   }
  // }
}
