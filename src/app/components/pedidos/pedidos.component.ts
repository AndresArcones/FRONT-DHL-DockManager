import { Component, OnInit } from '@angular/core';
import { Pedido } from 'src/app/interfaces/pedido';
import { MuelleService } from 'src/app/services/muelles.service';

@Component({
  selector: 'app-pedidos',
  templateUrl: './pedidos.component.html',
  styleUrls: ['./pedidos.component.css']
})
export class PedidosComponent implements OnInit {

  displayedColumns: string[] = ['id', 'horaEntrada', 'horaSalida', 'estado', 'matricula','retraso','tiempoTardado'];
  dataSource: Pedido[] = [];
  reservasPlataforma: Pedido[] = []

  constructor(private muelleServ:MuelleService) { }

  ngOnInit(): void {
    this.muelleServ.mostrarPedidosHastaAhora()
      .subscribe(resp => {
        if (resp.status === 200) {
          this.reservasPlataforma = resp.body!.map(reserva => Object.assign(new Pedido(), reserva));
          this.dataSource = this.reservasPlataforma;
          console.log(this.dataSource);
        }
      });

    this.dataSource = this.reservasPlataforma;
  }

}
