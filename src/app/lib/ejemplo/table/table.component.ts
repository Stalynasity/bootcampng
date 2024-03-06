import { Component } from '@angular/core';
import { ProductDetail } from '../interface/ProductDetail.interface';
import { HtmlParser } from '@angular/compiler';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrl: './table.component.css'
})
export class TableComponent {

  totalProducto: number = 0;
  subtotal: number = 0;
  impuesto: number = 0;
  totalpago: number = 0;

  listaProducto: ProductDetail[] =
    [
      {
        productoid: 1,
        producto: 'PS5',
        modelo: 'Sony',
        proveedor: 'Soni USA',
        precio: 600.00,
        stock: 10,
      },
      {
        productoid: 2,
        producto: 'PC Gamer',
        modelo: 'Intel',
        proveedor: 'USA Lam',
        precio: 850.00,
        stock: 50
      },
      {
        productoid: 3,
        producto: 'xBox',
        modelo: 'Panasony',
        proveedor: 'FRC',
        precio: 10.00,
        stock: 60
      },
    ]

  listaCarrito: ProductDetail[] = [];

  agregarProducto(producto: ProductDetail) {
    const productExistente = this.listaCarrito.find(p => p.productoid === producto.productoid);

    if (productExistente) {
      if (productExistente.stock <= 0) {
        console.log("no hay stock");
      } else
      {
        productExistente.stock -= 1;
        productExistente.cantidad = (productExistente.cantidad || 0) + 1;

      }

    } else {
      producto.cantidad = 1;
      producto.stock -= 1;
      this.listaCarrito.push(producto)

    }

    this.realizarCalculo();
  }


  eliminarProducto(producto: ProductDetail):number | undefined {
    const indiceProducto = this.listaCarrito.findIndex(p => p.productoid === producto.productoid);

    if (indiceProducto !== -1) {
      const productoEliminado =  this.listaCarrito.splice(indiceProducto, 1)[0];
      productoEliminado.stock += productoEliminado.cantidad!;
      this.realizarCalculo();
      return productoEliminado.stock;
    }
    return undefined;
  }


  realizarCalculo(){
      this.totalProducto = 0;
      this.subtotal = 0;
      this.impuesto = 0;
      this.totalpago= 0;

    this.listaCarrito.forEach(producto => {
      this.totalProducto += producto.cantidad ?? 0;
      this.subtotal += (producto.precio * (producto.cantidad ?? 0));
    });

      this.impuesto += this.subtotal * 0.12;
      this.totalpago += this.subtotal + this.impuesto;

  }


  validarStock(prodSeleccionado: ProductDetail): boolean {
    let identificarProd = this.listaProducto.find(p => p.productoid === prodSeleccionado.productoid)
    if (identificarProd) {
      if (identificarProd.stock <= 0) {
        return true
      } else {
        return false
      }
    }
    return false;
  }




}
