import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DietSlidesComponent } from './diet-slides.component';
import { NgCircleProgressModule } from 'ng-circle-progress';

@NgModule({
  declarations: [DietSlidesComponent],
  imports: [
    CommonModule,
    NgCircleProgressModule.forRoot({
      radius: 100,
      outerStrokeWidth: 16,
      innerStrokeWidth: 8,
      outerStrokeColor: '#78C000',
      innerStrokeColor: '#C7E596',
      animationDuration: 300,
    }),
  ],
  exports: [DietSlidesComponent],
})
export class DietSlidesModule {}
