import { Component, OnInit } from '@angular/core';
import { AuthService } from './auth.service';

@Component({
  selector: 'okta-login',
  templateUrl: './auth.component.html'
})
export class AuthComponent implements OnInit {
  constructor(public authService: AuthService) { }

  ngOnInit(): void {
  }

  onLoginClicked(): void {
    this.authService.login();
  }
}
