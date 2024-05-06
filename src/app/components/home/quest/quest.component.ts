import { Component } from '@angular/core';
import {
  faExclamation,
  faQuestion,
  faSeedling,
} from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-quest',
  templateUrl: './quest.component.html',
  styleUrls: ['./quest.component.scss'],
})
export class QuestComponent {
  faExclamation = faExclamation;
  faQuestion = faQuestion;
  faSeedling = faSeedling;

  rating = 4.5;
  status = 'completed';
}
