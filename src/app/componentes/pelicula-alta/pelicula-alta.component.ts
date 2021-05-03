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

  unPeliSeleccionada: Pelicula;

  
  public elActor: Actor;

    
  public unaPeli: Pelicula;

  constructor(private formBuild: FormBuilder, private peliculaSVC: PeliculaService) {
    this.elActor = new Actor();
    this.unaPeli = new Pelicula();
  }

  cambiarActor(elActor: any) {
    console.log("Cambiando actor" + elActor.nombre);
    console.log(elActor);
   this.unPeliSeleccionada = elActor.nombre;
   this.unaPeli.actorPrincipal = elActor.nombre;
  }


  ngOnInit() {

    this.formPeli = new FormGroup({
      'nombre': new FormControl(''),
      'tipo': new FormControl(''),
      'fechaDeEstreno': new FormControl(''),
      'cantidadDePublico': new FormControl(''),
      'imagen': new FormControl(''),
      'alt': new FormControl(''),
      'actorPrincipal': new FormControl('')
      
    });

    this.formPeli = this.formBuild.group({
      'nombre': ['', Validators.required],
      'tipo': ['', Validators.required],
      'fechaDeEstreno': ['', [Validators.required]],
      'cantidadDePublico': ['', [Validators.required, Validators.min(1), Validators.max(5000)]],
      'imagen': ['', Validators.required],
      'actorPrincipal': ['', Validators.required]
      
    })
  }

  enviar() {
    this.peliculaSVC.Crear(this.formPeli.getRawValue());
    this.formPeli.reset();
    console.log('Se envio la peli');
  }
}