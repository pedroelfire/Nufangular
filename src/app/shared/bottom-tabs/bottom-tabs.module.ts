import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppRoutingModule } from 'src/app/app-routing.module';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { BottomTabsComponent } from './bottom-tabs.component';

@NgModule({
  declarations: [BottomTabsComponent],
  imports: [CommonModule, FontAwesomeModule, AppRoutingModule],
  exports: [BottomTabsComponent],
})
export class BottomTabsModule {}
