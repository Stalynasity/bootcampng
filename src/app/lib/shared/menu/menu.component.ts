import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { PropertiesItem } from '../../interface/menuitem.interface';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
})
export class MenuComponent implements OnInit, OnChanges {

  @Input() menuItems!: PropertiesItem[];


  rolUser:number = 1;
  menuItemsPorRol: PropertiesItem[] = [];



  ngOnInit(): void {
    this.menuItemsPorRol = this.menuItems.filter(x => x.idrol === this.rolUser)
  }

  ngOnChanges(changes: SimpleChanges): void {

  }


}
