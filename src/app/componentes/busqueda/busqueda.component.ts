import { Component, OnInit } from '@angular/core';
import { Pelicula } from "../../clases/pelicula"

@Component({
  selector: 'app-busqueda',
  templateUrl: './busqueda.component.html',
  styleUrls: ['./busqueda.component.scss']
})
export class BusquedaComponent implements OnInit {

  title = 'Ejemplo  @Input()  @Output()  ';
  peliculaParaMostrar:Pelicula;

  ListadoPeliculaPrincipal:Pelicula[];

  constructor() { 

    this.peliculaParaMostrar= new Pelicula("dark","terror",777);

    this.ListadoPeliculaPrincipal= [
      { titulo: "Iron man" ,genero:"Accion",id: 666 },
      { titulo: "Orgullo y prejuicio" ,genero:"Drama",id: 333 }
    ];
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
