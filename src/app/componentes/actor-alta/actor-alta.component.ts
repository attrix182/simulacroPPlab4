import { Router, RouterModule } from '@angular/router';
import { Actor } from './../../clases/actor';
import { Pais } from './../../clases/pais';
import { ActorServiceService } from './../../servicios/actor-service.service';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators, AbstractControl } from '@angular/forms';
import { ObjectUnsubscribedErrorCtor } from 'rxjs/internal/util/ObjectUnsubscribedError';




@Component({
  selector: 'app-actor-alta',
  templateUrl: './actor-alta.component.html',
  styleUrls: ['./actor-alta.component.scss']
})
export class ActorAltaComponent implements OnInit {
  public forma: FormGroup;
  unPaisSeleccionado: Pais;

  public unActor: Actor;

  public flagPais;

  public constructor(private FB: FormBuilder, private servicioActor: ActorServiceService, private router: Router) { this.unActor = new Actor(); }

  cambiarPais(elPais: any) {
    console.log("Cambiando pais");
    console.log(elPais);
    this.unPaisSeleccionado = elPais;
    this.unActor.nacionalidad = elPais;
  }

  ngOnInit() {

    this.forma = new FormGroup({
      'nombre': new FormControl(''),
      'apellido': new FormControl(''),
      'edad': new FormControl(''),
      'dni': new FormControl(''),
      'sexo': new FormControl(''),
      'email': new FormControl(''),
      'nacionalidad': new FormControl(''),
      'pais': new FormControl('')
    });
    this.forma = this.FB.group({

      'nombre': ['', Validators.required],
      'apellido': ['', Validators.required],
      'edad': ['', [Validators.required, Validators.min(1), Validators.max(100)]],
      'sexo': ['', Validators.required]
    })
  }

  private validadorPais(control: AbstractControl): null | object
   {
    const paisValue = control.value;
    const existe = paisValue.includes(' ');

    if (existe) {

      return { contiene: true }

    } else{ return null }
    

  }

  private validadoDeEspacio(control: AbstractControl): null | object {
    const nombre = control.value;
    const tieneEspacios = nombre.includes(' ');

    if (tieneEspacios) {
      return { contiene: true }

    } else { return null }
  }




  addActor() {


    this.servicioActor.Crear(this.unActor).then(() => {

      console.log('se envio el Actor');
      console.log(this.unActor);
    })

    this.forma.reset();
  }
}

