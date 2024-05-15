import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent {
  logoURL = 'assets/nufogy_logo.svg#logo';
  viewBox = '0 0 76.211888 76.211891';
  isLoggedIn = true;

  checkLogInStatus = () => {
    this.isLoggedIn = true;
  };
}
