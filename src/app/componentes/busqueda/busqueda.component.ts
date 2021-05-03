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

    

    this.ListadoPeliculaPrincipal= [
      {id: 100, nombre: "iron man", tipo: "Accion", fechaEstreno: "20/5/2010", cantidadPublico: 22, pathFoto:"https://es.web.img2.acsta.net/c_310_420/medias/nmedia/18/66/64/01/20168724.jpg", actorPrincipal: "robert" },
      {id: 150, nombre: "Los juegos del morfi", tipo: "Drama", fechaEstreno: "20/5/2012", cantidadPublico: 30, pathFoto:"https://cdn.hobbyconsolas.com/sites/navi.axelspringer.es/public/styles/1200/public/media/image/2016/11/juegos-hambre.jpg?itok=_33NFX6S", actorPrincipal: "peter"  },
      {id: 180, nombre: "Yo antes de ti", tipo: "Drama", fechaEstreno: "20/5/2018", cantidadPublico: 50, pathFoto:"https://play-lh.googleusercontent.com/9fX_4vPaf_FhS79QBE0ZDszOT6h8aKeGQuEcdLRFyttkqjaNHSF9RfFimVZiF8G2bWZJ=w200-h300-rw", actorPrincipal: "james"  }
    ];

    this.peliculaParaMostrar= this.ListadoPeliculaPrincipal[0];
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
