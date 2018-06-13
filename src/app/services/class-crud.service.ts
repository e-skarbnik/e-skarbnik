import { Injectable } from '@angular/core';
import { AuthService } from './auth.service';
import { Class } from '../models/class.model';
import { AngularFirestoreCollection, AngularFirestoreDocument, AngularFirestore } from 'angularfire2/firestore';
import { Observable } from 'rxjs/Observable';
import { Member } from '../models/member.model';
import { map } from 'rxjs/operators';
import { MemberService } from './member.service';
import { element } from 'protractor';


@Injectable()
export class ClassCrudService {
  cls: Class;
  clsCollection: AngularFirestoreCollection<Class>;
  clses: Observable<Class[]>;
  clsDoc: AngularFirestoreDocument<Class>;
  clss: Observable<Class>;
  clssSnap: any;
  member: any;

  constructor(private angularFirestore: AngularFirestore, private memSer: MemberService) { }

  getClasses() {
    this.clsCollection = this.angularFirestore.collection<Class>('classes');
    //  this.clses = this.clsCollection.valueChanges();
    this.clssSnap = this.clsCollection.snapshotChanges().map(actions => actions.map(
      a => {
        const data = a.payload.doc.data() as any;
 //       const id = a.payload.doc.id;

        if (data.members !== undefined) {
          console.log(data);

          let memArr = [];

          data.members.forEach(elem => {
            this.member = this.angularFirestore.collection('users').doc(elem.id);

            this.member.valueChanges().subscribe((profile: any) => {
              console.log(profile);
              memArr.push(profile.name);
            });
          });
          // this.members = this.angularFirestore.collection('users').doc(data.members[0].path).snapshotChanges();

          console.log(memArr);
          return { ...data, memberArray: memArr };
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
    return this.clss;
    //W tej metodzie należy użyć clsCollection.snapshotChanges(), aby dokleić dane o referencjach do użytkowników.
  }
  updateClass(cls: Class) {
    this.clsDoc.update(cls);
  }
}
