import { Component } from '@angular/core';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrl: './signup.component.css'
})
export class SignupComponent {

  nombre:string = '';
  apellido:string = '';
  celular:string = '';
  email:string = '';
  password:string = '';
  passwordConfirm:string = '';


  signup(){

  }
}
