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



  // Expresiones regulares para validaciones
  expresiones = {
    nombre: /^[a-zA-ZÀ-ÿ\s]{1,40}$/, // Letras y espacios, pueden llevar acentos.
    telefono: /^\d{7,14}$/, // 7 a 14 números.
    correo: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
    password: /^.{4,12}$/ // 4 a 12 caracteres.
  };

  camposLabel = [
    { nombre: 'nombre', label: 'Nombre', value: '',  pattern: this.expresiones.nombre, ErrorMessage: 'Nombre invalido' },
    { nombre: 'apellido', label: 'Apellido', value: '' , pattern: this.expresiones.nombre, ErrorMessage: 'apellido invalido' },
    { nombre: 'telefono', label: 'Telefono', value: '' , pattern: this.expresiones.telefono, ErrorMessage: 'telefono invalido' },
    { nombre: 'correo', label: 'Correo', value: '' , pattern: this.expresiones.correo, ErrorMessage: 'correo invalido' },
    { nombre: 'password', label: 'Contraseña', value: '', pattern: this.expresiones.password, ErrorMessage: 'contraseña invalido' },
    { nombre: 'passwordConfim', label: 'Confirmar Contraseña' , value: '', pattern: this.expresiones.password, ErrorMessage: 'Contraseña invalido' }
  ]


  mensaje:string = "";
  ErrorMenssag:boolean = false;

  agregar() {
    const usuario:Usuario = {
      nombre: '',
      apellido: '',
      celular: '',
      email: '',
      password: '',
    };

    for (let campos of this.camposLabel) {

      if      (campos.nombre === 'nombre') usuario.nombre = campos.value;
      else if (campos.nombre === 'apellido') usuario.apellido = campos.value;
      else if (campos.nombre === 'telefono') usuario.celular = campos.value;
      else if (campos.nombre === 'correo') usuario.email = campos.value;
      else if (campos.nombre === 'password') usuario.password = campos.value;
      else if (campos.nombre === 'passwordConfim') usuario.passwordConfirm = campos.value;


      if (campos.value.trim() === "") {
        this.mensaje = ("Campos vacios");
          this.ErrorMenssag = true;
          return
      }

      if (!campos.pattern.test(campos.value)) {
        this.mensaje = (`${campos.label} invalido`);
        this.ErrorMenssag = true;
        return
      }
    }

    if (usuario.password !== usuario.passwordConfirm ) {
      console.log('Las contraseñas no coinciden');
      return;
    }

    this.eventoSiupEmitir.emit(usuario)
    this.eventoLogin.emit(true)
  }

  RegresoLogin: boolean = true;

  regresar(): void {
    this.eventoLogin.emit(true)
  }
}



