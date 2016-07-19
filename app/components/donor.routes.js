import { provideRouter } from '@angular/router';

import { ShopperResultComponent } from './shopper-result/shopper-result.component';
import { CheckoutPrepareComponent } from './checkout-prepare/checkout-prepare.component';
import { CheckoutFormComponent } from './checkout-form/checkout-form.component';
import { DirectSampleComponent } from './direct-sample/direct-sample.component';

export let routes = [
  { path: '', component: CheckoutPrepareComponent, useAsDefault: true },
  //{ path: '', component: CheckoutPrepareComponent, terminal: true },
  /*{
    path: '',
    redirectTo: '/checkout'
    //pathMatch: 'full'
  },
  { path: 'checkout', component: CheckoutPrepareComponent,
    children: [
      {
        //path: 'status', component: ShopperResultComponent
      }
    ]
  },*/
  { path: 'direct', component: DirectSampleComponent },
  { path: 'status', component: ShopperResultComponent },
  { path: 'form/:checkoutId', component: CheckoutFormComponent },
  { path: '**', redirectTo:'' }
];

export let routeProvider = provideRouter(routes);
