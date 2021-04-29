
import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore/';
import { Actor } from './../clases/actor';


@Injectable({
  providedIn: 'root',
})
export class ActorServiceService {
  rutaDeLaColeccion = '/actores';
  referenciaAlaColeccion: AngularFirestoreCollection<Actor>;
  referenciaBd: AngularFirestore;


  constructor(private bd: AngularFirestore) {
    this.referenciaBd = bd;
    this.referenciaAlaColeccion = bd.collection(this.rutaDeLaColeccion);

  }


  Crear(actor: Actor): any {
    return this.referenciaAlaColeccion.add({ ...actor });

  }

  public TraerTodos() {
    return this.referenciaAlaColeccion;
  }


  public BuscarActor(actor: Actor) {
    return this.referenciaBd.collection(this.rutaDeLaColeccion, ref => ref.where("nombre", "==", actor.nombre).where("apellido", "==", actor.apellido).where("edad", "==", actor.edad).where("sexo", "==", actor.sexo).where("nacionalidad", "==", actor.nacionalidad));
  }


}

