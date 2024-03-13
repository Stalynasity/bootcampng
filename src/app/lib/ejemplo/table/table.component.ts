import { Component, ElementRef, ViewChild } from '@angular/core';
import { ProductDetail } from '../interface/ProductDetail.interface';
import { TablacarritoComponent } from '../tablacarrito/tablacarrito.component';
import { ValorespagoComponent } from '../valorespago/valorespago.component';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrl: './table.component.css'
})
export class TableComponent {

  //ViewChild nos trae como una l
  @ViewChild(TablacarritoComponent)
  tableCarrito!: TablacarritoComponent;

  @ViewChild(ValorespagoComponent)
  valorespago!: ValorespagoComponent;

  @ViewChild('divAgregarProducto', { static: false })
  divAgregarProducto!: ElementRef;


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

  name: string = "";

  nameOrden(name: string){
    this.name = name;
  }


  // Habilitar y desabilitar el boton Agregar de mi component padre
  validarStock(prodSeleccionado: ProductDetail): boolean {
    let identificarProd = this.listaproducto.find(p => p.productoid === prodSeleccionado.productoid)
    if (identificarProd) {
      if (identificarProd.stock > 0) {
        return true
      }
    }
    return false;
  }

  // mostrar o ocultar el boton para agregar producto
  validarCarrito() {
    if (this.tableCarrito.listaCarrito.length !== 0) {
      this.divAgregarProducto.nativeElement.style.display = 'none';
    } else {
      this.divAgregarProducto.nativeElement.style.display = 'flex';
    }
  }



  //aun no se usa
  mensajeCerrar(e: any) {
  }

  // se hace el calculo de mi factura en mi component hija tabla carrito
  realizarCalculo() {
    this.valorespago.totalProducto = 0;
    this.valorespago.subtotal = 0;
    // this.impuesto = 0;
    // this.totalpago = 0;

    this.tableCarrito.listaCarrito.forEach(producto => {
      this.valorespago.totalProducto += producto.cantidad ?? 0;
      this.valorespago.subtotal += (producto.precio * (producto.cantidad ?? 0));
    });

    let descuento = this.valorespago.subtotal - (this.valorespago.subtotal * 0.02);
    let iva = descuento + (descuento * 0.12);
    this.valorespago.totalpago = iva;
  }



  // agregar producto a mi componente hija TablaCarrito
  agregarProducto(producto: ProductDetail) {
    const productExistente = this.tableCarrito.listaCarrito.find(p => p.productoid === producto.productoid);
    if (!productExistente) {
      producto.cantidad = 1;
      producto.stock -= 1;
      this.tableCarrito.listaCarrito.push(producto)
    }
    else if (productExistente.stock >= 0) {
      productExistente.stock -= 1;
      productExistente.cantidad = (productExistente.cantidad || 0) + 1;
    }
    this.realizarCalculo();
    this.validarCarrito();
  }

  // Se agrega un nuevo producto al listado se usa en el compo hija agregarproducto
  nuevoProducto(producto: ProductDetail) {
    let ultimoId = this.listaproducto.length + 1;
    producto.productoid = ultimoId;
    this.listaproducto.push(producto)
  }

}
