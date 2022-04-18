export class Pedido{

  id: string;
  horaEntrada: Date | undefined;
  horaSalida: Date| undefined;
  estado:string;
  matricula:string;
  tipo: string;

  constructor(){
    this.id=""
    this.horaEntrada= undefined
    this.horaSalida= undefined
    this.estado=""
    this.matricula=""
    this.tipo=""
    }

}

