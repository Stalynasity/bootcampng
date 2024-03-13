import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { InputfornComponent } from './inputforn/inputforn.component';
import { LoadingComponent } from './loading/loading.component';
import { BotonestablaComponent } from './botonestabla/botonestabla.component';
import { MenuComponent } from './menu/menu.component';
import { FormsModule } from '@angular/forms';
import { AgregarproductoComponent } from './agregarproducto/agregarproducto.component';
import { GeneralpipePipe } from './pipes/generalpipe.pipe';
import { OrdenarPipe } from './pipes/ordenar.pipe';
import { DescuentoPipe } from './pipes/descuento.pipe';
import { IvaPipe } from './pipes/iva.pipe';
import { BotonordenarComponent } from './botonordenar/botonordenar.component';



@NgModule({
  declarations: [
    BotonestablaComponent,
    HeaderComponent,
    InputfornComponent,
    LoadingComponent,
    MenuComponent,
    AgregarproductoComponent,
    GeneralpipePipe,
    OrdenarPipe,
    DescuentoPipe,
    IvaPipe,
    BotonordenarComponent

  ],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports: [
    BotonestablaComponent,
    HeaderComponent,
    InputfornComponent,
    LoadingComponent,
    MenuComponent,
    AgregarproductoComponent,
    GeneralpipePipe,
    OrdenarPipe,
    DescuentoPipe,
    IvaPipe,
    BotonordenarComponent
  ]
})
export class SharedModule { }
