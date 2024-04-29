import { Component } from '@angular/core';
import { CalendarOptions } from '@fullcalendar/core';
import dayGridPlugin from '@fullcalendar/daygrid';

@Component({
  selector: 'app-nutritionist-dashboard',
  templateUrl: './nutritionist-dashboard.component.html',
  styleUrls: ['./nutritionist-dashboard.component.scss'],
})
export class NutritionistDashboardComponent {
  calendarOptions: CalendarOptions = {
    initialView: 'dayGrid',
    plugins: [dayGridPlugin],
  };
}
