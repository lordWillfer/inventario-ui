import { Component } from '@angular/core';
import { Producto } from '../producto';
import { ProductoService } from '../producto.service';

@Component({
  selector: 'app-producto-lista',
  templateUrl: './producto-lista.component.html'
})
export class ProductoListaComponent {
  productos: Producto[];

  constructor(private productoServicio: ProductoService) {}

  ngOnInit() {
    // Cargamos los Productos
    this.obtenerProductos();
  }

  private obtenerProductos() {
    // Cosnumir los datos del Observable (Suscribirnos)
    this.productoServicio.obtenerProductosLista().subscribe(
      (datos => {
        this.productos = datos;
      }))
  }
}
