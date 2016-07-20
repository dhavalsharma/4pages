import { Component, Inject, OnInit, ElementRef, AfterViewInit } from '@angular/core';
import { ActivatedRoute, ROUTER_DIRECTIVES } from '@angular/router';

import template from './checkout-form.template.html';

@Component({
  selector: "checkout-form",
  template: template,
  directives: [ROUTER_DIRECTIVES]
})
export class CheckoutFormComponent implements OnInit, AfterViewInit{
  //checkoutId = "DA9FA76352C4A06B0CD8CE22D5C97ED3.sbg-vm-tx02";
  constructor(@Inject('SHOPPER_RESULT_URL') shopperResultUrl,
    elementRef: ElementRef, route: ActivatedRoute){
    this.shopperResultUrl = shopperResultUrl;
    this._elementRef = elementRef;
    this._route = route;
  }

  ngAfterViewInit(){
    console.log("ngAfterViewInit");
    this.loadScript();
  }
  //dynamically load payon scripts with checkout id
  loadScript(){
    this.checkoutId = this._route.snapshot.params.checkoutId;
    console.log("loadScript", this.checkoutId);
    let src = "https://test.oppwa.com/v1/paymentWidgets.js?checkoutId=" + this.checkoutId;
    var script = document.createElement("script");
    script.type = "text/javascript";
    script.src = src;
    this._elementRef.nativeElement.appendChild(script);
  }

}
