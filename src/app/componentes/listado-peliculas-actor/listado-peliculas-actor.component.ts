import { PeliculaService } from './../../servicios/pelicula.service';
import { ActorServiceService } from './../../servicios/actor-service.service';
import { Actor } from './../../clases/actor';
import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Observable } from 'rxjs';
import { Pelicula } from 'src/app/clases/pelicula';


@Component({
  selector: 'app-listado-peliculas-actor',
  templateUrl: './listado-peliculas-actor.component.html',
  styleUrls: ['./listado-peliculas-actor.component.scss']
})
export class ListadoPeliculasActorComponent implements OnInit {

  @Input() listadoTabla: Pelicula[];
  @Input() actorParaMostrar: Actor;
  @Output() eventPeliculaSeleccionada: EventEmitter<any> = new EventEmitter<any>();
  peliculasDelActor: Array<Pelicula>;
  listaPeliculas: any;
  

  constructor(private peliculaService: PeliculaService) {
   
    this.peliculaService.getAll().subscribe(peliculas =>{
      
      this.listaPeliculas=peliculas;
    })
  }

  ngOnInit(): void {
  }

  pelisDelActor(){
    if(this.actorParaMostrar){
      console.log("entra en IF");
      this.peliculasDelActor = new Array<Pelicula>();
      for (let index = 0; index < this.listaPeliculas.length; index++) {
        const element = this.listaPeliculas[index];
        for (let index = 0; index < element.actores.length; index++) {
          const actoresPeli = element.actores[index];

          if(actoresPeli.nombre == this.actorParaMostrar.nombre && actoresPeli.apellido==this.actorParaMostrar.apellido){
            this.peliculasDelActor.push(element);
          }
        }        
      }
      return true;
    }


  }
  SeSeleccionoPelicula(pelicula: Pelicula){
    console.info('pelicula'+ pelicula);
    this.eventPeliculaSeleccionada.emit(pelicula);

  }

}
