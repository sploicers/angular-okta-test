import { NgModule } from '@angular/core';
import { OKTA_CONFIG, OktaAuthModule, OktaConfig } from '@okta/okta-angular';
import { AuthComponent } from './auth.component';
import { CommonModule } from '@angular/common';

const oktaConfig: OktaConfig = {
  issuer: `https://${process.env.okta_hostname}/oauth2/default`,
  clientId: process.env.okta_client_id,
  redirectUri: `http://localhost:4200/login/callback`,
  scopes: ['openid', 'profile', 'email']
};

@NgModule({
  declarations: [
    AuthComponent
  ],
  imports: [
    CommonModule,
    OktaAuthModule
  ],
  providers: [
    { provide: OKTA_CONFIG, useValue: oktaConfig }
  ],
  exports: [
    AuthComponent
  ]
})
export class AuthModule { }
