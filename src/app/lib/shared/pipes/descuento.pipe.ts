
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'descuento'
})
export class DescuentoPipe implements PipeTransform {

  transform(descuento: number): number {
    let recibido_descuento = descuento * 0.02;
    let descuento_final = descuento - recibido_descuento;
    return descuento_final
  }
}
