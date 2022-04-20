import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import Swal from 'sweetalert2';
import { Router } from '@angular/router';
import { RetieveUsuarioDto } from '../interfaces/retrieve-usuario-dto';
import { Muelle } from '../interfaces/muelle';
import { KPI } from '../interfaces/kpi';


@Injectable({
  providedIn: 'root'
})
export class MuelleService {

  private _urlEndpointMuelles: string = "http://localhost:8080/api/muelles"
  private _urlEndpointMuelle: string = "http://localhost:8080/api/muelle"
  private _urlEndpointKPI: string = "http://localhost:8080/api/kpi"



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

}
