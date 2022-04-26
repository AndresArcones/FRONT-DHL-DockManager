import { Component, ViewChild } from '@angular/core';
import { BreakpointObserver } from '@angular/cdk/layout';
import { MatSidenav } from '@angular/material/sidenav';
import { delay, filter } from 'rxjs/operators';
import { NavigationEnd, Router } from '@angular/router';
import { UntilDestroy, untilDestroyed } from '@ngneat/until-destroy';
import { AutenticacionService } from '../../services/autenticacion.service';
import { RetieveUsuarioDto } from 'src/app/interfaces/retrieve-usuario-dto';
import { ReservasService } from '../../services/reservas.service';
import { Hora } from '../../interfaces/hora';
import { Observable, interval } from 'rxjs';
import Swal from 'sweetalert2';


@UntilDestroy()
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  @ViewChild(MatSidenav)
  sidenav!: MatSidenav;

  usuario: RetieveUsuarioDto = new RetieveUsuarioDto();
  fechaHora: Hora | undefined = undefined;

  constructor(private observer: BreakpointObserver, private router: Router, public auth: AutenticacionService, public reservServ: ReservasService) {
    this.auth.retrieveUser()
      .subscribe(resp => {
        this.usuario = resp.body!
      })



    //setInterval(this.everyTime, 3000);
    const source = interval(500);
    source.subscribe(val => this.everyTime());

  }

  everyTime() {
    this.reservServ.getHoraSimulada().subscribe(resp => {
      this.fechaHora = resp.body!
    });
  }

  ngAfterViewInit() {
    this.observer
      .observe(['(max-width: 800px)'])
      .pipe(delay(1), untilDestroyed(this))
      .subscribe((res) => {
        if (res.matches) {
          this.sidenav.mode = 'over';
          this.sidenav.close();
        } else {
          this.sidenav.mode = 'side';
          this.sidenav.open();
        }
      });

    this.router.events
      .pipe(
        untilDestroyed(this),
        filter((e) => e instanceof NavigationEnd)
      )
      .subscribe(() => {
        if (this.sidenav.mode === 'over') {
          this.sidenav.close();
        }
      });
  }
}