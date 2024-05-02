import { Component, Input, Output, EventEmitter } from '@angular/core';

interface FoodItem {
  food_id: string;
  food_name: string;
  food_type: string;
  food_url: string;
  brand_name: string;
  serving: {
    serving_id: string;
    serving_description: string;
    number_of_units: number;
    metric_serving_amount: number;
    metric_serving_unit: string;
  };
  nutrients: {
    calories: number;
    total_fat: number;
    saturated_fat: number;
    cholesterol: number;
    sodium: number;
    potassium: number;
    carbohydrates: number;
    dietary_fiber: number;
    sugars: number;
    protein: number;
    vitamin_a: number;
    vitamin_c: number;
  };
}

@Component({
  selector: 'app-food-item',
  templateUrl: './food-item.component.html',
  styleUrls: ['./food-item.component.scss'],
})
export class FoodItemComponent {
  @Input() food_item!: FoodItem;
  @Output() addIngredient = new EventEmitter();
  @Output() removeIngredient = new EventEmitter();

  ingredient: any = {};

  ngOnInit() {
    console.log(this.food_item);
    this.ingredient = {
      food_id: this.food_item.food_id,
      food_name: this.food_item.food_name,
      serving: this.food_item.serving,
      nutrients: this.food_item.nutrients,
    };
  }
  units = ['gr', 'ml', 'tablespoon', 'teaspoon', 'cup', 'piece'];
  isChecked = false;

  handleChange() {
    if (this.isChecked) {
      this.addIngredient.emit(this.ingredient);
    } else {
      this.removeIngredient.emit(this.ingredient.food_id);
    }
  }
}
