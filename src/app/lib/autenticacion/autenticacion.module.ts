import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { AutenticacionComponent } from './autenticacion/autenticacion.component';
import { SignupComponent } from './signup/signup.component';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';




@NgModule({
  declarations: [
    LoginComponent,
    AutenticacionComponent,
    SignupComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule
  ],

  exports:[
    LoginComponent,
    AutenticacionComponent,
    SignupComponent
  ]
})

export class AutenticacionModule { }
