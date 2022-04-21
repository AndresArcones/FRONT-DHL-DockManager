export class Pedido{

  id: string;
  horaEntrada: Date | undefined;
  horaSalida: Date| undefined;
  estado:string;
  matricula:string;
  retraso:number;
  tiempoTardado:number;

  constructor(){
    this.id=""
    this.horaEntrada= undefined
    this.horaSalida= undefined
    this.estado=""
    this.matricula=""
    this.retraso=0
    this.tiempoTardado=-1
    }

}

