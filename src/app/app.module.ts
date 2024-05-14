import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TopBarModule } from './shared/top-bar/top-bar.module';
import { HeaderModule } from './shared/header/header.module';
import { CreateDietPlanModule } from './components/diets/create/create-diet-plan/create-diet-plan.module';
import { BottomTabsModule } from './shared/bottom-tabs/bottom-tabs.module';
import { HomeMainModule } from './components/home/home-main/home-main.module';
import { DiaryMainModule } from './components/diary/diary-main/diary-main.module';
import { LoginModule } from './components/login/login.module';
import { JackBubbleModule } from './shared/jack/jack-bubble/jack-bubble.module';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CreateDietPlanModule,
    BottomTabsModule,
    TopBarModule,
    HeaderModule,
    DiaryMainModule,
    HomeMainModule,
    LoginModule,
    JackBubbleModule,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
