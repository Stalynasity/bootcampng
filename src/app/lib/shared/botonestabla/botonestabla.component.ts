import { Component, EventEmitter, Input, Output } from '@angular/core';
import { PropertiesBtnTabla } from '../../interface/PropertiesBtnTabla.interface';


@Component({
  selector: 'app-botonestabla',
  templateUrl: './botonestabla.component.html',
})
export class BotonestablaComponent {

  @Output() eventoEditar =new EventEmitter();
  @Output() eventoEliminar =new EventEmitter();

  @Input() propertiesBtn: PropertiesBtnTabla = {
    labelEdiar: "Editar",
    mostrarEditar: true,
    labelEliminar: "Eliminar",
    mostrarEliminar: true,
    bootstrapEditar: 'primary',
    bootstrapEliminar: 'danger'

  }

  eventEliminar(){
    this.eventoEliminar.emit();
  }

  eventEditar(){
    this.eventoEditar.emit();
  }




}
