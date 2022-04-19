import { Component, OnInit } from '@angular/core';
import { ReservasService } from '../../services/reservas.service';
import { ReservaDto, ReservaDtoInt } from '../../interfaces/reserva-dto';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-misreservas',
  templateUrl: './misreservas.component.html',
  styleUrls: ['./misreservas.component.css']
})
export class MisreservasComponent implements OnInit {

  displayedColumns: string[] = ['nombreMuelle', 'dni', 'matricula', 'idPedido', 'actividad', 'fechaHoraReserva', 'tipoCamion','acciones'];
  dataSource: ReservaDto[] = [];
  reservasPlataforma: ReservaDto[] = []

  constructor(private reservasServ: ReservasService) { }

  async ngOnInit() {
    this.mostrarMisReservas();
  }

  mostrarMisReservas(){
    this.reservasServ.mostrarMisReservas()
      .subscribe(resp => {
        if (resp.status === 200) {
          this.reservasPlataforma = resp.body!.map(reserva => Object.assign(new ReservaDto(), reserva));
          this.dataSource = this.reservasPlataforma;
          console.log(this.dataSource);
        }
      });

    this.dataSource = this.reservasPlataforma;
  }

  anularReserva(id:string){

    this.reservasServ.anularReservas(id).subscribe(
      (result:any) =>{
        this.mostrarMisReservas();
      });

  }

}
