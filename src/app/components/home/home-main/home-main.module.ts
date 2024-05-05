import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeMainComponent } from './home-main.component';
import { QuestModule } from '../quest/quest.module';

@NgModule({
  declarations: [HomeMainComponent],
  imports: [CommonModule, QuestModule],
  exports: [HomeMainComponent],
})
export class HomeMainModule {}
