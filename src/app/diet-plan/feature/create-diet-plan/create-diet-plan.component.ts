import { Component } from '@angular/core';

@Component({
  selector: 'app-create-diet-plan',
  templateUrl: './create-diet-plan.component.html',
  styleUrls: ['./create-diet-plan.component.scss'],
})
export class CreateDietPlanComponent {
  mockMealData = [
    {
      meal_name: 'Grilled Chicken Salad',
      macros: {
        fat: 12.5,
        carbs: 23.0,
        protein: 36.4,
      },
    },
    {
      meal_name: 'Tuna Sandwich',
      macros: {
        fat: 8.2,
        carbs: 42.1,
        protein: 21.7,
      },
    },
    {
      meal_name: 'Lentil Soup',
      macros: {
        fat: 4.8,
        carbs: 35.3,
        protein: 18.0,
      },
    },
    {
      meal_name: 'Salmon with Roasted Vegetables',
      macros: {
        fat: 28.6,
        carbs: 15.4,
        protein: 32.0,
      },
    },
    {
      meal_name: 'Greek Yogurt with Berries',
      macros: {
        fat: 5.5,
        carbs: 26.1,
        protein: 15.8,
      },
    },
    {
      meal_name: 'Steak and Sweet Potato',
      macros: {
        fat: 18.3,
        carbs: 39.6,
        protein: 41.2,
      },
    },
    {
      meal_name: 'Quinoa Bowl with Tofu',
      macros: {
        fat: 10.0,
        carbs: 30.7,
        protein: 17.5,
      },
    },
    {
      meal_name: 'Black Bean Burrito',
      macros: {
        fat: 13.9,
        carbs: 58.2,
        protein: 20.4,
      },
    },
    {
      meal_name: 'Shrimp Scampi with Pasta',
      macros: {
        fat: 22.1,
        carbs: 49.6,
        protein: 25.0,
      },
    },
    {
      meal_name: 'Omelet with Spinach and Feta',
      macros: {
        fat: 16.7,
        carbs: 5.8,
        protein: 23.3,
      },
    },
  ];
}
