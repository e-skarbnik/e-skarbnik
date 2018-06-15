import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Member } from '../../../models/member.model';
import { MemberService } from '../../../services/member.service';

@Component({
  selector: 'app-users-list',
  templateUrl: './users-list.component.html',
  styleUrls: ['./users-list.component.css']
})
export class UsersListComponent implements OnInit {

  users: Observable<Member[]>;

  constructor(private memberService: MemberService) {
    this.users = this.memberService.getMembers();
  }

  ngOnInit() {
  }
  delete(user: Member) {
    if (confirm('Are you sure?')) {
      this.memberService.removeMember(user);
    }

  }

}
