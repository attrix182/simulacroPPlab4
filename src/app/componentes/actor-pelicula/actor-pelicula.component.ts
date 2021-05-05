import { Actor } from './../../clases/actor';
import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Pelicula } from "../../clases/pelicula"

@Component({
  selector: 'app-actor-pelicula',
  templateUrl: './actor-pelicula.component.html',
  styleUrls: ['./actor-pelicula.component.scss']
})


export class ActorPeliculaComponent implements OnInit {


  peliculaParaMostrar:Pelicula;

  actorSeleccionado: Actor;

  unActor: Actor;

  constructor() { 

  }

  CargarActorSeleccionado(actor: Actor){
    console.log("WORKS");

    this.actorSeleccionado = actor;

    console.log("actor selec " + actor);
  }

  ngOnInit(): void {
  }



}
