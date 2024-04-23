import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ClientsComponent } from './components/clients/clients.component';
import { LoginComponent } from './components/login/login.component';
import {
  FormBuilder,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
} from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RegisterComponent } from './components/register/register.component';
import { HeaderComponent } from './shared/header/header.component';
import { CreateDietPlanModule } from './components/diets/create-diet-plan/create-diet-plan.module';

@NgModule({
  declarations: [
    AppComponent,
    ClientsComponent,
    LoginComponent,
    RegisterComponent,
    HeaderComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    CreateDietPlanModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
