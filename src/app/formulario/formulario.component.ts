import { Component, OnInit } from '@angular/core';
import { Listado } from '../listado.model';
import { Listadoservice } from '../listado.service';
import { IngresoComponent } from '../ingreso/ingreso.component';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css'],
})
export class FormularioComponent implements OnInit {
  id: number;
  selectedValue: string = 'ing'; // Valor inicial
  descripcionInput: string = '';
  valorInput: number;
  porcentaje: number;

  constructor(private listadoServicio: Listadoservice) {}

  ngOnInit(): void {}

  onAgregarValor() {
    let ingreso = new Listado(
      this.id,
      this.selectedValue,
      this.descripcionInput,
      this.valorInput,
      this.porcentaje
    );
    console.log(ingreso.id, ingreso.select, ingreso.descripcion, ingreso.valor);
    if (!(ingreso.id && ingreso.select && ingreso.descripcion && ingreso.valor)){
      console.log('vacio');  
      alert('Los campos no pueden estar vacios.');
      return;
    }
    this.listadoServicio.agregarPresupuesto(ingreso);
  }
}
