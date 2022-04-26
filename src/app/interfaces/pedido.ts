export class Pedido {

  id: string;
  horaEntrada: Date | undefined;
  horaSalida: Date | undefined;
  estado: string;
  matricula: string;
  retraso: number;
  tiempoTardado: number;
  tipoPedido: string;

  constructor() {
    this.id = ""
    this.horaEntrada = undefined
    this.horaSalida = undefined
    this.tipoPedido = ""
    this.estado = ""
    this.matricula = ""
    this.retraso = 0
    this.tiempoTardado = -1
  }

}

