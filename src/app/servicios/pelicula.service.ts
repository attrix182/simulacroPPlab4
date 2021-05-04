import { Observable } from 'rxjs';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore/';
import { Injectable } from '@angular/core';
import { Pelicula } from '../clases/pelicula';


@Injectable({
  providedIn: 'root'
})
export class PeliculaService {
  rutaDeLaColeccion = '/peliculas';
  referenciaAlaColeccion: AngularFirestoreCollection<Pelicula>;
  referenciaBd: AngularFirestore;
  peliculas:Observable<any[]>;
  

  constructor(private bd: AngularFirestore) {
    this.referenciaBd = bd;
    this.referenciaAlaColeccion = bd.collection(this.rutaDeLaColeccion);
    this.peliculas = this.referenciaAlaColeccion.valueChanges(this.rutaDeLaColeccion)

  }


  Crear(pelicula: Pelicula): any {
    
    return this.referenciaAlaColeccion.add({ ...pelicula });

  }

  public TraerTodos() {
    return this.referenciaAlaColeccion;
  }

  getAll(){
    return this.peliculas;
  }


}

