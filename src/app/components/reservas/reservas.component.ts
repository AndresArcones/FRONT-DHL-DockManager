import { Component, OnInit } from '@angular/core';
import { ReservasService } from '../../services/reservas.service';
import { ReservaDto, ReservaDtoInt } from '../../interfaces/reserva-dto';
import { map } from 'rxjs/operators';
import { MuelleService } from 'src/app/services/muelles.service';
import { KPI } from 'src/app/interfaces/kpi';

@Component({
  selector: 'app-reservas',
  templateUrl: './reservas.component.html',
  styleUrls: ['./reservas.component.css']
})
export class ReservasComponent implements OnInit {

  displayedColumns: string[] = ['id', 'nombreMuelle', 'dni', 'matricula', 'idPedido', 'actividad', 'fechaHoraReserva', 'tipoCamion'];
  dataSource: ReservaDto[] = [];
  reservasPlataforma: ReservaDto[] = []
  KPI:KPI;

  constructor(private reservasServ: ReservasService,private muelleServ:MuelleService) {

    this.KPI={porReservasCanceladasMes:0.0,porRetrasosLllegada:0.0,porUtilizacionMuelle:[]}
  }

  async ngOnInit() {
    this.mostrarKPI()
    this.reservasServ.mostrarReservas()
      .subscribe(resp => {
        if (resp.status === 200) {
          this.reservasPlataforma = resp.body!.map(reserva => Object.assign(new ReservaDto(), reserva));
          this.dataSource = this.reservasPlataforma;
          console.log(this.dataSource);
        }
      });

    this.dataSource = this.reservasPlataforma;

  }

  mostrarKPI(){
    this.muelleServ.mostrarKPI().subscribe((resp) => { 
      if (resp.status === 200) {
        this.KPI={porReservasCanceladasMes:(resp.body as any).porReservasCanceladasMes,
          porRetrasosLllegada:(resp.body as any).porRetrasosLllegada,
          porUtilizacionMuelle:(resp.body as any).porUtilizacionMuelle}
        
      }
      console.log(resp.body);
      console.log(this.KPI)
    });
  }


}
