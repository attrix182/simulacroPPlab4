import { PeliculaService } from './../../servicios/pelicula.service';
import { Actor } from './../../clases/actor';
import { Pelicula } from './../../clases/pelicula';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators, AbstractControl } from '@angular/forms';




@Component({
  selector: 'app-pelicula-alta',
  templateUrl: './pelicula-alta.component.html',
  styleUrls: ['./pelicula-alta.component.scss']
})
export class PeliculaAltaComponent implements OnInit {

  public title: string = 'Alta de película | Modifcar ';

  public formPeli: FormGroup;

  unActorSeleccionado: Array<Actor> = new Array<Actor>();


  public elActor: Actor;


  public unaPeli: Pelicula;

  constructor(private formBuild: FormBuilder, private peliculaSVC: PeliculaService) {
    this.elActor = new Actor();
    this.unaPeli = new Pelicula();
  }

  agregarActor(elActor: any) {

    // console.log("Cambiando actor" + elActor.nombre );

    this.unActorSeleccionado.push(elActor);

    this.unaPeli.actores = this.unActorSeleccionado;
    console.log(this.unActorSeleccionado)

  }


  ngOnInit() {

    this.formPeli = this.formBuild.group({
      'nombre': ['', Validators.required],
      'tipo': ['', Validators.required],
      'fechaDeEstreno': ['', [Validators.required]],
      'cantidadDePublico': ['', [Validators.required, Validators.min(1), Validators.max(5000)]],
      'imagen': ['', Validators.required]
    })
  }

  eliminarActor(elActor: any) {

    var i = this.unActorSeleccionado.indexOf( elActor );

    this.unActorSeleccionado.splice(i, 1);

    this.unaPeli.actores = this.unActorSeleccionado;

  //console.log(this.unaPeli.actores)
  }

  enviar() {


    const peliculaNueva = new Pelicula;
    //    peliculaNueva.id= this.listaPeliculas.length+1;
    this.unaPeli.nombre = this.formPeli.value.nombre;
    this.unaPeli.cantidadPublico = this.formPeli.value.cantidadDePublico;
    this.unaPeli.fechaEstreno = this.formPeli.value.fechaDeEstreno;
    this.unaPeli.tipo = this.formPeli.value.tipo;
    this.unaPeli.pathFoto = this.formPeli.value.imagen;

    this.peliculaSVC.Crear(this.unaPeli);

    ///

    console.log("the peli: " + peliculaNueva);
  }



}