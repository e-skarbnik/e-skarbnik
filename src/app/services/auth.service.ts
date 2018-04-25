import * as firebase from 'firebase/app';
import { AngularFireAuth } from 'angularfire2/auth';
import { Router } from '@angular/router';
import { Injectable } from '@angular/core';
import { MemberService } from './member.service';
import { Member } from '../models/member.model';

@Injectable()
export class AuthService {

  constructor(public afAuth: AngularFireAuth, public router: Router, public memberService: MemberService) { }

  login(mail: string, password: string) {
    this.afAuth.auth.signInWithEmailAndPassword(mail, password)
      .then(user => { console.log(user); })
      .catch(err => { console.log(err); });
    this.router.navigateByUrl('/home');
  }
  signup(us: Member, password) {
    this.afAuth.auth.createUserWithEmailAndPassword(us.email, password)
      .then(user => {
        const use = {
          name: us.name,
          surname: us.surname,
          paymaster: us.paymaster,
          key: user.uid,
          email: us.email
        };
        this.memberService.addMember(use);
        console.log(user);
      })
      .catch(err => { console.log(err); });
    this.router.navigateByUrl('/home');
  }
  logout() {
    this.afAuth.auth.signOut().catch(err => { console.log(err); }).then(value => { console.log(value); });
    //this.afAuth.auth.signOut();
    this.router.navigateByUrl('/home');
  }
  signInWithGoogle() {
    this.afAuth.auth.signInWithPopup(new firebase.auth.GoogleAuthProvider())
      .then((user => {
        console.log(user);
        const use: Member = {
          name: user.additionalUserInfo.profile.given_name,
          surname: user.additionalUserInfo.profile.family_name,
          paymaster: false,
          key: user.user.uid,
          email: user.user.email
        };
        this.memberService.addMember(use);
      }))
      .catch();
  }
}
