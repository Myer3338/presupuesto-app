import { Component, OnInit } from '@angular/core';
import { Listadoservice } from '../listado.service';

@Component({
  selector: 'app-cabecero',
  templateUrl: './cabecero.component.html',
  styleUrls: ['./cabecero.component.css']
})
export class CabeceroComponent implements OnInit {

  constructor(private listadosService: Listadoservice) { }

  ngOnInit(): void {
  }

  
  get totalGeneral(){
    return this.listadosService.totalGeneral;
  }

  get totalSuma(){
    return this.listadosService.totalSuma;
  }

  get totalResta(){
    return this.listadosService.totalResta;
  }

  get porcentajeTotalEgreso(){
    return this.listadosService.porcentajeTotalEgreso;
  }

}
