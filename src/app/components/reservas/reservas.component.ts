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

    this.KPI={porReservasCanceladasMes:0,porRetrasosLllegada:0,porUtilizacionMuelle:[]}
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
    this.muelleServ.mostrarKPI().subscribe(resp => { this.KPI={porReservasCanceladasMes:(resp as any).porReservasCanceladasMes,
      porRetrasosLllegada:(resp as any).porRetrasosLllegada,
      porUtilizacionMuelle:(resp as any).porUtilizacionMuelle}
     
    });
  }


}
