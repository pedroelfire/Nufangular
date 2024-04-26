import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { CreateDietPlanComponent } from './components/diets/create-diet-plan/create-diet-plan.component';
import { NutritionistDashboardComponent } from './components/dashboard/nutritionist-dashboard/nutritionist-dashboard.component';

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  {
    path: 'diets',
    children: [{ path: 'create', component: CreateDietPlanComponent }],
  },
  { path: 'dashboard', component: NutritionistDashboardComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
