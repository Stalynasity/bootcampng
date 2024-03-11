import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DetalleproductoComponent } from './detalleproducto/detalleproducto.component';
import { TableComponent } from './table/table.component';
import { SharedModule } from '../shared/shared.module';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    DetalleproductoComponent,
    TableComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    FormsModule
  ],
  exports: [
    DetalleproductoComponent,
    TableComponent
  ]
})
export class EjemploModule { }
