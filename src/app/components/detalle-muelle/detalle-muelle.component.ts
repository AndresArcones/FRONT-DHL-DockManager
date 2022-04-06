import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Muelle } from 'src/app/interfaces/muelle';
import Swal from 'sweetalert2';
import { MuelleService } from '../../services/muelles.service';

@Component({
  selector: 'app-detalle-muelle',
  templateUrl: './detalle-muelle.component.html',
  styleUrls: ['./detalle-muelle.component.css']
})
export class DetalleMuelleComponent implements OnInit {

  muelleId: string = ""

  horarios: number = 0;

  muelle: Muelle = new Muelle();

  reserva: FormGroup;
  dni: FormControl = new FormControl('')
  hora: FormControl = new FormControl('')
  idpedido: FormControl = new FormControl('')

  constructor(private muelleSer: MuelleService, private activatedRoute: ActivatedRoute) {
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

    this.reserva = new FormGroup({
      dni: this.dni,
      idpedido: this.idpedido,
      hora: this.hora,
    });
  }

  ngOnInit(): void {
  }

  reservar() {
    console.log(this.reserva.get("dni")?.value);
    console.log(this.reserva.get("idpedido")?.value);
    console.log(this.reserva.get("hora")?.value);
  }

}
