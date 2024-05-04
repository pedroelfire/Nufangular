import { Component } from '@angular/core';
import { faBowlRice, faHome } from '@fortawesome/free-solid-svg-icons';
import { faRectangleList } from '@fortawesome/free-solid-svg-icons';
import { faChartLine } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-bottom-tabs',
  templateUrl: './bottom-tabs.component.html',
  styleUrls: ['./bottom-tabs.component.scss'],
})
export class BottomTabsComponent {
  faHome = faHome;
  faBowlRice = faBowlRice;
  faRectangleList = faRectangleList;
  faChartLine = faChartLine;
}
