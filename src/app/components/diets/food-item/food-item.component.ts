import {
  Component,
  Input,
  Output,
  EventEmitter,
  ViewChildren,
  ElementRef,
} from '@angular/core';
import { FoodSearchResult } from 'src/types';
import { faUtensils } from '@fortawesome/free-solid-svg-icons';
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
  // Font Awesome Icon
  faUtensils = faUtensils;
  ingredientFormIsVisible: boolean = false;

  @Input() food_item!: FoodSearchResult;
}
