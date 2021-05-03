import { Injectable } from '@angular/core';
import { OktaAuthService } from '@okta/okta-angular';
import { MessageService } from '../message.service';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  isAuthenticated?: boolean;

  constructor(
    private oktaAuthService: OktaAuthService,
    private messageService: MessageService) {

    this.oktaAuthService.$authenticationState.subscribe(
      (isAuthenticated: boolean) => this.isAuthenticated = isAuthenticated);
  }

  async ngOnInit(): Promise<void> {
    this.isAuthenticated = await this.oktaAuthService.isAuthenticated();
  }

  async login(): Promise<void> {
    try {
      await this.oktaAuthService.signInWithRedirect({
        originalUri: '/heroes'
      });
      this.messageService.add('AuthService: logged in!');

    } catch(e) {
      this.messageService.add(`AuthService: failed to log in: {e}`);
    }
  }
}
