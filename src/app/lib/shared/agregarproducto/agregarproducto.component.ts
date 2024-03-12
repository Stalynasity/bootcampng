import { Component, EventEmitter, Input, Output, OnInit } from '@angular/core';
import { ProductDetail } from '../../ejemplo/interface/ProductDetail.interface';

@Component({
  selector: 'app-agregarproducto',
  templateUrl: './agregarproducto.component.html',
  styleUrl: './agregarproducto.component.css'
})
export class AgregarproductoComponent implements OnInit {
  ngOnInit(): void {

  }


  nuevoProducto: ProductDetail = {
    productoid: 0,
    producto: '',
    modelo: '',
    proveedor: '',
    precio: 0,
    stock: 0,
    categoria: ''
  };

  ErrorMenssag: boolean = false


  @Input()
  modalProducto?: any;

  @Output() eventoModal = new EventEmitter<any>();

  @Output() eventoCierreModal = new EventEmitter<any>();

  handleEventoCierreModal(): void {
    this.eventoCierreModal.emit('none')
  }

  handleEventoGuardar(): void {
    if (this.validarDatos()) {
      this.eventoModal.emit(this.nuevoProducto);
    }
  }




  validaInputBT(nuevoProducto: ProductDetail ): boolean{
    if (
      nuevoProducto.producto.trim() === '' ||
      nuevoProducto.modelo.trim() === '' ||
      nuevoProducto.proveedor.trim() === '' ||
      nuevoProducto.precio === 0 ||
      nuevoProducto.stock === 0 ||
      nuevoProducto.categoria.trim() === ''
    ) {
      return false; // Si algún campo está vacío o tiene valor 0, devuelve falso
    }
    return true; // Si todos los campos están llenos, devuelve verdadero
  }


  validarDatos(): boolean {
    if (!this.nuevoProducto.producto ||
      !this.nuevoProducto.modelo ||
      !this.nuevoProducto.proveedor ||
      !this.nuevoProducto.precio ||
      !this.nuevoProducto.stock ||
      !this.nuevoProducto.categoria) {
      // Si algún campo está vacío, devuelve falso
      return false;
    }
    return true;
  }


}
