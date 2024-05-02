import { Component, Output, EventEmitter } from '@angular/core';
import { Observable, BehaviorSubject } from 'rxjs';
import { NgForm } from '@angular/forms';
import { NgModel } from '@angular/forms';

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
  selector: 'app-add-meal-form',
  templateUrl: './add-meal-form.component.html',
  styleUrls: ['./add-meal-form.component.scss'],
})
export class AddMealFormComponent {
  // Mock Up data gathered from FatSecret API. It should change when new Search Query is inputted
  food_items: FoodItem[] = [
    {
      food_id: '1',
      food_name: 'Apple',
      food_type: 'Fruit',
      food_url:
        'https://www.fatsecret.com/calories-nutrition/generic/apple-raw',
      brand_name: 'Generic',
      serving: {
        serving_id: '1',
        serving_description: '1 medium',
        number_of_units: 1,
        metric_serving_amount: 182,
        metric_serving_unit: 'g',
      },
      nutrients: {
        calories: 95,
        total_fat: 0.3,
        saturated_fat: 0.1,
        cholesterol: 0,
        sodium: 2,
        potassium: 195,
        carbohydrates: 25,
        dietary_fiber: 4.4,
        sugars: 19,
        protein: 0.5,
        vitamin_a: 98,
        vitamin_c: 8.4,
      },
    },
    {
      food_id: '2',
      food_name: 'Banana',
      food_type: 'Fruit',
      food_url:
        'https://www.fatsecret.com/calories-nutrition/generic/banana-raw',
      brand_name: 'Generic',
      serving: {
        serving_id: '2',
        serving_description: '1 medium',
        number_of_units: 1,
        metric_serving_amount: 118,
        metric_serving_unit: 'g',
      },
      nutrients: {
        calories: 105,
        total_fat: 0.4,
        saturated_fat: 0.1,
        cholesterol: 0,
        sodium: 1,
        potassium: 422,
        carbohydrates: 27,
        dietary_fiber: 3.1,
        sugars: 14,
        protein: 1.3,
        vitamin_a: 76,
        vitamin_c: 10,
      },
    },
  ];
  @Output() close = new EventEmitter<void>();
  selectedServingUnit = '';
  searchQueryWord = '';
  // Tracks checkboxes state
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

  calculateKcalPerServing(serving: any) {
    return Math.round(serving.calories / serving.number_of_units);
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
  onIngredientChange(event: any, ingredient: any) {
    if (event.checked) {
      this.selectedIngredients.push(ingredient);
    } else {
      this.selectedIngredients = this.selectedIngredients.filter(
        (item) => item.food_id != ingredient.food_id
      );
    }
    this.createMealSummary();
  }

  closeForm() {
    this.close.emit();
  }
}
