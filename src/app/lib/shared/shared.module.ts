import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { InputfornComponent } from './inputforn/inputforn.component';
import { LoadingComponent } from './loading/loading.component';
import { BotonestablaComponent } from './botonestabla/botonestabla.component';



@NgModule({
  declarations: [
    BotonestablaComponent,
    HeaderComponent,
    InputfornComponent,
    LoadingComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    BotonestablaComponent,
    HeaderComponent,
    InputfornComponent,
    LoadingComponent
  ]
})
export class SharedModule { }
