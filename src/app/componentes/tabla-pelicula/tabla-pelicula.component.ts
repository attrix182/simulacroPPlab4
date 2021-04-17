import { Component, OnInit,  Input ,Output,EventEmitter } from '@angular/core';
import { Pelicula } from 'src/app/clases/pelicula';

@Component({
  selector: 'app-tabla-pelicula',
  templateUrl: './tabla-pelicula.component.html',
  styleUrls: ['./tabla-pelicula.component.scss']
})
export class TablaPeliculaComponent implements OnInit {

  @Input()  listadoPeliculas:Pelicula[];

  @Output() peliculaSeleccionado: EventEmitter<any>= new EventEmitter<any>(); 

  constructor() { }

  ngOnInit(): void {
  }


  mostrarDetalles(parametroPelicula)
  {
  	console.log(parametroPelicula);
    this.peliculaSeleccionado.emit(parametroPelicula);
  }



}
