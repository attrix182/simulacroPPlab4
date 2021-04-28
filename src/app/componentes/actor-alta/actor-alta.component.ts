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

  @Input() pais: Pais;

  public forma: FormGroup;

  public constructor(private FB: FormBuilder) {}

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
      'terminos': ['', Validators.required],

    })
  }



  private validadoDeEspacio(control: AbstractControl): null | object {
    const nombre = control.value;
    const tieneEspacios = nombre.includes(' ');

    if (tieneEspacios) {
      return { contiene: true }

    } else { return null }
  }


  enviar() {

    console.info("objeto formulario", this.forma);

  }




}

