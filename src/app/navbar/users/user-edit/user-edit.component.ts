import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../../services/auth.service';
import { MemberService } from '../../../services/member.service';
import { Member } from '../../../models/member.model';
import { ActivatedRoute, Params } from '@angular/router';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-user-edit',
  templateUrl: './user-edit.component.html',
  styleUrls: ['./user-edit.component.css']
})
export class UserEditComponent implements OnInit {
  selectedMember: Member;
  members: Member[];
  member: Member;
  constructor(
    private memberService: MemberService,
    private authService: AuthService,
    private route: ActivatedRoute,
  ) {
    this.route.params.switchMap((params: Params) => this.memberService.getMemberByUID(params['key']))
    .subscribe(user => this.member = user);

  }

  ngOnInit() {

  }
  updateMember(tableData: NgForm) {
    const member: Member = {
      name: tableData.value.name,
      surname: tableData.value.surname,
      email: tableData.value.email,
      paymaster: tableData.value.paymaster,
      admin: tableData.value.admin,
      key: tableData.value.key
    };
    // console.log(member);
    this.memberService.updateMember(this.member);
  }

}
