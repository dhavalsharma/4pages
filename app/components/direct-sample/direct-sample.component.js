import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router, ROUTER_DIRECTIVES } from '@angular/router';

import template from './direct-sample.template.html';

@Component({
  template: template,
  directives: [ROUTER_DIRECTIVES]
})
export class DirectSampleComponent {
  constructor(){
    console.log("DirectSampleComponent");
  }
}
