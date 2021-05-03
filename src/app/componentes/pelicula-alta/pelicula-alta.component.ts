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

  constructor(private formBuild: FormBuilder, private peliculaSVC: PeliculaService) {
   
  }

  ngOnInit() {

    this.formPeli = new FormGroup({
      'nombre': new FormControl(''),
      'tipo': new FormControl(''),
      'fechaDeEstreno': new FormControl(''),
      'cantiadadDePublico': new FormControl(''),
      'imagen': new FormControl(''),
      'alt': new FormControl(''),
    });

    this.formPeli = this.formBuild.group({
      'nombre': ['', Validators.required],
      'tipo': ['', Validators.required],
      'fechaDeEstreno': ['', [Validators.required]],
      'cantiadadDePublico': ['', Validators.required, Validators.min(1), Validators.max(5000)],
      'imagen': ['', Validators.required]

    })
  }

  enviar() {
    this.peliculaSVC.Crear(this.formPeli.getRawValue());
    this.formPeli.reset();
  }
}