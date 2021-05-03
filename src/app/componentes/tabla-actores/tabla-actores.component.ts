import { ActorServiceService } from './../../servicios/actor-service.service';
import { Actor } from './../../clases/actor';
import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-tabla-actores',
  templateUrl: './tabla-actores.component.html',
  styleUrls: ['./tabla-actores.component.scss']
})
export class TablaActoresComponent implements OnInit {

  listadoActores$: Observable<any[]>;

  @Input()  listadoActores:any;

  @Output() actorSeleccionado: EventEmitter<any>= new EventEmitter<any>(); 

  constructor(actoresSVC : ActorServiceService) { 

    this.listadoActores$ = actoresSVC.TraerTodos().valueChanges();
  }

  ngOnInit(): void {
  }


  mostrarDetalles(parametroActor)
  {
  	console.log(parametroActor);
    this.actorSeleccionado.emit(parametroActor);
  }



}
