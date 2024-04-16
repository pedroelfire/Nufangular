import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CreateDietPlanComponent } from './diet-plan/feature/create-diet-plan/create-diet-plan.component';
import { HeaderComponent } from './shared/header/header.component';


@NgModule({
  declarations: [AppComponent, CreateDietPlanComponent, HeaderComponent],
  imports: [BrowserModule, AppRoutingModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
