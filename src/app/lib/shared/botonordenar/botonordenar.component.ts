import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-botonordenar',
  templateUrl: './botonordenar.component.html',
  styleUrl: './botonordenar.component.css'
})
export class BotonordenarComponent {

  @Output() nombretabla = new EventEmitter<string>()

    // funcion de ordenar mi lista producto
    cambiarOrden(nameOrden: string) {
      this.nombretabla.emit(nameOrden)
    }

}
