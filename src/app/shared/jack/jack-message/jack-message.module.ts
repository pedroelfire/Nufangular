import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { JackMessageComponent } from './jack-message.component';

@NgModule({
  declarations: [JackMessageComponent],
  imports: [CommonModule, FontAwesomeModule],
  exports: [JackMessageComponent],
})
export class JackMessageModule {}
