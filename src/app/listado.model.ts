export class Listado {
  static contadorId = 0;
  constructor(
    public id: number,
    public select: string,
    public descripcion: string,
    public valor: number,
    public porcentaje: number
  ) {
    this.id = Listado.contadorId++;
  }
}
