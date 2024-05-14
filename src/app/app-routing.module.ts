import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { CreateDietPlanComponent } from './components/diets/create/create-diet-plan/create-diet-plan.component';
import { DietsSummaryComponent } from './components/diets/view/diets-summary/diets-summary.component';
import { NutritionistDashboardComponent } from './components/dashboard/nutritionist-dashboard/nutritionist-dashboard.component';
import { HomeMainComponent } from './components/home/home-main/home-main.component';
import { DiaryMainComponent } from './components/diary/diary-main/diary-main.component';

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  // { path: 'register', component: RegisterComponent },
  {
    path: 'diets',
    component: DietsSummaryComponent,
  },
  { path: 'create', component: CreateDietPlanComponent },
  { path: 'dashboard', component: NutritionistDashboardComponent },
  { path: 'diary', component: DiaryMainComponent },
  { path: '', component: HomeMainComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
