import { Component } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent {
  showError = false;

  logIn = () => {
    const success = false;

    if (success) {
      console.log('Ingresado con éxito');
    } else {
      this.showError = true;
      console.log('toast shown');
    }
  };
}
