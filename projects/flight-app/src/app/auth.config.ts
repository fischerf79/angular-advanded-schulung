import { AuthConfig } from 'angular-oauth2-oidc';

export const authConfig: AuthConfig = {
    issuer: 'https://steyer-identity-server.azurewebsites.net/identity',
    redirectUri: window.location.origin + '/index.html',
    // URL of the SPA to redirect the user after silent refresh
    silentRefreshRedirectUri: window.location.origin + '/silent-refresh.html',
    
    clientId: 'spa-demo',
    scope: 'openid profile email voucher',
    timeoutFactor: 0.01
}