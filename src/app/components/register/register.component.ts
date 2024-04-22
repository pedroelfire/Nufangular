import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { LoginService } from 'src/app/services/login.service';
import { RegisterService } from 'src/app/services/register.service';

@Component({
  selector: 'app-login',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent {
  loginForm: FormGroup;

  constructor(private formBuilder: FormBuilder, private registerService: RegisterService) {
    this.loginForm = this.formBuilder.group({
      username: ['', Validators.required],
      email: ['', Validators.required],
      password: ['', Validators.required]
    });
  }

  onSubmit(): void {
    if (this.loginForm.valid) {
      const username = this.loginForm.value.username;
      const email = this.loginForm.value.email;
      const password = this.loginForm.value.password;
      console.log(username, password)
      this.registerService.register(username, email, password).subscribe(response => {
          console.log(response);
        }, error => {
          console.error(error);
        });
    }
  }
}
