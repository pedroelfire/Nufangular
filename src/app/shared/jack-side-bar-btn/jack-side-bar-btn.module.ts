import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { JackSideBarBtnComponent } from './jack-side-bar-btn.component';
import { JackSideBarMenuModule } from '../jack-side-bar-menu/jack-side-bar-menu.module';

@NgModule({
  declarations: [JackSideBarBtnComponent],
  imports: [CommonModule, JackSideBarMenuModule],
  exports: [JackSideBarBtnComponent],
})
export class JackSideBarBtnModule {}
