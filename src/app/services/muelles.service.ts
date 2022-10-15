import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import Swal from 'sweetalert2';
import { Router } from '@angular/router';
import { RetieveUsuarioDto } from '../interfaces/retrieve-usuario-dto';
import { Muelle } from '../interfaces/muelle';
import { KPI } from '../interfaces/kpi';
import { Pedido } from '../interfaces/pedido';
import { MuelleStats } from '../interfaces/muellestats';
import { URL_ENDPOINT } from '../constants';

@Injectable({
  providedIn: 'root'
})
export class MuelleService {

  private _urlEndpointMuelles: string = `${URL_ENDPOINT}/api/muelles`
  private _urlEndpointMuelle: string = `${URL_ENDPOINT}/api/muelle`
  private _urlEndpointKPI: string = `${URL_ENDPOINT}/api/kpi`
  private _urlEndpointKPIMuelles: string = `${URL_ENDPOINT}/api/kpi_muelles`
  private _urlEndpointPedidosHastaAhora: string = `${URL_ENDPOINT}/api/pedidos_hasta_ahora`
  private _urlEndpointPedidosDia: string = `${URL_ENDPOINT}/api/pedidos_dia`
  private _urlEndpointPedidoId: string = `${URL_ENDPOINT}/api/pedido/`



  constructor(private http: HttpClient, private router: Router) { }


  muelles(): Observable<HttpResponse<Muelle[]>> {
    return this.http.get<Muelle[]>(this._urlEndpointMuelles, { observe: "response" });
  }

  muelle(muelleId: string): Observable<HttpResponse<Muelle>> {

    return this.http.get<Muelle>(this._urlEndpointMuelle + "/" + muelleId, { observe: "response" });
  }

  mostrarKPI(): Observable<HttpResponse<KPI[]>> {

    return this.http.get<KPI[]>(this._urlEndpointKPI, { observe: "response" });
  }

  mostrarKPIMuelles(): Observable<HttpResponse<MuelleStats[]>> {

    return this.http.get<MuelleStats[]>(this._urlEndpointKPIMuelles, { observe: "response" });
  }


  mostrarPedidosHastaAhora(): Observable<HttpResponse<Pedido[]>> {

    return this.http.get<Pedido[]>(this._urlEndpointPedidosHastaAhora, { observe: "response" });
  }

  mostrarPedidosDia(): Observable<HttpResponse<Pedido[]>> {

    return this.http.get<Pedido[]>(this._urlEndpointPedidosDia, { observe: "response" });
  }

  mostrarPedidoId(idPedido: string): Observable<HttpResponse<Pedido>> {
    return this.http.get<Pedido>(this._urlEndpointPedidoId + idPedido, { observe: "response" });
  }

}
