import { ActorServiceService } from './../../servicios/actor-service.service';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Pelicula } from 'src/app/clases/pelicula';

@Component({
  selector: 'app-listado-actores-pelicula',
  templateUrl: './listado-actores-pelicula.component.html',
  styleUrls: ['./listado-actores-pelicula.component.scss']
})
export class ListadoActoresPeliculaComponent implements OnInit {


  @Input() peliculaElegida: Pelicula;

  listadoActores:any;
  actoresDePeliSeleccionada: any;
  cantidadActores: number;

  @Output() eventActorSeleccionado: EventEmitter<any> = new EventEmitter<any>();

  constructor(private miServicio: ActorServiceService) {
    this.miServicio.getAll().subscribe(resultado => {
      this.listadoActores = resultado;
      this.cantidadActores = this.listadoActores.length;
    }, error  =>{
      console.log('hubo un error: '+ error);
      
    });
   }

  ngOnInit(): void {

  }

  seleccionActor(actor:object){
    this.eventActorSeleccionado.emit(actor);
  }

  actoresDePeliParaMostrar(){
    if(this.peliculaElegida){
      this.actoresDePeliSeleccionada = this.peliculaElegida.actores;

      return true;
    }
  }

}