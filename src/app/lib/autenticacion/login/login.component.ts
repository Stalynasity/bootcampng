import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Usuario } from '../interface/Usuario.interface';

@Component({
  selector: 'app-auth-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {

  @Output() evento = new EventEmitter<boolean>();

  @Input() data:Usuario[] = [];


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

    const usuarioRegistrado:Usuario | undefined = this.data.find(Usuario => Usuario.email === this.emailUser)

    if(!usuarioRegistrado){
      this.mensajalogin = 'Error email'
      return
    }

    if (usuarioRegistrado.password !== this.psw) {
      this.mensajalogin = 'Error contraseña'
      return
    }

    this.mensajalogin = "Bienvenido " + this.emailUser

  }

  cambioRegistro(){
    this.evento.emit(false);
  }

}
