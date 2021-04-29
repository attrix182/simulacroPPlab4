import { Actor } from './../../clases/actor';
import { Pais } from './../../clases/pais';
import { ActorServiceService } from './../../servicios/actor-service.service';
import { Component, OnInit, Input } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators, AbstractControl } from '@angular/forms';




@Component({
  selector: 'app-actor-alta',
  templateUrl: './actor-alta.component.html',
  styleUrls: ['./actor-alta.component.scss']
})
export class ActorAltaComponent implements OnInit {  
  public forma: FormGroup;
  unPaisSeleccionado: Pais;

  public unActor: Actor;

  public constructor(private FB: FormBuilder, private servicioActor: ActorServiceService) { this.unActor = new Actor(); }

  cambiarPais(elPais: any)
  {
    console.log("Cambiando pais");
    console.log(elPais);
    this.unPaisSeleccionado = elPais;
  }

  ngOnInit() {

    this.forma = new FormGroup({
      'nombre': new FormControl(''),
      'apellido': new FormControl(''),
      'edad': new FormControl(''),
      'dni': new FormControl(''),
      'sexo': new FormControl(''),
      'email': new FormControl(''),
      'terminos': new FormControl(''),
      'pais': new FormControl('')
    });
    this.forma = this.FB.group({

      'nombre': ['', [Validators.required, this.validadoDeEspacio]],
      'apellido': ['', [Validators.required, this.validadoDeEspacio]],
      'edad': ['', [Validators.required, Validators.min(1), Validators.max(100)]],
      'terminos': ['', Validators.required]

    })
  }

  private validadoDeEspacio(control: AbstractControl): null | object {
    const nombre = control.value;
    //const tieneEspacios = nombre.includes(' ');
const tieneEspacios = false; //ARREGLARRRRRRRRRRRRR
    if (tieneEspacios) {
      return { contiene: true }

    } else { return null }
  }


  enviar() {


    console.log(this.unPaisSeleccionado);

  }

  addActor() {

    this.servicioActor.Crear(this.unActor).then(() => {


      console.log('se envio el Actor');



    })


  }
}

