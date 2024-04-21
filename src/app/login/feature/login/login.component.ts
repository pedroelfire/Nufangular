import { Component } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent {
  userExists = false;
  step = 'username';
  username = '';
  password = '';

  validUser = () => {
    this.userExists = true;
    this.step = 'password';
  };
}
