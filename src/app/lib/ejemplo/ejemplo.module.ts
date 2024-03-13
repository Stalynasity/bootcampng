import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DetalleproductoComponent } from './detalleproducto/detalleproducto.component';
import { TableComponent } from './table/table.component';
import { SharedModule } from '../shared/shared.module';
import { FormsModule } from '@angular/forms';
import { TablacarritoComponent } from './tablacarrito/tablacarrito.component';
import { ValorespagoComponent } from './valorespago/valorespago.component';



@NgModule({
  declarations: [
    DetalleproductoComponent,
    TableComponent,
    TablacarritoComponent,
    ValorespagoComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    FormsModule
  ],
  exports: [
    DetalleproductoComponent,
    TableComponent,
    TablacarritoComponent,
    ValorespagoComponent
  ]
})
export class EjemploModule { }
