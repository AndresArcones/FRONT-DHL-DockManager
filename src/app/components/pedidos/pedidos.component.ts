import { Component, OnInit } from '@angular/core';
import { Pedido } from 'src/app/interfaces/pedido';

@Component({
  selector: 'app-pedidos',
  templateUrl: './pedidos.component.html',
  styleUrls: ['./pedidos.component.css']
})
export class PedidosComponent implements OnInit {

  displayedColumns: string[] = ['id', 'horaEntrada', 'horaSalida', 'estado', 'matricula','retraso','tiempoTardado'];
  dataSource: Pedido[] = [];

  constructor() { }

  ngOnInit(): void {
  }

}
