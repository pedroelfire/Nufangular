import {
  Component,
  ViewChildren,
  ElementRef,
  Input,
  Output,
  EventEmitter,
} from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormControlName,
  FormGroup,
  Validators,
} from '@angular/forms';
import { BackendURLsService } from 'src/app/services/backend-urls.service';
import { IngredientDataService } from 'src/app/services/ingredient-data.service';
import { FoodItem, MealFormIngredient } from 'src/types';

@Component({
  selector: 'app-add-ingredient-form',
  templateUrl: './add-ingredient-form.component.html',
  styleUrls: ['./add-ingredient-form.component.scss'],
})
export class AddIngredientFormComponent {
  @Input() food_id!: number;
  @Output() cancelAddIngredient = new EventEmitter();
  @Output() addIngredientEvent = new EventEmitter();

  foodAmount = new FormControl();

  chartData: any;
  chartOptions: any;
  food_item!: MealFormIngredient;
  caloriesPerUnit: number = 0;
  macrosPerUnit: { protein: number; carbs: number; fat: number } = {
    protein: 0,
    carbs: 0,
    fat: 0,
  };
  foodUnits: string[] = [];

  ngOnInit() {
    this.initForm();
  }
  constructor(
    private db: BackendURLsService,
    private fb: FormBuilder,
    private ingredientDataService: IngredientDataService
  ) {}
  @ViewChildren(FormControlName, { read: ElementRef })
  formInputElements?: ElementRef[];
  formIngredient: FormGroup = new FormGroup({});

  calculateCalories() {
    console.log('Calculando calorías');
  }

  calculateMacros() {
    console.log('Calculando macros');
  }

  calculateNutrients() {
    this.caloriesPerUnit =
      this.food_item.calories / this.food_item.metric_serving_amount;
    this.macrosPerUnit = {
      protein:
        this.food_item.macros.protein / this.food_item.metric_serving_amount,
      carbs: this.food_item.macros.carbs / this.food_item.metric_serving_amount,
      fat: this.food_item.macros.fat / this.food_item.metric_serving_amount,
    };
  }

  loadChart() {
    this.formIngredient = this.fb.group({
      food_id: [this.food_id, [Validators.required]],
      metric_serving_amount: [
        this.food_item.metric_serving_amount,
        [Validators.required],
      ],
      metric_serving_unit: [
        this.food_item.metric_serving_unit,
        [Validators.required],
      ],
    });

    const documentStyle = getComputedStyle(document.documentElement);

    this.chartData = {
      labels: ['Proteinas', 'Carbohidratos', 'Grasas'],
      datasets: [
        {
          data: [
            this.food_item.macros.protein,
            this.food_item.macros.carbs,
            this.food_item.macros.fat,
          ],
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
        const data: FoodItem = response.data;
        this.food_item = {
          food_id: parseInt(data.food_id),
          food_name: data.food_name,
          calories: parseFloat(data.servings.serving[0].calories),
          metric_serving_amount: parseFloat(
            data.servings.serving[0].metric_serving_amount
          ),
          metric_serving_unit: data.servings.serving[0].metric_serving_unit,
          macros: {
            protein: parseFloat(data.servings.serving[0].protein),
            carbs: parseFloat(data.servings.serving[0].carbohydrate),
            fat: parseFloat(data.servings.serving[0].fat),
          },
        };
        this.loadChart();
        this.foodUnits.push(this.food_item.metric_serving_unit);
        this.calculateNutrients();
      },
    });
  }

  accept(food_item: MealFormIngredient) {
    this.addIngredientEvent.emit();
    this.ingredientDataService.emitIngredientAdded(food_item);
  }

  cancel() {
    this.cancelAddIngredient.emit();
  }
}
