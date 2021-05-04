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


  constructor(private bd: AngularFirestore) {
    this.referenciaBd = bd;
    this.referenciaAlaColeccion = bd.collection(this.rutaDeLaColeccion);

  }


  Crear(pelicula: Pelicula): any {
    
    return this.referenciaAlaColeccion.add({ ...pelicula });

  }

  public TraerTodos() {
    return this.referenciaAlaColeccion;
  }




}

