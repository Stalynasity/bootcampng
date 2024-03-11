import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';


import { AutenticacionModule } from './lib/autenticacion/autenticacion.module';
import { SharedModule } from './lib/shared/shared.module';
import { EjemploModule } from './lib/ejemplo/ejemplo.module';


@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    AutenticacionModule,
    SharedModule,
    EjemploModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
