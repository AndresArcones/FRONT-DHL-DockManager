import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class SubirFicherosService {

  _urlUploadMuelles = "http://localhost:8080/api/subir-csv-muelle"
  _urlUploadPedido = "http://localhost:8080/api/subir-csv-pedido"
  constructor(private http: HttpClient) { }

  subirFicheroMuelles(file: File) {
    const formData = new FormData();
    formData.append('file', file, file.name);
    return this.http.post(this._urlUploadMuelles, formData, { observe: "response" });
  }

  subirFicheroPedidos(file: File) {
    const formData = new FormData();
    formData.append('file', file, file.name);
    return this.http.post(this._urlUploadPedido, formData, { observe: "response" });
  }
}
