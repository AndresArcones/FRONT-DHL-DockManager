import { Component, OnInit } from '@angular/core';
import { ReservaDto } from 'src/app/interfaces/reserva-dto';
import { ReservasService } from 'src/app/services/reservas.service';

@Component({
  selector: 'app-reservastransportistas',
  templateUrl: './reservastransportistas.component.html',
  styleUrls: ['./reservastransportistas.component.css']
})
export class ReservastransportistasComponent implements OnInit {


  displayedColumns: string[] = ['nombreMuelle', 'matricula',  'fechaHoraReserva'];
  dataSource: ReservaDto[] = [];
  reservasPlataforma: ReservaDto[] = []

  constructor(private reservasServ: ReservasService) { }

  async ngOnInit() {
    this.reservasServ.mostrarReservasSiguientes()
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
