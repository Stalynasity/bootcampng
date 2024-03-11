import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { InputfornComponent } from './inputforn/inputforn.component';
import { LoadingComponent } from './loading/loading.component';
import { BotonestablaComponent } from './botonestabla/botonestabla.component';
import { MenuComponent } from './menu/menu.component';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    BotonestablaComponent,
    HeaderComponent,
    InputfornComponent,
    LoadingComponent,
    MenuComponent,

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
    MenuComponent
  ]
})
export class SharedModule { }
