import { MuelleInt } from './../../interfaces/muelle';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Muelle } from 'src/app/interfaces/muelle';
import { AutenticacionService } from 'src/app/services/autenticacion.service';
import Swal from 'sweetalert2';
import { MuelleService } from '../../services/muelles.service';
import { RetieveUsuarioDto } from 'src/app/interfaces/retrieve-usuario-dto';

@Component({
  selector: 'app-muelles',
  templateUrl: './muelles.component.html',
  styleUrls: ['./muelles.component.css']
})
export class MuellesComponent implements OnInit {


  muelles: Muelle[] = [];
  usuario: RetieveUsuarioDto = new RetieveUsuarioDto();



  constructor(private muelleService: MuelleService, private router: Router, public auth: AutenticacionService) {

    this.muelleService.muelles()

      .subscribe(resp => {
        if (resp.status === 200) {
          if (this.auth.hasRole('ROL_ADMIN')) {
            this.muelles = resp.body!;
          }
          console.log(resp.body!);
          if (this.auth.hasRole('ROL_USER')) {
            this.muelles = this.limpiarMuelles(resp.body!)
          }

          console.log(this.muelles);
        }
      }, err => {
        if (err.status === 403) {
          Swal.fire("Login", "Please Log In to Access", "info");
          this.router.navigate([""]);
        }
      })

    this.auth.retrieveUser()
      .subscribe(resp => {
        this.usuario = resp.body!
      })


  }

  ngOnInit(): void {
  }

  limpiarMuelles(muelles: Muelle[]) {
    let resultado: Muelle[] = [];
    muelles.forEach(muelle => {
      let contador: number = 0
      muelle.reservas.forEach(reserva => {
        if (reserva != null) {
          contador++

        }

      })
      console.log(contador);
      if (muelle.reservas.length > contador) {
        resultado.push(muelle);
      }

    });
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


}
