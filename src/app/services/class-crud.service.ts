import { Injectable } from '@angular/core';
import { AuthService } from './auth.service';
import { Class } from '../models/class.model';
import { AngularFirestoreCollection, AngularFirestoreDocument, AngularFirestore } from 'angularfire2/firestore';
import { Observable } from 'rxjs/Observable';


@Injectable()
export class ClassCrudService {
  cls: Class;
  clsCollection: AngularFirestoreCollection<Class>;
  clses: Observable<Class[]>;
  clsDoc: AngularFirestoreDocument<Class>;
  clss: Observable<Class>;

  constructor(private angularFirestore: AngularFirestore) { }

  getClasses() {
    this.clsCollection = this.angularFirestore.collection<Class>('classes');
    this.clses = this.clsCollection.valueChanges();
    return this.clses;
  }
  addClass(cls: Class) {
    this.clsCollection = this.angularFirestore.collection<Class>('classes');
    this.clsCollection.add(cls).then(value => { console.log('Class Added'); }).catch();
  }
  getClassByID(id: string) {
    this.clsDoc = this.angularFirestore.doc<Class>('classes/' + id);
    this.clss = this.clsDoc.valueChanges();
  }
  updateClass(cls: Class) {
    this.clsDoc.update(cls);
  }
}
