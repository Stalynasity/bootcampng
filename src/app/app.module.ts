import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { TableComponent } from './lib/ejemplo/table/table.component';
import { AutenticacionModule } from './lib/autenticacion/autenticacion.module';


@NgModule({
  declarations: [
    AppComponent,
    TableComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    AutenticacionModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
