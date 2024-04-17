import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LoginRoutingModule } from './login-routing.module';
import { LoginComponent } from './login.component';
import { FormsModule } from '@angular/forms'; // Needed for input and [(ngModel)] usage

// Import PrimeNG Modules 
import { InputTextModule } from 'primeng/inputtext';
import { CheckboxModule } from 'primeng/checkbox';
import { ButtonModule } from 'primeng/button';
import { RippleModule } from 'primeng/ripple';

@NgModule({
  declarations: [
    LoginComponent
  ],
  imports: [
    CommonModule,
    LoginRoutingModule,
    CommonModule,
    FormsModule, // For forms
    InputTextModule,
    CheckboxModule,
    ButtonModule,
    RippleModule 
    
  ]
})
export class LoginModule { }
