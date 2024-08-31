import { Component, OnInit } from '@angular/core';
import { Listadoservice } from '../listado.service';

@Component({
  selector: 'app-ingreso',
  templateUrl: './ingreso.component.html',
  styleUrls: ['./ingreso.component.css'],
})
export class IngresoComponent implements OnInit {

  constructor(private listadosService: Listadoservice) {}

  ngOnInit(): void {}

  get listado() {   
    return this.listadosService.general.filter((ingreso) => ingreso.select == '+ ');    
  }  

  eliminarRegistro(id: number): void {
    console.log(id);    
    this.listadosService.eliminarRegistro(id);
  } 
}
