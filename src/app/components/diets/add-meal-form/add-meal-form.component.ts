import { Component, Output, EventEmitter } from '@angular/core';
import { Observable, BehaviorSubject } from 'rxjs';
import { NgForm } from '@angular/forms';
import { NgModel } from '@angular/forms';

@Component({
  selector: 'app-add-meal-form',
  templateUrl: './add-meal-form.component.html',
  styleUrls: ['./add-meal-form.component.scss'],
})
export class AddMealFormComponent {
  // Mock Up data gathered from FatSecret API. It should change when new Search Query is inputted
  food_items = [
    {
      food_id: '123456',
      food_name: 'Apple, medium',
      food_type: 'Generic',
      food_url: 'https://www.fatsecret.com/calories-nutrition/generic/apple',
      brand_name: null,

      serving: {
        serving_id: '98765',
        serving_description: '1 medium apple (182g)',
        number_of_units: 1,
        metric_serving_amount: 182,
        metric_serving_unit: 'g',
      },

      nutrients: {
        calories: 95,
        total_fat: 0.3,
        saturated_fat: 0.05,
        cholesterol: 0,
        sodium: 2,
        potassium: 195,
        carbohydrates: 25,
        dietary_fiber: 4.4,
        sugars: 19,
        protein: 0.5,
        vitamin_a: 90, // IU
        vitamin_c: 8.4, // mg
      },
    },
    {
      food_id: '123457',
      food_name: 'Banana, medium',
      food_type: 'Generic',
      food_url: 'https://www.example.com/nutrition/banana',
      brand_name: null,
      serving: {
        serving_id: '98765',
        serving_description: '1 medium banana',
        number_of_units: 1,
        metric_serving_amount: null, // Not always available
        metric_serving_unit: null, // Not always available
      },

      nutrients: {
        calories: 105,
        total_fat: 0.4,
        potassium: 422,
        carbohydrates: 27,
        sugars: 14,
        protein: null, // Not always available
        vitamin_a: null, // Fill in from data source
        vitamin_c: null, // Fill in from data source
      },
    },
    {
      food_id: '654321',
      food_name: 'Whole Wheat Bread, 1 slice',
      food_type: 'Generic',
      food_url: 'https://www.example.com/nutrition/bread',
      brand_name: null,
      serving: {
        serving_id: '54321',
        serving_description: '1 slice',
        number_of_units: 1,
        metric_serving_amount: null,
        metric_serving_unit: null,
      },

      nutrients: {
        calories: 75,
        total_fat: 1,
        sodium: 140,
        carbohydrates: 15,
        dietary_fiber: 2,
        protein: null,
        vitamin_a: null,
        vitamin_c: null,
      },
    },
    {
      food_id: '246810',
      food_name: 'Egg, large, whole',
      food_type: 'Generic',
      food_url: 'https://www.example.com/nutrition/egg',
      brand_name: null,
      serving: {
        serving_id: '13579',
        serving_description: '1 large egg',
        number_of_units: 1,
        metric_serving_amount: 50, // Approximate weight of a large egg
        metric_serving_unit: 'g',
      },

      nutrients: {
        calories: 70,
        total_fat: 5,
        saturated_fat: 1.5,
        cholesterol: 185,
        protein: 6,
        vitamin_a: null,
        vitamin_c: null,
      },
    },
    {
      food_id: '864209',
      food_name: 'Cheddar Cheese, 1 oz',
      food_type: 'Generic',
      food_url: 'https://www.example.com/nutrition/cheddar-cheese',
      brand_name: null,
      serving: {
        serving_id: '09876',
        serving_description: '1 oz',
        number_of_units: 1,
        metric_serving_amount: 28,
        metric_serving_unit: 'g',
      },

      nutrients: {
        calories: 115,
        total_fat: 9,
        saturated_fat: 6,
        sodium: 175,
        protein: 7,
        vitamin_a: null,
        vitamin_c: null,
      },
    },
    {
      food_id: '357912',
      food_name: 'Chicken Breast, grilled, skinless (3 oz)',
      food_type: 'Generic',
      food_url: 'https://www.example.com/nutrition/chicken-breast',
      brand_name: null,
      serving: {
        serving_id: '24680',
        serving_description: '3 oz',
        number_of_units: 1,
        metric_serving_amount: 85,
        metric_serving_unit: 'g',
      },

      nutrients: {
        calories: 130,
        total_fat: 3,
        protein: 26,
        vitamin_a: null,
        vitamin_c: null,
      },
    },
  ];

  units = ['gr', 'tablespoons', 'oz'];
  selectedServingUnit = '';
  searchQueryWord = '';
  @Output() close = new EventEmitter<void>();
  // Tracks checkboxes state
  selectedIngredients: any[] = [];
  checkboxesState: boolean[] = [];
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
