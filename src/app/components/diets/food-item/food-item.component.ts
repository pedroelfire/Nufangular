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
  showIngredientCard: boolean = false;
  data: any;
  options: any;
  food_object: any;
  food_description: any;
  initialized: boolean = false; // Variable para controlar si ya se ha inicializado
  caloriesPerGr: number = 0;

  constructor(private db: BackendURLsService, private fb: FormBuilder) {}
  @ViewChildren(FormControlName, { read: ElementRef })
  formInputElements?: ElementRef[];
  formIngredient: FormGroup = new FormGroup({});

  @Input() food_item!: FoodSearchResult;
  @Output() addIngredient = new EventEmitter();
  @Output() removeIngredient = new EventEmitter();

  calculateCalories(event: any) {
    this.caloriesPerGr =
      this.food_description.calories /
      this.food_description.metric_serving_amount;
    this.caloriesPerGr = this.caloriesPerGr * event;
    this.caloriesPerGr = Math.round(this.caloriesPerGr);
  }

  chargeChart() {
    this.formIngredient = this.fb.group({
      food_id: [this.food_item.food_id, [Validators.required]],
      metric_serving_amount: [
        this.food_description.metric_serving_amount,
        [Validators.required],
      ],
      metric_serving_unit: [
        this.food_description.metric_serving_unit,
        [Validators.required],
      ],
    });

    const documentStyle = getComputedStyle(document.documentElement);
    const textColor = documentStyle.getPropertyValue('--text-color');

    this.data = {
      labels: ['Proteinas', 'Carbohidratos', 'Grasas'],
      datasets: [
        {
          data: [
            this.food_description.protein,
            this.food_description.carbohydrate,
            this.food_description.fat,
          ],
          backgroundColor: [
            documentStyle.getPropertyValue('--yellow-500'),
            documentStyle.getPropertyValue('--blue-500'),
            documentStyle.getPropertyValue('--purple-500'),
          ],
          hoverBackgroundColor: [
            documentStyle.getPropertyValue('--yellow-500'),
            documentStyle.getPropertyValue('--blue-500'),
            documentStyle.getPropertyValue('--purple-500'),
          ],
        },
      ],
    };

    this.options = {
      cutout: '60%',
      plugins: {
        legend: {
          labels: {
            color: textColor,
          },
        },
      },
    };
  }

  onSubmit() {}

  handelIngredientCard(ingredient_id: number) {
    this.showIngredientCard = true;
    this.db.searchIngredient(this.food_item.food_id).subscribe({
      next: (response: any) => {
        this.food_description = response.data.servings.serving[0];
        this.food_object = response.data;
        this.caloriesPerGr = response.data.servings.serving[0].calories;
        console.log(this.food_object);
        this.chargeChart();
      },
    });
  }

  handleClick() {
    this.addIngredient.emit(this.food_item);
  }
}
