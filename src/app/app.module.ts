import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LogInComponent } from './components/log-in/log-in.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { AuthInterceptor } from './auth.interceptor';
import { RegisterComponent } from './components/register/register.component';
import { HomeComponent } from './components/home/home.component';
import { CommonModule } from '@angular/common';
import { VgCoreModule } from '@videogular/ngx-videogular/core';
import { VgControlsModule } from '@videogular/ngx-videogular/controls';
import { VgOverlayPlayModule } from '@videogular/ngx-videogular/overlay-play';
import { VgBufferingModule } from '@videogular/ngx-videogular/buffering';
import { SidebarComponent } from './shared/sidebar/sidebar.component';
import { HeaderComponent } from './shared/header/header.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FlexLayoutModule } from '@angular/flex-layout';
import { FooterComponent } from './shared/footer/footer.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgxFileDropModule } from 'ngx-file-drop';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatDividerModule } from '@angular/material/divider';
import { MuellesComponent } from './components/muelles/muelles.component';
import { DetalleMuelleComponent } from './components/detalle-muelle/detalle-muelle.component';
import { MatSelectModule } from '@angular/material/select';
import { ReservasComponent } from './components/reservas/reservas.component';
import { MatTableModule } from '@angular/material/table';
import { ReservastransportistasComponent } from './components/reservastransportistas/reservastransportistas.component';
import { PedidosComponent } from './components/pedidos/pedidos.component';
import { MisreservasComponent } from './components/misreservas/misreservas.component';
import { SimularhoraComponent } from './components/simularhora/simularhora.component'

import { CalendarModule } from 'primeng/calendar';
import { CargarmuelleComponent } from './components/cargarmuelle/cargarmuelle.component';
import { EstadisticasComponent } from './components/estadisticas/estadisticas.component';
import { MatMenuModule } from '@angular/material/menu';
import { PedidosdiaComponent } from './components/pedidosdia/pedidosdia.component';
import { BarreraComponent } from './components/barrera/barrera.component';
import { ReservarComponent } from './components/reservar/reservar.component';
import { MatStepperModule } from '@angular/material/stepper';
import { MuellesReservarComponent } from './components/muelles-reservar/muelles-reservar.component';
import { BienvenidaComponent } from './components/bienvenida/bienvenida.component';



@NgModule({
  declarations: [
    AppComponent,
    LogInComponent,
    RegisterComponent,
    HomeComponent,
    SidebarComponent,
    HeaderComponent,
    FooterComponent,
    MuellesComponent,
    DetalleMuelleComponent,
    ReservasComponent,
    ReservastransportistasComponent,
    PedidosComponent,
    MisreservasComponent,
    SimularhoraComponent,
    CargarmuelleComponent,
    EstadisticasComponent,
    PedidosdiaComponent,
    BarreraComponent,
    ReservarComponent,
    MuellesReservarComponent,
    BienvenidaComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    CommonModule,
    VgCoreModule,
    VgControlsModule,
    VgOverlayPlayModule,
    VgBufferingModule,
    NgbModule,
    FlexLayoutModule,
    BrowserAnimationsModule,
    NgxFileDropModule,
    MatButtonModule,
    MatFormFieldModule,
    ReactiveFormsModule,
    MatInputModule,
    MatToolbarModule,
    MatSidenavModule,
    MatIconModule,
    MatDividerModule,
    MatSelectModule,
    MatTableModule,
    CalendarModule,
    MatMenuModule,
    MatStepperModule

  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptor,
      multi: true
    }],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule { }
