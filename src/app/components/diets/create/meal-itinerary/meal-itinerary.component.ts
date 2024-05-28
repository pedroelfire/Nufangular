import { Component } from '@angular/core';
import { FoodItemsService } from 'src/app/services/food-items.service';
import { Meal } from 'src/types';

@Component({
  selector: 'app-meal-itinerary',
  templateUrl: './meal-itinerary.component.html',
  styleUrls: ['./meal-itinerary.component.scss'],
})
export class MealItineraryComponent {
  meals: Meal[] = [];

  constructor(private foodItemsService: FoodItemsService) {}
  ngOnInit(): void {
    this.foodItemsService.mealAdded$.subscribe((meal) => {
      this.meals.push(meal);
    });
  }

  visible: boolean = false;

  showAddMealForm = () => {
    this.visible = true;
  };
  closeForm = () => {
    this.visible = false;
  };

  handleCloseFromForm(event: any) {
    this.closeForm();
  }
}
