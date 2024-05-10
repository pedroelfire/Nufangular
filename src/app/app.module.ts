import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ClientsComponent } from './components/clients/clients.component';
import { LoginComponent } from './components/login/login.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RegisterComponent } from './components/register/register.component';
import { HeaderComponent } from './shared/header/header.component';
import { TopBarModule } from './shared/top-bar/top-bar.module';
import { CreateDietPlanModule } from './components/diets/create-diet-plan/create-diet-plan.module';
import { BottomTabsModule } from './shared/bottom-tabs/bottom-tabs.module';
import { HomeMainModule } from './components/home/home-main/home-main.module';
import { DataViewModule } from 'primeng/dataview';
import { DiaryMainModule } from './components/diary/diary-main/diary-main.module';

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
    BottomTabsModule,
    TopBarModule,
    // HomeMainModule,
    DataViewModule,
    // DiaryMainModule,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
