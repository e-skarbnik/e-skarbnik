import { Injectable } from '@angular/core';
import { AuthService } from './auth.service';
import { Class } from '../models/class.model';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from 'angularfire2/firestore';
import { Observable } from 'rxjs/Observable';


@Injectable()
export class ClassCrudService {
  clsCollection: AngularFirestoreCollection<Class>;
  clses: Observable<Class[]>;
  cls: Class;
  clss: Observable<Class>;
  clsDoc: AngularFirestoreDocument<Class>;
  selectedClass: Class = new Class();
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
  deleteClass(cls: Class) {
    this.clsDoc = this.angularFirestore.doc(`Class/${cls.$key}`);
    this.clsDoc.delete();
    this.clsDoc.delete().then(value => { console.log('Class Deleted'); }).catch();
  }
  updateClass(cls: Class) {
    this.clsDoc.update(cls);
  }
}
