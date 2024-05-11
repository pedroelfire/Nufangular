import { Component, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { FoodItemsService } from 'src/app/services/food-items.service';
import { IngredientDataService } from 'src/app/services/ingredient-data.service';
import {
  FoodItem,
  FoodSearchResult,
  Meal,
  MealFormIngredient,
} from 'src/types';
import { Subscription, Subject } from 'rxjs';
import { debounceTime, distinctUntilChanged, tap } from 'rxjs/operators';
import { format } from 'date-fns';

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
  defaultDate = new Date().setHours(8, 0, 0);

  mealForm: FormGroup;

  constructor(
    private foodItemsService: FoodItemsService,
    private ingredientDataService: IngredientDataService
  ) {
    this.mealForm = new FormGroup({
      mealName: new FormControl('', Validators.required),
      mealTime: new FormControl(this.defaultDate, Validators.required),
    });
  }
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

  submitCreateMeal() {
    if (this.mealForm.valid && this.selectedIngredients.length > 0) {
      const selectedDate = this.mealForm.get('mealTime')?.value;

      const meal = {
        name: this.mealForm.get('mealName')?.value,
        ingredients: this.selectedIngredients.map((ingredient) => ({
          food_id: ingredient.food_id,
          data: ingredient,
          metric_serving_unit: ingredient.metric_serving_unit,
          metric_serving_amount: ingredient.metric_serving_amount,
          created_by: 1,
        })),
        meal_time: format(selectedDate, 'HH:mm:ss'),
        created_by: 1,
      };
      this.foodItemsService.createMeal(meal).subscribe((response) => {
        this.closeForm();
      });
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
