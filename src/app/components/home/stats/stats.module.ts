import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StatsComponent } from './stats.component';
import { NgOptimizedImage } from '@angular/common';
import { ProgressBarModule } from 'primeng/progressbar';

@NgModule({
  declarations: [StatsComponent],
  imports: [CommonModule, NgOptimizedImage, ProgressBarModule],
  exports: [StatsComponent],
})
export class StatsModule {}
