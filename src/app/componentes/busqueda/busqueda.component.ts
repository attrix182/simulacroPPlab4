import { Actor } from './../../clases/actor';
import { Component, OnInit } from '@angular/core';
import { Pelicula } from "../../clases/pelicula"

@Component({
  selector: 'app-busqueda',
  templateUrl: './busqueda.component.html',
  styleUrls: ['./busqueda.component.scss']
})
export class BusquedaComponent implements OnInit {

  peliculaParaMostrar:Pelicula;

  ListadoPeliculaPrincipal:Pelicula[];

  unActor: Actor;

  constructor() { 

  }



  tomarPeliculaParaDetalles(NuevaPeli: Pelicula)
  {console.log(NuevaPeli)
    this.peliculaParaMostrar=NuevaPeli;   
  }

  mostrarPelicula(parametroPelicula:Pelicula)
  {
      console.info("Pelicula: ",parametroPelicula);
      //this.profesorParaMostrar=parametroProfesor;
      this.ListadoPeliculaPrincipal.push(parametroPelicula);
  }

  ngOnInit(): void {
  }

}
