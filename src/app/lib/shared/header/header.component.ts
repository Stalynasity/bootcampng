import { Component } from '@angular/core';
import { PropertiesItem } from '../../interface/menuitem.interface';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
})
export class HeaderComponent {

  opciones: PropertiesItem[] = [
    {
      idopcion: 1,
      idrol: 1,
      opcion: "Home",
      icon: "house-door-fill"
    },
    {
      idopcion: 4,
      idrol: 1,
      opcion: "Users",
      icon: "person-fill-gear"
    },
    {
      idopcion: 1,
      idrol: 2,
      opcion: "Home",
      icon: "house-door-fill"
    },
    {
      idopcion: 1,
      idrol: 3,
      opcion: "Home",
      icon: "house-door-fill"
    },
    {
      idopcion: 2,
      idrol: 2,
      opcion: "Comprar",
      icon: "cart-fill"
    },
    {
      idopcion: 2,
      idrol: 3,
      opcion: "Comprar",
      icon: "cart-fill"
    },
    {
      idopcion: 3,
      idrol: 2,
      opcion: "Docs",
      icon: "clipboard2-fill"
    }
  ];





}
