import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CategoriasService {

  private API_SERVER = "http://localhost:8085/categoria/";


  constructor(private httpClient: HttpClient) { }

    public getAllCategorias(): Observable<any>{
    return this.httpClient.get(this.API_SERVER);
  }



}
