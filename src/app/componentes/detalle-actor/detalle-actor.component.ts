import { Actor } from './../../clases/actor';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-detalle-actor',
  templateUrl: './detalle-actor.component.html',
  styleUrls: ['./detalle-actor.component.scss']
})
export class DetalleActorComponent implements OnInit {

  constructor() { }

  @Input() detalleActor: Actor

  ngOnInit(): void {
  }



}
