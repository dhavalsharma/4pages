import { bootstrap } from '@angular/platform-browser-dynamic';
import {HTTP_PROVIDERS} from '@angular/http';
import { Location, LocationStrategy, HashLocationStrategy, PathLocationStrategy, APP_BASE_HREF} from '@angular/common';
import { disableDeprecatedForms, provideForms } from '@angular/forms';

import { routeProvider } from './components/donor.routes';
import { CheckoutService } from './services/checkout.service';
import { CheckoutStoreService } from './services/checkout-store.service';
import { AppComponent } from './components/app/app.component';

bootstrap(AppComponent, [
  HTTP_PROVIDERS,
  routeProvider,
  disableDeprecatedForms(),
  provideForms(),
  CheckoutService,
  CheckoutStoreService,
  { provide: 'AUTHOR', useValue: 'Dhaval Sharma' },
  //{ provide: APP_BASE_HREF, useValue: '/app'},
  //{ provide: APP_BASE_HREF, useValue: '/'}, //is required by PathLocationStrategy
  { provide:LocationStrategy, useClass: HashLocationStrategy },
  //{ provide: 'SHOPPER_RESULT_URL', useValue: 'http://preview.a61243d103yds4ie66yylhaur8s38frslpnopp3zuzvvx6r.box.codeanywhere.com:9000/app/status' },
  //{ provide: 'SHOPPER_RESULT_URL', useValue: 'http://localhost:9000/app/#/status' },
  { provide: 'SHOPPER_RESULT_URL', useValue: 'https://dhavalsharma.github.io/4pages/app/#/status' },
  //{ provide: 'SHOPPER_RESULT_URL', useValue: 'https://dhavalsharma.github.io/app/#/status' },
  //{ provide: 'SHOPPER_RESULT_URL', useValue: 'https://8551f7af.ngrok.io/app/#/status' },
  //{ provide: 'SHOPPER_RESULT_URL', useValue: 'https://8551f7af.ngrok.io/app/status' },
  { provide: 'PAYON_BASE_URL', useValue: 'https://test.oppwa.com/v1/' },
  { provide: 'PAYON_BASE_URL_NO_VERSION', useValue: 'https://test.oppwa.com' }

]);
