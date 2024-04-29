import { Component, Output, EventEmitter } from '@angular/core';
import { NgForm } from '@angular/forms';
import { NgModel } from '@angular/forms';

@Component({
  selector: 'app-add-meal-form',
  templateUrl: './add-meal-form.component.html',
  styleUrls: ['./add-meal-form.component.scss'],
})
export class AddMealFormComponent {
  units = ['gr', 'tablespoons', 'oz'];
  selectedServingUnit = '';
  searchQueryWord = '';
  checked = false;
  @Output() close = new EventEmitter<void>();

  selectedIngredients: any[] = [];

  addIngredient(ingredient: any) {
    this.selectedIngredients.push(ingredient);
  }

  removeIngredient(ingredient: any) {
    this.selectedIngredients = this.selectedIngredients.filter(
      (i) => i !== ingredient
    );
  }

  createMeal(mealForm: NgForm) {
    if (mealForm.valid) {
      const meal = mealForm.value;
      console.log(meal);
    } else {
      console.log('Form is invalid');
    }
    console.log(this.selectedIngredients);
  }

  closeForm() {
    this.close.emit();
  }
}
