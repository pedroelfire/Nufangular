import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateDietPlanComponent } from './create-diet-plan.component';

const routes: Routes = [{ path: 'diet-plan', component: CreateDietPlanComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CreateDietPlanRoutingModule { }
