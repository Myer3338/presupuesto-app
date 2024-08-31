import { Component, OnInit } from '@angular/core';
import { Listadoservice } from '../listado.service';
import { Listado } from '../listado.model';

@Component({
  selector: 'app-egreso',
  templateUrl: './egreso.component.html',
  styleUrls: ['./egreso.component.css'],
})
export class EgresoComponent implements OnInit {
  constructor(private listadosService: Listadoservice) {}

  ngOnInit(): void {
  }

  get listado() {
    return this.listadosService.general.filter(
      (ingreso) => ingreso.select == '- '
    );
  }

  eliminarRegistro(id: number): void {
    console.log(id);    
    this.listadosService.eliminarRegistro(id);    
  } 
}
