import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../../services/auth.service';
import { MemberService } from '../../../services/member.service';
import { Member } from '../../../models/member.model';
import { ActivatedRoute, Params } from '@angular/router';

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
  ) { }

  ngOnInit() {
    this.route.params.switchMap((params: Params) => this.memberService.getMemberByUID(params['key']))
    .subscribe(user => this.member = user);
  }

}
