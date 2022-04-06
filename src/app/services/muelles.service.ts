import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import Swal from 'sweetalert2';
import { Router } from '@angular/router';
import { RetieveUsuarioDto } from '../interfaces/retrieve-usuario-dto';
import { Muelle } from '../interfaces/muelle';


@Injectable({
  providedIn: 'root'
})
export class MuelleService {

  private _urlEndpointMuelles: string = "http://localhost:8080/api/muelles"
  private _urlEndpointMuelle: string = "http://localhost:8080/api/muelle"


  constructor(private http: HttpClient, private router: Router) { }

  // logIn(email: string, pass: string): Observable<any> {
  //   const httpHeaders = new HttpHeaders({ 'Content-Type': 'application/x-www-form-urlencoded' });
  //   const params = new URLSearchParams();
  //   params.set("username", email);
  //   params.set("password", pass);
  //   return this.http.post<any>(this._urlEndpoint, params.toString(), { headers: httpHeaders, observe: "response" })
  // }

  // logOut() {
  //   localStorage.clear();
  //   this.router.navigate([""]);
  //   Swal.fire("Log Out", "You correctly logged out", "success")

  // }

  // hasRole(rol: string) {
  //   const token: string = localStorage.getItem("id_token")!

  //   const roles = JSON.parse(atob(token.split(".")[1])).roles;
  //   if (roles === null) {
  //     return false;
  //   }
  //   return roles.includes(rol);


  muelles(): Observable<HttpResponse<Muelle[]>> {
    return this.http.get<Muelle[]>(this._urlEndpointMuelles, { observe: "response" });
  }

  muelle(muelleId: string): Observable<HttpResponse<Muelle>> {

    return this.http.get<Muelle>(this._urlEndpointMuelle + "/" + muelleId, { observe: "response" });
  }


}
