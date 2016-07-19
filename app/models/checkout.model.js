export class CheckoutModel {
  amount;
  currency;
  paymentType;

  constructor(amount, currency = 'EUR', paymentType = 'DB'){
    this.amount = amount;
    this.currency = currency;
    this.paymentType = paymentType;
  }

  getJSON(){
    return {
      'amount' : this.amount,
		  'currency' : this.currency,
		  'paymentType' : this.paymentType
    }
  }
}
