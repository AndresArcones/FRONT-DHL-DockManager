import { Pedidosdia } from './../../interfaces/pedidosdia';
import { Component, OnInit } from '@angular/core';
import { Pedido } from 'src/app/interfaces/pedido';
import { MuelleService } from 'src/app/services/muelles.service';

@Component({
  selector: 'app-pedidosdia',
  templateUrl: './pedidosdia.component.html',
  styleUrls: ['./pedidosdia.component.css']
})
export class PedidosdiaComponent implements OnInit {

  displayedColumns: string[] = ['id', 'nombremuelle','horaEntrada', 'horaSalida', 'estado', 'matricula','retraso','tiempoTardado'];
  dataSource: Pedidosdia[] = [];
  reservasPlataforma: Pedidosdia[] = []

  constructor(private muelleServ:MuelleService) { }

  ngOnInit(): void {
    this.muelleServ.mostrarPedidosDia()
      .subscribe(resp => {
        if (resp.status === 200) {
          this.reservasPlataforma = resp.body!.map(pedido => Object.assign(new Pedidosdia(), pedido));
          this.dataSource = this.reservasPlataforma;
          console.log(this.dataSource);
        }
      });

    this.dataSource = this.reservasPlataforma;
  }

}
