import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CheckboxModule } from 'primeng/checkbox';
import { DropdownModule } from 'primeng/dropdown';
import { FormsModule } from '@angular/forms';
import { FoodItemComponent } from './food-item.component';

@NgModule({
  declarations: [FoodItemComponent],
  imports: [CommonModule, CheckboxModule, DropdownModule, FormsModule],
  exports: [FoodItemComponent],
})
export class FoodItemModule {}
