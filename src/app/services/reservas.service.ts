import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
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



}
