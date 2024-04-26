import { Component } from '@angular/core';
import {
  faPersonRunning,
  faBullseye,
  faNotesMedical,
} from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-client-info-card',
  templateUrl: './client-info-card.component.html',
  styleUrls: ['./client-info-card.component.scss'],
})
export class ClientInfoCardComponent {
  // FontAwesome Icons
  faPersonRunning = faPersonRunning;
  faBullseye = faBullseye;
  faNotesMedical = faNotesMedical;
}
