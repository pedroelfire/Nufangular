import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { CreateDietPlanModule } from '../create-diet-plan/create-diet-plan.module';
import { InputTextModule } from 'primeng/inputtext';

@NgModule({
  declarations: [],
  imports: [CommonModule, CreateDietPlanModule, FormsModule, InputTextModule],
})
export class MealItineraryModule {}
