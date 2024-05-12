import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { JackMessageComposerComponent } from './jack-message-composer.component';

@NgModule({
  declarations: [JackMessageComposerComponent],
  imports: [CommonModule, FormsModule, ReactiveFormsModule],
  exports: [JackMessageComposerComponent],
})
export class JackMessageComposerModule {}
