import { authConfig } from './auth.config';
import { Component } from '@angular/core';
import { LoggerService } from '@my/logger-lib';
import { OAuthService, JwksValidationHandler } from 'angular-oauth2-oidc';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'flight-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(private loggerService: LoggerService,
    private oAuthService: OAuthService,
    private translateService: TranslateService) {
    this.loggerService.log('log');
    this.loggerService.debug('debug');

    this.oAuthService.configure(authConfig);
    this.oAuthService.tokenValidationHandler = new JwksValidationHandler();
    this.oAuthService.loadDiscoveryDocumentAndTryLogin();    

    this.oAuthService.setupAutomaticSilentRefresh();

    this.translateService.addLangs(['en', 'de']);
    this.translateService.setDefaultLang('de');
    this.translateService.use('de');
  }
}

