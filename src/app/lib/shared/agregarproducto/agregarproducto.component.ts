import { Component, EventEmitter, Input, Output } from '@angular/core';
import { ProductDetail } from '../../ejemplo/interface/ProductDetail.interface';

@Component({
  selector: 'app-agregarproducto',
  templateUrl: './agregarproducto.component.html',
  styleUrl: './agregarproducto.component.css'
})
export class AgregarproductoComponent {


  nuevoProducto: ProductDetail= {
    productoid: 0,
    producto: '',
    modelo: '',
    proveedor: '',
    precio: 0,
    stock: 0,
    categoria: ''
  };

  @Input()
  modalProducto?: any;

  @Output() eventoModal = new EventEmitter<any>();

  @Output() eventoCierreModal = new EventEmitter<any>();

  handleEventoCierreModal(): void {
    this.eventoCierreModal.emit('none')
  }

  handleEventoGuardar(): void {
    this.eventoModal.emit(this.nuevoProducto);
  }

}
