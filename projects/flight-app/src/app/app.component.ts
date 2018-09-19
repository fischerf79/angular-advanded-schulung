import { authConfig } from './auth.config';
import { Component } from '@angular/core';
import { LoggerService } from '@my/logger-lib';
import { OAuthService, JwksValidationHandler } from 'angular-oauth2-oidc';

@Component({
  selector: 'flight-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(private loggerService: LoggerService,
    private oAuthService: OAuthService ) {
    this.loggerService.log('log');
    this.loggerService.debug('debug');

    this.oAuthService.configure(authConfig);
    this.oAuthService.tokenValidationHandler = new JwksValidationHandler();
    this.oAuthService.loadDiscoveryDocumentAndTryLogin();
  }
}

