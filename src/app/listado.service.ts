import { Injectable } from '@angular/core';
import { Listado } from './listado.model';

@Injectable()
export class Listadoservice {
  general: Listado[] = [];
  suma: number = 0;
  totalSuma: number = 0;
  resta: number = 0;
  totalResta: number = 0;
  totalGeneral: number = 0;
  porcentajeEgreso: number = 0;
  porcentajeTotalEgreso: number = 0;

  agregarPresupuesto(ingresos: Listado) {
    if (ingresos.select == 'ing') {
      ingresos.select = '+ ';
    } else {
      ingresos.select = '- ';
      this.porcentajeEgreso = ingresos.valor / this.totalSuma;
      ingresos.porcentaje = this.porcentajeEgreso;
    }
    this.general.push(ingresos);
    this.calcular();
  }

  calcular() {
    this.suma = 0;
    this.resta = 0;

    for (let index = 0; index < this.general.length; index++) {
      const element = this.general[index];

      if (element.select === '+ ') {
        this.suma = this.suma + element.valor;
        this.totalSuma = this.suma;
      }
      if (element.select === '- ') {
        this.resta = this.resta + element.valor;
        this.totalResta = this.resta;
      }
    }

    this.totalGeneral = this.totalSuma - this.totalResta;
    this.porcentajeTotalEgreso = (this.totalResta) / this.totalSuma;
  }

  eliminarRegistro(id: number): void {
    console.log(id);
    this.general = this.general.filter((registro) => registro.id !== id);
    this.calcular();
    if (this.general.length === 0) {
      this.totalGeneral = 0;
      this.totalResta = 0;
      this.totalSuma = 0;
      this.porcentajeTotalEgreso = 0;
    }
  }
}
