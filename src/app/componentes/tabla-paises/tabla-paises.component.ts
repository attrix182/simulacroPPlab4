import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { ServicioPaisesService } from 'src/app/servicios/servicio-paises.service';

@Component({
  selector: 'app-tabla-paises',
  templateUrl: './tabla-paises.component.html',
  styleUrls: ['./tabla-paises.component.scss']
})


export class TablaPaisesComponent implements OnInit {

  public miPais: string = "";

  public listaPaises: any[] = [];

  @Output() eventPaisSeleccionado: EventEmitter<any> = new EventEmitter<any>();

  constructor(private paisesService: ServicioPaisesService) {

    this.paisesService.traerPaises().subscribe(
      (data: any) => {
        this.listaPaises = data;
      },
      (error) => console.log(error)
    );
  }

  ngOnInit(): void {

    this.miPais = this.paisesService.obtenerPaisActual();

    this.paisesService.traerPaises().subscribe(result => {

      console.log(result);

    })



  }

  seleccionarPais(pais: any) {
    console.log(pais);
    this.eventPaisSeleccionado.emit(pais);
  }

}
