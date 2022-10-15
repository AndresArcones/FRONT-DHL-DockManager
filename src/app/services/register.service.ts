import { Injectable } from '@angular/core';
import { RegisterUsuarioDto } from '../interfaces/register-Usuario-Dto';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { URL_ENDPOINT } from '../constants';

@Injectable({
  providedIn: 'root'
})
export class RegisterService {

  private _urlEndpoint: string = `${URL_ENDPOINT}/api/register`

  private _newUsuario: RegisterUsuarioDto = new RegisterUsuarioDto();


  constructor(private http: HttpClient) {
  }

  register(newUsuario: RegisterUsuarioDto): Observable<any> {
    this._newUsuario = newUsuario;
    const httpHeaders = new HttpHeaders({ 'Content-Type': 'application/json' });
    console.log(JSON.stringify(this._newUsuario));
    return this.http.post<any>(this._urlEndpoint, JSON.stringify(this._newUsuario), { headers: httpHeaders, observe: "response" });

  }
}
