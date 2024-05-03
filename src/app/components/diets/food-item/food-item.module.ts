import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CheckboxModule } from 'primeng/checkbox';
import { DropdownModule } from 'primeng/dropdown';
import { FormsModule } from '@angular/forms';
import { FoodItemComponent } from './food-item.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
@NgModule({
  declarations: [FoodItemComponent],
  imports: [
    CommonModule,
    CheckboxModule,
    DropdownModule,
    FormsModule,
    FontAwesomeModule,
  ],
  exports: [FoodItemComponent],
})
export class FoodItemModule {}
