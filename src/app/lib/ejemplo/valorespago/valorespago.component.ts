import { Component, ViewChild } from '@angular/core';
import { TablacarritoComponent } from '../tablacarrito/tablacarrito.component';
import { TableComponent } from '../table/table.component';

@Component({
  selector: 'app-valorespago',
  templateUrl: './valorespago.component.html',
  styleUrl: './valorespago.component.css'
})
export class ValorespagoComponent {

  @ViewChild (TablacarritoComponent)
  tablaCarrito = TablacarritoComponent;

  totalProducto: number = 0;
  subtotal: number = 0;
  impuesto: number = 0;
  totalpago: number = 0;


  ValidBtPago(): boolean {
    if (this.totalProducto !== 0) {
      return true
    }
    return false
  }



}
