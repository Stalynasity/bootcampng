import { Component } from '@angular/core';

@Component({
  selector: 'app-auth-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {

  usermailPRederterminado= 'stalynasi08@gmail.com'
  passuserPredeterminado= '123456'

  mensajalogin='';
  emailUser: string = '';
  psw: string = '';
  tituloform:string = 'Login';

  /*saludar = () => {
    this.mensajalogin = 'Bienvenido user: ' + this.emailUser
  }*/


  login(){

    if(this.usermailPRederterminado !== this.emailUser){
      this.mensajalogin = 'Error email'
      return
    }

    if (this.passuserPredeterminado !== this.psw) {
      this.mensajalogin = 'Error contraseña'
      return
    }

    this.mensajalogin = "Bienvenido " + this.emailUser

  }



}
