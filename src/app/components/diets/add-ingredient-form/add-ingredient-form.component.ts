import { Component } from '@angular/core';
import { Ingredient } from 'src/types';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-add-ingredient-form',
  templateUrl: './add-ingredient-form.component.html',
  styleUrls: ['./add-ingredient-form.component.scss'],
})
export class AddIngredientFormComponent {
  ingredient!: Ingredient;

  constructor() {}
}
