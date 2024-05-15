import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header.component';
import { NgOptimizedImage } from '@angular/common';

@NgModule({
  declarations: [HeaderComponent],
  imports: [CommonModule, RouterModule, NgOptimizedImage],
  exports: [HeaderComponent],
})
export class HeaderModule {}
