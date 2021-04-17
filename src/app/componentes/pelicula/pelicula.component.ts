import { Component, OnInit,Output,EventEmitter } from '@angular/core';
import { Pelicula } from 'src/app/clases/pelicula';


@Component({
  selector: 'app-pelicula',
  templateUrl: './pelicula.component.html',
  styleUrls: ['./pelicula.component.scss']
})
export class PeliculaComponent implements OnInit {

  @Output() SeCreoUnaPelicula: EventEmitter<any>= new EventEmitter<any>();

  nuevaPelicula:Pelicula;
  
  constructor() { }

  ngOnInit(): void {
  }

  crearPelicula()
  {
    //hacer cosas
    let id:number =Math.floor((Math.random() * 1000) + 1);
    this.nuevaPelicula.id=id;
    this.SeCreoUnaPelicula.emit(this.nuevaPelicula);
    this.nuevaPelicula=null;
  }

  hacerNuevaPelicula()
  {
    this.nuevaPelicula=new Pelicula("x","x",0);

  }

}
