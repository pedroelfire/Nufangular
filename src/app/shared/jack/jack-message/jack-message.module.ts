import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { JackMessageComponent } from './jack-message.component';

@NgModule({
  declarations: [JackMessageComponent],
  imports: [CommonModule],
  exports: [JackMessageComponent],
})
export class JackMessageModule {}
