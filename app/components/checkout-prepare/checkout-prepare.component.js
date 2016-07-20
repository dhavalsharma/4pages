import { Component, Inject, Input, OnInit } from '@angular/core';
import { ROUTER_DIRECTIVES, ActivatedRoute, Router } from '@angular/router';

//import {FORM_DIRECTIVES} from '@angular/common';
import { NgForm }    from '@angular/forms';

import { CheckoutService } from '../../services/checkout.service';
import { CheckoutStoreService} from '../../services/checkout-store.service';
import template from './checkout-prepare.template.html';

import { ShopperResultComponent } from '../shopper-result/shopper-result.component';
import { CheckoutFormComponent } from '../checkout-form/checkout-form.component';

import customStyles from './checkout-prepare.scss';

@Component({
  selector: 'checkout-prepare',
  template: template,
  styles: [ customStyles ],
  //directives: [ROUTER_DIRECTIVES, FORM_DIRECTIVES, ShopperResultComponent,
  directives: [ROUTER_DIRECTIVES, ShopperResultComponent,
    CheckoutFormComponent]
})
export class CheckoutPrepareComponent implements OnInit{
  constructor( checkout: CheckoutService, checkoutStore : CheckoutStoreService,
      route: ActivatedRoute, router: Router,
      @Inject('SHOPPER_RESULT_URL') shopperResultUrl) {
    this._checkout = checkout;
    this._checkoutStore = checkoutStore;
    this._route = route;
    this._router = router;
    this.currentStatus = '';
    this.currencies = ['EUR', 'USD'];
    this.shopperResultUrl = shopperResultUrl;
  }
  checkoutId;
  formValue = {};
  submitted = false;

  //handler to obtain amount
  onSubmit(regForm) {
    this.submitted = true;
    //check if one hour since last donation
    //remind user of last donated amount
    //return
    console.log("onSubmit this.formValue", this.formValue);

    this._checkout.postCheckout(this.formValue.amount, this.formValue.currency)
      .subscribe(
        result => {
          console.log("onSubmit - success", result);
          this.result = result;
          this.checkoutId = this.result.id;
          this._router.navigate(['form', this.checkoutId]);
        },
        error => {
          console.log("onSubmit - error", this.error);
          this.error = error;
          this.submitted = false;
        }
      );
    //todo update localstorage with result and user with success
  }

  //check if user has donated within the last hour
  canDonate(){
    //this.lastDonation
    //let [ret, donation] = this._checkoutStore.didDontateWithinLastHour();
    return !this.canDonateNow;
  }

  ngOnInit(){
    console.log("CheckoutPrepareComponent ngOnInit");
    [this.canDonateNow, this.lastDonation] = this._checkoutStore.didDonateWithinLastHour();
    console.log("canDonateNow", this.canDonateNow, "lastDonation", this.lastDonation);
  }
}
