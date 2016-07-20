import { provideRouter } from '@angular/router';

import { ShopperResultComponent } from './shopper-result/shopper-result.component';
import { CheckoutPrepareComponent } from './checkout-prepare/checkout-prepare.component';
import { CheckoutFormComponent } from './checkout-form/checkout-form.component';

export let routes = [
  { path: '', 
    children:[
      { path: '', component: CheckoutPrepareComponent, useAsDefault: true},
      { path: 'form/:checkoutId', component: CheckoutFormComponent },
      { path: 'status', component: ShopperResultComponent }
    ]
  },
  { path: '**', redirectTo:'' }
];

export let routeProvider = provideRouter(routes);
