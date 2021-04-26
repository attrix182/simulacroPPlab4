import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators, AbstractControl } from '@angular/forms';

@Component({
  selector: 'app-actor-alta',
  templateUrl: './actor-alta.component.html',
  styleUrls: ['./actor-alta.component.scss']
})
export class ActorAltaComponent implements OnInit {

  public forma: FormGroup;

  public constructor(private FB: FormBuilder) {


  }




  ngOnInit() {

    this.forma = new FormGroup({
      'nombre': new FormControl(''),
      'edad': new FormControl(''),
      'apellido': new FormControl(''),
      'dni': new FormControl(''),
      'sexo': new FormControl(''),
      'email': new FormControl(''),
      'terminos': new FormControl('')
    });
    this.forma = this.FB.group({

      'nombre': ['', [Validators.required, this.validadoDeEspacio]],
      'edad': ['', [Validators.required, Validators.min(10), Validators.max(80)]],
      'terminos': ['', Validators.required],

    })
  }



  enviar()
  {
    console.info("objeto formulario", this.forma);
  }

  private validadoDeEspacio(control: AbstractControl): null | object {
    const nombre = control.value;
    const tieneEspacios = nombre.includes(' ');

    if (tieneEspacios) {
      return { contiene: true }

    } else { return null }
  }


  goPaises() {
    location.assign('/paises');
  }
  



}

