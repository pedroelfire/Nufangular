import {
  Component,
  Input,
  Output,
  EventEmitter,
  ViewChildren,
  ElementRef,
} from '@angular/core';
import { FoodSearchResult } from 'src/types';
import { BackendURLsService } from 'src/app/services/backend-urls.service';
import {
  FormGroup,
  FormBuilder,
  Validators,
  FormControlName,
  AbstractControl,
} from '@angular/forms';

@Component({
  selector: 'app-food-item',
  templateUrl: './food-item.component.html',
  styleUrls: ['./food-item.component.scss'],
})
export class FoodItemComponent {
  ingredientFormIsVisible: boolean = false;
  isChecked = false;

  @Input() food_item!: FoodSearchResult;

  // Event handlers
  onIngredientChange = (event: any) => {
    this.isChecked = event.target.checked;
    if (this.isChecked) {
      this.ingredientFormIsVisible = true;
    }
  };
}
