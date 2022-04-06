import { Component, OnInit } from '@angular/core';
import { ReservasService } from '../../services/reservas.service';
import { ReservaDto, ReservaDtoInt } from '../../interfaces/reserva-dto';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-reservas',
  templateUrl: './reservas.component.html',
  styleUrls: ['./reservas.component.css']
})
export class ReservasComponent implements OnInit {

  displayedColumns: string[] = ['id', 'nombreMuelle', 'dni', 'matricula', 'idPedido', 'actividad', 'fechaHoraReserva', 'tipoCamion'];
  dataSource: ReservaDto[] = [];
  reservasPlataforma: ReservaDto[] = []



  constructor(private reservasServ: ReservasService) {


  }

  async ngOnInit() {
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




}
