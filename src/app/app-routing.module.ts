import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [{ path: 'login', loadChildren: () => import('./login/feature/login/login.module').then(m => m.LoginModule) }, { path: 'diet-plan', loadChildren: () => import('./diet-plan/feature/create-diet-plan/create-diet-plan.module').then(m => m.CreateDietPlanModule) }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
