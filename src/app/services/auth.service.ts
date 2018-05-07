import { AngularFireAuth } from 'angularfire2/auth';
import { Router } from '@angular/router';
import { Injectable } from '@angular/core';
import { MemberService } from './member.service';
import { Member } from '../models/member.model';
import * as firebase from 'firebase/app';
import { User } from 'firebase/app';

@Injectable()
export class AuthService {
  userToken: User;
  constructor(public afAuth: AngularFireAuth, public router: Router, public memberService: MemberService) {
    afAuth.authState.subscribe(user => {
      this.userToken = user;
      console.log(this.userToken);
    });
  }

  login(mail: string, password: string) {
    this.afAuth.auth.signInWithEmailAndPassword(mail, password)
      .then(user => {
        console.log(user);
        this.router.navigateByUrl('/home');
      })
      .catch(err => { console.log(err); });

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
        this.router.navigateByUrl('/home');
      })
      .catch(err => { console.log(err); });

  }
  logout() {
    this.afAuth.auth.signOut()
    .then(value => {
      console.log(value);
      this.router.navigateByUrl('/home');
    })
    .catch(err => { console.log(err); });

  }
  signInWithGoogle() {
    const provider = new firebase.auth.GoogleAuthProvider();
    provider.addScope('profile');
    provider.addScope('email');
    console.log(provider);
    this.afAuth.auth.signInWithPopup(provider)
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
      .catch(err => { console.log(err); });
  }
}
