import { Component } from '@angular/core';
import { ProductDetail } from '../interface/ProductDetail.interface';
import { HtmlParser } from '@angular/compiler';
import { PropertiesBtnTabla } from '../../interface/PropertiesBtnTabla.interface';
import { PropertiesItem } from '../../interface/menuitem.interface';

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

  listaproducto: ProductDetail[] = [
    {
      productoid: 1,
      producto: "Play Station 5",
      modelo: "Ultra Slim",
      proveedor: "H&B sa",
      precio: 600.00,
      stock: 40,
      categoria: "OC",
      accesorios: {
        incluyecontrols: 1,
        incluyegearAR: 0
      }
    },
    {
      productoid: 2,
      producto: "PC Gammer",
      modelo: "AS-001-wm",
      proveedor: "Asus",
      precio: 850.00,
      stock: 21,
      categoria: "OC",
      accesorios: {
        "incluyemouse": 0
      }
    },
    {
      "productoid": 3,
      "producto": "MousePad",
      "modelo": "MP-2001-A",
      "proveedor": "Juan Marcet",
      "precio": 10.00,
      "stock": 3,
      "categoria": "VA",
      "accesorios": {}
    },
    {
      "productoid": 4,
      "producto": "Doppler",
      "modelo": "2HXDB",
      "proveedor": "General Electric",
      "precio": 120.00,
      "stock": 11,
      "categoria": "HT"
    },
    {
      "productoid": 5,
      "producto": "AirFried",
      "modelo": "ZY 2020",
      "proveedor": "Hometech",
      "precio": 230.00,
      "stock": 20,
      "categoria": "CO",
      "accesorios": {

      }
    }
  ];

  listaCarrito: ProductDetail[] = [];

  agregarProducto(producto: ProductDetail) {
    const productExistente = this.listaCarrito.find(p => p.productoid === producto.productoid);

    if (productExistente) {
      if (productExistente.stock <= 0) {
        console.log("no hay stock");
      } else {
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


  eliminarProducto(producto: ProductDetail): number | undefined {
    const indiceProducto = this.listaCarrito.findIndex(p => p.productoid === producto.productoid);

    if (indiceProducto !== -1) {
      const productoEliminado = this.listaCarrito.splice(indiceProducto, 1)[0];
      productoEliminado.stock += productoEliminado.cantidad!;
      this.realizarCalculo();
      return productoEliminado.stock;
    }
    return undefined;
  }


  realizarCalculo() {
    this.totalProducto = 0;
    this.subtotal = 0;
    this.impuesto = 0;
    this.totalpago = 0;

    this.listaCarrito.forEach(producto => {
      this.totalProducto += producto.cantidad ?? 0;
      this.subtotal += (producto.precio * (producto.cantidad ?? 0));
    });

    this.impuesto += this.subtotal * 0.12;
    this.totalpago += this.subtotal + this.impuesto;

  }


  validarStock(prodSeleccionado: ProductDetail): boolean {
    let identificarProd = this.listaproducto.find(p => p.productoid === prodSeleccionado.productoid)
    if (identificarProd) {
      if (identificarProd.stock <= 0) {
        return true
      } else {
        return false
      }
    }
    return false;
  }

  porpiedadesBtnTB: PropertiesBtnTabla = {
    labelEdiar: "Editar",
    labelEliminar: "Eliminar",
    mostrarEditar: true,
    mostrarEliminar: true,
  }


  ValidBtPago(): boolean {
    if (this.totalpago !== 0) {
      return true
    }
    return false
  }




}
