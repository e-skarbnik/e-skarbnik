import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor(public authService: AuthService) { }

  ngOnInit() {
    // console.log(this.authService.isLoggedIn);
    // Linia powyzej zwraca "undefined" - niezaleznie cyz jestem zalogowany czy nie
  }

  logout() {
    this.authService.logout();
  }
}
