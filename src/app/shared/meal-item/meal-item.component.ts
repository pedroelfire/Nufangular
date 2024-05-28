import { Component, Input } from '@angular/core';
import { Meal } from 'src/types';

@Component({
  selector: 'app-meal-item',
  templateUrl: './meal-item.component.html',
  styleUrls: ['./meal-item.component.scss'],
})
export class MealItemComponent {
  @Input() meal!: Meal;

  mealSummary!: {
    totalCalories: number;
    totalProtein: number;
    totalCarbs: number;
    totalFat: number;
  };

  ngOnInit(): void {
    this.createMealSummary();
  }

  createMealSummary() {
    let totalCalories = 0;
    let totalProtein = 0;
    let totalCarbs = 0;
    let totalFat = 0;

    for (const ingredient of this.meal.ingredients) {
      const macros = ingredient.data.macros;
      totalCalories += ingredient.data.calories;
      totalProtein += macros.protein;
      totalCarbs += macros.carbs;
      totalFat += macros.fat;
    }

    this.mealSummary = {
      totalCalories: Math.round(totalCalories),
      totalProtein: parseFloat(totalProtein.toFixed(2)),
      totalCarbs: parseFloat(totalCarbs.toFixed(2)),
      totalFat: parseFloat(totalFat.toFixed(2)),
    };
  }
}
