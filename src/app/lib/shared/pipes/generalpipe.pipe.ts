import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'generalpipe',
})
export class GeneralpipePipe implements PipeTransform {

  transform(value: number, ...args: any[]): any {
    return value + ' items en stock'
  }

}
