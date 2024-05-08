import { Component, Output, EventEmitter } from '@angular/core';
import { NgForm, FormControl } from '@angular/forms';
import { FoodItemsService } from 'src/app/services/food-items.service';
import { IngredientDataService } from 'src/app/services/ingredient-data.service';
import { FoodItem, FoodSearchResult, MealFormIngredient } from 'src/types';

import { Subscription, Subject } from 'rxjs';
import { debounceTime, distinctUntilChanged, tap } from 'rxjs/operators';

@Component({
  selector: 'app-add-meal-form',
  templateUrl: './add-meal-form.component.html',
  styleUrls: ['./add-meal-form.component.scss'],
})
export class AddMealFormComponent {
  food_items: FoodSearchResult[] = [];
  inputSubject = new Subject<string>();
  ingredientSubscription!: Subscription;
  chartData: any;
  chartOptions: any;

  mealName = new FormControl('');

  constructor(
    private foodItemsService: FoodItemsService,
    private ingredientDataService: IngredientDataService
  ) {}
  ngOnInit() {
    this.searchQueryFoodItems();
    this.inputSubject
      .pipe(
        debounceTime(300),
        distinctUntilChanged(),
        tap((value) => this.searchQueryFoodItems(value))
      )
      .subscribe();

    this.ingredientSubscription =
      this.ingredientDataService.ingredientAdded$.subscribe((foodItem) => {
        // Handle the new ingredient data (foodItem) here
        this.addIngredient(foodItem);
      });
  }

  onChangeQueryInput(event: any) {
    this.inputSubject.next(event.target.value);
  }

  @Output() close = new EventEmitter<void>();
  selectedIngredients: MealFormIngredient[] = [];

  mealSummary: any = {
    calories: 0,
    total_fat: 0,
    carbohydrates: 0,
    protein: 0,
  };

  createMeal(mealForm: NgForm) {
    if (mealForm.valid) {
      const meal = {
        name: this.mealName.value,
        ingredients: this.selectedIngredients,
        meal_time: new Date(),
        created_by: 1,
      };
      console.log(meal);
    } else {
      console.log('Form is invalid');
    }
  }

  // createMealSummary() {
  //   this.mealSummary = {
  //     calories: 0,
  //     total_fat: 0,
  //     carbohydrates: 0,
  //     protein: 0,
  //   };

  //   this.selectedIngredients.forEach((ingredient) => {
  //     this.mealSummary.calories += ingredient.nutrients.calories;
  //     this.mealSummary.total_fat += ingredient.nutrients.total_fat;
  //     this.mealSummary.carbohydrates += ingredient.nutrients.carbohydrates;
  //     this.mealSummary.protein += ingredient.nutrients.protein;
  //   });
  // }

  addIngredient(food_item: any) {
    this.selectedIngredients.push(food_item);
  }

  removeIngredient(food_id: number) {
    console.log(food_id);
    this.selectedIngredients = this.selectedIngredients.filter(
      (item) => item.food_id != food_id
    );
    // this.createMealSummary();
  }

  searchQueryFoodItems(ingredient: string = 'Chicken Breast') {
    this.foodItemsService.searchFoodItems(ingredient).subscribe((response) => {
      this.food_items = response.data;
    });
  }

  closeForm() {
    this.close.emit();
  }

  ngOnDestroy() {
    this.ingredientSubscription.unsubscribe();
  }
}
