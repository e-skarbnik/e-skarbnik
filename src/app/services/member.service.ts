import { Observable } from 'rxjs/Observable';
import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from 'angularfire2/firestore';
import { Member } from '../models/member.model';

@Injectable()
export class MemberService {

  usersCollection: AngularFirestoreCollection<Member>;
  users: Observable<Member[]>;
  user: Member;
  us: Observable<Member>;
  userDoc: AngularFirestoreDocument<Member>;

  constructor(private firestore: AngularFirestore) { }

  getMembers() {
    this.usersCollection = this.firestore.collection<Member>('users');
    this.users = this.usersCollection.valueChanges();
    return this.users;
  }

  addMember(user: Member) {
    //  user.key = this.firestore.createId();
    this.usersCollection = this.firestore.collection<Member>('users');
    this.usersCollection.doc(user.key).set(user).then(() => { console.log('User added'); }).catch(err => { console.log(err); });
  }
  getMemberByUID(uid: string) {
    this.userDoc = this.firestore.doc<Member>('users/' + uid);
    this.us = this.userDoc.valueChanges();
  }
  updateMember(user: Member) {
    this.userDoc.update(user);
  }
}