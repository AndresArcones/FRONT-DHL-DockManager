import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import Swal from 'sweetalert2';
import { Router } from '@angular/router';
import { RetieveUsuarioDto } from '../interfaces/retrieve-usuario-dto';
import { URL_ENDPOINT } from '../constants';


@Injectable({
  providedIn: 'root'
})
export class AutenticacionService {

  private _urlEndpoint: string = `${URL_ENDPOINT}/api/login`
  private _urlEndpointUser: string = `${URL_ENDPOINT}/api/user`


  constructor(private http: HttpClient, private router: Router) { }

  logIn(email: string, pass: string): Observable<any> {
    const httpHeaders = new HttpHeaders({ 'Content-Type': 'application/x-www-form-urlencoded' });
    const params = new URLSearchParams();
    params.set("username", email);
    params.set("password", pass);
    return this.http.post<any>(this._urlEndpoint, params.toString(), { headers: httpHeaders, observe: "response" })
  }

  logOut() {
    localStorage.clear();
    this.router.navigate([""]);
    //Swal.fire("Log Out", "You correctly logged out", "success")
    // alert("You correctly logged out")


  }

  hasRole(rol: string) {
    const token: string = localStorage.getItem("id_token")!

    const roles = JSON.parse(atob(token.split(".")[1])).roles;
    if (roles === null) {
      return false;
    }
    return roles.includes(rol);
  }

  retrieveUser(): Observable<HttpResponse<RetieveUsuarioDto>> {
    return this.http.get<RetieveUsuarioDto>(this._urlEndpointUser + "/" + localStorage.getItem("usuario"), { observe: "response" });
  }


}
