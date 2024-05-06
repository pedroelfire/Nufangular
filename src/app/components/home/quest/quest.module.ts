import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { QuestComponent } from './quest.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { RatingModule } from 'primeng/rating';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [QuestComponent],
  imports: [CommonModule, FontAwesomeModule, RatingModule, FormsModule],
  exports: [QuestComponent],
})
export class QuestModule {}
