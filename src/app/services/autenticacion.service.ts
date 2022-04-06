import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import Swal from 'sweetalert2';
import { Router } from '@angular/router';


@Injectable({
  providedIn: 'root'
})
export class AutenticacionService {

  private _urlEndpoint: string = "http://localhost:8080/api/login"

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
    this.router.navigate(["login"]);
    Swal.fire("Log Out", "You correctly logged out", "success")

  }

  hasRole(rol: string) {
    const token: string = localStorage.getItem("id_token")!

    const roles = JSON.parse(atob(token.split(".")[1])).roles;
    if (roles === null) {
      return false;
    }
    return roles.includes(rol);
  }


}
