import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

  constructor(public authService: AuthService) { }

  ngOnInit() {
    // console.log(this.authService.isLoggedIn);
    // Linia powyzej zwraca "undefined" - niezaleznie cyz jestem zalogowany czy nie
  }

  logout() {
    this.authService.logout();
  }
}
