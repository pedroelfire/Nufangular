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

  ngOnInit() {
    this.initForm();
  }
  constructor(private db: BackendURLsService, private fb: FormBuilder) {}
  @ViewChildren(FormControlName, { read: ElementRef })
  formInputElements?: ElementRef[];
  formIngredient: FormGroup = new FormGroup({});

  @Output() addIngredient = new EventEmitter();
  @Output() removeIngredient = new EventEmitter();

  // calculateCalories(event: any) {
  //   this.caloriesPerGr =
  //     this.food_description.calories /
  //     this.food_description.metric_serving_amount;
  //   this.caloriesPerGr = this.caloriesPerGr * event;
  //   this.caloriesPerGr = Math.round(this.caloriesPerGr);
  // }

  // loadChart() {
  //   this.formIngredient = this.fb.group({
  //     food_id: [this.food_id, [Validators.required]],
  //     metric_serving_amount: [
  //       this.food_description.metric_serving_amount,
  //       [Validators.required],
  //     ],
  //     metric_serving_unit: [
  //       this.food_description.metric_serving_unit,
  //       [Validators.required],
  //     ],
  //   });

  // const documentStyle = getComputedStyle(document.documentElement);
  // const textColor = documentStyle.getPropertyValue('--text-color');

  // this.chartData = {
  //   labels: ['Proteinas', 'Carbohidratos', 'Grasas'],
  //   datasets: [
  //     {
  //       data: [
  //         this.food_description.protein,
  //         this.food_description.carbohydrate,
  //         this.food_description.fat,
  //       ],
  //       backgroundColor: [
  //         documentStyle.getPropertyValue('--yellow-500'),
  //         documentStyle.getPropertyValue('--blue-500'),
  //         documentStyle.getPropertyValue('--purple-500'),
  //       ],
  //       hoverBackgroundColor: [
  //         documentStyle.getPropertyValue('--yellow-500'),
  //         documentStyle.getPropertyValue('--blue-500'),
  //         documentStyle.getPropertyValue('--purple-500'),
  //       ],
  //     },
  //   ],
  // };

  //   this.chartOptions = {
  //     cutout: '60%',
  //     plugins: {
  //       legend: {
  //         labels: {
  //           color: textColor,
  //         },
  //       },
  //     },
  //   };
  // }

  initForm() {
    this.db.searchIngredient(this.food_id).subscribe({
      next: (response: any) => {
        this.food_item = response.data;
      },
    });
  }
}
