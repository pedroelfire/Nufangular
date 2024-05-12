import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { JackBubbleComponent } from './jack-bubble.component';
import { JackCardModule } from '../jack-card/jack-card.module';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

@NgModule({
  declarations: [JackBubbleComponent],
  imports: [CommonModule, JackCardModule, FontAwesomeModule],
  exports: [JackBubbleComponent],
})
export class JackBubbleModule {}
