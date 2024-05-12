import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { JackMessageComposerComponent } from './jack-message-composer.component';

@NgModule({
  declarations: [JackMessageComposerComponent],
  imports: [CommonModule],
  exports: [JackMessageComposerComponent],
})
export class JackMessageComposerModule {}
