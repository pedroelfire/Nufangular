import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { DietsSummaryComponent } from './diets-summary.component';

@NgModule({
  declarations: [DietsSummaryComponent],
  imports: [CommonModule, RouterModule],
  exports: [DietsSummaryComponent],
})
export class DietsSummaryModule {}
