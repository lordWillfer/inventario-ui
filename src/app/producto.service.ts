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

  agregarProducto(producto: Producto): Observable<Object> {
    return this.clientHttp.post(this.urlBase, producto);
  }

  obtenerProductoPorId(id: number) {
    return this.clientHttp.get<Producto>(`${this.urlBase}/${id}`);
  }

  actualizarProducto(id: number, producto: Producto): Observable<Object> {
    return this.clientHttp.put(`${this.urlBase}/${id}`, producto);
  }

  eliminarProducto(id: number): Observable<Object> {
    return this.clientHttp.delete(`${this.urlBase}/${id}`);
  }
}
