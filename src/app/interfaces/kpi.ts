export class KPI{

    porReservasCanceladasMes: number;
    porRetrasosLllegada: number;
    porUtilizacionMuelle: Array<JSON>;
  
    constructor(){
      this.porReservasCanceladasMes=0
      this.porRetrasosLllegada= 0
      this.porUtilizacionMuelle= []
      }
  
  }
  