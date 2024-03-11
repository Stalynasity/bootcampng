import { Component} from '@angular/core';
import { Usuario } from '../interface/Usuario.interface';



@Component({
  selector: 'app-autenticacion',
  templateUrl: './autenticacion.component.html',
  styleUrl: './autenticacion.component.css'
})
export class AutenticacionComponent {


  datos:Usuario[] = [];

  EventoSingUp(usuario: Usuario) {
    console.log('Datos de usuario recibidos:', usuario);
    this.datos.push(usuario)
  }

  pageLogin:boolean = true;

  Activador(ocultar: boolean){
    this.pageLogin = ocultar;
  }

}
