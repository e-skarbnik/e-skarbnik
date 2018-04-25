import { Component, OnInit } from '@angular/core';
import { Member } from '../../models/member.model';
import { AuthService } from '../../services/auth.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  user: Member;

  constructor(private aS: AuthService) { }

  ngOnInit() {
  }

  register(tableData: NgForm) {
    this.user = {
      name: tableData.value.name,
      surname: tableData.value.surname,
      email: tableData.value.email,
      paymaster: false,
      key: ''
    };
    this.aS.signup(this.user, tableData.value.password);
  }
  signInWithGoogle() {
    this.aS.signInWithGoogle();
  }
}
