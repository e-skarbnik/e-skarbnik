import { Injectable } from '@angular/core';
import { AuthService } from './auth.service';
import { Class } from '../models/class.model';
import { AngularFirestoreCollection, AngularFirestoreDocument, AngularFirestore } from 'angularfire2/firestore';
import { Observable } from 'rxjs/Observable';
import { Member } from '../models/member.model';
import { map } from 'rxjs/operators';
import { MemberService } from './member.service';


@Injectable()
export class ClassCrudService {
  cls: Class;
  clsCollection: AngularFirestoreCollection<Class>;
  clses: Observable<Class[]>;
  clsDoc: AngularFirestoreDocument<Class>;
  clss: Observable<Class>;
  clssSnap: any;
  members: any;

  constructor(private angularFirestore: AngularFirestore, private memSer: MemberService) { }

  getClasses() {
    this.clsCollection = this.angularFirestore.collection<Class>('classes');
    //  this.clses = this.clsCollection.valueChanges();
    this.clssSnap = this.clsCollection.snapshotChanges().map(actions => actions.map(
      a => {
        const data = a.payload.doc.data() as any;

        if (data.member !== undefined) {
          console.log(data.member.path);

          // this.members = this.angularFirestore.doc(data.member.path).snapshotChanges()
          //   .map(act => {
          //     const mem = act.payload.data() as any;
          //     console.log(mem);
          //     console.log('Kurwa czemu nie działasz?');
          //     return { ...mem };
          //   });
          const me = this.members;
          return { ...data };
        }
        //     const me = this.angularFirestore.doc(data.member);

      }
    ));

    return this.clssSnap;
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
