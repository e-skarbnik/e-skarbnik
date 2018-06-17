import { Component, OnInit } from '@angular/core';
import { MemberService } from '../../services/member.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  numberOfUsers: number;
  numberOfSchools: number;
  numberOfEvents: number;

  constructor(private memberService: MemberService) {
    // this.numberOfUsers = memberService.getNumberOfMembers();
    this.numberOfUsers = 14;
    this.numberOfSchools = 7;
    this.numberOfEvents = 5;
  }

  ngOnInit() {
  }

}
