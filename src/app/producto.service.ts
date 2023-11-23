import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Producto } from './producto';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ProductoService {
  private urlBase = 'http://localhost:8080/inventario-app/productos';

  constructor(private clientHttp: HttpClient) {}

  obtenerProductosLista(): Observable<Producto[]> {
    return this.clientHttp.get<Producto[]>(this.urlBase);
  }
}
