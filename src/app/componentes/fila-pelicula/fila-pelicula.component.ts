import { Component, OnInit, Input ,Output,EventEmitter } from '@angular/core';
import { Pelicula } from '../../clases/pelicula';

@Component({
  selector: 'app-fila-pelicula',
  templateUrl: './fila-pelicula.component.html',
  styleUrls: ['./fila-pelicula.component.css']
})

export class FilaPeliculaComponent implements OnInit {
  
@Output() peliculaSeleccionado: EventEmitter<any>= new EventEmitter<any>(); 

@Input() unaPeli:Pelicula;
  constructor() { }

  ngOnInit() { 
  }
  mostrarDetalles(parametroPelicula)
  {
  	console.log(" filaDos");
    this.peliculaSeleccionado.emit(parametroPelicula);
  }
}
