import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { ReservaDto } from '../interfaces/reserva-dto';

@Injectable({
  providedIn: 'root'
})
export class ReservasService {

  private _urlEndpointReservas: string = "http://localhost:8080/api/reserva"
  private _urlEndpointMostrarReservas: string = "http://localhost:8080/api/reservas"
  private _urlEndpointMostrarReservasSiguientes: string = "http://localhost:8080/api/reserva/pantalla"
  private _urlEndpointMostrarMisReservas: string = "http://localhost:8080/api/mis_reservas"
  private _urlEndpointAnularReservas: string = "http://localhost:8080/api/reserva/anular"
  private _urlEndpointEnviarMatricula: string = "http://localhost:8080/api/barrera"
  private _urlEndpointEnviarSimulacion: string = "http://localhost:8080/api/hora"


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

  anularReservas(id:string): Observable<HttpResponse<any>> {

    return this.http.post<any>(this._urlEndpointAnularReservas+"/"+id, { observe: "response" });
  }

  enviarMatricula(): Observable<any> {

    const httpHeaders = new HttpHeaders({ 'Content-Type': 'application/json' });
    return this.http.post<any>(this._urlEndpointEnviarMatricula, { headers: httpHeaders, observe: "response" });
  }

  enviarSimulacion(): Observable<any> {

    const httpHeaders = new HttpHeaders({ 'Content-Type': 'application/json' });
    return this.http.post<any>(this._urlEndpointEnviarSimulacion, { headers: httpHeaders, observe: "response" });
  }


}
