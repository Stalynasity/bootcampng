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
  tituloform:string = 'Titulo de form';

  /*saludar = () => {
    this.mensajalogin = 'Bienvenido user: ' + this.emailUser
  }*/


  login(){

    if (this.usermailPRederterminado === this.emailUser) {

    } else{
      this.mensajalogin = 'Error'
    }

    this.mensajalogin = 'Bienvenido ' + this.emailUser

  }

}
