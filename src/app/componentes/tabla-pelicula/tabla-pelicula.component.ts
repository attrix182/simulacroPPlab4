import { PeliculaService } from './../../servicios/pelicula.service';
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

  listaPeliculas: any;

  tamanioLista:Number;

  constructor(private peliculaService: PeliculaService) {     
    this.peliculaService.getAll().subscribe(peliculas =>{  
    this.listadoPeliculas=peliculas;
    console.log( "a" + this.listadoPeliculas.length)

    this.tamanioLista =  this.listadoPeliculas.length

  })
 }
  ngOnInit(): void {
  }


  mostrarDetalles(parametroPelicula)
  {
  	console.log(parametroPelicula);
    this.peliculaSeleccionado.emit(parametroPelicula);
  }



}
