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
  cl: any;

  constructor(private angularFirestore: AngularFirestore, private memSer: MemberService) { }

  getClasses() {
    this.clsCollection = this.angularFirestore.collection<Class>('classes');
    //  this.clses = this.clsCollection.valueChanges();
    this.clssSnap = this.clsCollection.snapshotChanges().map(actions => actions.map(
      a => {
        const data = a.payload.doc.data() as any;
        data.id = a.payload.doc.id;

        if (data.members !== undefined) {
          // console.log(data);

          let memArr = [];

          data.members.forEach(elem => {
            this.member = this.angularFirestore.collection('users').doc(elem.id);

            this.member.valueChanges().subscribe((profile: any) => {
              // console.log(profile);
              if (profile !== null) {
                memArr.push(profile.name);
              }
            });
          });
          // this.members = this.angularFirestore.collection('users').doc(data.members[0].path).snapshotChanges();

          // console.log(memArr);
          return { ...data, membersArray: memArr };
        } else {
          return { ...data };
        }
        //     const me = this.angularFirestore.doc(data.member);

      }
    ));

    return this.clssSnap;
  }

  getClassByID(id: string) {
    this.clsDoc = this.angularFirestore.doc<Class>('classes/' + id);
    this.clss = this.clsDoc.valueChanges();
    this.cl = this.clsDoc.snapshotChanges().map(actions => {
      const data = actions.payload.data() as any;
      data.id = actions.payload.id;

      if (data.members !== undefined) {
        let memArr = [];

        data.members.forEach(el => {
          this.member = this.angularFirestore.collection('users').doc(el.id);
          this.member.valueChanges().subscribe((profile: any) => {
            // console.log(profile);
            if (profile !== null) {
              memArr.push(profile);
            }
          });
        });
        return { ...data, membersArray: memArr };
      } else {
        return {
          data: {
            name: '',
            school: '',
            description: ''

          }, membersArray: [{
            name: 'test',
            surname: 'test'
          }]
        };
      }
    });

    return this.cl;
    //W tej metodzie należy użyć clsCollection.snapshotChanges(), aby dokleić dane o referencjach do użytkowników.
  }

  addClass(cls: Class) {
    this.clsCollection = this.angularFirestore.collection<Class>('classes');
    this.clsCollection.add(cls).then(value => { console.log('Class Added'); }).catch();
  }
  updateClass(cls: Class) {
    this.clsDoc.update(cls);
  }
  deleteClass(cls: Class) {
    this.clsDoc = this.angularFirestore.doc<Class>('classes/' + cls.id);
    this.clsDoc.delete();
  }
}
