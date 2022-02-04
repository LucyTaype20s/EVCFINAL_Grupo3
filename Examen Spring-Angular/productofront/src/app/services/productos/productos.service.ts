import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProductosService {

  private API_SERVER = "http://localhost:8085/productos/";

  constructor(private httpClient: HttpClient) { }



  public getAllProductos(): Observable<any>{
    return this.httpClient.get(this.API_SERVER);
  }

  public saveProductos(persona:any): Observable<any>{
    return this.httpClient.post(this.API_SERVER,persona);
  }

  public deleteProductos(id):Observable<any>{
    return this.httpClient.delete(this.API_SERVER + "delete/"+id);
  }
}
