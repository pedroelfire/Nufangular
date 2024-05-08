import { Injectable } from '@angular/core';
import { MealFormIngredient } from 'src/types';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class IngredientDataService {
  private ingredientAddedSource = new Subject<MealFormIngredient>();

  ingredientAdded$ = this.ingredientAddedSource.asObservable();

  emitIngredientAdded(foodItem: MealFormIngredient) {
    this.ingredientAddedSource.next(foodItem);
  }
}
