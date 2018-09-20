import { FlightCancellingModule } from './flight-booking/flight-cancelling/flight-cancelling.module';
import { HttpClientModule, HttpClient } from '@angular/common/http';

import { NgModule, LOCALE_ID } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { FlightApiModule } from '@flight-workspace/flight-api';

import { AppComponent } from './app.component';
import { APP_EXTRA_OPTIONS, APP_ROUTES } from './app.routes';
import { BasketComponent } from './basket/basket.component';
import { FlightBookingModule } from './flight-booking/flight-booking.module';
import { HomeComponent } from './home/home.component';
import { NavbarComponent } from './navbar/navbar.component';
import { SharedModule } from './shared/shared.module';
import { SidebarComponent } from './sidebar/sidebar.component';
import { AirportComponent } from './airport/airport.component';
import { LoggerModule } from '@my/logger-lib';
import { OAuthModule } from 'angular-oauth2-oidc';

import { registerLocaleData } from '@angular/common';

import localeDe from '@angular/common/locales/de';
import localeDeAt from '@angular/common/locales/de-AT';
import localeEs from '@angular/common/locales/es';

import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';

registerLocaleData(localeDe);     // de-DE
registerLocaleData(localeDeAt);   // de-AT
registerLocaleData(localeEs);     // es-ES

export function HttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http, "/assets/i18n/", ".json");
}




@NgModule({
  imports: [
    BrowserModule,
    HttpClientModule,
    // FlightBookingModule,

    FlightCancellingModule,

    FlightApiModule.forRoot(),
    SharedModule.forRoot(),
    RouterModule.forRoot([...APP_ROUTES], { ...APP_EXTRA_OPTIONS }),

    LoggerModule.forRoot({ enableDebug: true }),

    OAuthModule.forRoot(),

    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient]
      }
    })
  ],
  declarations: [
    AppComponent,
    SidebarComponent,
    NavbarComponent,
    HomeComponent,
    BasketComponent
  ],
  providers: [{provide: LOCALE_ID, useValue: 'de'}],
  bootstrap: [AppComponent]
})
export class AppModule {
}
