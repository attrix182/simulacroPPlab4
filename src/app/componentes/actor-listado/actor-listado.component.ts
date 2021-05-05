import { ActorServiceService } from './../../servicios/actor-service.service';
import { Actor } from './../../clases/actor';
import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-actor-listado',
  templateUrl: './actor-listado.component.html',
  styleUrls: ['./actor-listado.component.scss']
})
export class ActorListadoComponent implements OnInit {

 
  listadoActores$: Observable<any[]>;

  actoresDePeliSeleccionada: any;

  flag:number;

  @Input()  listadoActores:any;

  @Output() actorSeleccionado: EventEmitter<any>= new EventEmitter<any>(); 


  
  constructor(actoresSVC : ActorServiceService) { 
    this.listadoActores$ = null;
    //console.log(this.listadoActores$)
    this.listadoActores$ = actoresSVC.TraerTodos().valueChanges();
    console.log(this.listadoActores$)
  }

  ngOnInit(): void {
  }




  mostrarDetalles(parametroActor)
  {
  	console.log("emito: " + parametroActor);
    this.actorSeleccionado.emit(parametroActor);
  }

  actoresDePeliParaMostrar(){
    if(this.listadoActores){
      this.actoresDePeliSeleccionada = this.listadoActores.actores;
      return true;
    }
  }



}
