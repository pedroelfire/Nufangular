import { Component, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { FoodItemsService } from 'src/app/services/food-items.service';
import { IngredientDataService } from 'src/app/services/ingredient-data.service';
import { FoodSearchResult, MealFormIngredient } from 'src/types';
import { Subscription, Subject } from 'rxjs';
import { debounceTime, distinctUntilChanged, tap } from 'rxjs/operators';
import { format } from 'date-fns';

import { doughnutPlugin } from 'src/empty-doughnut-plugin';

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
  emptyDoughnutPlugin = doughnutPlugin;
  defaultDate = new Date();

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

  loadChart() {
    const documentStyle = getComputedStyle(document.documentElement);

    this.chartData = {
      labels: ['Grasas', 'Carbohidratos', 'Proteínas'],
      datasets: [
        {
          label: 'Macros',
          data: [
            this.mealSummary.fat,
            this.mealSummary.carbohydrates,
            this.mealSummary.protein,
          ],
          backgroundColor: [
            documentStyle.getPropertyValue('--fat'),
            documentStyle.getPropertyValue('--carbs'),
            documentStyle.getPropertyValue('--protein'),
          ],
        },
      ],
    };
    this.chartOptions = {
      cutout: '80%',
      scales: {
        y: {
          beginAtZero: true,
          ticks: {
            display: false,
          },
        },
      },
      labels: {
        display: false,
      },
      tooltips: {
        callbacks: {
          label: function (tooltipItem: any) {
            return tooltipItem.yLabel;
          },
        },
      },
      plugins: {
        emptyDoughnut: {
          color: 'rgba(255, 128, 0, 0.5)',
          width: 2,
          radiusDecrease: 20,
        },
      },
    };
  }

  ngOnInit() {
    this.searchQueryFoodItems();
    this.createMealSummary();
    this.loadChart();
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
    fat: 0,
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
        this.foodItemsService.emitMealAdded(response.data);
        this.closeForm();
      });
    } else {
      console.log('Form is invalid');
    }
  }

  createMealSummary() {
    this.mealSummary = {
      calories: 0,
      fat: 0,
      carbohydrates: 0,
      protein: 0,
    };

    this.selectedIngredients.forEach((ingredient) => {
      this.mealSummary.calories += ingredient.calories;
      this.mealSummary.fat += ingredient.macros.fat;
      this.mealSummary.carbohydrates += ingredient.macros.carbs;
      this.mealSummary.protein += ingredient.macros.protein;
    });
  }

  handleIngredientClick(ingredient: MealFormIngredient) {
    this.removeIngredient(ingredient.food_id);
  }

  addIngredient(food_item: any) {
    this.selectedIngredients.push(food_item);
    this.createMealSummary();
    this.loadChart();
  }

  removeIngredient(food_id: number) {
    this.selectedIngredients = this.selectedIngredients.filter(
      (item) => item.food_id != food_id
    );
    this.createMealSummary();
    this.loadChart();
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
