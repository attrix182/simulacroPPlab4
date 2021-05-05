import { Actor } from './../../clases/actor';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-pais-actor',
  templateUrl: './pais-actor.component.html',
  styleUrls: ['./pais-actor.component.scss']
})
export class PaisActorComponent implements OnInit {

  
  @Input() detalleActor: Actor

  constructor() { }

  ngOnInit(): void {
  }

}
