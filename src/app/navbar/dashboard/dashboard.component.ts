import { Component, OnInit } from '@angular/core';
import { MemberService } from '../../services/member.service';
import { ExchangeratesService } from '../../services/exchangerates.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  numberOfUsers: number;
  numberOfSchools: number;
  numberOfEvents: number;

  exchangeRateOfUSD: number;
  exchangeRateOfEUR: number;

  constructor(private memberService: MemberService, private exchangeratesService: ExchangeratesService) {
    this.numberOfUsers = memberService.getNumberOfMembers();
    this.numberOfSchools = 23;
    this.numberOfEvents = 435;

    this.exchangeRateOfUSD = exchangeratesService.getExchangeRateByPLN('USD');
    this.exchangeRateOfEUR = exchangeratesService.getExchangeRateByPLN('EUR');
  }

  ngOnInit() {
  }

}
