import { CurrencyPipe } from "@angular/common";

export interface ProductDetail{
  productoid: number,
  producto: string,
  modelo: string,
  proveedor: string,
  precio:number,
  cantidad?:number,
  stock:number,
  categoria: string,
  accesorios?: any
}
