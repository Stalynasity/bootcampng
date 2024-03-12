import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'iva'
})
export class IvaPipe implements PipeTransform {

  transform(subtotalDescuento: number): string {
    let totalRecibido = subtotalDescuento * 0.12;
    // let ivaPagar = subtotalDescuento + totalRecibido;

    return totalRecibido.toLocaleString('en-US', { style: 'currency', currency: 'USD' });
  }

}
