import {Inject} from '@angular/core';
import {Http, Response, Headers, RequestOptions, Request, RequestMethod, URLSearchParams} from '@angular/http';
// Add the RxJS Observable operators we need in this app.
//import '../rxjs-operators';
import {Observable} from 'rxjs/Rx';

import { CheckoutModel } from '../models/checkout.model';

export class CheckoutService {
  params = {
    'authentication.userId' : '8a8294174b7ecb28014b9699220015cc',
		'authentication.password' : 'sy6KJsT8',
		'authentication.entityId' : '8a8294174b7ecb28014b9699220015ca'
  };

  constructor(@Inject(Http) http, @Inject('PAYON_BASE_URL') baseURL,
    @Inject('PAYON_BASE_URL_NO_VERSION') baseURLNoVersion){
    this._http = http;
    this._baseURL = baseURL;
    this._baseURLNoVersion = baseURLNoVersion;
  }

  //takes checkout object with amount details and more
  postCheckout(amount, currency){
    this.checkoutModel = new CheckoutModel(amount, currency);
    //params will have all keys
    Object.assign(this.params, this.checkoutModel.getJSON());
    let body = this.getURLEncodedParams(this.params);
    console.log("body toString", body);
    //headers
    let headers = new Headers({
			'Content-Type': 'application/x-www-form-urlencoded'
			//'Content-Length': body.length//not safe http://stackoverflow.com/a/7210840/119031
    });
    let options = new RequestOptions({ headers: headers });

		let checkoutUrl = this._baseURL + "checkouts";
    console.log("checkoutUrl", checkoutUrl);
    return this._http.post(checkoutUrl, body, options)
                    .map(this.extractData)
                    .catch(this.handleError);
  }

  //helper to convert object to url params
  getURLEncodedParams(objParams){
    let urlSearchParams = new URLSearchParams();
    for (let key in objParams) {
        urlSearchParams.append(key, objParams[key]);
    }
    return urlSearchParams.toString();
  }
  /*
      {
  "result":{
    "code":"000.200.100",
    "description":"successfully created checkout"
  },
  "buildNumber":"a701196eb306a80786884165affcf293e11bb7cf@2016-07-13 06:46:33 +0000",
  "timestamp":"2016-07-15 08:21:44+0000",
  "ndc":"2377C7CAEF4B3716E61D2A85929CE4FD.sbg-vm-tx02",
  "id":"2377C7CAEF4B3716E61D2A85929CE4FD.sbg-vm-tx02"
  }
  */
  extractData(res){
    console.log("extractData", res);
    let jsonResponse = res.json() || {};
    console.log("extractData jsonResponse", jsonResponse);
    //update localStorage of the response jsonResponse["id"], jsonResponse["ndc"] jsonResponse["result"]["description"];
    //Object.assign(this.checkoutModel, jsonResponse);

    //update client of the success/fail
    return jsonResponse;
  }
  handleError(error) {
    console.log('handleError', error);
    let errMsg = (error.message) ? error.message :
      error.status ? `${error.status} - ${error.statusText}` : 'Server error';
    console.error(errMsg); // log to console instead
    return Observable.throw(errMsg);
  }
/*
{
  "id":"8a82944955f1d92b0155f9cbef1a4bde",
  "paymentType":"DB",
  "paymentBrand":"VISA",
  "amount":"92.00",
  "currency":"EUR",
  "descriptor":"2846.4309.9298 OPP_Channel",
  "result":{
    "code":"000.100.110",
    "description":"Request successfully processed in 'Merchant in Integrator Test Mode'"
  },
  "card":{
    "bin":"420000",
    "last4Digits":"0000",
    "holder":"some one",
    "expiryMonth":"11",
    "expiryYear":"2019"
  },
  "risk":{
    "score":"0"
  },
  "buildNumber":"a701196eb306a80786884165affcf293e11bb7cf@2016-07-13 06:46:33 +0000",
  "timestamp":"2016-07-17 16:58:59+0000",
  "ndc":"5B0D2F609540F9CEE7DEC7D0B3320901.sbg-vm-tx02"
}
*/
	getPaymentStatus(resourcePath){
		console.log("getPaymentStatus", resourcePath);
    if(!resourcePath){
      return Observable.throw("resourcePath not found");
    }
		//append the path
		let statusURL = this._baseURLNoVersion + resourcePath;
    console.log("statusURL", statusURL);

    let searchParams = this.getURLEncodedParams(this.params);
    console.log("searchParams" ,searchParams);
		var options = new RequestOptions({
			//method: RequestMethod.Get,
			//url: statusURL,
			search: searchParams
		});

		//var req = new Request(options);
		//return this._http.get(req)
    return this._http.get(statusURL, { search: searchParams })
    //return this._http.get(statusURL, options)
			.map(this.extractData)
			.catch(this.handleError);
	}
}
