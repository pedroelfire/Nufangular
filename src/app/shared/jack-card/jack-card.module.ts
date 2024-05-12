import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { JackCardComponent } from './jack-card.component';
import { JackSideBarBtnModule } from '../jack-side-bar-btn/jack-side-bar-btn.module';
import { JackMessageComposerModule } from '../jack-message-composer/jack-message-composer.module';

@NgModule({
  declarations: [JackCardComponent],
  imports: [CommonModule, JackSideBarBtnModule, JackMessageComposerModule],
  exports: [JackCardComponent],
})
export class JackCardModule {}
