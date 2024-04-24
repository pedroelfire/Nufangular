import { Component } from '@angular/core';

@Component({
  selector: 'app-meal-itinerary',
  templateUrl: './meal-itinerary.component.html',
  styleUrls: ['./meal-itinerary.component.scss'],
})
export class MealItineraryComponent {
  mockMealData = [
    {
      meal_name: 'Desayuno',
      macros: {
        fat: 12.5,
        carbs: 23.0,
        protein: 36.4,
      },
    },
    {
      meal_name: 'Medio día',
      macros: {
        fat: 8.2,
        carbs: 42.1,
        protein: 21.7,
      },
    },
    {
      meal_name: 'Comida',
      macros: {
        fat: 4.8,
        carbs: 35.3,
        protein: 18.0,
      },
    },
    {
      meal_name: 'Después de entrenar',
      macros: {
        fat: 28.6,
        carbs: 15.4,
        protein: 32.0,
      },
    },
    {
      meal_name: 'Cena',
      macros: {
        fat: 5.5,
        carbs: 26.1,
        protein: 15.8,
      },
    },
  ];
  visible: boolean = false;

  showAddMealForm = () => {
    this.visible = true;
  };
  closeForm = () => {
    this.visible = false;
  };

  handleCloseFromForm(event: any) {
    this.closeForm();
  }
}
