import {
  Component,
  ViewChildren,
  ElementRef,
  Input,
  Output,
  EventEmitter,
} from '@angular/core';
import {
  NgForm,
  ReactiveFormsModule,
  FormBuilder,
  FormControlName,
  FormGroup,
  Validators,
} from '@angular/forms';
import { faDisplay } from '@fortawesome/free-solid-svg-icons';
import { callback } from 'chart.js/dist/helpers/helpers.core';

import { BackendURLsService } from 'src/app/services/backend-urls.service';

import { FoodItem } from 'src/types';

@Component({
  selector: 'app-add-ingredient-form',
  templateUrl: './add-ingredient-form.component.html',
  styleUrls: ['./add-ingredient-form.component.scss'],
})
export class AddIngredientFormComponent {
  @Input() food_id!: number;
  @Output() closeIngredientForm = new EventEmitter();

  chartData: any;
  chartOptions: any;

  food_item!: FoodItem;

  initialized: boolean = false; // Variable para controlar si ya se ha inicializado
  caloriesPerGr: number = 0;
  foodGrams: number = 0;
  foodUnits: string[] = ['gr'];

  ngOnInit() {
    this.initForm();
  }
  constructor(private db: BackendURLsService, private fb: FormBuilder) {}
  @ViewChildren(FormControlName, { read: ElementRef })
  formInputElements?: ElementRef[];
  formIngredient: FormGroup = new FormGroup({});

  // @Output() addIngredient = new EventEmitter();

  calculateCalories(event: any) {
    const nutrients = this.food_item.servings.serving[0];

    if (nutrients.metric_serving_unit == 'g') {
      this.caloriesPerGr =
        parseFloat(nutrients.calories) /
        parseFloat(nutrients.metric_serving_amount);
      this.caloriesPerGr = this.caloriesPerGr * event;
      this.caloriesPerGr = Math.round(this.caloriesPerGr);
    }
  }

  loadChart() {
    const nutrients = this.food_item.servings.serving[0];

    this.formIngredient = this.fb.group({
      food_id: [this.food_id, [Validators.required]],
      metric_serving_amount: [
        nutrients.metric_serving_amount,
        [Validators.required],
      ],
      metric_serving_unit: [
        nutrients.metric_serving_unit,
        [Validators.required],
      ],
    });

    const documentStyle = getComputedStyle(document.documentElement);

    this.chartData = {
      labels: ['Proteinas', 'Carbohidratos', 'Grasas'],
      datasets: [
        {
          data: [nutrients.protein, nutrients.carbohydrate, nutrients.fat],
          backgroundColor: [
            documentStyle.getPropertyValue('--protein'),
            documentStyle.getPropertyValue('--carbs'),
            documentStyle.getPropertyValue('--fat'),
          ],
        },
      ],
    };

    this.chartOptions = {
      cutout: '80%',
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

      // plugins: {
      //   legend: {
      //     labels: {
      //       color: textColor,
      //     },
      //   },
      // },
    };
  }

  initForm() {
    this.db.searchIngredient(this.food_id).subscribe({
      next: (response: any) => {
        this.food_item = response.data;
        this.loadChart();
        this.foodGrams = parseFloat(
          this.food_item.servings.serving[0].metric_serving_amount
        );
      },
    });
  }

  // Event listeners
  addIngredient() {
    return;
  }

  cancel() {
    this.closeIngredientForm.emit();
  }
}
