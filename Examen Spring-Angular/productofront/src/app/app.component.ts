

import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CategoriasService } from './services/categorias/categorias.service';
import { MarcasService } from './services/marcas/marcas.service';
import { ProductosService } from './services/productos/productos.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title(title: any) {
    throw new Error('Method not implemented.');


    
  }



  productoForm:FormGroup;
  categorias: any;
  marcas:any;
  productos: any;


  constructor(
    public fb: FormBuilder,
    public categoriasService: CategoriasService,
    public productosService: ProductosService,
    public marcaService:MarcasService
  ) {

  }


  ngOnInit(): void {
    this.productoForm  = this.fb.group({
      idProducto:[''] ,
      nombre: ['', Validators.required],
      descripcion: ['', Validators.required],
      imagen: ['', Validators.required],
      precio: ['', Validators.required],
      cantidad: ['', Validators.required],
      categoria: ['', Validators.required],

    });;

   
    
    this.productosService.getAllProductos().subscribe(resp => {
      this.productos = resp;
    }, error => { console.error(error) }
    );

    this.categoriasService.getAllCategorias().subscribe(resp=>{
      this.categorias=resp;
      console.log(resp)
    },
    error=>{console.error(error)}
    );

    this.marcaService.getAllMarcas().subscribe(resp=>{
      this.marcas=resp;
      console.log(resp)
    },
    error=>{console.error(error)}
    );

  }

  guardar(): void {
    this.productosService.saveProductos(this.productoForm.value).subscribe(resp => {
      this.productoForm.reset();
      this.productos=this.productos.filter(persona=> resp.id!==persona.id);
      this.productos.push(resp);
    },
      error => { console.error(error) }
    )
  }

 
  eliminar( producto){
    this.productosService.deleteProductos(producto.id).subscribe(resp=>{
      if(resp===true){
        this.productos.pop(producto)
      }
    })
  }

  editar(producto){
    this.productoForm.setValue({
      id:producto.idProducto,
      nombre: producto.nombre ,
      descripcion: producto.descripcion ,
      imagen: producto.imagen,
      precio: producto.precio,
      cantidad: producto.cantidad,
      categoria: producto.categoria,
    })
  }
  

}