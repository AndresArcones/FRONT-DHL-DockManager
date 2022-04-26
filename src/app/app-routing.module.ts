import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LogInComponent } from './components/log-in/log-in.component';
import { RegisterComponent } from './components/register/register.component';
import { HomeComponent } from './components/home/home.component';
import { SidebarComponent } from './shared/sidebar/sidebar.component';
import { HeaderComponent } from './shared/header/header.component';
import { MuellesComponent } from './components/muelles/muelles.component';
import { DetalleMuelleComponent } from './components/detalle-muelle/detalle-muelle.component';
import { ReservasComponent } from './components/reservas/reservas.component';
import { ReservastransportistasComponent } from './components/reservastransportistas/reservastransportistas.component';
import { PedidosComponent } from './components/pedidos/pedidos.component';
import { MisreservasComponent } from './components/misreservas/misreservas.component';
import { SimularhoraComponent } from './components/simularhora/simularhora.component';
import { CargarmuelleComponent } from './components/cargarmuelle/cargarmuelle.component';
import { EstadisticasComponent } from './components/estadisticas/estadisticas.component';
import { PedidosdiaComponent } from './components/pedidosdia/pedidosdia.component';
import { BarreraComponent } from './components/barrera/barrera.component';
import { ReservarComponent } from './components/reservar/reservar.component';
import { BienvenidaComponent } from './components/bienvenida/bienvenida.component';


const routes: Routes = [
  { path: '', component: LogInComponent },
  { path: 'register', component: RegisterComponent },
  {
    path: 'home',
    component: HomeComponent,
    children: [
      { path: '', component: BienvenidaComponent },
      { path: 'muelle/:muelleId', component: DetalleMuelleComponent, },
      { path: 'reservas', component: ReservasComponent, },
      { path: 'misReservas', component: MisreservasComponent, },
      { path: 'reservastransportistas', component: ReservastransportistasComponent, },
      { path: 'pedidos', component: PedidosComponent, },
      { path: 'pedidosdia', component: PedidosdiaComponent, },
      { path: 'barrera', component: BarreraComponent, },
      { path: 'simularhora', component: SimularhoraComponent, },
      { path: 'cargarmuelle', component: CargarmuelleComponent, },
      { path: 'estadisticas', component: EstadisticasComponent, },
      { path: 'reservar', component: ReservarComponent, },
      { path: 'estadoMuelles', component: MuellesComponent, },
    ]
  },



];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
