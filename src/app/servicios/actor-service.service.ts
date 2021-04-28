import { Injectable } from '@angular/core';
import {
  AngularFirestore,
  AngularFirestoreCollection,
} from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class ActorServiceService {
  private actoresCollection: AngularFirestoreCollection<any>;
  private nameCollectionDB = 'actores';

  constructor(private afs: AngularFirestore) {
    this.actoresCollection = afs.collection<any>(this.nameCollectionDB);
  }

  public getAllActores(): Observable<any[]> {
    return this.afs.collection(this.nameCollectionDB).valueChanges();
  }

  public addActor(actor: any) {
    return this.actoresCollection.add(actor);
  }
}