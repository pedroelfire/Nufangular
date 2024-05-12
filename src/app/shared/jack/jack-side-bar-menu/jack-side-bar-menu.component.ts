import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-jack-side-bar-menu',
  templateUrl: './jack-side-bar-menu.component.html',
  styleUrls: ['./jack-side-bar-menu.component.scss'],
})
export class JackSideBarMenuComponent {
  @Input() displayed!: boolean;
}
