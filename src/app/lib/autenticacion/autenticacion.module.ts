import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';


import { AutenticacionComponent } from './autenticacion/autenticacion.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { SharedModule } from '../shared/shared.module';


@NgModule({
  declarations: [
    LoginComponent,
    AutenticacionComponent,
    SignupComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule,
    SharedModule
  ],

  exports:[
    AutenticacionComponent,
    LoginComponent,
    SignupComponent
  ]
})

export class AutenticacionModule { }
