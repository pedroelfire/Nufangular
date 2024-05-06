import { Component, Output, EventEmitter } from '@angular/core';

import { NgForm } from '@angular/forms';
import { FoodItemsService } from 'src/app/services/food-items.service';
import { FoodSearchResult } from 'src/types';
import { ButtonModule } from 'primeng/button';

@Component({
  selector: 'app-add-meal-form',
  templateUrl: './add-meal-form.component.html',
  styleUrls: ['./add-meal-form.component.scss'],
})
export class AddMealFormComponent {
  food_items: FoodSearchResult[] = [];

  constructor(private foodItemsService: FoodItemsService) {}
  ngOnInit() {
    this.searchQueryFoodItems("");
  }

  onChangeQueryInput(event: any){
    this.searchQueryWord = event.target.value;
    this.searchQueryFoodItems(this.searchQueryWord)
  }

  @Output() close = new EventEmitter<void>();
  searchQueryWord = 'Pechuga de pollo';
  selectedIngredients: any[] = [];
  mealSummary: any = {
    calories: 0,
    total_fat: 0,
    carbohydrates: 0,
    protein: 0,
  };

  createMeal(mealForm: NgForm) {
    if (mealForm.valid) {
      const meal = mealForm.value;
      console.log(meal);
    } else {
      console.log('Form is invalid');
    }
  }

  createMealSummary() {
    this.mealSummary = {
      calories: 0,
      total_fat: 0,
      carbohydrates: 0,
      protein: 0,
    };

    this.selectedIngredients.forEach((ingredient) => {
      this.mealSummary.calories += ingredient.nutrients.calories;
      this.mealSummary.total_fat += ingredient.nutrients.total_fat;
      this.mealSummary.carbohydrates += ingredient.nutrients.carbohydrates;
      this.mealSummary.protein += ingredient.nutrients.protein;
    });
  }

  getMacrosChartData() {
    return {
      labels: ['Grasa', 'Carbohidratos', 'Proteína'],
      datasets: [
        {
          label: 'Macronutrientes (g)',
          data: [
            this.mealSummary.total_fat,
            this.mealSummary.carbohydrates,
            this.mealSummary.protein,
          ],
          backgroundColor: [
            'rgba(54, 162, 235, 0.2)',
            'rgba(255, 206, 86, 0.2)',
            'rgba(75, 192, 192, 0.2)',
          ],
          borderColor: [
            'rgba(54, 162, 235, 1)',
            'rgba(255, 206, 86, 1)',
            'rgba(75, 192, 192, 1)',
          ],
          borderWidth: 1,
        },
      ],
    };
  }

  getChartOptions() {
    return {
      cutout: '70%',
    };
  }
  // Event handlers
  addIngredient(ingredient: any) {
    this.selectedIngredients.push(ingredient);
    this.createMealSummary();
  }

  removeIngredient(food_id: number) {
    this.selectedIngredients = this.selectedIngredients.filter(
      (item) => item.food_id != food_id
    );
    this.createMealSummary();
  }

  searchQueryFoodItems(ingredient: string) {
    this.foodItemsService
      .searchFoodItems(ingredient)
      .subscribe((response) => {
        this.food_items = response.data;
      });
  }

  closeForm() {
    this.close.emit();
  }
}
