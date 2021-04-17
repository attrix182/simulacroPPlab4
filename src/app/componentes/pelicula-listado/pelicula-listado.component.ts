import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Pelicula } from 'src/app/clases/pelicula';


@Component({
  selector: 'app-pelicula-listado',
  templateUrl: './pelicula-listado.component.html',
  styleUrls: ['./pelicula-listado.component.scss']
})
export class PeliculaListadoComponent implements OnInit {

  @Input()  listadoPeliculas:Pelicula[];

  @Output() peliculaSeleccionado: EventEmitter<any>= new EventEmitter<any>(); 

  constructor() { }

  ngOnInit(): void {
  }

  mostrarDetalles(parametroPelicula)
  {
    console.log("listado");
    this.peliculaSeleccionado.emit(parametroPelicula);
  }

}
