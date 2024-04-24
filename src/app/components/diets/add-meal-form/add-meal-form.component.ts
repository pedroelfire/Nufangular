import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-add-meal-form',
  templateUrl: './add-meal-form.component.html',
  styleUrls: ['./add-meal-form.component.scss'],
})
export class AddMealFormComponent {
  units = ['gr', 'tablespoons', 'oz'];
  selectedServingUnit = '';
  searchQueryWord = '';
  checked = false;
  @Output() close = new EventEmitter<void>();

  closeForm() {
    this.close.emit();
  }
}
