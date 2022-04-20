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


const routes: Routes = [
  { path: '', component: LogInComponent },
  { path: 'register', component: RegisterComponent },
  {
    path: 'home',
    component: HomeComponent,
    children: [
      { path: '', component: MuellesComponent, },
      { path: 'muelle/:muelleId', component: DetalleMuelleComponent, },
      { path: 'reservas', component: ReservasComponent, },
      { path: 'misReservas', component: MisreservasComponent, },
      { path: 'reservastransportistas', component: ReservastransportistasComponent, },
      { path: 'pedidos', component: PedidosComponent, },
      { path: 'simularhora', component: SimularhoraComponent, },
      { path: 'cargarmuelle', component: CargarmuelleComponent, },
      { path: 'estadisticas', component: EstadisticasComponent, },
    ]
  },



];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
