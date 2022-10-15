import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { ReservaDto } from '../interfaces/reserva-dto';
import { HoraDto } from '../interfaces/hora-dto';
import { Matricula } from '../interfaces/form-barrera';
import { Hora } from '../interfaces/hora';
import { URL_ENDPOINT } from '../constants';

@Injectable({
  providedIn: 'root'
})
export class ReservasService {

  private _urlEndpointReservas: string = `${URL_ENDPOINT}/api/reserva`
  private _urlEndpointMostrarReservas: string = `${URL_ENDPOINT}/api/reservas`
  private _urlEndpointMostrarReservasSiguientes: string = `${URL_ENDPOINT}/api/reserva/pantalla`
  private _urlEndpointMostrarMisReservas: string = `${URL_ENDPOINT}/api/mis_reservas`
  private _urlEndpointAnularReservas: string = `${URL_ENDPOINT}/api/reserva/anular`
  private _urlEndpointEnviarMatricula: string = `${URL_ENDPOINT}/api/barrera`
  private _urlEndpointEnviarSimulacion: string = `${URL_ENDPOINT}/api/hora`
  private _urlEndpointGetHora: string = `${URL_ENDPOINT}/api/hora_simulada`




  constructor(private http: HttpClient, private router: Router) { }


  reservar(reservaDto: ReservaDto): Observable<any> {

    const httpHeaders = new HttpHeaders({ 'Content-Type': 'application/json' });
    console.log(JSON.stringify(reservaDto));
    return this.http.post<any>(this._urlEndpointReservas + "/" + reservaDto.idMuelle, JSON.stringify(reservaDto), { headers: httpHeaders, observe: "response" });
  }


  //ADMIN ONLY
  mostrarReservas(): Observable<HttpResponse<ReservaDto[]>> {

    return this.http.get<ReservaDto[]>(this._urlEndpointMostrarReservas, { observe: "response" });
  }

  //User ONLY
  mostrarReservasSiguientes(): Observable<HttpResponse<ReservaDto[]>> {

    return this.http.get<ReservaDto[]>(this._urlEndpointMostrarReservasSiguientes, { observe: "response" });
  }

  mostrarMisReservas(): Observable<HttpResponse<ReservaDto[]>> {

    return this.http.get<ReservaDto[]>(this._urlEndpointMostrarMisReservas, { observe: "response" });
  }

  anularReservas(id: string): Observable<HttpResponse<any>> {

    return this.http.post<any>(this._urlEndpointAnularReservas + "/" + id, { observe: "response" });
  }

  enviarMatricula(matricula: Matricula): Observable<any> {

    const httpHeaders = new HttpHeaders({ 'Content-Type': 'application/json' });
    return this.http.post<any>(this._urlEndpointEnviarMatricula, JSON.stringify(matricula), { headers: httpHeaders, observe: "response" });
  }

  enviarSimulacion(hora: HoraDto): Observable<any> {

    const httpHeaders = new HttpHeaders({ 'Content-Type': 'application/json' });
    return this.http.post<any>(this._urlEndpointEnviarSimulacion, JSON.stringify(hora), { headers: httpHeaders, observe: "response" });
  }

  getHoraSimulada(): Observable<HttpResponse<Hora>> {

    return this.http.get<Hora>(this._urlEndpointGetHora, { observe: "response" });
  }

}
