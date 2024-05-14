import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ClientInfoCardComponent } from './client-info-card.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

@NgModule({
  declarations: [ClientInfoCardComponent],
  imports: [CommonModule, FontAwesomeModule],
  exports: [ClientInfoCardComponent],
})
export class ClientInfoCardModule {}
