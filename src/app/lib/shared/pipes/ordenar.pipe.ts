import { Pipe, PipeTransform } from '@angular/core';
import { ProductDetail } from '../../ejemplo/interface/ProductDetail.interface';
import { Validators } from '@angular/forms';

@Pipe({
  name: 'ordenar'
})
export class OrdenarPipe implements PipeTransform {

  transform(productos: ProductDetail[], orderPor: string = 'sin valor'): ProductDetail[] {

    switch (orderPor) {
      case 'nombre':
        return productos.sort((a, b) => (a.producto > b.producto) ? 1 : -1);
      case 'modelo':
        return productos.sort((a, b) => (a.modelo > b.modelo) ? 1 : -1);
      case 'proveedor':
        return productos.sort((a, b) => (a.proveedor > b.proveedor) ? 1 : -1);
      case 'precio':
        return productos.sort((a, b) => (a.precio > b.precio) ? 1 : -1);
      case 'stock':
        return productos.sort((a, b) => (a.stock > b.stock) ? 1 : -1);
      default:
        return productos;
    }
  }
}
