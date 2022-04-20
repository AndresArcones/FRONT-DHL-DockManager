import { Component, OnInit } from '@angular/core';
import { KPI } from 'src/app/interfaces/kpi';
import { MuelleStats } from 'src/app/interfaces/muellestats';
import { MuelleService } from 'src/app/services/muelles.service';

@Component({
  selector: 'app-estadisticas',
  templateUrl: './estadisticas.component.html',
  styleUrls: ['./estadisticas.component.css']
})
export class EstadisticasComponent implements OnInit {

  displayedColumns: string[] = ['nombre', 'porUso'];
  muelleSource: MuelleStats[] = [];
  muellePlataforma: MuelleStats[] = []
  KPI:KPI;

  constructor(private muelleServ:MuelleService) {
    this.KPI={porReservasCanceladasMes:0.0,porRetrasosLllegada:0.0,porUtilizacionMuelle:0.0}
   }

  ngOnInit(): void {
    this.mostrarKPI()
    this.muelleServ.mostrarKPIMuelles()
      .subscribe(resp => {
        if (resp.status === 200) {
          this.muellePlataforma = resp.body!.map(muelle => Object.assign(new MuelleStats(), muelle));
          this.muelleSource = this.muellePlataforma;
          console.log(this.muelleSource);
        }
      });

    this.muelleSource = this.muellePlataforma;
  }

  mostrarKPI(){
    this.muelleServ.mostrarKPI().subscribe((resp) => { 
      if (resp.status === 200) {
        this.KPI={porReservasCanceladasMes:(resp.body as any).porReservasCanceldasMes,
          porRetrasosLllegada:(resp.body as any).porRetrasosLllegada,
          porUtilizacionMuelle:(resp.body as any).porUtilizacionMuelles}
        
      }
      console.log(resp.body);
      console.log(this.KPI)
    });
  }

}
