import localStorage from 'localStorage';


export class CheckoutStoreService {
  STORE_KEY = 'payon-donations';
  constructor(){
    //initialize local storage
    //this.persistedDonation = JSON.parse(localStorage.getItem(this.STORE_KEY)) || {};
  }
  //make new donation
  add(donation){
    let donation_save = donation;
    //add current timestamp
    donation_save["when"] = Date.now();
    console.log("donation_save", donation_save, "STORE_KEY", this.STORE_KEY);
    localStorage.setItem(this.STORE_KEY, JSON.stringify(donation_save));
  }

  //return if time since last donation was more than an hour
  didDonateWithinLastHour(){
    //return true is yes else false
    let persistedDonation = this.get();
    if(persistedDonation){
      let currTime = Date.now();
      console.log("currTime" , currTime, typeof(currTime), "persistedDonation[when]",
        persistedDonation["when"], typeof(persistedDonation["when"]));
      let diffTime = currTime - persistedDonation["when"];
      console.log("diffTime", diffTime);
      let oneHour = 60 * 60 * 1000;//3600000, 1468982303253
      if( diffTime < oneHour){
        return [true, persistedDonation];
      }
    }
    return [false, persistedDonation];
  }

  get(){
    //return JSON.parse(localStorage.getItem('payon-donations')) || {};
    return JSON.parse(localStorage.getItem('payon-donations')) || null;
  }
}
