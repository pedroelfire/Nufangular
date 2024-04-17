import { Component } from '@angular/core';

@Component({
  selector: 'app-create-diet-plan',
  templateUrl: './create-diet-plan.component.html',
  styleUrls: ['./create-diet-plan.component.scss']
})
export class CreateDietPlanComponent {

  meal_data = [{
    meal_name: "Desayuno",
    macros: {
      protein: 10,
      carbs: 15,
      fat: 7
    }
  }]

}
