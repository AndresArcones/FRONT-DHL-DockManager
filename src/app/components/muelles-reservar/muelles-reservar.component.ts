import { MuelleInt } from './../../interfaces/muelle';
import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Muelle } from 'src/app/interfaces/muelle';
import { AutenticacionService } from 'src/app/services/autenticacion.service';
import Swal from 'sweetalert2';
import { MuelleService } from '../../services/muelles.service';
import { RetieveUsuarioDto } from 'src/app/interfaces/retrieve-usuario-dto';
import { FormGroup, FormControl, ControlContainer } from '@angular/forms';
import { interval, Subject } from 'rxjs';
import { Pedido } from '../../interfaces/pedido';
import { ReservaDto } from 'src/app/interfaces/reserva-dto';
import { ReservasService } from 'src/app/services/reservas.service';

@Component({
  selector: 'app-muelles-reservar',
  templateUrl: './muelles-reservar.component.html',
  styleUrls: ['./muelles-reservar.component.css']
})
export class MuellesReservarComponent implements OnInit {

  tramos: Array<string> = ['6:00-7:00 UTC', '7:00-8:00 UTC', '8:00-9:00 UTC', '9:00-10:00 UTC', '10:00-11:00 UTC', '11:00-12:00 UTC', '12:00-13:00 UTC', '13:00-14:00 UTC']
  muelles: Muelle[] = [];
  usuario: RetieveUsuarioDto = new RetieveUsuarioDto();
  @Input() dni: string = ""
  @Input() matricula: string = ""
  @Input() idPedido: string = ""
  @Input() tramo: number = -1
  @Input() tipoCamion: string = ""
  @Input() pedido: Pedido = new Pedido();
  reserva: ReservaDto = new ReservaDto();

  public static fireEvent: Subject<boolean> = new Subject();


  constructor(private muelleService: MuelleService, private router: Router, public auth: AutenticacionService, private reservaServ: ReservasService) {

    MuellesReservarComponent.fireEvent.subscribe(res => {
      console.log(res);
      this.executeQuery();
    });

    this.auth.retrieveUser()
      .subscribe(resp => {
        this.usuario = resp.body!
      })


  }

  ngOnInit(): void {


  }

  executeQuery() {
    this.muelleService.muelles()

      .subscribe(resp => {
        if (resp.status === 200) {

          this.muelles = this.limpiarMuelles(resp.body!);

        }
      }, err => {
        if (err.status === 403) {
          Swal.fire("Login", "Please Log In to Access", "info");
          this.router.navigate([""]);
        }
      });
  }

  limpiarMuelles(muelles: Muelle[]) {


    let resultado: Muelle[] = [];

    if (this.pedido != null) {
      muelles.forEach(muelle => {
        let addMuelle: boolean = false;

        if (this.pedido.tipoPedido == muelle.tipoMuelle && muelle.reservas[this.tramo] == null && muelle.tipoCamion == this.tipoCamion) {
          addMuelle = true;
        }

        if (addMuelle) {
          resultado.push(muelle);
        }

      });
    }
    console.log(resultado);
    return resultado
  }

  openMuelle(muelleId: string) {

    this.router.navigate(["home/muelle/" + muelleId]);
  }

  calcularHoraMuelle(muelle: Muelle) {
    return muelle.aperturaMuelle * 1 + muelle.numeroTramosReserva * 1;
  }


  estaLleno(muelle: Muelle) {
    let isLleno: boolean = true;
    muelle.reservas.forEach(reserva => {
      if (reserva == null) {
        isLleno = false;
      }
    });

    return isLleno;

  }

  reservarMuelle(idMuelle: string) {

    console.log(this.dni);
    console.log(this.matricula);
    console.log(this.idPedido);
    console.log(this.tramo);
    console.log(idMuelle);

    //from form
    this.reserva.dni = this.dni;
    this.reserva.matricula = this.matricula;
    this.reserva.idPedido = this.idPedido;
    this.reserva.tramoHora = this.tramo;

    //from muelle
    this.reserva.idMuelle = idMuelle;
    this.reserva.actividad = this.pedido.tipoPedido;
    this.reserva.tipoCamion = this.tipoCamion;

    this.reservaServ.reservar(this.reserva)
      .subscribe(resp => {
        Swal.fire("Reserva", "Reserva realizada correctamente", "success")
        this.router.navigate(["/home/misReservas"])
        console.log(resp.body);
      }, err => {
        Swal.fire("Reserva", "La reserva no se pudo realizar", "error")
      });
  }
}
