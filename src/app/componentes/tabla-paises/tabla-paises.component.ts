import { Component, OnInit } from '@angular/core';

import { ServicioPaisesService } from 'src/app/servicios/servicio-paises.service';


@Component({
  selector: 'app-tabla-paises',
  templateUrl: './tabla-paises.component.html',
  styleUrls: ['./tabla-paises.component.scss']
})


export class TablaPaisesComponent implements OnInit {

  public miPais: string = "";

  constructor(private paisesService: ServicioPaisesService) {



  }

  ngOnInit(): void {
    this.miPais = this.paisesService.obtenerPaisActual();

    this.paisesService.traerPaises().subscribe(result => {

      console.log(result);

    })


    
  }

}
