import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore/';
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

  //@Input() listadoTabla: Pelicula[];

  @Input() actorParaMostrar: Actor;

  peliculasDelActor: Array<Pelicula>;
  listaPeliculas: any;


  constructor(private peliculaService: PeliculaService) {

    this.peliculaService.getAll().subscribe(peliculas => {

      this.listaPeliculas = peliculas;
    })
  }

  ngOnInit(): void {
  }

  mostrar() { console.log(this.actorParaMostrar) }

  pelisDelActor() {
    if (this.actorParaMostrar) {
      console.log("entra en IF");

      this.peliculasDelActor = new Array<Pelicula>();

      for (let index = 0; index < this.listaPeliculas.length; index++) {

        const peli = this.listaPeliculas[index];

        for (let index = 0; index < peli.actores.length; index++) {
          const actoresPeli = peli.actores[index];

          if (actoresPeli.nombre == this.actorParaMostrar.nombre && actoresPeli.apellido == this.actorParaMostrar.apellido) {

            this.peliculasDelActor.push(peli);

          }
        }
      }
      return true;
    }
  }
}
