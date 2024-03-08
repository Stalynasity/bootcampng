import { Component, EventEmitter, Output } from '@angular/core';
import { Usuario } from '../interface/Usuario.interface';


@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrl: './signup.component.css'
})
export class SignupComponent {

  @Output() eventoSiupEmitir = new EventEmitter<Usuario>();

  @Output() eventoLogin = new EventEmitter<boolean>();

  nombre: string = '';
  apellido: string = '';
  celular: string = '';
  email: string = '';
  password: string = '';
  passwordConfirm: string = '';

  agregar() {

    const usuario = {
      nombre: this.nombre,
      apellido: this.apellido,
      celular: this.celular,
      email: this.email,
      password: this.password,
    };

    this.eventoSiupEmitir.emit(usuario)
  }


  RegresoLogin: boolean = true;

  regresar(): void {
    this.eventoLogin.emit(true)
  }
}



