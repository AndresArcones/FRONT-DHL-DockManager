import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Muelle } from 'src/app/interfaces/muelle';
import Swal from 'sweetalert2';
import { MuelleService } from '../../services/muelles.service';
import { Reserva } from '../../interfaces/muelle';
import { ReservaDto } from '../../interfaces/reserva-dto';
import { ReservasService } from 'src/app/services/reservas.service';

@Component({
  selector: 'app-detalle-muelle',
  templateUrl: './detalle-muelle.component.html',
  styleUrls: ['./detalle-muelle.component.css']
})
export class DetalleMuelleComponent implements OnInit {

  muelleId: string = ""

  horarios: number = 0;

  muelle: Muelle = new Muelle();
  reserva: ReservaDto = new ReservaDto();

  formReserva: FormGroup;
  dni: FormControl = new FormControl('')
  idpedido: FormControl = new FormControl('')
  matricula: FormControl = new FormControl('')
  hora: FormControl = new FormControl('')


  constructor(private muelleSer: MuelleService, private activatedRoute: ActivatedRoute, private reservaServ: ReservasService) {
    this.muelleId = this.activatedRoute.snapshot.paramMap.get("muelleId")!;
    this.muelleSer.muelle(this.muelleId)
      .subscribe(resp => {
        if (resp.status === 200) {
          this.muelle = resp.body!;
          console.log(this.muelle);
        }
      }, err => {
        Swal.fire("Muelle", err.error.message, "error");
      })

    this.formReserva = new FormGroup({
      dni: this.dni,
      idpedido: this.idpedido,
      matricula: this.matricula,
      hora: this.hora,
    });
  }

  ngOnInit(): void {
  }

  reservar() {
    const dni = this.formReserva.get("dni")?.value;
    const idpedido = this.formReserva.get("idpedido")?.value;
    const matricula = this.formReserva.get("matricula")?.value;
    const hora = this.formReserva.get("hora")?.value;
    console.log(dni);
    console.log(idpedido);
    console.log(hora);

    //from form
    this.reserva.dni = dni;
    this.reserva.matricula = matricula;
    this.reserva.idPedido = idpedido;
    this.reserva.tramoHora = hora;

    //from muelle
    this.reserva.idMuelle = this.muelle.id;
    this.reserva.actividad = this.muelle.tipoMuelle;
    this.reserva.tipoCamion = this.muelle.tipoCamion;
    // this.reserva.fechaHoraReserva = new Date(); FALTA

    this.reservaServ.reservar(this.reserva)
      .subscribe(resp => {
        console.log(resp.body);
      })

  }

}
