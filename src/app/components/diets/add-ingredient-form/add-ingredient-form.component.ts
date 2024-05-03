import { Component } from '@angular/core';
import { Ingredient } from 'src/types';
import { NgForm, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-add-ingredient-form',
  templateUrl: './add-ingredient-form.component.html',
  styleUrls: ['./add-ingredient-form.component.scss'],
})
export class AddIngredientFormComponent {
  ingredient!: Ingredient;

  addIngredient(ingredientForm: NgForm) {
    if (ingredientForm.valid) {
      const ingredient = ingredientForm.value;
      console.log(ingredient);
    } else {
      console.log('Form is invalid');
    }
  }

  constructor() {}
}
