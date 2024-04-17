import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CreateDietPlanRoutingModule } from './create-diet-plan-routing.module';
import { CreateDietPlanComponent } from './create-diet-plan.component';


@NgModule({
  declarations: [
    CreateDietPlanComponent
  ],
  imports: [
    CommonModule,
    CreateDietPlanRoutingModule
  ]
})
export class CreateDietPlanModule { }
