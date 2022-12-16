class Store {
  constructor(paymentProcessor) {
    this.paymentProcessor = paymentProcessor;
  }
  purchaseBike(quantity) {
    this.paymentProcessor.pay(200 * quantity * 100);
  }
  purchaseHelmet(quantity) {
    this.paymentProcessor.pay(15 * quantity * 100);
  }
}

// API
class Stripe {
  constructor(user) {
    this.user = user;
  }

  makePayment(amountInCents) {
    console.log(`amount paid ${amountInCents / 100}`);
  }
}
// Middleware
class PaymentProcessor {
  constructor(user) {
    this.stripe = new Stripe(user);
  }
  pay(amount) {
    this.stripe.makePayment(amount);
  }
}

const store = new Store(new PaymentProcessor("john"));
store.purchaseBike(2);
store.purchaseHelmet(2);
