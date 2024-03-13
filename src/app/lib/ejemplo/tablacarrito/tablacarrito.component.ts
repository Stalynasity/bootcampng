import { Component, EventEmitter, Input, Output, viewChild } from '@angular/core';
import { ProductDetail } from '../interface/ProductDetail.interface';
import { PropertiesBtnTabla } from '../../interface/PropertiesBtnTabla.interface';

@Component({
  selector: 'app-tablacarrito',
  templateUrl: './tablacarrito.component.html',
  styleUrl: './tablacarrito.component.css'
})
export class TablacarritoComponent {

  listaCarrito: ProductDetail[] = [];

  porpiedadesBtnTB: PropertiesBtnTabla = {
    labelEdiar: "Editar",
    labelEliminar: "Eliminar",
    mostrarEditar: true,
    mostrarEliminar: true,
    bootstrapEditar: 'success',
    bootstrapEliminar: 'danger'
  }

  @Output() inputFactura = new EventEmitter<any>()


  eliminarProducto(producto: ProductDetail): void {
    const indiceProducto = this.listaCarrito.findIndex(p => p.productoid === producto.productoid);
    const productoEliminado = this.listaCarrito.splice(indiceProducto, 1)[0];
    productoEliminado.stock += productoEliminado.cantidad!;
    this.inputFactura.emit()
  }
}
