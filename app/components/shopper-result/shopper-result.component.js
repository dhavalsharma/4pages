import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router, ActivatedRoute, ROUTER_DIRECTIVES } from '@angular/router';
import { CheckoutService } from '../../services/checkout.service';
//import { CheckoutStoreService} from '../../services/checkout-store.service';
import template from './shopper-result.template.html';

import { CheckoutStoreService} from '../../services/checkout-store.service';

@Component({
  selector: 'shopper-result',
  template: template,
  directives: [ROUTER_DIRECTIVES]
})
export class ShopperResultComponent {
  //handle callback from payon
  constructor(router: Router , checkoutService : CheckoutService,
      checkoutStore : CheckoutStoreService){
    this._checkoutService = checkoutService;
    this._router = router;
    this._checkoutStore = checkoutStore;
  }
  ngOnInit(){
    console.log("ShopperResultComponent ngOnInit");
    //this.resourcePath = this._route.snapshot.params.resourcePath;
    this.sub = this._router
        .routerState
        .queryParams
        //.params
        .subscribe(params => {
          console.log("ShopperResultComponent queryParams", params);
          this.resourcePath = params["resourcePath"];
          if(!this.resourcePath){
            console.log("ShopperResultComponent resourcePath not set");
            return;
          }
          this.checkoutId = params["id"];
          //now call service to confirm donation
          this._checkoutService.getPaymentStatus(this.resourcePath)
            .subscribe(result => {
              this.result = result;
              console.log("_checkoutService.getPaymentStatus result", this.result);
              //todo - compare the result with what is stored in localstorage and inform component
              this._checkoutStore.add(this.result);
              //should we navigate to root
              this.router.navigate(['']);
            },
            error => {
              this.error = error;
              console.log("_checkoutService.getPaymentStatus - error", this.error);
            });
        });
  }

  ngOnDestroy(){
    this.sub.unsubscribe();
  }

}
