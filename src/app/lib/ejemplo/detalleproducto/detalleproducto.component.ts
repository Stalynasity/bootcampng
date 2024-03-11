import { Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges } from '@angular/core';
import { ProductDetail } from '../interface/ProductDetail.interface';

@Component({
  selector: 'app-detalleproducto',
  templateUrl: './detalleproducto.component.html',
  styleUrl: './detalleproducto.component.css'
})
export class DetalleproductoComponent implements OnInit, OnChanges {
  ngOnChanges(changes: SimpleChanges): void {

  }

  ngOnInit(): void {

  }


  @Input() producto: ProductDetail = {
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


  handleEventoModal(data: any): void {
    this.eventoModal.emit(data);
  }

  handleEventoCierreModal(data: any): void {
    this.eventoCierreModal.emit(data)
  }
}


