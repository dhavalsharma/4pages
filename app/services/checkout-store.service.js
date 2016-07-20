import localStorage from 'localStorage';


export class CheckoutStoreService {
  STORE_KEY = 'payon-donations';
  constructor(){
    //initialize local storage
    this.persistedDonation = JSON.parse(localStorage.getItem(this.STORE_KEY)) || {};
  }
  //make new donation
  add(donation){
    let donation_save = JSON.parse(donation);
    //add current timestamp
    donation_save["when"] = Date.now();
    console.log("donation_save", donation_save, "STORE_KEY", this.STORE_KEY);
    localStorage.setItem(this.STORE_KEY, donation_save);
  }

  //return if time since last donation was more than an hour
  didDontateWithinLastHour(){
    //return true is yes else false
    let persistedDonation = this.get();
    if(persistedDonation){
      let currTime = Date.now();
      let diffTime = currTime - this.persistedDonation["when"];
      let oneHour = 60 * 60 * 1000;
      if( diffTime < oneHour){
        return [true, persistedDonation];
      }
    }
    return [false, persistedDonation];
  }

  get(){
    return JSON.parse(localStorage.getItem('payon-donations')) || {};
  }
}
