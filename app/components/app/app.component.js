import { Component, Inject, OnInit, OnDestroy, ViewEncapsulation } from '@angular/core';
import { ROUTER_DIRECTIVES , ActivatedRoute, Router} from '@angular/router';

import template from './app.template.html';
// Add the RxJS Observable operators we need in this app.
//import '../../rxjs-operators';

@Component({
  selector: 'donar-app',
  directives: [ROUTER_DIRECTIVES],
  styles: [require('./app.scss')],
  encapsulation: ViewEncapsulation.None,
  template: template
})
export class AppComponent implements OnInit, OnDestroy {

  constructor(@Inject('AUTHOR') author, route: ActivatedRoute, router: Router) {
    this.author = author;
    this._router = router;
    this._route = route;
  }

  ngOnInit(){
    console.log("AppComponent ngOnInit");
    //check if queryParams exists then redirect to result
    this.sub = this._route
      //.routerState
      //.queryParams
      .params
      .subscribe(params => {
          console.log("AppComponent params", params);
          this.resourcePath = params["resourcePath"];
          if(!this.resourcePath){
            console.log("AppComponent resourcePath not set");
          }
          else{
            this.checkoutId = params["id"];
            //this.router.navigate(['/status'], { queryParams: { id: this.checkoutId,
            this._router.navigate(['status'], { queryParams: { id: this.checkoutId,
               resourcePath: this.resourcePath } });
          }
      });
      console.log("href", document.location.href);
      this.checkoutId = this.getQueryParams("id");
      this.resourcePath = this.getQueryParams("resourcePath");
      if(this.resourcePath && this.checkoutId){
        this._router.navigate(['status'], { queryParams: { id: this.checkoutId,
           resourcePath: this.resourcePath } });
      }

  }
  //manually get params
  getQueryParams(n) {
        var half = document.location.search.split(n + '=')[1];
        return half !== undefined ? decodeURIComponent(half.split('&')[0]) : null;
    }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }
}
