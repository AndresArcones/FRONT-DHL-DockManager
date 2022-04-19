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

  ngOnInit(): void {
  }

}
