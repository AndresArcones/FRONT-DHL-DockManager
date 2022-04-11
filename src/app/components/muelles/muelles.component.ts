import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Muelle } from 'src/app/interfaces/muelle';
import { AutenticacionService } from 'src/app/services/autenticacion.service';
import Swal from 'sweetalert2';
import { MuelleService } from '../../services/muelles.service';

@Component({
  selector: 'app-muelles',
  templateUrl: './muelles.component.html',
  styleUrls: ['./muelles.component.css']
})
export class MuellesComponent implements OnInit {


  muelles: Muelle[] = [];


  constructor(private muelleService: MuelleService, private router: Router, public auth: AutenticacionService) {
    this.muelleService.muelles()
      .subscribe(resp => {
        if (resp.status === 200) {
          this.muelles = resp.body!;
          console.log(this.muelles);
        }
      }, err => {
        if (err.status === 403) {
          Swal.fire("Login", "Please Log In to Access", "info");
          this.router.navigate([""]);
        }


      })
  }

  ngOnInit(): void {
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


}
